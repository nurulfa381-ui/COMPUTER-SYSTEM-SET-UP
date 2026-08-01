const WorkstationEngine = {
  validateChoice({
    selected,
    correct,
    onCorrect = null,
    onWrong = null
  }) {
    const isCorrect =
      selected === correct;

    if (isCorrect) {
      if (
        typeof onCorrect ===
        "function"
      ) {
        onCorrect();
      }

      return true;
    }

    if (
      typeof onWrong ===
      "function"
    ) {
      onWrong();
    }

    return false;
  },

  evaluateTask({
    moduleId,
    taskId,
    criteria = {},
    passMark = 60
  }) {
    const values =
      Object.values(
        criteria
      ).filter(
        value =>
          typeof value ===
          "number" &&
          Number.isFinite(value)
      );

    const score =
      values.length
        ? Math.round(
            values.reduce(
              (total, value) =>
                total + value,
              0
            ) / values.length
          )
        : 0;

    const passed =
      score >= passMark;

    this.saveTaskResult({
      moduleId,
      taskId,
      score,
      passed,
      criteria
    });

    return {
      score,
      passed
    };
  },

  saveTaskResult({
    moduleId,
    taskId,
    score,
    passed,
    criteria
  }) {
    const profile =
      C01Storage.requireProfile();

    profile.virtualWorkshop =
      profile.virtualWorkshop || {};

    profile.virtualWorkshop[
      moduleId
    ] =
      profile.virtualWorkshop[
        moduleId
      ] || {};

    profile.virtualWorkshop[
      moduleId
    ][taskId] = {
      score,
      passed,
      criteria,
      completedAt:
        new Date().toISOString()
    };

    profile.portfolio =
      profile.portfolio || {
        completedTasks: [],
        skills: [],
        achievements: []
      };

    if (
      passed &&
      !profile.portfolio.completedTasks.includes(
        `${moduleId}-${taskId}`
      )
    ) {
      profile.portfolio.completedTasks.push(
        `${moduleId}-${taskId}`
      );
    }

    C01Storage.saveProfile(
      profile
    );
  },

  addSkill({
    skill
  }) {
    const profile =
      C01Storage.requireProfile();

    profile.portfolio =
      profile.portfolio || {
        completedTasks: [],
        skills: [],
        achievements: []
      };

    if (
      skill &&
      !profile.portfolio.skills.includes(
        skill
      )
    ) {
      profile.portfolio.skills.push(
        skill
      );
    }

    C01Storage.saveProfile(
      profile
    );
  },

  addAchievement({
    achievement
  }) {
    const profile =
      C01Storage.requireProfile();

    profile.portfolio =
      profile.portfolio || {
        completedTasks: [],
        skills: [],
        achievements: []
      };

    if (
      achievement &&
      !profile.portfolio.achievements.includes(
        achievement
      )
    ) {
      profile.portfolio.achievements.push(
        achievement
      );
    }

    C01Storage.saveProfile(
      profile
    );
  },

  getTaskResult({
    moduleId,
    taskId
  }) {
    const profile =
      C01Storage.requireProfile();

    return (
      profile.virtualWorkshop?.[
        moduleId
      ]?.[
        taskId
      ] || null
    );
  },

  calculateCompletion({
    moduleId,
    totalTasks
  }) {
    const profile =
      C01Storage.requireProfile();

    const moduleTasks =
      profile.virtualWorkshop?.[
        moduleId
      ] || {};

    const completed =
      Object.values(
        moduleTasks
      ).filter(
        task =>
          task.passed === true
      ).length;

    if (
      !totalTasks ||
      totalTasks <= 0
    ) {
      return 0;
    }

    return Math.round(
      (
        completed /
        totalTasks
      ) * 100
    );
  }
};

window.WorkstationEngine =
  WorkstationEngine;
