(() => {
  "use strict";

  /*
   * IMPORTANT:
   * Keep the logo inside:
   *
   * images/jigyasa-verse-logo.png
   *
   * The opening slash makes the path start
   * from the main website directory.
   */

  const logoPath =
    "/images/jigyasa-verse-logo.png";

  const homePath =
    "/index.html";

  /*
   * ADD THE BROWSER-TAB ICON
   */

  function addFavicon() {
    const existingFavicon =
      document.querySelector(
        'link[data-jv-favicon]'
      );

    if (existingFavicon) {
      return;
    }

    const favicon =
      document.createElement("link");

    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = logoPath;

    favicon.setAttribute(
      "data-jv-favicon",
      "true"
    );

    document.head.appendChild(favicon);

    /*
     * Apple devices may use this
     * version of the logo.
     */

    const appleIcon =
      document.createElement("link");

    appleIcon.rel =
      "apple-touch-icon";

    appleIcon.href =
      logoPath;

    appleIcon.setAttribute(
      "data-jv-favicon",
      "true"
    );

    document.head.appendChild(
      appleIcon
    );
  }

  /*
   * ADD THE VISIBLE LOGO
   */

  function addGlobalLogo() {
    const existingLogo =
      document.querySelector(
        "[data-jv-global-logo]"
      );

    /*
     * Do not create a second logo
     * if this page already has one.
     */

    if (existingLogo) {
      return;
    }

    const logoLink =
      document.createElement("a");

    logoLink.className =
      "jv-global-logo";

    logoLink.href =
      homePath;

    logoLink.setAttribute(
      "data-jv-global-logo",
      "true"
    );

    logoLink.setAttribute(
      "aria-label",
      "Return to the Jigyasa Verse homepage"
    );

    /*
     * Create the moon-and-pencils image.
     */

    const logoImage =
      document.createElement("img");

    logoImage.src =
      logoPath;

    logoImage.alt =
      "Jigyasa Verse moon and pencils logo";

    logoImage.width = 54;
    logoImage.height = 54;

    /*
     * Create the website name.
     */

    const logoName =
      document.createElement("span");

    logoName.className =
      "jv-global-logo__name";

    logoName.innerHTML = `
      Jigyasa Verse
      <small>A universe of curiosity</small>
    `;

    /*
     * Put the image and text
     * inside the logo link.
     */

    logoLink.appendChild(
      logoImage
    );

    logoLink.appendChild(
      logoName
    );

    document.body.appendChild(
      logoLink
    );

    /*
     * Show an understandable message
     * if the image path is incorrect.
     */

    logoImage.addEventListener(
      "error",
      () => {
        console.warn(
          "The Jigyasa Verse logo could not be found. Check this path:",
          logoPath
        );

        logoImage.style.display =
          "none";
      }
    );

    /*
     * Make the logo smaller after
     * the visitor begins scrolling.
     */

    function updateLogo() {
      logoLink.classList.toggle(
        "jv-logo-scrolled",
        window.scrollY > 120
      );
    }

    window.addEventListener(
      "scroll",
      updateLogo,
      {
        passive: true
      }
    );

    updateLogo();
  }

  /*
   * RUN BRANDING AFTER THE PAGE
   * IS READY
   */

  function initialiseBranding() {
    addFavicon();
    addGlobalLogo();
  }

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      initialiseBranding
    );
  } else {
    initialiseBranding();
  }
})();
