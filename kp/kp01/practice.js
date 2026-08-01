let sequenceIndex = 0;

const correctSequence = [
  "input",
  "process",
  "output",
  "storage"
];

document
  .querySelectorAll(
    "#sequenceButtons button"
  )
  .forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        const selectedValue =
          button.dataset.value;

        const expectedValue =
          correctSequence[
            sequenceIndex
          ];

        const resultBox =
          document.getElementById(
            "sequenceResult"
          );

        if (!resultBox) {
          return;
        }

        if (
          selectedValue ===
          expectedValue
        ) {
          button.classList.add(
            "practice-correct"
          );

          button.disabled =
            true;

          sequenceIndex += 1;

          if (
            sequenceIndex ===
            correctSequence.length
          ) {
            kp01State.sequenceCompleted =
              true;

            resultBox.innerHTML = `
              <div class="practice-feedback success">
                <strong>
                  ✅ Betul!
                </strong>

                <p>
                  Urutan lengkap ialah
                  Input → Process → Output → Storage.
                </p>
              </div>
            `;

            if (
              typeof SoundEngine !==
              "undefined"
            ) {
              SoundEngine.correct();
            }

            updateKP01Progress();
          } else {
            resultBox.innerHTML = `
              <div class="practice-feedback info">
                <strong>
                  ✅ Betul
                </strong>

                <p>
                  Pilih proses seterusnya.
                </p>
              </div>
            `;
          }

          return;
        }

        resultBox.innerHTML = `
          <div class="practice-feedback error">
            <strong>
              ❌ Belum tepat
            </strong>

            <p>
              ${
                sequenceIndex === 0
                  ? "Mulakan dengan INPUT."
                  : `Langkah seterusnya ialah ${expectedValue.toUpperCase()}.`
              }
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
            resultBox
          );
        }
      }
    );
  });

function checkKP01Classification() {
  const laptop =
    document.getElementById(
      "classificationLaptop"
    )?.value;

  const desktop =
    document.getElementById(
      "classificationDesktop"
    )?.value;

  const tablet =
    document.getElementById(
      "classificationTablet"
    )?.value;

  const resultBox =
    document.getElementById(
      "classificationResult"
    );

  if (!resultBox) {
    return;
  }

  const correct =
    laptop === "portable" &&
    desktop === "fixed" &&
    tablet === "portable";

  kp01State.classificationCompleted =
    correct;

  if (correct) {
    resultBox.innerHTML = `
      <div class="practice-feedback success">
        <strong>
          ✅ Semua jawapan betul
        </strong>

        <p>
          Laptop dan tablet ialah komputer mudah alih,
          manakala desktop biasanya digunakan pada
          satu lokasi tetap.
        </p>
      </div>
    `;

    if (
      typeof SoundEngine !==
      "undefined"
    ) {
      SoundEngine.correct();
    }

    updateKP01Progress();

    return;
  }

  resultBox.innerHTML = `
    <div class="practice-feedback error">
      <strong>
        ❌ Masih ada jawapan yang salah
      </strong>

      <p>
        Semak semula ciri mobiliti laptop,
        desktop dan tablet.
      </p>
    </div>
  `;

  if (
    typeof SoundEngine !==
    "undefined"
  ) {
    SoundEngine.wrong();
  }
}
