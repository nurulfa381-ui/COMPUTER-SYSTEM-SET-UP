/**
 * C01 KT Pending Engine
 *
 * Letakkan config sebelum fail ini:
 *
 * window.C01_KT_PENDING_CONFIG = {
 *   missionId: 1,
 *   ktCode: "KT01"
 * };
 *
 * Susunan:
 * storage.js
 * config
 * kt-pending-engine.js
 * script.js KT
 */

(() => {
  "use strict";

  const config = window.C01_KT_PENDING_CONFIG || {};
  const missionId = Number(config.missionId || 0);
  const ktCode = config.ktCode || `KT${String(missionId).padStart(2, "0")}`;

  if (!missionId || !window.C01Storage?.saveProfile) return;

  const originalSave = C01Storage.saveProfile.bind(C01Storage);
  const initialProfile = JSON.parse(
    JSON.stringify(C01Storage.requireProfile())
  );

  C01Storage.saveProfile = function patchedSave(profile) {
    profile.pendingAssessments = profile.pendingAssessments || {};
    profile.officialMarks = profile.officialMarks || {};
    profile.ktDetails = profile.ktDetails || {};
    profile.completed = profile.completed || [];
    profile.badges = profile.badges || [];

    const official = profile.officialMarks?.[missionId];
    const detail = profile.ktDetails?.[missionId] || {};

    if (official?.locked === true) {
      profile.pendingAssessments[missionId] = {
        missionId,
        ktCode,
        score: Number(official.score ?? detail.percentage ?? profile.scores?.[missionId] ?? 0),
        sectionA: Number(official.sectionA ?? detail.sectionA ?? 0),
        sectionB: Number(official.sectionB ?? detail.sectionB ?? 0),
        sectionC: Number(official.sectionC ?? detail.sectionC ?? 0),
        totalMarks: Number(official.totalMarks ?? detail.totalMarks ?? 0),
        attempt: Number(official.attempt ?? profile.attempts?.[missionId] ?? 1),
        status: "MENUNGGU_PENGESAHAN",
        passed: true,
        submittedAt: detail.submittedAt || new Date().toISOString()
      };

      delete profile.officialMarks[missionId];

      profile.completed = profile.completed.filter(
        value => Number(value) !== missionId
      );

      profile.unlocked = Number(initialProfile.unlocked || missionId);
      profile.xp = Number(initialProfile.xp || 0);
      profile.coins = Number(initialProfile.coins || 0);
      profile.badges = JSON.parse(
        JSON.stringify(initialProfile.badges || [])
      );

      if (profile.ktDetails?.[missionId]) {
        profile.ktDetails[missionId].official = false;
        profile.ktDetails[missionId].status = "MENUNGGU_PENGESAHAN";
      }

      setTimeout(() => {
        const result =
          document.getElementById("resultPanel") ||
          document.getElementById("result");

        if (result) {
          const pending = profile.pendingAssessments[missionId];

          result.innerHTML = `
            <div class="result-card pass">
              <h2>Markah Sementara: ${pending.score}%</h2>
              <h3>⏳ MENUNGGU PENGESAHAN PEGAWAI PENILAI</h3>
              <p>
                Markah telah dihantar ke Mod Guru.
                KP seterusnya akan dibuka selepas markah rasmi disahkan.
              </p>
              <button
                class="secondary-button"
                onclick="location.href='../../dashboard.html'"
              >
                Kembali ke Dashboard
              </button>
            </div>
          `;
        }
      }, 50);
    }

    return originalSave(profile);
  };
})();
