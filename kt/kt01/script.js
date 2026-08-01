const KT01_CONFIG = {
  missionId: 1,
  nextMissionId: 2,
  ktCode: "KT01",
  collegeName: "KOLEJ KEMAHIRAN MENTARI",
  logoPath: "../../assets/images/logo-kolej.png",
  badge: "computer-basics",
  xpReward: 100,
  coinReward: 20,
  passMark: 60
};

document.addEventListener("DOMContentLoaded", initialiseKT01);

function ensureCollections(profile) {
  profile.scores = profile.scores || {};
  profile.attempts = profile.attempts || {};
  profile.ktDetails = profile.ktDetails || {};
  profile.completed = profile.completed || [];
  profile.badges = profile.badges || [];
  profile.officialMarks = profile.officialMarks || {};
  profile.pendingAssessments = profile.pendingAssessments || {};
  profile.evaluatorApprovals = profile.evaluatorApprovals || {};
  return profile;
}

function initialiseKT01() {
  const profile = ensureCollections(C01Storage.requireProfile());

  candidateName.textContent = profile.name || "-";
  candidateId.textContent = profile.id || "-";
  attemptNumber.textContent =
    (profile.attempts?.[KT01_CONFIG.missionId] || 0) + 1;

  const official = profile.officialMarks?.[KT01_CONFIG.missionId];
  const pending = profile.pendingAssessments?.[KT01_CONFIG.missionId];

  if (official?.locked === true) {
    showOfficialRecord(official);
    return;
  }

  if (pending?.status === "MENUNGGU_PENGESAHAN") {
    showPendingRecord(pending);
  }
}

function allQuestionsAnswered() {
  for (let q = 1; q <= 5; q += 1) {
    if (!document.querySelector(`input[name="q${q}"]:checked`)) {
      return false;
    }
  }

  for (let i = 1; i <= 5; i += 1) {
    if (!document.getElementById(`tf${i}`).value) return false;
    if (!document.getElementById(`m${i}`).value) return false;
  }

  return true;
}

function calculateSectionA() {
  let marks = 0;

  for (let q = 1; q <= 5; q += 1) {
    if (document.querySelector(`input[name="q${q}"]:checked`)?.value === "1") {
      marks += 2;
    }
  }

  return marks;
}

function calculateSectionB() {
  let marks = 0;

  for (let i = 1; i <= 5; i += 1) {
    if (document.getElementById(`tf${i}`).value === "1") marks += 1;
  }

  return marks;
}

function calculateSectionC() {
  let marks = 0;

  for (let i = 1; i <= 5; i += 1) {
    if (document.getElementById(`m${i}`).value === "1") marks += 1;
  }

  return marks;
}

function submitKT01() {
  const profile = ensureCollections(C01Storage.requireProfile());

  if (profile.officialMarks?.[KT01_CONFIG.missionId]?.locked === true) {
    alert("Markah rasmi KT01 telah dikunci.");
    return;
  }

  const existingPending = profile.pendingAssessments?.[KT01_CONFIG.missionId];

  if (existingPending?.status === "MENUNGGU_PENGESAHAN") {
    showPendingRecord(existingPending);
    return;
  }

  if (!allQuestionsAnswered()) {
    alert("Sila jawab semua soalan sebelum menghantar penilaian.");
    return;
  }

  const sectionA = calculateSectionA();
  const sectionB = calculateSectionB();
  const sectionC = calculateSectionC();
  const totalMarks = sectionA + sectionB + sectionC;
  const percentage = Math.round((totalMarks / 20) * 100);
  const passed = percentage >= KT01_CONFIG.passMark;
  const submittedAt = new Date().toISOString();

  profile.scores[KT01_CONFIG.missionId] = percentage;
  profile.attempts[KT01_CONFIG.missionId] =
    (profile.attempts[KT01_CONFIG.missionId] || 0) + 1;

  profile.ktDetails[KT01_CONFIG.missionId] = {
    sectionA,
    sectionB,
    sectionC,
    totalMarks,
    percentage,
    passed,
    official: false,
    status: passed ? "MENUNGGU_PENGESAHAN" : "BELUM TERAMPIL",
    submittedAt
  };

  if (passed) {
    profile.pendingAssessments[KT01_CONFIG.missionId] = {
      missionId: KT01_CONFIG.missionId,
      ktCode: KT01_CONFIG.ktCode,
      sectionA,
      sectionB,
      sectionC,
      totalMarks,
      score: percentage,
      passed: true,
      status: "MENUNGGU_PENGESAHAN",
      attempt: profile.attempts[KT01_CONFIG.missionId],
      submittedAt
    };
  }

  C01Storage.saveProfile(profile);

  attemptNumber.textContent =
    profile.attempts[KT01_CONFIG.missionId] + 1;

  if (passed) {
    showPendingRecord(profile.pendingAssessments[KT01_CONFIG.missionId]);
  } else {
    showFailResult({ sectionA, sectionB, sectionC, totalMarks, percentage });
  }
}

