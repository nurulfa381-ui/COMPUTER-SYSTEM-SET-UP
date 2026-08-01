const MissionEngine = {
  getMissionById(missionId) {
    return C01_MISSIONS.find(
      mission => mission.id === missionId
    ) || null;
  },

  isUnlocked({
    profile,
    missionId
  }) {
    return (
      missionId <=
      (profile.unlocked || 1)
    );
  },

  isCompleted({
    profile,
    missionId
  }) {
    return (
      profile.completed || []
    ).includes(missionId);
  },

  getScore({
    profile,
    missionId
  }) {
    return profile.scores?.[
      missionId
    ];
  },

  getProgress({
    profile,
    missionId
  }) {
    return (
      profile.kpProgress?.[
        missionId
      ] || 0
    );
  },

  unlockNextMission({
    missionId
  }) {
    const profile =
      C01Storage.requireProfile();

    profile.unlocked =
      Math.max(
        profile.unlocked || 1,
        Math.min(
          C01_MISSIONS.length,
          missionId + 1
        )
      );

    C01Storage.saveProfile(
      profile
    );

    return profile.unlocked;
  },

  completeMission({
    missionId,
    score = null
  }) {
    const profile =
      C01Storage.requireProfile();

    profile.completed =
      profile.completed || [];

    if (
      !profile.completed.includes(
        missionId
      )
    ) {
      profile.completed.push(
        missionId
      );
    }

    if (
      score !== null
    ) {
      profile.scores =
        profile.scores || {};

      profile.scores[
        missionId
      ] = score;
    }

    this.unlockNextMission({
      missionId
    });

    C01Storage.saveProfile(
      profile
    );

    return profile;
  },

  updateKPProgress({
    missionId,
    progress
  }) {
    const profile =
      C01Storage.requireProfile();

    profile.kpProgress =
      profile.kpProgress || {};

    profile.kpProgress[
      missionId
    ] =
      Math.max(
        0,
        Math.min(
          100,
          Number(progress) || 0
        )
      );

    C01Storage.saveProfile(
      profile
    );

    return profile.kpProgress[
      missionId
    ];
  },

  canOpenKT({
    missionId
  }) {
    const profile =
      C01Storage.requireProfile();

    const progress =
      profile.kpProgress?.[
        missionId
      ] || 0;

    return progress >= 100;
  },

  openKP({
    missionId
  }) {
    const profile =
      C01Storage.requireProfile();

    const mission =
      this.getMissionById(
        missionId
      );

    if (!mission) {
      alert(
        "Misi tidak dijumpai."
      );

      return;
    }

    if (
      !this.isUnlocked({
        profile,
        missionId
      })
    ) {
      alert(
        "Lengkapkan misi sebelumnya terlebih dahulu."
      );

      return;
    }

    window.location.href =
      mission.kp;
  },

  openKT({
    missionId
  }) {
    const mission =
      this.getMissionById(
        missionId
      );

    if (!mission) {
      alert(
        "Penilaian tidak dijumpai."
      );

      return;
    }

    if (
      !this.canOpenKT({
        missionId
      })
    ) {
      alert(
        "Lengkapkan semua aktiviti KP terlebih dahulu."
      );

      return;
    }

    window.location.href =
      mission.kt;
  },

  getOverallProgress() {
    const profile =
      C01Storage.requireProfile();

    const completed =
      (
        profile.completed ||
        []
      ).length;

    return Math.round(
      (
        completed /
        C01_MISSIONS.length
      ) * 100
    );
  },

  getNextMission() {
    const profile =
      C01Storage.requireProfile();

    return (
      C01_MISSIONS.find(
        mission =>
          mission.id ===
          profile.unlocked
      ) || null
    );
  }
};

window.MissionEngine =
  MissionEngine;
