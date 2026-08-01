const SoundEngine = {
  context: null,
  enabled: true,

  init() {
    if (!this.context) {
      const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

      if (AudioContext) {
        this.context =
          new AudioContext();
      }
    }

    return this.context;
  },

  setEnabled(value) {
    this.enabled =
      Boolean(value);

    localStorage.setItem(
      "c01_sound_enabled",
      this.enabled
        ? "true"
        : "false"
    );
  },

  loadSetting() {
    const saved =
      localStorage.getItem(
        "c01_sound_enabled"
      );

    this.enabled =
      saved !== "false";
  },

  toggle() {
    this.setEnabled(
      !this.enabled
    );

    return this.enabled;
  },

  playTone({
    frequency = 440,
    duration = 0.18,
    volume = 0.12,
    type = "sine"
  } = {}) {
    if (!this.enabled) {
      return;
    }

    const context =
      this.init();

    if (!context) {
      return;
    }

    if (
      context.state ===
      "suspended"
    ) {
      context.resume();
    }

    const oscillator =
      context.createOscillator();

    const gain =
      context.createGain();

    oscillator.type =
      type;

    oscillator.frequency.value =
      frequency;

    gain.gain.setValueAtTime(
      volume,
      context.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      context.currentTime +
        duration
    );

    oscillator.connect(
      gain
    );

    gain.connect(
      context.destination
    );

    oscillator.start();

    oscillator.stop(
      context.currentTime +
        duration
    );
  },

  click() {
    this.playTone({
      frequency: 520,
      duration: 0.08,
      volume: 0.06,
      type: "square"
    });
  },

  correct() {
    if (!this.enabled) {
      return;
    }

    this.playTone({
      frequency: 523.25,
      duration: 0.16,
      volume: 0.1
    });

    setTimeout(() => {
      this.playTone({
        frequency: 659.25,
        duration: 0.16,
        volume: 0.1
      });
    }, 130);

    setTimeout(() => {
      this.playTone({
        frequency: 783.99,
        duration: 0.22,
        volume: 0.1
      });
    }, 260);
  },

  wrong() {
    if (!this.enabled) {
      return;
    }

    this.playTone({
      frequency: 220,
      duration: 0.22,
      volume: 0.1,
      type: "sawtooth"
    });

    setTimeout(() => {
      this.playTone({
        frequency: 170,
        duration: 0.25,
        volume: 0.1,
        type: "sawtooth"
      });
    }, 170);
  },

  warning() {
    if (!this.enabled) {
      return;
    }

    this.playTone({
      frequency: 420,
      duration: 0.13,
      volume: 0.08
    });

    setTimeout(() => {
      this.playTone({
        frequency: 420,
        duration: 0.13,
        volume: 0.08
      });
    }, 180);
  },

  reward() {
    if (!this.enabled) {
      return;
    }

    const notes = [
      523.25,
      659.25,
      783.99,
      1046.5
    ];

    notes.forEach(
      (frequency, index) => {
        setTimeout(() => {
          this.playTone({
            frequency,
            duration: 0.22,
            volume: 0.1
          });
        }, index * 130);
      }
    );
  },

  playAudio({
    source,
    volume = 1,
    loop = false
  }) {
    if (
      !this.enabled ||
      !source
    ) {
      return null;
    }

    const audio =
      new Audio(source);

    audio.volume =
      Math.max(
        0,
        Math.min(
          1,
          volume
        )
      );

    audio.loop =
      loop;

    audio
      .play()
      .catch(error => {
        console.warn(
          "Audio tidak dapat dimainkan:",
          error
        );
      });

    return audio;
  },

  stopAudio(audio) {
    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  }
};

SoundEngine.loadSetting();

window.SoundEngine =
  SoundEngine;