function showFailResult({ sectionA, sectionB, sectionC, totalMarks, percentage }) {
  officialStatus.textContent = "BELUM TERAMPIL";
  officialStatus.classList.remove("pending-mark", "locked-mark");

  resultPanel.innerHTML = `
    <div class="result-card fail">
      <h2>Markah: ${percentage}%</h2>
      <p>Bahagian A: ${sectionA}/10</p>
      <p>Bahagian B: ${sectionB}/5</p>
      <p>Bahagian C: ${sectionC}/5</p>
      <p>Jumlah: ${totalMarks}/20</p>
      <h3>❌ BELUM TERAMPIL</h3>
      <p>Markah belum rasmi. Sila ulang kaji KP01 dan cuba semula.</p>
      <button
        class="primary-button"
        type="button"
        onclick="window.location.href='../../kp/kp01/index.html'"
      >
        Ulang Kaji KP01
      </button>
    </div>
  `;

  resultPanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function logoMarkup() {
  return `
    <div class="approval-logo-wrap">
      <img
        class="approval-logo"
        src="${KT01_CONFIG.logoPath}"
        alt="Logo kolej"
        onerror="
          this.style.display='none';
          this.nextElementSibling.style.display='grid';
        "
      >
      <div class="approval-logo-fallback">
        LOGO<br>KOLEJ
      </div>
    </div>
  `;
}

function showPendingRecord(pending) {
  const profile = C01Storage.requireProfile();
  const submitted = formatDateTime(pending.submittedAt);

  officialStatus.textContent =
    `MENUNGGU PENGESAHAN • ${pending.score}%`;

  officialStatus.classList.remove("locked-mark");
  officialStatus.classList.add("pending-mark");

  resultPanel.innerHTML = `
    <div class="result-card pass">
      <h2>Markah Sementara: ${pending.score}%</h2>
      <p>Bahagian A: ${pending.sectionA}/10</p>
      <p>Bahagian B: ${pending.sectionB}/5</p>
      <p>Bahagian C: ${pending.sectionC}/5</p>
      <p>Jumlah: ${pending.totalMarks}/20</p>
      <h3 class="pending-mark">⏳ MENUNGGU PENGESAHAN</h3>
      <p>
        Pelatih telah mencapai markah lulus. Markah ini belum rasmi
        sehingga disahkan oleh Pegawai Penilai.
      </p>
    </div>

    <section class="teacher-approval-card">
      <div class="approval-heading">
        ${logoMarkup()}

        <div>
          <p class="approval-college">${KT01_CONFIG.collegeName}</p>
          <h2>BORANG PENGESAHAN PEGAWAI PENILAI</h2>
          <p>SERVER HERO C01 PREMIUM</p>
        </div>
      </div>

      <div class="approval-summary-grid">
        <div>
          <span>Nama Pelatih</span>
          <strong>${profile.name || "-"}</strong>
        </div>

        <div>
          <span>ID Pelatih</span>
          <strong>${profile.id || "-"}</strong>
        </div>

        <div>
          <span>Kod KT</span>
          <strong>${KT01_CONFIG.ktCode}</strong>
        </div>

        <div>
          <span>Markah</span>
          <strong>${pending.score}%</strong>
        </div>

        <div>
          <span>Status</span>
          <strong class="pending-mark">MENUNGGU PENGESAHAN</strong>
        </div>

        <div>
          <span>Tarikh Hantar</span>
          <strong>${submitted.date} • ${submitted.time}</strong>
        </div>
      </div>

      <div class="approval-mark-breakdown">
        <div>Bahagian A <strong>${pending.sectionA}/10</strong></div>
        <div>Bahagian B <strong>${pending.sectionB}/5</strong></div>
        <div>Bahagian C <strong>${pending.sectionC}/5</strong></div>
        <div>Jumlah <strong>${pending.totalMarks}/20</strong></div>
      </div>

      <div class="approval-form-grid">
        <label>
          Nama Pegawai Penilai
          <input
            id="evaluatorName"
            type="text"
            placeholder="Masukkan nama Pegawai Penilai"
          >
        </label>

        <label>
          Ulasan
          <textarea
            id="evaluatorComment"
            rows="4"
            placeholder="Masukkan ulasan penilaian"
          ></textarea>
        </label>
      </div>

      <label class="approval-confirm-row">
        <input id="evaluatorConfirm" type="checkbox">
        <span>
          Saya mengesahkan bahawa markah dan keputusan penilaian ini adalah betul.
        </span>
      </label>

      <div id="approvalMessage" class="approval-message"></div>

      <button
        class="approval-confirm-button"
        type="button"
        onclick="confirmOfficialMark()"
      >
        SAHKAN MARKAH RASMI
      </button>
    </section>
  `;

  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function confirmOfficialMark() {
  const evaluatorName =
    document.getElementById("evaluatorName")?.value.trim() || "";

  const evaluatorComment =
    document.getElementById("evaluatorComment")?.value.trim() || "";

  const confirmed =
    document.getElementById("evaluatorConfirm")?.checked === true;

  const messageBox = document.getElementById("approvalMessage");

  if (!evaluatorName) {
    messageBox.className = "approval-message error";
    messageBox.textContent = "Sila masukkan nama Pegawai Penilai.";
    return;
  }

  if (!confirmed) {
    messageBox.className = "approval-message error";
    messageBox.textContent = "Sila tandakan kotak pengesahan.";
    return;
  }

  const profile = ensureCollections(C01Storage.requireProfile());
  const pending = profile.pendingAssessments?.[KT01_CONFIG.missionId];

  if (!pending) {
    alert("Rekod penilaian sementara tidak ditemui.");
    return;
  }

  const confirmedAt = new Date().toISOString();

  profile.officialMarks[KT01_CONFIG.missionId] = {
    score: pending.score,
    sectionA: pending.sectionA,
    sectionB: pending.sectionB,
    sectionC: pending.sectionC,
    totalMarks: pending.totalMarks,
    status: "TERAMPIL",
    locked: true,
    lockedAt: confirmedAt,
    attempt: pending.attempt,
    evaluatorName,
    evaluatorComment
  };

  profile.evaluatorApprovals[KT01_CONFIG.missionId] = {
    missionId: KT01_CONFIG.missionId,
    ktCode: KT01_CONFIG.ktCode,
    evaluatorName,
    evaluatorComment,
    confirmed: true,
    confirmedAt,
    studentName: profile.name || "",
    studentId: profile.id || "",
    score: pending.score,
    status: "TERAMPIL"
  };

  profile.ktDetails[KT01_CONFIG.missionId] = {
    ...profile.ktDetails[KT01_CONFIG.missionId],
    official: true,
    status: "TERAMPIL",
    evaluatorName,
    evaluatorComment,
    confirmedAt
  };

  delete profile.pendingAssessments[KT01_CONFIG.missionId];

  if (!profile.completed.includes(KT01_CONFIG.missionId)) {
    profile.completed.push(KT01_CONFIG.missionId);
    profile.xp = (profile.xp || 0) + KT01_CONFIG.xpReward;
    profile.coins = (profile.coins || 0) + KT01_CONFIG.coinReward;
  }

  profile.unlocked = Math.max(
    profile.unlocked || 1,
    KT01_CONFIG.nextMissionId
  );

  if (!profile.badges.includes(KT01_CONFIG.badge)) {
    profile.badges.push(KT01_CONFIG.badge);
  }

  C01Storage.saveProfile(profile);
  showOfficialRecord(profile.officialMarks[KT01_CONFIG.missionId]);
}

function showOfficialRecord(official) {
  const approved = formatDateTime(official.lockedAt);

  officialStatus.textContent = `TERAMPIL • ${official.score}%`;
  officialStatus.classList.remove("pending-mark");
  officialStatus.classList.add("locked-mark");

  submitButton.disabled = true;
  submitButton.textContent = "MARKAH RASMI DIKUNCI";

  resultPanel.innerHTML = `
    <section class="teacher-approval-card">
      <div class="approval-heading">
        ${logoMarkup()}

        <div>
          <p class="approval-college">${KT01_CONFIG.collegeName}</p>
          <h2>MARKAH RASMI TELAH DISAHKAN</h2>
          <p>SERVER HERO C01 PREMIUM</p>
        </div>
      </div>

      <div class="approval-success">
        <h3>✅ TERAMPIL • ${official.score}%</h3>
        <p>Markah rasmi telah dikunci dan tidak boleh diubah oleh pelatih.</p>
      </div>

      <div class="approval-summary-grid">
        <div>
          <span>Bahagian A</span>
          <strong>${official.sectionA}/10</strong>
        </div>

        <div>
          <span>Bahagian B</span>
          <strong>${official.sectionB}/5</strong>
        </div>

        <div>
          <span>Bahagian C</span>
          <strong>${official.sectionC}/5</strong>
        </div>

        <div>
          <span>Pegawai Penilai</span>
          <strong>${official.evaluatorName || "-"}</strong>
        </div>

        <div>
          <span>Tarikh Pengesahan</span>
          <strong>${approved.date}</strong>
        </div>

        <div>
          <span>Masa Pengesahan</span>
          <strong>${approved.time}</strong>
        </div>
      </div>

      ${
        official.evaluatorComment
          ? `
            <div class="approval-comment">
              <strong>Ulasan:</strong>
              <p>${official.evaluatorComment}</p>
            </div>
          `
          : ""
      }

      <button
        class="approval-confirm-button"
        type="button"
        onclick="window.location.href='../../dashboard.html'"
      >
        KEMBALI KE DASHBOARD
      </button>
    </section>
  `;

  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function formatDateTime(isoDate) {
  const date = isoDate ? new Date(isoDate) : new Date();

  return {
    date: date.toLocaleDateString("ms-MY", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }),
    time: date.toLocaleTimeString("ms-MY", {
      hour: "2-digit",
      minute: "2-digit"
    })
  };
}
