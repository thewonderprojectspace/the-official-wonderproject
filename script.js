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
/* =========================================================
   DAILY JIGYASA GAME
========================================================= */

(() => {
  const game = document.getElementById("jigyasaQuest");

  if (!game) {
    return;
  }

  const missions = {
    notice: [
      "Find an object you use every day. What problem was it originally created to solve?",

      "Look out of the nearest window for one full minute. Notice something that would usually escape you.",

      "Choose one sound around you. Follow it carefully and work out where it begins and where it disappears.",

      "Find something worn, cracked or repaired. Imagine the story of how it survived.",

      "Notice three different kinds of light around you. How does each one change the feeling of the space?",

      "Watch how someone uses their hands while doing an ordinary task. What knowledge do their hands carry?",

      "Find a tiny sign of change: dust, a new leaf, an unfinished building or a fading mark. What is it becoming?"
    ],

    learn: [
      "Choose one ordinary object near you and discover one fact about it that you did not know five minutes ago.",

      "Why can the Moon sometimes be seen during the day? Follow the question until you can explain it simply.",

      "Find the origin of one word you use often. What journey did that word take before reaching you?",

      "Learn how one animal senses the world differently from humans. What might its reality feel like?",

      "Pick something you once believed but later changed your mind about. What new evidence changed it?",

      "Ask someone older than you to teach you one thing that is rarely written in a textbook.",

      "Find one question a child might ask about your surroundings. Try to answer it without using jargon."
    ],

    make: [
      "Draw an impossible school and give it one rule that would make its students more curious.",

      "Create a six-word story about beginning again. Awkward first attempts are completely welcome.",

      "Use three objects near you to build a tiny monument to something ordinary that deserves appreciation.",

      "Write a terrible first sentence for the book you secretly wish existed. Do not improve it yet.",

      "Invent a tool for a problem nobody takes seriously. Give your invention an unnecessarily dramatic name.",

      "Make a map of your day using only shapes, arrows and colours. Accuracy is optional; honesty is not.",

      "Turn one mistake you made into a small instruction for another human: “If this happens, try…”"
    ]
  };

  const categoryLabels = {
    notice: "Notice mission",
    learn: "Learning mission",
    make: "Making mission"
  };

  const storageKey = "jigyasaverse-curiosity-passport-v1";

  const choiceButtons = [
    ...game.querySelectorAll("[data-jq-category]")
  ];

  const missionPanel =
    document.getElementById("jqMission");

  const missionLabel =
    document.getElementById("jqMissionLabel");

  const prompt =
    document.getElementById("jqPrompt");

  const reflection =
    document.getElementById("jqReflection");

  const completeButton =
    document.getElementById("jqComplete");

  const anotherButton =
    document.getElementById("jqAnother");

  const finished =
    document.getElementById("jqFinished");

  const finishedCopy =
    document.getElementById("jqFinishedCopy");

  const count =
    document.getElementById("jqCount");

  const starElements = [
    ...document.querySelectorAll("#jqStars .jq-star")
  ];

  const live =
    document.getElementById("jqLive");

  const returnNote =
    document.getElementById("jqReturnNote");

  const dateElement =
    document.getElementById("jqDate");

  let selectedCategory = "";
  let selectedMission = "";

  /* Create a local date key without UTC changing the day */

  function getLocalDateKey(date = new Date()) {
    const year = date.getFullYear();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const today = getLocalDateKey();

  /* Read the visitor's saved passport */

  function readPassport() {
    try {
      const savedPassport = JSON.parse(
        localStorage.getItem(storageKey)
      );

      if (
        !savedPassport ||
        !Array.isArray(savedPassport.completedDates)
      ) {
        throw new Error("Create a new passport");
      }

      return savedPassport;
    } catch (error) {
      return {
        completedDates: [],
        entries: []
      };
    }
  }

  /* Save progress privately in this browser */

  function writePassport(passport) {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify(passport)
      );
    } catch (error) {
      /*
        The game still works if a visitor's browser
        does not permit local storage.
      */
    }
  }

  /* Turn today's date into a repeatable mission number */

  function hashText(text) {
    let hash = 0;

    for (let index = 0; index < text.length; index += 1) {
      hash =
        ((hash << 5) - hash + text.charCodeAt(index)) | 0;
    }

    return Math.abs(hash);
  }

  /* Draw the visitor's seven-star constellation */

  function renderProgress(totalStars) {
    const currentConstellation =
      totalStars === 0
        ? 0
        : ((totalStars - 1) % 7) + 1;

    const constellationNumber =
      totalStars === 0
        ? 1
        : Math.ceil(totalStars / 7);

    starElements.forEach((star, index) => {
      star.classList.toggle(
        "is-earned",
        index < currentConstellation
      );
    });

    if (totalStars > 7) {
      count.textContent =
        `${currentConstellation} of 7 · ` +
        `constellation ${constellationNumber}`;
    } else {
      count.textContent =
        `${currentConstellation} of 7 stars`;
    }
  }

  /* Open a particular mission pathway */

  function chooseCategory(category) {
    selectedCategory = category;

    const categoryMissions = missions[category];

    const missionIndex =
      hashText(`${today}-${category}`) %
      categoryMissions.length;

    selectedMission =
      categoryMissions[missionIndex];

    choiceButtons.forEach((button) => {
      const isSelected =
        button.dataset.jqCategory === category;

      button.setAttribute(
        "aria-pressed",
        String(isSelected)
      );
    });

    missionLabel.textContent =
      categoryLabels[category];

    prompt.textContent =
      selectedMission;

    reflection.value = "";

    missionPanel.classList.add("is-visible");
    finished.classList.remove("is-visible");

    live.textContent =
      `${categoryLabels[category]} opened.`;

    window.setTimeout(() => {
      missionPanel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 80);
  }

  /* Show the completed screen */

  function showCompletedToday(passport) {
    choiceButtons.forEach((button) => {
      button.hidden = true;
    });

    missionPanel.classList.remove("is-visible");
    finished.classList.add("is-visible");

    const totalStars =
      passport.completedDates.length;

    const formedConstellation =
      totalStars > 0 &&
      totalStars % 7 === 0;

    if (formedConstellation) {
      finishedCopy.textContent =
        "Seven small acts of curiosity have formed a " +
        "constellation. Tomorrow, a new patch of sky begins.";
    } else {
      finishedCopy.textContent =
        "Your star is safe here. Come back tomorrow for " +
        "another small mission—no streak anxiety required.";
    }
  }

  /* Display today's date */

  dateElement.textContent =
    new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long"
    }).format(new Date());

  let passport = readPassport();

  const hasCompletedToday =
    passport.completedDates.includes(today);

  renderProgress(
    passport.completedDates.length
  );

  /* Welcome returning visitors */

  if (
    passport.completedDates.length > 0 &&
    !hasCompletedToday
  ) {
    returnNote.classList.add("is-visible");
  }

  if (hasCompletedToday) {
    showCompletedToday(passport);
  }

  /* Pathway buttons */

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      chooseCategory(
        button.dataset.jqCategory
      );
    });
  });

  /* Give the visitor a different type of mission */

  anotherButton.addEventListener("click", () => {
    const categoryOrder = [
      "notice",
      "learn",
      "make"
    ];

    const currentIndex =
      selectedCategory
        ? categoryOrder.indexOf(selectedCategory)
        : -1;

    const nextIndex =
      (currentIndex + 1) % categoryOrder.length;

    chooseCategory(
      categoryOrder[nextIndex]
    );
  });

  /* Complete today's mission */

  completeButton.addEventListener("click", () => {
    if (
      !selectedCategory ||
      !selectedMission
    ) {
      return;
    }

    passport = readPassport();

    const alreadyCompleted =
      passport.completedDates.includes(today);

    if (!alreadyCompleted) {
      passport.completedDates.push(today);

      if (!Array.isArray(passport.entries)) {
        passport.entries = [];
      }

      passport.entries.unshift({
        date: today,
        category: selectedCategory,
        mission: selectedMission,
        reflection: reflection.value
          .trim()
          .slice(0, 280)
      });

      /*
        Keep only the visitor's 30 most recent entries
        so browser storage does not grow indefinitely.
      */

      passport.entries =
        passport.entries.slice(0, 30);

      writePassport(passport);
    }

    renderProgress(
      passport.completedDates.length
    );

    showCompletedToday(passport);

    live.textContent =
      "Mission complete. One curiosity star was added.";

    finished.focus({
      preventScroll: true
    });

    finished.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    /*
      Send an anonymous completion event to your
      existing Google Analytics account.
    */

    if (typeof window.gtag === "function") {
      window.gtag(
        "event",
        "daily_jigyasa_complete",
        {
          quest_category: selectedCategory,
          total_stars:
            passport.completedDates.length
        }
      );
    }
  });
})();
