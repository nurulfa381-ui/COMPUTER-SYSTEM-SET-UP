const StorageEngine = {
  exportProfile() {
    const profile =
      C01Storage.loadProfile();

    if (!profile) {
      UIEngine.toast({
        message:
          "Tiada data pelatih untuk dieksport.",
        type:
          "warning"
      });

      return;
    }

    const filename =
      `${profile.id}-c01-backup.json`;

    const content =
      JSON.stringify(
        profile,
        null,
        2
      );

    this.downloadFile({
      filename,
      content,
      type:
        "application/json"
    });
  },

  importProfile(file) {
    if (!file) {
      return;
    }

    const reader =
      new FileReader();

    reader.onload =
      event => {
        try {
          const profile =
            JSON.parse(
              event.target.result
            );

          if (
            !this.validateProfile(
              profile
            )
          ) {
            throw new Error(
              "Format profil tidak sah."
            );
          }

          C01Storage.saveProfile(
            profile
          );

          UIEngine.toast({
            message:
              "Data pelatih berjaya dipulihkan.",
            type:
              "success"
          });

          setTimeout(() => {
            window.location.reload();
          }, 800);
        } catch (error) {
          console.error(error);

          UIEngine.toast({
            message:
              "Fail backup tidak sah atau rosak.",
            type:
              "error"
          });
        }
      };

    reader.readAsText(file);
  },

  validateProfile(profile) {
    if (
      !profile ||
      typeof profile !==
        "object"
    ) {
      return false;
    }

    if (
      !profile.name ||
      !profile.id ||
      !profile.loginVerified
    ) {
      return false;
    }

    if (
      !Array.isArray(
        profile.completed
      )
    ) {
      return false;
    }

    if (
      typeof profile.scores !==
        "object"
    ) {
      return false;
    }

    return true;
  },

  downloadFile({
    filename,
    content,
    type
  }) {
    const blob =
      new Blob(
        [content],
        {
          type
        }
      );

    const url =
      URL.createObjectURL(
        blob
      );

    const anchor =
      document.createElement(
        "a"
      );

    anchor.href =
      url;

    anchor.download =
      filename;

    anchor.click();

    URL.revokeObjectURL(
      url
    );
  },

  exportCSV() {
    const profile =
      C01Storage.loadProfile();

    if (!profile) {
      UIEngine.toast({
        message:
          "Tiada data pelatih.",
        type:
          "warning"
      });

      return;
    }

    const rows = [
      [
        "Mission",
        "KP Progress",
        "KT Score",
        "Attempt",
        "Status"
      ]
    ];

    C01_MISSIONS.forEach(
      mission => {
        const score =
          profile.scores?.[
            mission.id
          ];

        rows.push([
          mission.id,
          profile.kpProgress?.[
            mission.id
          ] || 0,
          score !== undefined
            ? score
            : "",
          profile.attempts?.[
            mission.id
          ] || 0,
          profile.completed?.includes(
            mission.id
          )
            ? "TERAMPIL"
            : score !== undefined
              ? "BELUM TERAMPIL"
              : "BELUM DINILAI"
        ]);
      }
    );

    const csv =
      rows
        .map(
          row =>
            row
              .map(
                value =>
                  `"${String(
                    value
                  ).replace(
                    /"/g,
                    '""'
                  )}"`
              )
              .join(",")
        )
        .join("\n");

    this.downloadFile({
      filename:
        `${profile.id}-c01-report.csv`,
      content:
        csv,
      type:
        "text/csv"
    });
  },

  resetProfile() {
    UIEngine.openModal({
      title:
        "Reset Data Pelatih",
      content:
        "Semua kemajuan, markah, XP, badge dan rekod simulasi akan dipadam.",
      confirmText:
        "Reset",
      cancelText:
        "Batal",
      showCancel:
        true,
      onConfirm:
        () => {
          C01Storage.resetAllData();

          window.location.href =
            "index.html";
        }
    });
  }
};

window.StorageEngine =
  StorageEngine;
