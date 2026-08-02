(() => {
  "use strict";

  const cfg = window.C01_TEACHER_APPROVAL_CONFIG || {};
  const missionId = Number(cfg.missionId || 0);
  const nextMissionId = Number(cfg.nextMissionId || missionId + 1);
  const ktCode = cfg.ktCode || `KT${String(missionId).padStart(2, "0")}`;
  const collegeName = cfg.collegeName || "NAMA KOLEJ";
  const logoPath = cfg.logoPath || "../../assets/images/logo-kolej.png";
  const badge = cfg.badge || `kt${String(missionId).padStart(2, "0")}-official`;
  const xpReward = Number(cfg.xpReward ?? 100);
  const coinReward = Number(cfg.coinReward ?? 20);

  if (!missionId || !window.C01Storage) return;

  const state = {
    initial: null,
    pending: null,
    mounted: false
  };

  const clone = value => JSON.parse(JSON.stringify(value ?? null));

  function profile() {
    return C01Storage.requireProfile();
  }

  function ensure(p) {
    p.scores = p.scores || {};
    p.attempts = p.attempts || {};
    p.ktDetails = p.ktDetails || {};
    p.completed = p.completed || [];
    p.badges = p.badges || [];
    p.officialMarks = p.officialMarks || {};
    p.pendingAssessments = p.pendingAssessments || {};
    p.evaluatorApprovals = p.evaluatorApprovals || {};
    return p;
  }

  function capture() {
    const p = ensure(profile());
    state.initial = clone(p);

    if (p.pendingAssessments?.[missionId]?.status === "MENUNGGU_PENGESAHAN") {
      state.pending = p.pendingAssessments[missionId];
    }
  }

  function interceptSave() {
    const originalSave = C01Storage.saveProfile.bind(C01Storage);

    C01Storage.saveProfile = function patchedSave(p) {
      ensure(p);
      const official = p.officialMarks?.[missionId];

      if (official?.locked === true && !p.evaluatorApprovals?.[missionId]?.confirmed) {
        const initial = state.initial || {};
        const detail = p.ktDetails?.[missionId] || {};

        const pending = {
          missionId,
          ktCode,
          score: Number(official.score ?? detail.percentage ?? p.scores?.[missionId] ?? 0),
          sectionA: Number(official.sectionA ?? detail.sectionA ?? 0),
          sectionB: Number(official.sectionB ?? detail.sectionB ?? 0),
          sectionC: Number(official.sectionC ?? detail.sectionC ?? 0),
          totalMarks: Number(official.totalMarks ?? detail.totalMarks ?? 0),
          attempt: Number(official.attempt ?? p.attempts?.[missionId] ?? 1),
          status: "MENUNGGU_PENGESAHAN",
          submittedAt: detail.submittedAt || new Date().toISOString()
        };

        p.pendingAssessments[missionId] = pending;
        delete p.officialMarks[missionId];
        p.completed = p.completed.filter(x => Number(x) !== missionId);
        p.unlocked = Number(initial.unlocked || missionId);
        p.xp = Number(initial.xp || 0);
        p.coins = Number(initial.coins || 0);
        p.badges = clone(initial.badges || []);

        if (p.ktDetails?.[missionId]) {
          p.ktDetails[missionId].official = false;
          p.ktDetails[missionId].status = "MENUNGGU_PENGESAHAN";
        }

        state.pending = pending;
        const result = originalSave(p);

        setTimeout(() => {
          resetSubmitButton();
          mount();
        }, 50);

        return result;
      }

      return originalSave(p);
    };
  }

  function statusElement() {
    return document.getElementById("officialStatus") || document.getElementById("status");
  }

  function resetSubmitButton() {
    const button =
      document.getElementById("submitButton") ||
      document.getElementById("submit") ||
      document.querySelector('[onclick*="submitKT"]');

    if (button) {
      button.disabled = false;
      if (/DIKUNCI/i.test(button.textContent || "")) {
        button.textContent = "HANTAR JAWAPAN";
      }
    }

    const status = statusElement();
    if (status && state.pending) {
      status.textContent = `MENUNGGU PENGESAHAN • ${state.pending.score}%`;
      status.classList.remove("locked", "locked-mark");
      status.classList.add("pending-mark");
    }
  }

  function resultHost() {
    return (
      document.getElementById("resultPanel") ||
      document.getElementById("result") ||
      document.querySelector("footer") ||
      document.querySelector("main")
    );
  }

  function formatDate(iso) {
    const date = iso ? new Date(iso) : new Date();

    return {
      date: date.toLocaleDateString("ms-MY"),
      time: date.toLocaleTimeString("ms-MY", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
  }

  function logo() {
    return `
      <div class="approval-logo-wrap">
        <img
          class="approval-logo"
          src="${logoPath}"
          alt="Logo kolej"
          onerror="this.style.display='none';this.nextElementSibling.style.display='grid';"
        >
        <div class="approval-logo-fallback">LOGO<br>KOLEJ</div>
      </div>
    `;
  }

  function mount() {
    if (!state.pending || state.mounted) return;

    const host = resultHost();
    if (!host) return;

    const p = profile();
    const submitted = formatDate(state.pending.submittedAt);

    const panel = document.createElement("section");
    panel.id = "teacherApprovalPanel";
    panel.className = "teacher-approval-card";
    panel.innerHTML = `
      <div class="approval-heading">
        ${logo()}
        <div>
          <p class="approval-college">${collegeName}</p>
          <h2>BORANG PENGESAHAN PEGAWAI PENILAI</h2>
          <p>SERVER HERO C01 PREMIUM</p>
        </div>
      </div>

      <div class="approval-summary-grid">
        <div><span>Nama Pelatih</span><strong>${p.name || "-"}</strong></div>
        <div><span>ID Pelatih</span><strong>${p.id || "-"}</strong></div>
        <div><span>Kod KT</span><strong>${ktCode}</strong></div>
        <div><span>Markah</span><strong>${state.pending.score}%</strong></div>
        <div><span>Status</span><strong class="pending-mark">MENUNGGU PENGESAHAN</strong></div>
        <div><span>Tarikh Hantar</span><strong>${submitted.date} • ${submitted.time}</strong></div>
      </div>

      <div class="approval-mark-breakdown">
        <div>Bahagian A <strong>${state.pending.sectionA}/10</strong></div>
        <div>Bahagian B <strong>${state.pending.sectionB}/5</strong></div>
        <div>Bahagian C <strong>${state.pending.sectionC}/5</strong></div>
        <div>Jumlah <strong>${state.pending.totalMarks}/20</strong></div>
      </div>

      <div class="approval-form-grid">
        <label>
          Nama Pegawai Penilai
          <input id="evaluatorName" type="text" placeholder="Masukkan nama pegawai penilai">
        </label>

        <label>
          Ulasan
          <textarea id="evaluatorComment" rows="4" placeholder="Masukkan ulasan"></textarea>
        </label>
      </div>

      <label class="approval-confirm-row">
        <input id="evaluatorConfirm" type="checkbox">
        <span>Saya mengesahkan bahawa markah dan keputusan ini adalah betul.</span>
      </label>

      <div id="approvalMessage" class="approval-message"></div>

      <button id="confirmOfficialMarkButton" class="approval-confirm-button" type="button">
        SAHKAN MARKAH RASMI
      </button>
    `;

    host.appendChild(panel);
    document.getElementById("confirmOfficialMarkButton").addEventListener("click", confirm);
    state.mounted = true;

    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function message(text) {
    const box = document.getElementById("approvalMessage");
    if (box) {
      box.className = "approval-message error";
      box.textContent = text;
    }
  }

  function confirm() {
    const evaluatorName = document.getElementById("evaluatorName")?.value.trim() || "";
    const evaluatorComment = document.getElementById("evaluatorComment")?.value.trim() || "";
    const confirmed = document.getElementById("evaluatorConfirm")?.checked === true;

    if (!evaluatorName) {
      message("Sila masukkan nama Pegawai Penilai.");
      return;
    }

    if (!confirmed) {
      message("Sila tandakan kotak pengesahan.");
      return;
    }

    const p = ensure(profile());
    const confirmedAt = new Date().toISOString();
    const pending = state.pending;

    p.officialMarks[missionId] = {
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

    p.evaluatorApprovals[missionId] = {
      missionId,
      ktCode,
      evaluatorName,
      evaluatorComment,
      confirmed: true,
      confirmedAt,
      studentName: p.name || "",
      studentId: p.id || "",
      score: pending.score,
      status: "TERAMPIL"
    };

    if (p.ktDetails?.[missionId]) {
      p.ktDetails[missionId].official = true;
      p.ktDetails[missionId].status = "TERAMPIL";
      p.ktDetails[missionId].evaluatorName = evaluatorName;
      p.ktDetails[missionId].evaluatorComment = evaluatorComment;
      p.ktDetails[missionId].confirmedAt = confirmedAt;
    }

    delete p.pendingAssessments[missionId];

    if (!p.completed.includes(missionId)) {
      p.completed.push(missionId);
    }

    p.unlocked = Math.max(Number(p.unlocked || 1), nextMissionId);
    p.xp = Number(p.xp || 0) + xpReward;
    p.coins = Number(p.coins || 0) + coinReward;

    if (!p.badges.includes(badge)) {
      p.badges.push(badge);
    }

    C01Storage.saveProfile(p);

    const approved = formatDate(confirmedAt);
    const panel = document.getElementById("teacherApprovalPanel");

    panel.innerHTML = `
      <div class="approval-heading">
        ${logo()}
        <div>
          <p class="approval-college">${collegeName}</p>
          <h2>MARKAH RASMI TELAH DISAHKAN</h2>
          <p>SERVER HERO C01 PREMIUM</p>
        </div>
      </div>

      <div class="approval-success">
        <h3>✅ TERAMPIL • ${pending.score}%</h3>
        <p>Markah rasmi telah dikunci dan tidak boleh diubah oleh pelatih.</p>
      </div>

      <div class="approval-summary-grid">
        <div><span>Pegawai Penilai</span><strong>${evaluatorName}</strong></div>
        <div><span>Tarikh</span><strong>${approved.date}</strong></div>
        <div><span>Masa</span><strong>${approved.time}</strong></div>
        <div><span>Modul Seterusnya</span><strong>KP${String(nextMissionId).padStart(2, "0")} DIBUKA</strong></div>
      </div>

      ${evaluatorComment ? `<div class="approval-comment"><strong>Ulasan:</strong><p>${evaluatorComment}</p></div>` : ""}

      <button class="approval-confirm-button" onclick="location.href='../../dashboard.html'">
        KEMBALI KE DASHBOARD
      </button>
    `;

    const status = statusElement();
    if (status) {
      status.textContent = `TERAMPIL • ${pending.score}%`;
      status.classList.remove("pending-mark");
      status.classList.add("locked", "locked-mark");
    }

    state.pending = null;
  }

  document.addEventListener("DOMContentLoaded", () => {
    capture();
    interceptSave();

    if (state.pending) {
      resetSubmitButton();
      setTimeout(mount, 100);
    }

    const observer = new MutationObserver(() => {
      if (state.pending && !state.mounted) mount();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
})();