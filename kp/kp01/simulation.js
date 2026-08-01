function selectKP01Computer(choice) {
  const correct =
    choice === "desktop";

  const analysisScore =
    document.getElementById(
      "analysisScore"
    );

  const accuracyScore =
    document.getElementById(
      "accuracyScore"
    );

  const professionalScore =
    document.getElementById(
      "professionalScore"
    );

  const feedback =
    document.getElementById(
      "technicianFeedback"
    );

  kp01State.technicianCompleted =
    correct;

  if (correct) {
    analysisScore.textContent =
      "100%";

    accuracyScore.textContent =
      "100%";

    professionalScore.textContent =
      "100%";

    feedback.innerHTML = `
      <div class="practice-feedback success">
        <strong>
          ✅ Cadangan tepat
        </strong>

        <p>
          Desktop paling sesuai kerana digunakan
          pada lokasi tetap, menyokong monitor besar
          dan mudah dinaik taraf.
        </p>
      </div>
    `;

    if (
      typeof ScoringEngine !==
      "undefined"
    ) {
      ScoringEngine.saveProfessionalScore({
        moduleId: "kp01",
        safety: 100,
        procedure: 100,
        accuracy: 100,
        quality: 100,
        troubleshooting: 100,
        documentation: 100
      });
    }

    if (
      typeof SoundEngine !==
      "undefined"
    ) {
      SoundEngine.correct();
    }

    if (
      typeof AnimationEngine !==
      "undefined"
    ) {
      AnimationEngine.success(
        feedback
      );
    }
  } else {
    analysisScore.textContent =
      "40%";

    accuracyScore.textContent =
      "0%";

    professionalScore.textContent =
      "30%";

    feedback.innerHTML = `
      <div class="practice-feedback error">
        <strong>
          ❌ Cadangan belum sesuai
        </strong>

        <p>
          Semak semula keperluan pelanggan:
          penggunaan tetap, monitor besar dan
          mudah dinaik taraf.
        </p>
      </div>
    `;

    if (
      typeof SoundEngine !==
      "undefined"
    ) {
      SoundEngine.wrong();
    }

    if (
      typeof AnimationEngine !==
      "undefined"
    ) {
      AnimationEngine.error(
        feedback
      );
    }
  }

  if (
    typeof updateKP01Progress ===
    "function"
  ) {
    updateKP01Progress();
  }
}
