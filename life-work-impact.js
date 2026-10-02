(() => {
  "use strict";

  /*
   * Tell the stylesheet that
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
      "#scrollProgress"
    );

  const menuButton =
    document.querySelector(
      "#menuButton"
    );

  const nav =
    document.querySelector(
      "#mainNav"
    );

  const calmButton =
    document.querySelector(
      "#calmCall"
    );

  const responsePanel =
    document.querySelector(
      "#responsePanel"
    );

  /*
   * HEADER AND SCROLL PROGRESS
   */

  function updatePagePosition() {
    const current =
      window.scrollY;

    const total =
      document.documentElement.scrollHeight
      - window.innerHeight;

    /*
     * Give the header a background
     * after the page begins moving.
     */

    header?.classList.toggle(
      "scrolled",
      current > 24
    );

    /*
     * Calculate how far through
     * the page the visitor has moved.
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
    if (!nav || !menuButton) {
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
   * Close the menu after a link
   * has been selected.
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

  const revealItems =
    document.querySelectorAll(
      ".reveal"
    );

  const reducedMotion =
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches;

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
   * THE CALM CUSTOMER-SERVICE MOMENT
   */

  calmButton?.addEventListener(
    "click",
    () => {
      if (!responsePanel) {
        return;
      }

      /*
       * Remove and re-add the class
       * so the breathing animation can
       * run again after every click.
       */

      responsePanel.classList.remove(
        "breathe"
      );

      void responsePanel.offsetWidth;

      responsePanel.classList.add(
        "breathe"
      );

      calmButton.textContent =
        "Breathing first. Solving second. ✓";

      window.setTimeout(
        () => {
          responsePanel.classList.remove(
            "breathe"
          );
        },
        2100
      );
    }
  );

  /*
   * LOGO FALLBACK
   */

  document
    .querySelector(
      ".brand-logo"
    )
    ?.addEventListener(
      "error",
      (event) => {
        event.currentTarget.style.display =
          "none";
      }
    );

  /*
   * PAGE EVENTS
   */

  window.addEventListener(
    "scroll",
    updatePagePosition,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    () => {
      updatePagePosition();

      if (
        window.innerWidth > 980
      ) {
        closeMenu();
      }
    }
  );

  /*
   * INITIAL PAGE SETUP
   */

  updatePagePosition();
})();
