const UIEngine = {
  show(target) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      return;
    }

    element.classList.remove("hidden");
  },

  hide(target) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      return;
    }

    element.classList.add("hidden");
  },

  toggle(target) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      return false;
    }

    element.classList.toggle("hidden");

    return !element.classList.contains("hidden");
  },

  setText(target, text = "") {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      return;
    }

    element.textContent = text;
  },

  setHTML(target, html = "") {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      return;
    }

    element.innerHTML = html;
  },

  setProgress({
    target,
    value = 0
  }) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      return;
    }

    const progress =
      Math.max(
        0,
        Math.min(
          100,
          Number(value) || 0
        )
      );

    element.style.width =
      `${progress}%`;

    element.setAttribute(
      "aria-valuenow",
      progress
    );
  },

  openModal({
    title = "",
    content = "",
    confirmText = "OK",
    cancelText = "Batal",
    showCancel = false,
    onConfirm = null,
    onCancel = null
  }) {
    this.closeModal();

    const overlay =
      document.createElement("div");

    overlay.className =
      "ui-modal-overlay";

    overlay.id =
      "uiEngineModal";

    overlay.innerHTML = `
      <section
        class="ui-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="uiModalTitle"
      >
        <div class="ui-modal-header">
          <h2 id="uiModalTitle">
            ${title}
          </h2>

          <button
            class="ui-modal-close"
            type="button"
            aria-label="Tutup"
          >
            ×
          </button>
        </div>

        <div class="ui-modal-content">
          ${content}
        </div>

        <div class="ui-modal-actions">
          ${
            showCancel
              ? `
                <button
                  class="secondary-button"
                  id="uiModalCancel"
                  type="button"
                >
                  ${cancelText}
                </button>
              `
              : ""
          }

          <button
            class="primary-button"
            id="uiModalConfirm"
            type="button"
          >
            ${confirmText}
          </button>
        </div>
      </section>
    `;

    document.body.appendChild(
      overlay
    );

    requestAnimationFrame(() => {
      overlay.classList.add("show");
    });

    const closeButton =
      overlay.querySelector(
        ".ui-modal-close"
      );

    const confirmButton =
      overlay.querySelector(
        "#uiModalConfirm"
      );

    const cancelButton =
      overlay.querySelector(
        "#uiModalCancel"
      );

    closeButton.addEventListener(
      "click",
      () => {
        this.closeModal();

        if (
          typeof onCancel ===
          "function"
        ) {
          onCancel();
        }
      }
    );

    confirmButton.addEventListener(
      "click",
      () => {
        this.closeModal();

        if (
          typeof onConfirm ===
          "function"
        ) {
          onConfirm();
        }
      }
    );

    if (cancelButton) {
      cancelButton.addEventListener(
        "click",
        () => {
          this.closeModal();

          if (
            typeof onCancel ===
            "function"
          ) {
            onCancel();
          }
        }
      );
    }

    overlay.addEventListener(
      "click",
      event => {
        if (
          event.target ===
          overlay
        ) {
          this.closeModal();

          if (
            typeof onCancel ===
            "function"
          ) {
            onCancel();
          }
        }
      }
    );
  },

  closeModal() {
    const modal =
      document.getElementById(
        "uiEngineModal"
      );

    if (!modal) {
      return;
    }

    modal.classList.remove("show");

    setTimeout(() => {
      modal.remove();
    }, 250);
  },

  toast({
    message,
    type = "info",
    duration = 2600
  }) {
    const toast =
      document.createElement("div");

    toast.className =
      `ui-toast ${type}`;

    toast.textContent =
      message;

    document.body.appendChild(
      toast
    );

    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    setTimeout(() => {
      toast.classList.remove("show");

      setTimeout(() => {
        toast.remove();
      }, 250);
    }, duration);
  },

  loading({
    message = "Sila tunggu..."
  } = {}) {
    this.stopLoading();

    const loading =
      document.createElement("div");

    loading.className =
      "ui-loading-overlay";

    loading.id =
      "uiEngineLoading";

    loading.innerHTML = `
      <div class="ui-loading-box">
        <div class="ui-spinner"></div>

        <p>
          ${message}
        </p>
      </div>
    `;

    document.body.appendChild(
      loading
    );
  },

  stopLoading() {
    document
      .getElementById(
        "uiEngineLoading"
      )
      ?.remove();
  }
};

window.UIEngine =
  UIEngine;
