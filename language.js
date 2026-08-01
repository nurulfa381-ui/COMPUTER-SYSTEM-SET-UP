function currentLanguage() {
  return (
    localStorage.getItem(
      C01Storage.languageKey
    ) || "ms"
  );
}

function applyLanguage() {
  const language =
    currentLanguage();

  document.documentElement.lang =
    language;

  document
    .querySelectorAll(
      "[data-bm][data-en]"
    )
    .forEach((element) => {
      element.textContent =
        language === "en"
          ? element.dataset.en
          : element.dataset.bm;
    });
}

function toggleLanguage() {
  const nextLanguage =
    currentLanguage() === "en"
      ? "ms"
      : "en";

  localStorage.setItem(
    C01Storage.languageKey,
    nextLanguage
  );

  const profile =
    C01Storage.loadProfile();

  if (profile) {
    profile.language =
      nextLanguage;

    C01Storage.saveProfile(
      profile
    );
  }

  applyLanguage();
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    applyLanguage();
  }
);
