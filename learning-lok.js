(() => {
  "use strict";

  /*
   * ======================================================
   * LEARNING LOK
   * JIGYASAVERSE
   * ======================================================
   */

  document.documentElement.classList.add("js-ready");


  /*
   * ======================================================
   * ELEMENTS
   * ======================================================
   */

  const header =
    document.querySelector("#siteHeader");

  const progress =
    document.querySelector("#scrollProgress");

  const menuButton =
    document.querySelector("#menuButton");

  const siteNav =
    document.querySelector("#siteNav");

  const cursorGlow =
    document.querySelector("#cursorGlow");

  const heroImage =
    document.querySelector(".hero-cosmos");



  /*
   * ======================================================
   * HEADER + SCROLL PROGRESS
   * ======================================================
   */

  function updatePagePosition() {

    /*
     * Add background to navigation
     * after the visitor begins scrolling.
     */

    if (header) {
      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );
    }


    /*
     * Calculate scroll progress.
     */

    const pageHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const scrollPercentage =
      pageHeight > 0
        ? (window.scrollY / pageHeight) * 100
        : 0;


    if (progress) {
      progress.style.width =
        `${scrollPercentage}%`;
    }


    /*
     * Very subtle hero parallax.
     */

    if (heroImage) {

      const amount =
        Math.min(
          window.scrollY * 0.06,
          45
        );

      heroImage.style.transform =
        `scale(1.04) translateY(${amount}px)`;
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
   * ======================================================
   * MOBILE MENU
   * ======================================================
   */

  function closeMenu() {

    if (!menuButton || !siteNav) {
      return;
    }

    menuButton.classList.remove("active");

    siteNav.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "menu-open"
    );
  }


  function openMenu() {

    if (!menuButton || !siteNav) {
      return;
    }

    menuButton.classList.add("active");

    siteNav.classList.add("open");

    menuButton.setAttribute(
      "aria-expanded",
      "true"
    );

    document.body.classList.add(
      "menu-open"
    );
  }


  menuButton?.addEventListener(
    "click",
    () => {

      const menuIsOpen =
        siteNav?.classList.contains(
          "open"
        );

      if (menuIsOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  );


  /*
   * Close navigation when a link
   * has been selected.
   */

  siteNav
    ?.querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


  /*
   * Close menu using Escape.
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
   * Close menu if visitor moves
   * back to desktop size.
   */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 760) {
        closeMenu();
      }

    }
  );



  /*
   * ======================================================
   * REVEAL ANIMATIONS
   * ======================================================
   */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target
                  .classList
                  .add("is-visible");

                observer.unobserve(
                  entry.target
                );
              }

            }
          );

        },
        {
          threshold: 0.12,

          rootMargin:
            "0px 0px -60px 0px"
        }
      );


    revealElements.forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "is-visible"
        );

      }
    );

  }



  /*
   * ======================================================
   * CURSOR GLOW
   * ======================================================
   *
   * Desktop only.
   */

  const canUsePointer =
    window.matchMedia(
      "(pointer: fine)"
    ).matches;


  if (
    cursorGlow &&
    canUsePointer
  ) {

    let mouseX =
      window.innerWidth / 2;

    let mouseY =
      window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;


    window.addEventListener(
      "pointermove",
      (event) => {

        mouseX =
          event.clientX;

        mouseY =
          event.clientY;

      },
      {
        passive: true
      }
    );


    function animateGlow() {

      /*
       * Smoothly follow cursor.
       */

      glowX +=
        (mouseX - glowX) * 0.08;

      glowY +=
        (mouseY - glowY) * 0.08;


      cursorGlow.style.left =
        `${glowX}px`;

      cursorGlow.style.top =
        `${glowY}px`;


      requestAnimationFrame(
        animateGlow
      );
    }


    animateGlow();

  }



  /*
   * ======================================================
   * WORLD CARD POINTER EFFECT
   * ======================================================
   */

  const worldCards =
    document.querySelectorAll(
      ".learning-world"
    );


  if (canUsePointer) {

    worldCards.forEach(
      (card) => {

        card.addEventListener(
          "pointermove",
          (event) => {

            const bounds =
              card.getBoundingClientRect();

            const x =
              event.clientX -
              bounds.left;

            const y =
              event.clientY -
              bounds.top;


            card.style.setProperty(
              "--pointer-x",
              `${x}px`
            );

            card.style.setProperty(
              "--pointer-y",
              `${y}px`
            );

          }
        );

      }
    );

  }



  /*
   * ======================================================
   * SEEDED RANDOM GENERATOR
   * ======================================================
   *
   * Gives us the same star field
   * whenever the visitor returns.
   */

  function seededRandom(seed) {

    let value =
      seed % 2147483647;


    if (value <= 0) {
      value += 2147483646;
    }


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
   * ======================================================
   * COSMIC STAR CANVAS
   * ======================================================
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
     * Limit resolution for
     * performance.
     */

    const ratio =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );


    const width =
      window.innerWidth;

    const height =
      window.innerHeight;


    canvas.width =
      Math.floor(
        width * ratio
      );

    canvas.height =
      Math.floor(
        height * ratio
      );


    canvas.style.width =
      `${width}px`;

    canvas.style.height =
      `${height}px`;


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
     * Star amount automatically
     * adapts to screen size.
     */

    const starCount =
      Math.min(
        280,

        Math.max(
          90,

          Math.floor(
            (
              width *
              height
            ) /
            4500
          )
        )
      );


    const random =
      seededRandom(
        230917
      );


    /*
     * Draw stars.
     */

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
        random() * 1.25 +
        0.18;

      const alpha =
        random() * 0.6 +
        0.12;


      /*
       * Occasionally create
       * blue or warm stars.
       */

      const colourChance =
        random();


      let colour =
        "255,255,255";


      if (
        colourChance > 0.91
      ) {

        colour =
          "155,215,255";

      } else if (
        colourChance < 0.05
      ) {

        colour =
          "255,215,155";
      }


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


      /*
       * Give a handful of stars
       * a soft glow.
       */

      if (
        radius > 1.15 &&
        random() > 0.72
      ) {

        context.beginPath();

        context.fillStyle =
          `rgba(${colour}, ${alpha * 0.12})`;


        context.arc(
          x,
          y,
          radius * 5,
          0,
          Math.PI * 2
        );


        context.fill();
      }

    }

  }



  /*
   * Draw background on load.
   */

  drawCosmicSky();



  /*
   * ======================================================
   * RESIZE HANDLING
   * ======================================================
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
          () => {

            drawCosmicSky();

          },
          160
        );

    }
  );



  /*
   * ======================================================
   * SMOOTH INTERNAL NAVIGATION
   * ======================================================
   */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach((anchor) => {

      anchor.addEventListener(
        "click",
        (event) => {

          const targetID =
            anchor.getAttribute(
              "href"
            );


          if (
            !targetID ||
            targetID === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetID
            );


          if (!target) {
            return;
          }


          /*
           * Allow CSS reduced-motion
           * preference to take over.
           */

          const reduceMotion =
            window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;


          if (reduceMotion) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });

})();
