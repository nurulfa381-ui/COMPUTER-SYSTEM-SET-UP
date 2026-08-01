const kp01State = {
  sequenceCompleted: false,
  classificationCompleted: false,
  technicianCompleted: false
};

const computerInformation = {
  desktop: {
    bmTitle: "🖥️ Desktop",
    enTitle: "🖥️ Desktop",
    bmText:
      "Komputer desktop digunakan pada satu lokasi tetap. Ia biasanya mempunyai casing, monitor, papan kekunci dan tetikus yang berasingan. Desktop mudah dinaik taraf kerana komponen seperti RAM, storan, kad grafik dan bekalan kuasa boleh diganti.",
    enText:
      "A desktop computer is used in a fixed location. It normally has a separate case, monitor, keyboard and mouse. A desktop is easy to upgrade because components such as RAM, storage, graphics cards and power supplies can be replaced."
  },

  laptop: {
    bmTitle: "💻 Laptop",
    enTitle: "💻 Laptop",
    bmText:
      "Laptop ialah komputer mudah alih yang mempunyai skrin, papan kekunci, touchpad dan bateri terbina dalam. Ia sesuai untuk pelajar, pegawai dan pengguna yang perlu bekerja di lokasi berbeza.",
    enText:
      "A laptop is a portable computer with a built-in screen, keyboard, touchpad and battery. It is suitable for students, officers and users who need to work in different locations."
  },

  ultrabook: {
    bmTitle: "📘 Ultrabook",
    enTitle: "📘 Ultrabook",
    bmText:
      "Ultrabook ialah laptop yang nipis, ringan, menjimatkan kuasa dan mudah dibawa. Ia biasanya mempunyai prestasi baik tetapi pilihan naik tarafnya lebih terhad berbanding desktop.",
    enText:
      "An ultrabook is a thin, lightweight and energy-efficient laptop. It normally offers good performance, but its upgrade options are more limited than a desktop."
  },

  netbook: {
    bmTitle: "🧳 Netbook",
    enTitle: "🧳 Netbook",
    bmText:
      "Netbook ialah komputer riba bersaiz kecil yang sesuai untuk melayari Internet, menaip dokumen dan menjalankan aplikasi pejabat asas. Ia biasanya mempunyai prestasi yang lebih rendah berbanding laptop biasa.",
    enText:
      "A netbook is a small laptop suitable for web browsing, document typing and basic office applications. It normally has lower performance than a standard laptop."
  },

  thinClient: {
    bmTitle: "🖧 Thin Client",
    enTitle: "🖧 Thin Client",
    bmText:
      "Thin client ialah terminal komputer ringkas yang bergantung pada server untuk kebanyakan pemprosesan, aplikasi dan penyimpanan data. Ia sesuai digunakan di makmal atau organisasi yang menggunakan sistem berpusat.",
    enText:
      "A thin client is a simple computer terminal that depends on a server for most processing, applications and data storage. It is suitable for laboratories or organisations that use a centralised system."
  },

  tablet: {
    bmTitle: "📱 Tablet",
    enTitle: "📱 Tablet",
    bmText:
      "Tablet ialah komputer mudah alih yang menggunakan skrin sentuh. Ia ringan, mudah dibawa dan sesuai untuk pembelajaran, pembentangan, komunikasi serta aplikasi mudah alih.",
    enText:
      "A tablet is a portable computer that uses a touch screen. It is lightweight, easy to carry and suitable for learning, presentations, communication and mobile applications."
  }
};

function getKP01Language() {
  if (typeof currentLanguage === "function") {
    return currentLanguage();
  }

  return localStorage.getItem("c01_language") || "ms";
}

function openKP01Mode(modeName, clickedButton) {
  const validModes = [
    "learn",
    "practice",
    "technician"
  ];

  if (!validModes.includes(modeName)) {
    return;
  }

  document
    .querySelectorAll(".kp01-mode-content")
    .forEach((section) => {
      section.classList.remove("active");
    });

  document
    .querySelectorAll(".kp01-mode-button")
    .forEach((button) => {
      button.classList.remove("active");
    });

  const selectedMode =
    document.getElementById(
      `${modeName}Mode`
    );

  if (selectedMode) {
    selectedMode.classList.add("active");
  }

  if (clickedButton) {
    clickedButton.classList.add("active");
  }

  updateKP01ByteMessage(modeName);
}

function updateKP01ByteMessage(modeName) {
  const messageBox =
    document.getElementById(
      "kp01ByteMessage"
    );

  if (!messageBox) {
    return;
  }

  const messages = {
    learn: {
      bm:
        "Learn Mode dibuka. Baca nota, kenal pasti jenis komputer dan fahami komponen asas sistem komputer.",
      en:
        "Learn Mode is open. Read the notes, identify computer types and understand basic computer system components."
    },

    practice: {
      bm:
        "Practice Mode dibuka. Lengkapkan aktiviti urutan proses komputer dan klasifikasi jenis komputer.",
      en:
        "Practice Mode is open. Complete the computer process sequence and computer classification activities."
    },

    technician: {
      bm:
        "Real Technician Mode dibuka. Analisis keperluan pelanggan dan pilih komputer yang paling sesuai.",
      en:
        "Real Technician Mode is open. Analyse the customer requirements and choose the most suitable computer."
    }
  };

  const language =
    getKP01Language();

  const selectedMessage =
    messages[modeName] ||
    messages.learn;

  messageBox.textContent =
    language === "en"
      ? selectedMessage.en
      : selectedMessage.bm;
}

