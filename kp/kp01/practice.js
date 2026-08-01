document.addEventListener(
  "DOMContentLoaded",
  () => {
    PracticeEngine.sequence({
      selector:
        "#sequenceButtons button",

      correctOrder: [
        "input",
        "process",
        "output",
        "storage"
      ],

      resultTarget:
        "#sequenceResult",

      onComplete: () => {
        kp01State.sequenceCompleted =
          true;

        if (
          typeof SoundEngine !==
          "undefined"
        ) {
          SoundEngine.correct();
        }

        updateKP01Progress();
      }
    });
  }
);

function checkKP01Classification() {
  const correct =
    PracticeEngine.checkSelectAnswers({
      answers: [
        {
          selector:
            "#classificationLaptop",
          correctValue:
            "portable"
        },
        {
          selector:
            "#classificationDesktop",
          correctValue:
            "fixed"
        },
        {
          selector:
            "#classificationTablet",
          correctValue:
            "portable"
        }
      ],

      resultTarget:
        "#classificationResult",

      onComplete: () => {
        kp01State.classificationCompleted =
          true;

        if (
          typeof SoundEngine !==
          "undefined"
        ) {
          SoundEngine.correct();
        }

        updateKP01Progress();
      }
    });

  if (!correct) {
    kp01State.classificationCompleted =
      false;

    if (
      typeof SoundEngine !==
      "undefined"
    ) {
      SoundEngine.wrong();
    }
  }
}
