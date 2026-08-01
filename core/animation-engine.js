const AnimationEngine = {
  pulse(target, duration = 900) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) return;

    element.classList.add(
      "animation-pulse"
    );

    setTimeout(() => {
      element.classList.remove(
        "animation-pulse"
      );
    }, duration);
  },

  success(target) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) return;

    element.classList.add(
      "animation-success"
    );

    setTimeout(() => {
      element.classList.remove(
        "animation-success"
      );
    }, 1200);
  },

  error(target) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) return;

    element.classList.add(
      "animation-error"
    );

    setTimeout(() => {
      element.classList.remove(
        "animation-error"
      );
    }, 900);
  },

  fadeIn(target) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) return;

    element.classList.remove(
      "animation-hidden"
    );

    element.classList.add(
      "animation-fade-in"
    );
  },

  fadeOut(target) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) return;

    element.classList.add(
      "animation-fade-out"
    );

    setTimeout(() => {
      element.classList.add(
        "animation-hidden"
      );

      element.classList.remove(
        "animation-fade-out"
      );
    }, 350);
  },

  showReward({
    xp = 0,
    coins = 0,
    badge = null
  }) {
    const reward =
      document.createElement(
        "div"
      );

    reward.className =
      "reward-popup";

    reward.innerHTML = `
      <div class="reward-icon">
        🎉
      </div>

      <h2>
        REWARD UNLOCKED
      </h2>

      ${
        xp
          ? `<p>⭐ +${xp} XP</p>`
          : ""
      }

      ${
        coins
          ? `<p>🪙 +${coins} Coins</p>`
          : ""
      }

      ${
        badge
          ? `<p>🏆 ${badge}</p>`
          : ""
      }
    `;

    document.body.appendChild(
      reward
    );

    requestAnimationFrame(() => {
      reward.classList.add(
        "show"
      );
    });

    setTimeout(() => {
      reward.classList.remove(
        "show"
      );

      setTimeout(() => {
        reward.remove();
      }, 400);
    }, 2400);
  },

  animateProgress({
    target,
    value,
    duration = 700
  }) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) return;

    const finalValue =
      Math.max(
        0,
        Math.min(
          100,
          Number(value) || 0
        )
      );

    element.style.transition =
      `width ${duration}ms ease`;

    requestAnimationFrame(() => {
      element.style.width =
        `${finalValue}%`;
    });
  }
};

window.AnimationEngine =
  AnimationEngine;
