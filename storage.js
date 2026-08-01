const C01Storage = {
  profileKey: "c01_student_profile",
  languageKey: "c01_language",

  loadProfile() {
    try {
      return JSON.parse(
        localStorage.getItem(this.profileKey) || "null"
      );
    } catch (error) {
      console.error("Gagal membaca profil pelatih:", error);
      return null;
    }
  },

  saveProfile(profile) {
    localStorage.setItem(
      this.profileKey,
      JSON.stringify(profile)
    );
  },

  createProfile({
    name,
    id,
    avatar = "👨‍💻",
    language = "ms"
  }) {
    return {
      name,
      id,
      avatar,
      language,

      loginVerified: true,
      studentKey: `${id}_${name
        .toLowerCase()
        .replace(/\s+/g, "_")}`,

      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),

      xp: 50,
      coins: 10,
      level: 1,

      unlocked: 1,
      completed: [],

      scores: {},
      attempts: {},
      ktDetails: {},

      kpProgress: {},
      simulationProgress: {},

      badges: [
        "first-login"
      ],

      professionalScore: 0,

      workPerformance: {
        safety: 0,
        procedure: 0,
        accuracy: 0,
        quality: 0,
        troubleshooting: 0,
        documentation: 0
      },

      officialMarks: {},

      portfolio: {
        completedTasks: [],
        skills: [],
        achievements: []
      }
    };
  },

  requireProfile() {
    const profile = this.loadProfile();

    if (
      !profile ||
      !profile.loginVerified ||
      !profile.name ||
      !profile.id
    ) {
      window.location.href =
        this.getLoginPath();

      throw new Error(
        "Pelatih perlu login menggunakan nama penuh dan ID."
      );
    }

    return profile;
  },

  getLoginPath() {
    const currentPath =
      window.location.pathname;

    if (
      currentPath.includes("/kp/") ||
      currentPath.includes("/kt/")
    ) {
      return "../../login.html";
    }

    return "login.html";
  },

  updateProgress({
    missionId,
    kpProgress,
    score,
    passed
  }) {
    const profile =
      this.requireProfile();

    if (
      missionId &&
      kpProgress !== undefined
    ) {
      profile.kpProgress[missionId] =
        kpProgress;
    }

    if (
      missionId &&
      score !== undefined
    ) {
      profile.scores[missionId] =
        score;
    }

    if (
      missionId &&
      passed === true
    ) {
      if (
        !profile.completed.includes(
          missionId
        )
      ) {
        profile.completed.push(
          missionId
        );
      }

      profile.unlocked =
        Math.max(
          profile.unlocked,
          Math.min(
            15,
            missionId + 1
          )
        );
    }

    this.saveProfile(profile);

    return profile;
  },

  addReward({
    xp = 0,
    coins = 0,
    badge = null
  }) {
    const profile =
      this.requireProfile();

    profile.xp =
      (profile.xp || 0) + xp;

    profile.coins =
      (profile.coins || 0) + coins;

    profile.badges =
      profile.badges || [];

    if (
      badge &&
      !profile.badges.includes(badge)
    ) {
      profile.badges.push(badge);
    }

    profile.level =
      1 +
      Math.floor(
        profile.xp / 500
      );

    this.saveProfile(profile);

    return profile;
  },

  saveWorkPerformance({
    moduleId,
    scores
  }) {
    const profile =
      this.requireProfile();

    profile.workPerformance =
      profile.workPerformance || {};

    profile.workPerformance[moduleId] =
      scores;

    const values =
      Object.values(scores)
        .filter(
          value =>
            typeof value === "number"
        );

    profile.professionalScore =
      values.length
        ? Math.round(
            values.reduce(
              (total, value) =>
                total + value,
              0
            ) / values.length
          )
        : 0;

    this.saveProfile(profile);

    return profile;
  },

  logout() {
    localStorage.removeItem(
      this.profileKey
    );

    window.location.href =
      "index.html";
  },

  resetAllData() {
    localStorage.removeItem(
      this.profileKey
    );

    localStorage.removeItem(
      this.languageKey
    );
  }
};
