(() => {

  "use strict";


  /* ==========================================================
     ELEMENTS
  ========================================================== */

  const canvas =
    document.querySelector("#livingSky");

  const ctx =
    canvas?.getContext("2d");

  const header =
    document.querySelector("#siteHeader");

  const menuButton =
    document.querySelector("#menuButton");

  const menu =
    document.querySelector("#siteMenu");

  const planetStage =
    document.querySelector("#planetStage");

  const randomJourney =
    document.querySelector("#randomJourney");


  /* ==========================================================
     USER PREFERENCES
  ========================================================== */

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  /* ==========================================================
     STATE
  ========================================================== */

  let stars = [];

  let frame = 0;

  let resizeTimer;

  let skyRunning = false;


  /* ==========================================================
     ANALYTICS HELPER
  ========================================================== */

  function trackEvent(eventName, parameters = {}) {

    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag(
      "event",
      eventName,
      parameters
    );

  }


  /* ==========================================================
     LOGO FALLBACK
  ========================================================== */

  document
    .querySelectorAll(".js-brand-logo")
    .forEach((logo) => {

      const showFallback = () => {
        logo.classList.add("logo-missing");
      };


      logo.addEventListener(
        "error",
        showFallback,
        { once: true }
      );


      if (
        logo.complete &&
        logo.naturalWidth === 0
      ) {
        showFallback();
      }

    });


  /* ==========================================================
     LIVING SKY
  ========================================================== */

  function resizeSky() {

    if (!canvas || !ctx) {
      return;
    }


    const ratio =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );


    canvas.width =
      Math.floor(
        window.innerWidth * ratio
      );


    canvas.height =
      Math.floor(
        window.innerHeight * ratio
      );


    canvas.style.width =
      `${window.innerWidth}px`;


    canvas.style.height =
      `${window.innerHeight}px`;


    ctx.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );


    const count =
      Math.max(
        80,
        Math.floor(
          (
            window.innerWidth *
            window.innerHeight
          ) / 9500
        )
      );


    stars =
      Array.from(
        { length: count },
        () => ({
          x:
            Math.random() *
            window.innerWidth,

          y:
            Math.random() *
            window.innerHeight,

          r:
            Math.random() *
            1.25 +
            .15,

          a:
            Math.random() *
            .55 +
            .12,

          speed:
            Math.random() *
            .008 +
            .002,

          phase:
            Math.random() *
            Math.PI *
            2
        })
      );

  }


  function drawSky(time = 0) {

    if (
      !canvas ||
      !ctx ||
      document.hidden
    ) {
      skyRunning = false;
      return;
    }


    skyRunning = true;


    ctx.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );


    /* cosmic background wash */

    const wash =
      ctx.createRadialGradient(
        window.innerWidth * .76,
        window.innerHeight * .48,
        0,

        window.innerWidth * .76,
        window.innerHeight * .48,

        window.innerWidth * .7
      );


    wash.addColorStop(
      0,
      "rgba(44, 28, 66, .16)"
    );


    wash.addColorStop(
      .5,
      "rgba(10, 8, 18, .08)"
    );


    wash.addColorStop(
      1,
      "rgba(3, 3, 7, 1)"
    );


    ctx.fillStyle = wash;


    ctx.fillRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );


    /* stars */

    stars.forEach((star) => {

      const pulse =
        reduceMotion
          ? 1
          : .68 +
            Math.sin(
              time *
              star.speed +
              star.phase
            ) *
            .32;


      ctx.beginPath();


      ctx.arc(
        star.x,
        star.y,
        star.r,
        0,
        Math.PI * 2
      );


      ctx.fillStyle =
        `rgba(
          235,
          229,
          222,
          ${star.a * pulse}
        )`;


      ctx.fill();

    });


    if (!reduceMotion) {

      frame =
        requestAnimationFrame(
          drawSky
        );

    } else {

      skyRunning = false;

    }

  }


  /* ==========================================================
     PAUSE SKY WHEN TAB IS HIDDEN
  ========================================================== */

  document.addEventListener(
    "visibilitychange",
    () => {

      if (document.hidden) {

        cancelAnimationFrame(frame);

        skyRunning = false;

        return;
      }


      if (
        !reduceMotion &&
        !skyRunning
      ) {

        drawSky();

      }

    }
  );


  /* ==========================================================
     MOBILE MENU
  ========================================================== */

  function toggleMenu(force) {

    if (
      !menuButton ||
      !menu
    ) {
      return;
    }


    const currentlyOpen =
      menuButton.getAttribute(
        "aria-expanded"
      ) === "true";


    const open =
      typeof force === "boolean"
        ? force
        : !currentlyOpen;


    menuButton.setAttribute(
      "aria-expanded",
      String(open)
    );


    menuButton.setAttribute(
      "aria-label",
      open
        ? "Close navigation menu"
        : "Open navigation menu"
    );


    menu.classList.toggle(
      "open",
      open
    );


    document.body.style.overflow =
      open
        ? "hidden"
        : "";


    if (open) {

      window.setTimeout(
        () => {
          menu
            .querySelector("a")
            ?.focus();
        },
        50
      );

    }

  }


  menuButton?.addEventListener(
    "click",
    () => {

      toggleMenu();

    }
  );


  menu
    ?.querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          toggleMenu(false);

        }
      );

    });


  window.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        toggleMenu(false);

        menuButton?.focus();

      }

    }
  );


  /* ==========================================================
     REVEAL ELEMENTS
  ========================================================== */

  if (
    "IntersectionObserver" in window &&
    !reduceMotion
  ) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target
                  .classList
                  .add(
                    "is-visible"
                  );


                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: .12
        }
      );


    document
      .querySelectorAll(".reveal")
      .forEach(
        (item) => {

          observer.observe(item);

        }
      );

  } else {

    document
      .querySelectorAll(".reveal")
      .forEach(
        (item) => {

          item.classList.add(
            "is-visible"
          );

        }
      );

  }


  /* ==========================================================
     HEADER SCROLL STATE
  ========================================================== */

  function updateHeader() {

    header
      ?.classList
      .toggle(
        "scrolled",
        window.scrollY > 30
      );

  }


  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );


  updateHeader();


  /* ==========================================================
     PLANET POINTER MOVEMENT
  ========================================================== */

  if (
    !reduceMotion &&
    planetStage &&
    window.matchMedia(
      "(pointer: fine)"
    ).matches
  ) {

    window.addEventListener(
      "pointermove",
      (event) => {

        const x =
          (
            event.clientX /
            window.innerWidth -
            .5
          ) *
          12;


        const y =
          (
            event.clientY /
            window.innerHeight -
            .5
          ) *
          10;


        planetStage.style.transform =
          `translate3d(
            ${x}px,
            ${y}px,
            0
          )`;

      },
      {
        passive: true
      }
    );

  }


  /* ==========================================================
     RANDOM JIGYASAVERSE JOURNEY
  ========================================================== */

  const journeys = [

    "wonderverse.html",

    "learning-lok.html",

    "books.html",

    "questions.html"

  ];


  randomJourney?.addEventListener(
    "click",
    () => {

      const destination =
        journeys[
          Math.floor(
            Math.random() *
            journeys.length
          )
        ];


      trackEvent(
        "random_explore",
        {
          destination
        }
      );


      /*
        Tiny delay gives analytics
        a chance to register without
        making the site feel slow.
      */

      window.setTimeout(
        () => {

          window.location.href =
            destination;

        },
        120
      );

    }
  );


  /* ==========================================================
     JOURNEY ANALYTICS
  ========================================================== */

  document
    .querySelectorAll(
      "[data-journey]"
    )
    .forEach(
      (link) => {

        link.addEventListener(
          "click",
          () => {

            const journey =
              link.dataset.journey;


            trackEvent(
              "journey_enter",
              {
                journey
              }
            );

          }
        );

      }
    );


  /* ==========================================================
     RESIZE
  ========================================================== */

  window.addEventListener(
    "resize",
    () => {

      clearTimeout(
        resizeTimer
      );


      resizeTimer =
        window.setTimeout(
          () => {

            cancelAnimationFrame(
              frame
            );


            skyRunning = false;


            resizeSky();


            drawSky();

          },
          150
        );

    },
    {
      passive: true
    }
  );


  /* ==========================================================
     INITIALISE
  ========================================================== */

  resizeSky();

  drawSky();

})();
