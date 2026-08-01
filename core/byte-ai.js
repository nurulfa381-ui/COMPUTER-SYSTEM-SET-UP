const ByteAI = {
  defaultLanguage: "ms-MY",

  speak(text, language = null) {
    if (!text) {
      return;
    }

    if (!("speechSynthesis" in window)) {
      console.warn(
        "Fungsi suara tidak disokong oleh pelayar ini."
      );

      return;
    }

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(
        text
      );

    speech.lang =
      language ||
      (
        typeof currentLanguage ===
        "function" &&
        currentLanguage() === "en"
          ? "en-US"
          : "ms-MY"
      );

    speech.rate = 0.92;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(
      speech
    );
  },

  stop() {
    if (
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }
  },

  showMessage({
    target,
    bm,
    en,
    type = "info"
  }) {
    const element =
      typeof target === "string"
        ? document.querySelector(
            target
          )
        : target;

    if (!element) {
      return;
    }

    const language =
      typeof currentLanguage ===
      "function"
        ? currentLanguage()
        : "ms";

    const message =
      language === "en"
        ? en
        : bm;

    element.innerHTML = `
      <div class="byte-engine-message ${type}">
        <div class="byte-engine-avatar">
          🤖
        </div>

        <div>
          <strong>
            BYTE AI
          </strong>

          <p>
            ${message}
          </p>
        </div>
      </div>
    `;
  },

  success(target, bm, en) {
    this.showMessage({
      target,
      bm,
      en,
      type: "success"
    });
  },

  error(target, bm, en) {
    this.showMessage({
      target,
      bm,
      en,
      type: "error"
    });
  },

  warning(target, bm, en) {
    this.showMessage({
      target,
      bm,
      en,
      type: "warning"
    });
  },

  hint(target, bm, en) {
    this.showMessage({
      target,
      bm,
      en,
      type: "hint"
    });
  },

  announce({
    target,
    bm,
    en,
    type = "info",
    speak = false
  }) {
    this.showMessage({
      target,
      bm,
      en,
      type
    });

    if (speak) {
      const language =
        typeof currentLanguage ===
        "function"
          ? currentLanguage()
          : "ms";

      this.speak(
        language === "en"
          ? en
          : bm
      );
    }
  }
};

window.ByteAI = ByteAI;
