function getRankByXP(xp) {
  if (xp >= 5000) {
    return "Computer System Specialist";
  }

  if (xp >= 3500) {
    return "Senior System Engineer";
  }

  if (xp >= 2500) {
    return "System Engineer";
  }

  if (xp >= 1600) {
    return "Senior Technician";
  }

  if (xp >= 900) {
    return "Computer Technician";
  }

  if (xp >= 400) {
    return "Junior Technician";
  }

  return "Trainee Technician";
}

function renderDashboard() {
  const profile =
    C01Storage.requireProfile();

  const language =
    currentLanguage();

  document.getElementById(
    "dashboardGreeting"
  ).textContent =
    language === "en"
      ? `Welcome, ${profile.name}`
      : `Selamat datang, ${profile.name}`;

  document.getElementById(
    "profileAvatar"
  ).textContent =
    profile.avatar || "👨‍💻";

  document.getElementById(
    "profileName"
  ).textContent =
    profile.name;

  document.getElementById(
    "profileId"
  ).textContent =
    profile.id;

  document.getElementById(
    "profileRank"
  ).textContent =
    getRankByXP(
      profile.xp || 0
    );

  const level =
    1 +
    Math.floor(
      (profile.xp || 0) / 500
    );

  const xpWithinLevel =
    (profile.xp || 0) % 500;

  const xpPercentage =
    Math.round(
      (xpWithinLevel / 500) * 100
    );

  document.getElementById(
    "levelValue"
  ).textContent =
    level;

  document.getElementById(
    "coinValue"
  ).textContent =
    profile.coins || 0;

  document.getElementById(
    "professionalValue"
  ).textContent =
    `${profile.professionalScore || 0}%`;

  document.getElementById(
    "badgeValue"
  ).textContent =
    (profile.badges || []).length;

  document.getElementById(
    "xpText"
  ).textContent =
    `${xpWithinLevel} / 500`;

  document.getElementById(
    "xpProgressBar"
  ).style.width =
    `${xpPercentage}%`;

  const completedMissions =
    profile.completed || [];

  const overallPercentage =
    Math.round(
      (
        completedMissions.length /
        C01_MISSIONS.length
      ) * 100
    );

  document.getElementById(
    "overallProgress"
  ).textContent =
    `${overallPercentage}%`;

  renderMissionList(
    profile,
    language
  );
}

function renderMissionList(
  profile,
  language
) {
  const missionList =
    document.getElementById(
      "missionList"
    );

  missionList.innerHTML =
    C01_MISSIONS
      .map((mission) => {
        const completed =
          profile.completed.includes(
            mission.id
          );

        const unlocked =
          mission.id <=
          profile.unlocked;

        const score =
          profile.scores?.[
            mission.id
          ];

        const title =
          language === "en"
            ? mission.en
            : mission.bm;

        let statusText;

        if (
          score !== undefined
        ) {
          statusText =
            language === "en"
              ? `KT Score: ${score}%`
              : `Markah KT: ${score}%`;
        } else if (
          completed
        ) {
          statusText =
            language === "en"
              ? "Mission completed"
              : "Misi telah selesai";
        } else if (
          unlocked
        ) {
          statusText =
            language === "en"
              ? "Ready to begin"
              : "Sedia untuk dimulakan";
        } else {
          statusText =
            language === "en"
              ? "Complete the previous mission"
              : "Lengkapkan misi sebelumnya";
        }

        const buttonText =
          completed
            ? (
                language === "en"
                  ? "Review"
                  : "Ulang Kaji"
              )
            : (
                language === "en"
                  ? "Start"
                  : "Mula"
              );

        return `
          <article class="mission-card ${
            completed
              ? "completed"
              : unlocked
                ? "unlocked"
                : "locked"
          }">

            <div class="mission-number">
              ${String(
                mission.id
              ).padStart(
                2,
                "0"
              )}
            </div>

            <div class="mission-details">

              <small>
                MISSION ${String(
                  mission.id
                ).padStart(
                  2,
                  "0"
                )}
              </small>

              <h3>
                ${title}
              </h3>

              <p>
                ${statusText}
              </p>

            </div>

            <div class="mission-action">

              ${
                unlocked
                  ? `
                    <button
                      class="${
                        completed
                          ? "secondary-button"
                          : "primary-button"
                      }"
                      onclick="window.location.href='${mission.kp}'"
                    >
                      ${buttonText}
                    </button>
                  `
                  : `
                    <span class="mission-lock">
                      🔒
                    </span>
                  `
              }

            </div>

          </article>
        `;
      })
      .join("");
}

function logoutStudent() {
  C01Storage.logout();
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    renderDashboard();
  }
);