function showComputerInfo(type) {
  const panel =
    document.getElementById(
      "computerInfoPanel"
    );

  const data =
    computerInformation[type];

  if (!panel || !data) {
    return;
  }

  const language =
    getKP01Language();

  const title =
    language === "en"
      ? data.enTitle
      : data.bmTitle;

  const text =
    language === "en"
      ? data.enText
      : data.bmText;

  panel.innerHTML = `
    <h3>${title}</h3>
    <p>${text}</p>
  `;

  if (
    typeof AnimationEngine !==
    "undefined"
  ) {
    AnimationEngine.fadeIn(panel);
  }

  if (
    typeof SoundEngine !==
    "undefined"
  ) {
    SoundEngine.click();
  }
}

function speakKP01Byte() {
  const messageBox =
    document.getElementById(
      "kp01ByteMessage"
    );

  if (!messageBox) {
    return;
  }

  if (
    typeof ByteAI !==
    "undefined"
  ) {
    ByteAI.speak(
      messageBox.textContent
    );

    return;
  }

  if (
    "speechSynthesis" in window
  ) {
    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(
        messageBox.textContent
      );

    speech.lang =
      getKP01Language() === "en"
        ? "en-US"
        : "ms-MY";

    speech.rate = 0.92;

    window.speechSynthesis.speak(
      speech
    );
  }
}

function calculateKP01Progress() {
  let progress = 25;

  if (
    kp01State.sequenceCompleted
  ) {
    progress += 25;
  }

  if (
    kp01State.classificationCompleted
  ) {
    progress += 25;
  }

  if (
    kp01State.technicianCompleted
  ) {
    progress += 25;
  }

  return progress;
}

function updateKP01Progress() {
  const progress =
    calculateKP01Progress();

  const progressBar =
    document.getElementById(
      "kp01ProgressBar"
    );

  if (progressBar) {
    progressBar.style.width =
      `${progress}%`;
  }

  try {
    if (
      typeof MissionEngine !==
      "undefined"
    ) {
      MissionEngine.updateKPProgress({
        missionId: 1,
        progress
      });

      return;
    }

    if (
      typeof C01Storage !==
        "undefined"
    ) {
      const profile =
        C01Storage.loadProfile();

      if (profile) {
        profile.kpProgress =
          profile.kpProgress || {};

        profile.kpProgress[1] =
          progress;

        C01Storage.saveProfile(
          profile
        );
      }
    }
  } catch (error) {
    console.warn(
      "Kemajuan KP01 tidak dapat disimpan:",
      error
    );
  }
}

function restoreKP01Progress() {
  try {
    const profile =
      typeof C01Storage !==
        "undefined"
        ? C01Storage.loadProfile()
        : null;

    const savedProgress =
      profile?.kpProgress?.[1] ||
      0;

    if (savedProgress >= 50) {
      kp01State.sequenceCompleted =
        true;
    }

    if (savedProgress >= 75) {
      kp01State.classificationCompleted =
        true;
    }

    if (savedProgress >= 100) {
      kp01State.technicianCompleted =
        true;
    }
  } catch (error) {
    console.warn(
      "Kemajuan KP01 tidak dapat dipulihkan:",
      error
    );
  }
}

function completeKP01() {
  if (
    !kp01State.sequenceCompleted
  ) {
    alert(
      getKP01Language() === "en"
        ? "Complete Practice Activity 1 first."
        : "Lengkapkan Aktiviti 1 terlebih dahulu."
    );

    const button =
      document.querySelector(
        '[data-mode="practice"]'
      );

    openKP01Mode(
      "practice",
      button
    );

    return;
  }

  if (
    !kp01State.classificationCompleted
  ) {
    alert(
      getKP01Language() === "en"
        ? "Complete Practice Activity 2 first."
        : "Lengkapkan Aktiviti 2 terlebih dahulu."
    );

    const button =
      document.querySelector(
        '[data-mode="practice"]'
      );

    openKP01Mode(
      "practice",
      button
    );

    return;
  }

  if (
    !kp01State.technicianCompleted
  ) {
    alert(
      getKP01Language() === "en"
        ? "Complete Real Technician Mode first."
        : "Lengkapkan Real Technician Mode terlebih dahulu."
    );

    const button =
      document.querySelector(
        '[data-mode="technician"]'
      );

    openKP01Mode(
      "technician",
      button
    );

    return;
  }

  try {
    if (
      typeof MissionEngine !==
      "undefined"
    ) {
      MissionEngine.updateKPProgress({
        missionId: 1,
        progress: 100
      });
    }

    if (
      typeof C01Storage !==
      "undefined"
    ) {
      const profile =
        C01Storage.requireProfile();

      profile.kpProgress =
        profile.kpProgress || {};

      profile.kpProgress[1] =
        100;

      profile.badges =
        profile.badges || [];

      if (
        !profile.badges.includes(
          "kp01-practice-complete"
        )
      ) {
        profile.badges.push(
          "kp01-practice-complete"
        );

        profile.xp =
          (profile.xp || 0) + 50;

        profile.coins =
          (profile.coins || 0) + 10;
      }

      C01Storage.saveProfile(
        profile
      );
    }

    if (
      typeof AnimationEngine !==
      "undefined"
    ) {
      AnimationEngine.showReward({
        xp: 50,
        coins: 10,
        badge:
          "KP01 Practice Complete"
      });
    }

    setTimeout(() => {
      window.location.href =
        "../../kt/kt01/index.html";
    }, 500);
  } catch (error) {
    console.error(
      "KP01 tidak dapat diselesaikan:",
      error
    );

    window.location.href =
      "../../kt/kt01/index.html";
  }
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    try {
      if (
        typeof C01Storage !==
        "undefined"
      ) {
        C01Storage.requireProfile();
      }

      restoreKP01Progress();
      updateKP01Progress();
      updateKP01ByteMessage(
        "learn"
      );
    } catch (error) {
      console.warn(
        "KP01 initialization error:",
        error
      );
    }
  }
);
