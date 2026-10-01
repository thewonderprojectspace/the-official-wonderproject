(() => {
  "use strict";

  /*
   * Tell the CSS that JavaScript
   * is available.
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

  const menuToggle =
    document.querySelector(
      "#menu-toggle"
    );

  /*
   * HEADER AND SCROLL PROGRESS
   */

  function updatePagePosition() {
    /*
     * Give the header a dark
     * background after scrolling.
     */

    header?.classList.toggle(
      "scrolled",
      window.scrollY > 24
    );

    /*
     * Calculate how far down the
     * page the visitor has travelled.
     */

    const availableScroll =
      document.documentElement
        .scrollHeight -
      window.innerHeight;

    const percentage =
      availableScroll > 0
        ? (
            window.scrollY /
            availableScroll
          ) * 100
        : 0;

    if (progress) {
      progress.style.width =
        `${percentage}%`;
    }
  }

  window.addEventListener(
    "scroll",
    updatePagePosition,
    {
      passive: true
    }
  );

  updatePagePosition();

  /*
   * CLOSE MOBILE MENU
   *
   * When a visitor chooses a link,
   * the checkbox menu closes.
   */

  document
    .querySelectorAll(
      ".nav-links a"
    )
    .forEach((link) => {
      link.addEventListener(
        "click",
        () => {
          if (menuToggle) {
            menuToggle.checked =
              false;
          }
        }
      );
    });

  /*
   * SECTION REVEAL ANIMATIONS
   */

  if (
    "IntersectionObserver" in window
  ) {
    const revealObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  "is-visible"
                );

                revealObserver.unobserve(
                  entry.target
                );
              }
            }
          );
        },

        {
          threshold: 0.1
        }
      );

    document
      .querySelectorAll(
        "main section:not(.hero)"
      )
      .forEach((section) => {
        revealObserver.observe(
          section
        );
      });
  } else {
    /*
     * Fallback for older browsers.
     */

    document
      .querySelectorAll(
        "main section:not(.hero)"
      )
      .forEach((section) => {
        section.classList.add(
          "is-visible"
        );
      });
  }

  /*
   * SEEDED RANDOM NUMBER GENERATOR
   *
   * This creates stars in the same
   * positions whenever the page loads.
   */

  function seededRandom(seed) {
    let value =
      seed % 2147483647;

    return () => {
      value =
        (value * 16807) %
        2147483647;

      return (
        (value - 1) /
        2147483646
      );
    };
  }

  /*
   * COSMIC STAR BACKGROUND
   */

  function drawCosmicSky() {
    const canvas =
      document.querySelector(
        "#cosmicSky"
      );

    if (!canvas) {
      return;
    }

    const context =
      canvas.getContext("2d");

    if (!context) {
      return;
    }

    /*
     * Limit pixel density so the
     * animation remains efficient.
     */

    const ratio = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    const width =
      window.innerWidth;

    const height =
      window.innerHeight;

    canvas.width =
      Math.floor(width * ratio);

    canvas.height =
      Math.floor(height * ratio);

    context.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    context.clearRect(
      0,
      0,
      width,
      height
    );

    /*
     * Use more stars on larger
     * screens, with a sensible limit.
     */

    const starCount = Math.min(
      220,

      Math.floor(
        (
          width *
          height
        ) / 5500
      )
    );

    const random =
      seededRandom(230917);

    for (
      let index = 0;
      index < starCount;
      index += 1
    ) {
      const x =
        random() * width;

      const y =
        random() * height;

      const radius =
        random() * 1.35 + 0.2;

      const alpha =
        random() * 0.66 + 0.16;

      const colour =
        random() > 0.79
          ? "155,220,255"
          : "255,255,255";

      context.beginPath();

      context.fillStyle =
        `rgba(${colour}, ${alpha})`;

      context.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      );

      context.fill();
    }
  }

  /*
   * Draw the stars when the page opens.
   */

  drawCosmicSky();

  /*
   * Redraw the stars when the browser
   * changes size.
   */

  let resizeTimer;

  window.addEventListener(
    "resize",
    () => {
      window.clearTimeout(
        resizeTimer
      );

      resizeTimer =
        window.setTimeout(
          drawCosmicSky,
          140
        );
    }
  );
})();
