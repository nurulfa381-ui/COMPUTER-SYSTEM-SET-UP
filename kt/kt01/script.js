const KT01_CONFIG = {
  missionId: 1,
  ktCode: "KT01",
  passMark: 60
};

document.addEventListener("DOMContentLoaded", initialiseKT01);

function ensureCollections(profile) {
  profile.scores = profile.scores || {};
  profile.attempts = profile.attempts || {};
  profile.ktDetails = profile.ktDetails || {};
  profile.pendingAssessments = profile.pendingAssessments || {};
  profile.officialMarks = profile.officialMarks || {};
  profile.completed = profile.completed || [];
  profile.badges = profile.badges || [];
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
  const detail = profile.ktDetails?.[KT01_CONFIG.missionId];

  if (official?.locked === true) {
    assessmentStatus.textContent = `TERAMPIL • ${official.score}%`;
    assessmentStatus.style.color = "#2fd27a";
    submitButton.disabled = true;
    submitButton.textContent = "MARKAH RASMI DIKUNCI";

    resultPanel.innerHTML = `
      <div class="result-card pending">
        <h2>Markah Rasmi: ${official.score}%</h2>
        <h3>✅ TERAMPIL</h3>
        <p>Markah telah disahkan oleh Pegawai Penilai.</p>
      </div>
    `;
    return;
  }

  if (pending?.status === "MENUNGGU_PENGESAHAN") {
    showPendingResult(pending);
    return;
  }

  if (detail?.passed === false) {
    assessmentStatus.textContent = `BELUM TERAMPIL • ${detail.percentage}%`;
    assessmentStatus.classList.add("failed-mark");
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
    if (document.getElementById(`tf${i}`).value === "1") {
      marks += 1;
    }
  }

  return marks;
}

function calculateSectionC() {
  let marks = 0;

  for (let i = 1; i <= 5; i += 1) {
    if (document.getElementById(`m${i}`).value === "1") {
      marks += 1;
    }
  }

  return marks;
}

function submitKT01() {
  const profile = ensureCollections(C01Storage.requireProfile());

  if (profile.officialMarks?.[KT01_CONFIG.missionId]?.locked === true) {
    alert("Markah rasmi KT01 telah dikunci.");
    return;
  }

  const existingPending =
    profile.pendingAssessments?.[KT01_CONFIG.missionId];

  if (existingPending?.status === "MENUNGGU_PENGESAHAN") {
    showPendingResult(existingPending);
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
    showPendingResult(profile.pendingAssessments[KT01_CONFIG.missionId]);
  } else {
    showFailResult({
      sectionA,
      sectionB,
      sectionC,
      totalMarks,
      percentage
    });
  }
}

function showPendingResult(pending) {
  assessmentStatus.textContent =
    `MENUNGGU PENGESAHAN • ${pending.score}%`;

  assessmentStatus.classList.remove("failed-mark");
  assessmentStatus.classList.add("pending-mark");

  resultPanel.innerHTML = `
    <div class="result-card pending">
      <h2>Markah Sementara: ${pending.score}%</h2>
      <p>Bahagian A: ${pending.sectionA}/10</p>
      <p>Bahagian B: ${pending.sectionB}/5</p>
      <p>Bahagian C: ${pending.sectionC}/5</p>
      <p>Jumlah: ${pending.totalMarks}/20</p>

      <h3 class="pending-mark">
        ⏳ MENUNGGU PENGESAHAN PEGAWAI PENILAI
      </h3>

      <p>
        Markah telah dihantar ke Mod Guru.
        KP02 hanya akan dibuka selepas markah rasmi disahkan.
      </p>

      <button
        class="secondary-button"
        type="button"
        onclick="window.location.href='../../dashboard.html'"
      >
        Kembali ke Dashboard
      </button>
    </div>
  `;

  resultPanel.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function showFailResult({
  sectionA,
  sectionB,
  sectionC,
  totalMarks,
  percentage
}) {
  assessmentStatus.textContent =
    `BELUM TERAMPIL • ${percentage}%`;

  assessmentStatus.classList.remove("pending-mark");
  assessmentStatus.classList.add("failed-mark");

  resultPanel.innerHTML = `
    <div class="result-card fail">
      <h2>Markah: ${percentage}%</h2>
      <p>Bahagian A: ${sectionA}/10</p>
      <p>Bahagian B: ${sectionB}/5</p>
      <p>Bahagian C: ${sectionC}/5</p>
      <p>Jumlah: ${totalMarks}/20</p>

      <h3>❌ BELUM TERAMPIL</h3>

      <p>
        Markah belum rasmi.
        Sila ulang kaji KP01 dan cuba semula.
      </p>

      <button
        class="primary-button"
        type="button"
        onclick="window.location.href='../../kp/kp01/index.html'"
      >
        Ulang Kaji KP01
      </button>
    </div>
  `;

  resultPanel.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
