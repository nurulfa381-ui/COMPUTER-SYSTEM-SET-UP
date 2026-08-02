const TEACHER_CONFIG = {
  password: "azfar1986",
  collegeName: "NAMA KOLEJ ANDA"
};

let activeTeacherNameValue = "";
let selectedMissionId = null;
let selectedPendingRecord = null;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("collegeNameDisplay").textContent =
    TEACHER_CONFIG.collegeName;

  const savedTeacher = sessionStorage.getItem("c01ActiveTeacher");

  if (savedTeacher) {
    activeTeacherNameValue = savedTeacher;
    openTeacherDashboard();
  }
});

function getProfile() {
  return C01Storage.requireProfile();
}

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

function loginTeacher() {
  const name = teacherNameInput.value.trim();
  const password = teacherPasswordInput.value;

  if (!name) {
    teacherLoginMessage.textContent = "Sila masukkan nama Pegawai Penilai.";
    return;
  }

  if (password !== TEACHER_CONFIG.password) {
    teacherLoginMessage.textContent = "Kata laluan Mod Guru tidak tepat.";
    return;
  }

  activeTeacherNameValue = name;
  sessionStorage.setItem("c01ActiveTeacher", name);
  teacherLoginMessage.textContent = "";
  openTeacherDashboard();
}

function openTeacherDashboard() {
  teacherLoginPanel.style.display = "none";
  teacherDashboard.style.display = "block";
  document.getElementById("activeTeacherName").textContent = activeTeacherNameValue;
  refreshTeacherDashboard();
}

function logoutTeacher() {
  sessionStorage.removeItem("c01ActiveTeacher");
  activeTeacherNameValue = "";
  teacherDashboard.style.display = "none";
  teacherLoginPanel.style.display = "block";
  teacherPasswordInput.value = "";
}

function refreshTeacherDashboard() {
  updateStatistics();
  renderTeacherRecords();
}

function buildRecords() {
  const profile = ensureCollections(getProfile());
  const records = [];

  for (let missionId = 1; missionId <= 15; missionId += 1) {
    const pending = profile.pendingAssessments?.[missionId];
    const official = profile.officialMarks?.[missionId];
    const detail = profile.ktDetails?.[missionId];

    if (pending) {
      records.push({
        missionId,
        ktCode: pending.ktCode || `KT${String(missionId).padStart(2, "0")}`,
        statusType: "pending",
        statusText: "MENUNGGU PENGESAHAN",
        score: Number(pending.score || 0),
        sectionA: Number(pending.sectionA || 0),
        sectionB: Number(pending.sectionB || 0),
        sectionC: Number(pending.sectionC || 0),
        totalMarks: Number(pending.totalMarks || 0),
        attempt: Number(pending.attempt || profile.attempts?.[missionId] || 0),
        date: pending.submittedAt || detail?.submittedAt || "",
        evaluatorName: "",
        comment: ""
      });

      continue;
    }

    if (official?.locked === true) {
      records.push({
        missionId,
        ktCode: `KT${String(missionId).padStart(2, "0")}`,
        statusType: "official",
        statusText: "TERAMPIL / RASMI",
        score: Number(official.score || 0),
        sectionA: Number(official.sectionA || 0),
        sectionB: Number(official.sectionB || 0),
        sectionC: Number(official.sectionC || 0),
        totalMarks: Number(official.totalMarks || 0),
        attempt: Number(official.attempt || profile.attempts?.[missionId] || 0),
        date: official.lockedAt || detail?.submittedAt || "",
        evaluatorName: official.evaluatorName || "",
        comment: official.evaluatorComment || ""
      });

      continue;
    }

    if (detail && detail.passed === false) {
      records.push({
        missionId,
        ktCode: `KT${String(missionId).padStart(2, "0")}`,
        statusType: "failed",
        statusText: "BELUM TERAMPIL",
        score: Number(detail.percentage || profile.scores?.[missionId] || 0),
        sectionA: Number(detail.sectionA || 0),
        sectionB: Number(detail.sectionB || 0),
        sectionC: Number(detail.sectionC || 0),
        totalMarks: Number(detail.totalMarks || 0),
        attempt: Number(profile.attempts?.[missionId] || 0),
        date: detail.submittedAt || "",
        evaluatorName: "",
        comment: ""
      });
    }
  }

  return records;
}

