const ScoringEngine = {
  average(values = []) {
    const validValues =
      values.filter(
        value =>
          typeof value === "number" &&
          Number.isFinite(value)
      );

    if (!validValues.length) {
      return 0;
    }

    const total =
      validValues.reduce(
        (sum, value) =>
          sum + value,
        0
      );

    return Math.round(
      total /
      validValues.length
    );
  },

  percentage({
    marks = 0,
    total = 0
  }) {
    if (
      total <= 0
    ) {
      return 0;
    }

    return Math.round(
      (
        marks /
        total
      ) * 100
    );
  },

  passed({
    score = 0,
    passMark = 60
  }) {
    return (
      score >= passMark
    );
  },

  calculateProfessionalScore({
    safety = 0,
    procedure = 0,
    accuracy = 0,
    quality = 0,
    troubleshooting = 0,
    documentation = 0
  }) {
    return this.average([
      safety,
      procedure,
      accuracy,
      quality,
      troubleshooting,
      documentation
    ]);
  },

  saveProfessionalScore({
    moduleId,
    safety = 0,
    procedure = 0,
    accuracy = 0,
    quality = 0,
    troubleshooting = 0,
    documentation = 0
  }) {
    const profile =
      C01Storage.requireProfile();

    const professionalScore =
      this.calculateProfessionalScore({
        safety,
        procedure,
        accuracy,
        quality,
        troubleshooting,
        documentation
      });

    profile.workPerformance =
      profile.workPerformance || {};

    profile.workPerformance[
      moduleId
    ] = {
      safety,
      procedure,
      accuracy,
      quality,
      troubleshooting,
      documentation,
      professionalScore,
      updatedAt:
        new Date().toISOString()
    };

    const allModuleScores =
      Object.values(
        profile.workPerformance
      )
        .map(
          record =>
            record.professionalScore
        )
        .filter(
          value =>
            typeof value ===
            "number"
        );

    profile.professionalScore =
      this.average(
        allModuleScores
      );

    C01Storage.saveProfile(
      profile
    );

    return professionalScore;
  },

  saveKTResult({
    missionId,
    sectionScores = {},
    totalMarks,
    totalPossible,
    passMark = 60
  }) {
    const profile =
      C01Storage.requireProfile();

    const percentage =
      this.percentage({
        marks:
          totalMarks,
        total:
          totalPossible
      });

    const isPassed =
      this.passed({
        score:
          percentage,
        passMark
      });

    profile.scores =
      profile.scores || {};

    profile.attempts =
      profile.attempts || {};

    profile.ktDetails =
      profile.ktDetails || {};

    profile.completed =
      profile.completed || [];

    profile.scores[
      missionId
    ] = percentage;

    profile.attempts[
      missionId
    ] =
      (
        profile.attempts[
          missionId
        ] || 0
      ) + 1;

    profile.ktDetails[
      missionId
    ] = {
      sectionScores,
      totalMarks,
      totalPossible,
      percentage,
      passed:
        isPassed,
      submittedAt:
        new Date().toISOString()
    };

    if (
      isPassed &&
      !profile.completed.includes(
        missionId
      )
    ) {
      profile.completed.push(
        missionId
      );

      profile.unlocked =
        Math.max(
          profile.unlocked || 1,
          Math.min(
            15,
            missionId + 1
          )
        );
    }

    C01Storage.saveProfile(
      profile
    );

    return {
      percentage,
      passed:
        isPassed,
      attempt:
        profile.attempts[
          missionId
        ]
    };
  },

  getMissionStatus({
    profile,
    missionId
  }) {
    const score =
      profile.scores?.[
        missionId
      ];

    if (
      profile.completed?.includes(
        missionId
      )
    ) {
      return {
        code:
          "competent",
        text:
          "TERAMPIL",
        score:
          score ?? 0
      };
    }

    if (
      score !== undefined
    ) {
      return {
        code:
          "not-competent",
        text:
          "BELUM TERAMPIL",
        score
      };
    }

    return {
      code:
        "not-assessed",
      text:
        "BELUM DINILAI",
      score:
        null
    };
  }
};

window.ScoringEngine =
  ScoringEngine;
