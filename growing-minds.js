(() => {
  "use strict";

  /*
   * Let the stylesheet know that
   * JavaScript is available.
   */

  document.documentElement.classList.add(
    "js-ready"
  );

  /*
   * SELECT IMPORTANT ELEMENTS
   */

  const header =
    document.querySelector(
      "#siteHeader"
    );

  const progress =
    document.querySelector(
      "#readingProgress"
    );

  const menuButton =
    document.querySelector(
      "#menuButton"
    );

  const nav =
    document.querySelector(
      "#mainNav"
    );

  /*
   * HEADER AND PAGE PROGRESS
   */

  function updateScrollUI() {
    const current =
      window.scrollY;

    const total =
      document.documentElement.scrollHeight
      - window.innerHeight;

    /*
     * Add a background to the header
     * after the visitor starts scrolling.
     */

    header?.classList.toggle(
      "scrolled",
      current > 24
    );

    /*
     * Calculate how far through the page
     * the visitor has travelled.
     */

    if (progress) {
      const percentage =
        total > 0
          ? (current / total) * 100
          : 0;

      progress.style.width =
        `${percentage}%`;
    }
  }

  /*
   * MOBILE NAVIGATION
   */

  function closeMenu() {
    if (!menuButton || !nav) {
      return;
    }

    nav.classList.remove(
      "open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.setAttribute(
      "aria-label",
      "Open navigation"
    );
  }

  menuButton?.addEventListener(
    "click",
    () => {
      const opening =
        !nav?.classList.contains(
          "open"
        );

      nav?.classList.toggle(
        "open",
        opening
      );

      menuButton.setAttribute(
        "aria-expanded",
        String(opening)
      );

      menuButton.setAttribute(
        "aria-label",
        opening
          ? "Close navigation"
          : "Open navigation"
      );
    }
  );

  /*
   * Close the mobile menu after
   * selecting a navigation link.
   */

  nav
    ?.querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        closeMenu
      );
    });

  /*
   * Allow the Escape key to close
   * the mobile navigation.
   */

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    }
  );

  /*
   * SCROLL REVEAL ANIMATIONS
   */

  const reducedMotion =
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches;

  const revealItems =
    document.querySelectorAll(
      ".reveal"
    );

  if (
    reducedMotion
    || !(
      "IntersectionObserver"
      in window
    )
  ) {
    revealItems.forEach(
      (item) => {
        item.classList.add(
          "visible"
        );
      }
    );
  } else {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -35px"
        }
      );

    revealItems.forEach(
      (item) => {
        observer.observe(item);
      }
    );
  }

  /*
   * LOGO FALLBACK
   *
   * If the logo image cannot be found,
   * the circular JV fallback remains.
   */

  const logo =
    document.querySelector(
      ".brand-logo"
    );

  logo?.addEventListener(
    "error",
    () => {
      logo.style.display =
        "none";
    }
  );

  /*
   * EVENT LISTENERS
   */

  window.addEventListener(
    "scroll",
    updateScrollUI,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    () => {
      updateScrollUI();

      if (
        window.innerWidth > 920
      ) {
        closeMenu();
      }
    }
  );

  /*
   * INITIAL PAGE SETUP
   */

  updateScrollUI();
})();