function updateStatistics() {
  const profile = ensureCollections(getProfile());
  const records = buildRecords();

  pendingCount.textContent =
    records.filter(record => record.statusType === "pending").length;

  officialCount.textContent =
    records.filter(record => record.statusType === "official").length;

  failedCount.textContent =
    records.filter(record => record.statusType === "failed").length;

  attemptCount.textContent =
    Object.values(profile.attempts).reduce(
      (sum, value) => sum + Number(value || 0),
      0
    );
}

function renderTeacherRecords() {
  const records = buildRecords();
  const selectedStatus = statusFilter.value;
  const selectedModule = moduleFilter.value;
  const search = searchInput.value.trim().toLowerCase();

  const profile = getProfile();

  const filtered = records.filter(record => {
    const statusMatches =
      selectedStatus === "all" ||
      record.statusType === selectedStatus;

    const moduleMatches =
      selectedModule === "all" ||
      Number(selectedModule) === record.missionId;

    const text =
      `${profile.name || ""} ${profile.id || ""} ${record.ktCode}`.toLowerCase();

    const searchMatches =
      !search ||
      text.includes(search);

    return statusMatches && moduleMatches && searchMatches;
  });

  recordsContainer.innerHTML = "";

  if (!filtered.length) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  filtered.forEach(record => {
    const card = document.createElement("article");
    card.className = `record-card ${record.statusType}`;

    const dateText = record.date
      ? new Date(record.date).toLocaleString("ms-MY")
      : "-";

    card.innerHTML = `
      <div class="record-top">
        <div>
          <h3>${record.ktCode}</h3>
          <p>${profile.name || "-"} • ${profile.id || "-"}</p>
        </div>

        <span class="record-status ${record.statusType}">
          ${record.statusText}
        </span>
      </div>

      <div class="record-details">
        <div>
          <span>Markah</span>
          <strong>${record.score}%</strong>
        </div>

        <div>
          <span>Percubaan</span>
          <strong>${record.attempt}</strong>
        </div>

        <div>
          <span>Bahagian A / B / C</span>
          <strong>${record.sectionA} / ${record.sectionB} / ${record.sectionC}</strong>
        </div>

        <div>
          <span>Tarikh</span>
          <strong>${dateText}</strong>
        </div>
      </div>

      ${
        record.statusType === "official"
          ? `
            <p>
              <strong>Pegawai:</strong>
              ${record.evaluatorName || "-"}
            </p>
          `
          : ""
      }

      <div class="record-actions">
        ${
          record.statusType === "pending"
            ? `
              <button
                class="approve-button"
                onclick="openApprovalModal(${record.missionId})"
              >
                SAHKAN MARKAH
              </button>
            `
            : ""
        }
      </div>
    `;

    recordsContainer.appendChild(card);
  });
}

function openApprovalModal(missionId) {
  const profile = ensureCollections(getProfile());
  const pending = profile.pendingAssessments?.[missionId];

  if (!pending) {
    alert("Rekod menunggu pengesahan tidak ditemui.");
    return;
  }

  selectedMissionId = Number(missionId);
  selectedPendingRecord = pending;

  approvalModalTitle.textContent =
    pending.ktCode || `KT${String(missionId).padStart(2, "0")}`;

  approvalTeacherName.value = activeTeacherNameValue;
  approvalComment.value = "";
  approvalCheckbox.checked = false;
  approvalMessage.textContent = "";

  approvalSummary.innerHTML = `
    <div>
      <span>Nama Pelatih</span>
      <strong>${profile.name || "-"}</strong>
    </div>

    <div>
      <span>ID Pelatih</span>
      <strong>${profile.id || "-"}</strong>
    </div>

    <div>
      <span>Markah</span>
      <strong>${pending.score}%</strong>
    </div>

    <div>
      <span>Percubaan</span>
      <strong>${pending.attempt || profile.attempts?.[missionId] || 0}</strong>
    </div>

    <div>
      <span>Bahagian A</span>
      <strong>${pending.sectionA}/10</strong>
    </div>

    <div>
      <span>Bahagian B / C</span>
      <strong>${pending.sectionB}/5 • ${pending.sectionC}/5</strong>
    </div>
  `;

  approvalModal.classList.remove("hidden");
}

function closeApprovalModal() {
  approvalModal.classList.add("hidden");
  selectedMissionId = null;
  selectedPendingRecord = null;
}

