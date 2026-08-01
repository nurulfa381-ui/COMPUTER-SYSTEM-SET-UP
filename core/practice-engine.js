const PracticeEngine = {
  sequence({
    selector,
    correctOrder,
    resultTarget,
    onComplete = null
  }) {
    const buttons =
      document.querySelectorAll(selector);

    const resultBox =
      document.querySelector(resultTarget);

    let currentIndex = 0;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedValue =
          button.dataset.value;

        const expectedValue =
          correctOrder[currentIndex];

        if (selectedValue === expectedValue) {
          button.disabled = true;

          button.classList.add(
            "practice-correct"
          );

          currentIndex += 1;

          if (
            currentIndex ===
            correctOrder.length
          ) {
            if (resultBox) {
              resultBox.innerHTML = `
                <div class="practice-feedback success">
                  <strong>✅ Betul!</strong>
                  <p>
                    INPUT → PROCESS → OUTPUT → STORAGE
                  </p>
                </div>
              `;
            }

            if (
              typeof onComplete ===
              "function"
            ) {
              onComplete();
            }

            return;
          }

          if (resultBox) {
            resultBox.innerHTML = `
              <div class="practice-feedback info">
                <strong>✅ Betul</strong>
                <p>
                  Pilih langkah seterusnya:
                  ${correctOrder[
                    currentIndex
                  ].toUpperCase()}
                </p>
              </div>
            `;
          }

          return;
        }

        if (resultBox) {
          resultBox.innerHTML = `
            <div class="practice-feedback error">
              <strong>❌ Belum tepat</strong>
              <p>
                Langkah sekarang ialah
                ${expectedValue.toUpperCase()}.
              </p>
            </div>
          `;
        }
      });
    });
  },

  checkSelectAnswers({
    answers,
    resultTarget,
    onComplete = null
  }) {
    const resultBox =
      document.querySelector(resultTarget);

    const allCorrect =
      answers.every((item) => {
        const element =
          document.querySelector(
            item.selector
          );

        return (
          element &&
          element.value ===
            item.correctValue
        );
      });

    if (allCorrect) {
      if (resultBox) {
        resultBox.innerHTML = `
          <div class="practice-feedback success">
            <strong>
              ✅ Semua jawapan betul
            </strong>
          </div>
        `;
      }

      if (
        typeof onComplete ===
        "function"
      ) {
        onComplete();
      }

      return true;
    }

    if (resultBox) {
      resultBox.innerHTML = `
        <div class="practice-feedback error">
          <strong>
            ❌ Masih ada jawapan salah
          </strong>
        </div>
      `;
    }

    return false;
  }
};

window.PracticeEngine =
  PracticeEngine;
