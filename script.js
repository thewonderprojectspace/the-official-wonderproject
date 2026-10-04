(() => {
  "use strict";


  /* =======================================================
     IMPORTANT ELEMENTS
  ======================================================= */

  const header =
    document.querySelector(
      "#siteHeader"
    );

  const menuButton =
    document.querySelector(
      "#menuButton"
    );

  const siteNav =
    document.querySelector(
      "#siteNav"
    );

  const year =
    document.querySelector(
      "#year"
    );

  const cursorLight =
    document.querySelector(
      "#cursorLight"
    );

  const toast =
    document.querySelector(
      "#toast"
    );


  /* =======================================================
     AUTOMATIC FOOTER YEAR
  ======================================================= */

  year.textContent =
    new Date().getFullYear();


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  function closeMenu() {
    siteNav.classList.remove(
      "open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "menu-open"
    );
  }


  menuButton.addEventListener(
    "click",
    () => {
      const willOpen =
        !siteNav.classList.contains(
          "open"
        );

      siteNav.classList.toggle(
        "open",
        willOpen
      );

      menuButton.setAttribute(
        "aria-expanded",
        String(willOpen)
      );

      document.body.classList.toggle(
        "menu-open",
        willOpen
      );
    }
  );


  siteNav
    .querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        closeMenu
      );
    });


  /* =======================================================
     HEADER AFTER SCROLLING
  ======================================================= */

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );
    },
    {
      passive: true
    }
  );


  /* =======================================================
     SCROLL REVEALS
  ======================================================= */

  const revealObserver =
    new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => {
            if (
              entry.isIntersecting
            ) {
              entry.target
                .classList
                .add("visible");

              revealObserver
                .unobserve(
                  entry.target
                );
            }
          }
        );
      },
      {
        threshold: 0.12
      }
    );


  document
    .querySelectorAll(
      ".reveal"
    )
    .forEach(
      (element, index) => {
        element.style
          .transitionDelay =
          `${
            Math.min(
              index % 5,
              3
            ) * 80
          }ms`;

        revealObserver.observe(
          element
        );
      }
    );


  /* =======================================================
     CURSOR SUNLIGHT
  ======================================================= */

  const hasFinePointer =
    window.matchMedia(
      "(pointer: fine)"
    ).matches;


  if (hasFinePointer) {
    window.addEventListener(
      "pointermove",
      (event) => {
        cursorLight.style.left =
          `${event.clientX}px`;

        cursorLight.style.top =
          `${event.clientY}px`;
      },
      {
        passive: true
      }
    );
  }


  /* =======================================================
     REFLECTION QUESTIONS
  ======================================================= */

  const questions = [
    "What part of you stays constant, even while everything visible changes?",

    "Which question have you made smaller so other people would feel comfortable?",

    "What are you becoming that cannot yet be measured?",

    "If nobody demanded proof today, what would you keep building?",

    "Which bruise taught you something success never could?",

    "What do you know logically but still struggle to believe emotionally?",

    "Where in your life are you mistaking a phase for a permanent identity?",

    "What would curiosity ask if fear stopped answering first?",

    "What light are you reflecting, even on a difficult day?",

    "Which version of you deserves patience, not pressure?"
  ];


  let questionIndex = 0;


  const questionOutput =
    document.querySelector(
      "#questionOutput"
    );

  const questionButton =
    document.querySelector(
      "#questionButton"
    );


  questionButton.addEventListener(
    "click",
    () => {
      const disappearAnimation =
        questionOutput.animate(
          [
            {
              opacity: 1,
              transform:
                "translateY(0)"
            },
            {
              opacity: 0,
              transform:
                "translateY(-12px)"
            }
          ],
          {
            duration: 220,
            easing: "ease",
            fill: "forwards"
          }
        );


      disappearAnimation
        .finished
        .then(() => {
          questionIndex =
            (
              questionIndex + 1
            ) % questions.length;

          questionOutput.textContent =
            questions[
              questionIndex
            ];


          questionOutput.animate(
            [
              {
                opacity: 0,
                transform:
                  "translateY(12px)"
              },
              {
                opacity: 1,
                transform:
                  "translateY(0)"
              }
            ],
            {
              duration: 330,
              easing: "ease",
              fill: "forwards"
            }
          );
        });
    }
  );


  /* =======================================================
     TAKE ME SOMEWHERE
  ======================================================= */

  const destinations = [
    "observatory.html",
    "question-graveyard.html",
    "oops-observatory.html",
    "messy-beginnings.html",
    "books.html",
    "mirror.html",
    "mind.html",
    "tiny-worlds.html",
    "unknown.html",
    "human-wall.html"
  ];


  const anywhereButton =
    document.querySelector(
      "#anywhereButton"
    );


  anywhereButton.addEventListener(
    "click",
    () => {
      const randomIndex =
        Math.floor(
          Math.random() *
          destinations.length
        );

      const destination =
        destinations[
          randomIndex
        ];

      showToast(
        "the orbit has chosen…"
      );

      window.setTimeout(
        () => {
          window.location.href =
            destination;
        },
        650
      );
    }
  );


  /* =======================================================
     SMALL MESSAGE POPUP
  ======================================================= */

  function showToast(message) {
    toast.textContent =
      message;

    toast.classList.add(
      "show"
    );

    window.clearTimeout(
      showToast.timer
    );

    showToast.timer =
      window.setTimeout(
        () => {
          toast.classList.remove(
            "show"
          );
        },
        1800
      );
  }


  /* =======================================================
     OPTIONAL ATMOSPHERIC SOUND

     Sound only begins after the visitor presses
     the button. Browsers do not permit websites
     to autoplay sound without permission.
  ======================================================= */

  let audioContext = null;
  let atmosphere = null;


  const soundButton =
    document.querySelector(
      "#soundToggle"
    );


  soundButton.addEventListener(
    "click",
    async () => {
      if (!audioContext) {
        audioContext =
          new (
            window.AudioContext ||
            window.webkitAudioContext
          )();

        atmosphere =
          createAtmosphere(
            audioContext
          );
      }


      if (
        audioContext.state ===
        "suspended"
      ) {
        await audioContext.resume();
      }


      const isOn =
        soundButton.getAttribute(
          "aria-pressed"
        ) === "true";


      atmosphere
        .gain
        .gain
        .cancelScheduledValues(
          audioContext.currentTime
        );


      atmosphere
        .gain
        .gain
        .linearRampToValueAtTime(
          isOn ? 0 : 0.035,
          audioContext.currentTime +
          0.8
        );


      soundButton.setAttribute(
        "aria-pressed",
        String(!isOn)
      );


      soundButton.lastChild
        .textContent =
        isOn
          ? " atmosphere off"
          : " atmosphere on";
    }
  );


  function createAtmosphere(
    context
  ) {
    const master =
      context.createGain();

    master.gain.value = 0;

    master.connect(
      context.destination
    );


    const frequencies = [
      110,
      164.81,
      220
    ];


    frequencies.forEach(
      (
        frequency,
        index
      ) => {
        const oscillator =
          context.createOscillator();

        const voiceGain =
          context.createGain();


        oscillator.type =
          index === 1
            ? "triangle"
            : "sine";


        oscillator.frequency.value =
          frequency;


        voiceGain.gain.value =
          index === 1
            ? 0.12
            : 0.08;


        oscillator
          .connect(
            voiceGain
          )
          .connect(
            master
          );


        oscillator.start();
      }
    );


    return {
      gain: master
    };
  }


  /* =======================================================
     HAND-DRAWN STAR CANVAS
  ======================================================= */

  const canvas =
    document.querySelector(
      "#skyCanvas"
    );

  const context =
    canvas.getContext(
      "2d"
    );


  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  let stars = [];


  function resizeSky() {
    const ratio =
      Math.min(
        window.devicePixelRatio ||
        1,
        2
      );


    canvas.width =
      window.innerWidth *
      ratio;


    canvas.height =
      window.innerHeight *
      ratio;


    canvas.style.width =
      `${window.innerWidth}px`;


    canvas.style.height =
      `${window.innerHeight}px`;


    context.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );


    const numberOfStars =
      Math.min(
        90,
        Math.floor(
          window.innerWidth /
          14
        )
      );


    stars =
      Array.from(
        {
          length:
            numberOfStars
        },
        () => {
          return {
            x:
              Math.random() *
              window.innerWidth,

            y:
              Math.random() *
              window.innerHeight,

            radius:
              Math.random() *
              1.4 +
              0.2,

            speed:
              Math.random() *
              0.035 +
              0.008,

            phase:
              Math.random() *
              Math.PI *
              2
          };
        }
      );
  }


  function drawSky(
    time = 0
  ) {
    context.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );


    context.fillStyle =
      "#17140f";


    stars.forEach(
      (star) => {
        const pulse =
          reducedMotion
            ? 1
            : 0.45 +
              Math.sin(
                time *
                star.speed *
                0.01 +
                star.phase
              ) *
              0.3;


        context.globalAlpha =
          pulse;


        context.beginPath();


        context.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );


        context.fill();
      }
    );


    context.globalAlpha = 1;


    if (!reducedMotion) {
      window.requestAnimationFrame(
        drawSky
      );
    }
  }


  window.addEventListener(
    "resize",
    resizeSky,
    {
      passive: true
    }
  );


  resizeSky();
  drawSky();

})();