function moduleReward(missionId) {
  const badgeMap = {
    1: "computer-basics",
    2: "system-function-specialist",
    3: "hardware-specialist",
    4: "os-specialist",
    5: "hardware-function-specialist"
  };

  return {
    xp: 100,
    coins: 20,
    badge: badgeMap[missionId] || `kt${String(missionId).padStart(2, "0")}-official`
  };
}

function confirmSelectedAssessment() {
  if (!selectedMissionId || !selectedPendingRecord) {
    approvalMessage.textContent = "Tiada rekod dipilih.";
    return;
  }

  const teacherName = approvalTeacherName.value.trim();
  const comment = approvalComment.value.trim();
  const confirmed = approvalCheckbox.checked === true;

  if (!teacherName) {
    approvalMessage.textContent = "Sila masukkan nama Pegawai Penilai.";
    return;
  }

  if (!confirmed) {
    approvalMessage.textContent = "Sila tandakan kotak pengesahan.";
    return;
  }

  const profile = ensureCollections(getProfile());
  const pending = profile.pendingAssessments?.[selectedMissionId];

  if (!pending) {
    approvalMessage.textContent = "Rekod menunggu pengesahan tidak ditemui.";
    return;
  }

  const confirmedAt = new Date().toISOString();
  const reward = moduleReward(selectedMissionId);

  profile.officialMarks[selectedMissionId] = {
    score: Number(pending.score || 0),
    sectionA: Number(pending.sectionA || 0),
    sectionB: Number(pending.sectionB || 0),
    sectionC: Number(pending.sectionC || 0),
    totalMarks: Number(pending.totalMarks || 0),
    status: "TERAMPIL",
    locked: true,
    lockedAt: confirmedAt,
    attempt: Number(pending.attempt || profile.attempts?.[selectedMissionId] || 0),
    evaluatorName: teacherName,
    evaluatorComment: comment
  };

  profile.evaluatorApprovals[selectedMissionId] = {
    missionId: selectedMissionId,
    ktCode: pending.ktCode || `KT${String(selectedMissionId).padStart(2, "0")}`,
    evaluatorName: teacherName,
    evaluatorComment: comment,
    confirmed: true,
    confirmedAt,
    studentName: profile.name || "",
    studentId: profile.id || "",
    score: Number(pending.score || 0),
    status: "TERAMPIL"
  };

  profile.ktDetails[selectedMissionId] = {
    ...(profile.ktDetails[selectedMissionId] || {}),
    official: true,
    status: "TERAMPIL",
    evaluatorName: teacherName,
    evaluatorComment: comment,
    confirmedAt
  };

  delete profile.pendingAssessments[selectedMissionId];

  if (!profile.completed.includes(selectedMissionId)) {
    profile.completed.push(selectedMissionId);
    profile.xp = Number(profile.xp || 0) + reward.xp;
    profile.coins = Number(profile.coins || 0) + reward.coins;
  }

  profile.unlocked = Math.max(
    Number(profile.unlocked || 1),
    selectedMissionId + 1
  );

  if (!profile.badges.includes(reward.badge)) {
    profile.badges.push(reward.badge);
  }

  C01Storage.saveProfile(profile);

  closeApprovalModal();
  refreshTeacherDashboard();

  alert(
    `Markah ${pending.ktCode || `KT${String(selectedMissionId).padStart(2, "0")}`} telah disahkan dan dikunci.`
  );
}

function exportTeacherCSV() {
  const profile = ensureCollections(getProfile());
  const records = buildRecords();

  if (!records.length) {
    alert("Tiada rekod untuk dieksport.");
    return;
  }

  const rows = [
    [
      "Nama Pelatih",
      "ID Pelatih",
      "KT",
      "Markah",
      "Status",
      "Percubaan",
      "Pegawai Penilai",
      "Tarikh"
    ]
  ];

  records.forEach(record => {
    rows.push([
      profile.name || "",
      profile.id || "",
      record.ktCode,
      record.score,
      record.statusText,
      record.attempt,
      record.evaluatorName || "",
      record.date || ""
    ]);
  });

  const csv = rows
    .map(row =>
      row
        .map(value => `"${String(value).replaceAll('"', '""')}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = `C01-Teacher-Report-${new Date().toISOString().slice(0,10)}.csv`;
  anchor.click();

  URL.revokeObjectURL(url);
}
