(() => {
  "use strict";

  // =========================================================
  // JIGYASA VERSE — LEARNING LOK
  // Entrance • Reception • Filters • Scroll effects
  // =========================================================

  const entry = document.querySelector("#schoolEntry");
  const enterButton = document.querySelector("#enterSchoolBtn");
  const reception = document.querySelector("#receptionScene");
  const nav = document.querySelector(".top-nav");
  const speech = document.querySelector("[data-speech]");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let entering = false;


  // =========================================================
  // ENTER LEARNING LOK
  // =========================================================

  function enterLearningLok() {
    if (!entry || entering) return;

    entering = true;

    if (enterButton) {
      enterButton.disabled = true;

      const buttonText = enterButton.querySelector("span");

      if (buttonText) {
        buttonText.textContent = "Opening the doors...";
      }
    }

    // First open the sliding doors
    entry.classList.add("doors-open");

    const zoomDelay = reduceMotion ? 80 : 900;
    const finishDelay = reduceMotion ? 180 : 2200;

    // Then move the visitor through the entrance
    window.setTimeout(() => {
      entry.classList.add("entering");
    }, zoomDelay);

    // Finally reveal reception
    window.setTimeout(() => {
      entry.hidden = true;

      document.body.style.overflow = "";

      if (reception) {
        reception.scrollIntoView({
          behavior: "auto",
          block: "start"
        });
      }
    }, finishDelay);
  }


  // Prevent scrolling before entering Learning Lok
  if (entry) {
    document.body.style.overflow = "hidden";
  }


  // Entrance button
  if (enterButton) {
    enterButton.addEventListener(
      "click",
      enterLearningLok
    );
  }


  // =========================================================
  // STICKY NAVIGATION
  // =========================================================

  function updateNav() {
    if (!nav) return;

    nav.classList.toggle(
      "scrolled",
      window.scrollY > 20
    );
  }

  updateNav();

  window.addEventListener(
    "scroll",
    updateNav,
    {
      passive: true
    }
  );


  // =========================================================
  // RECEPTIONIST CONVERSATIONS
  // =========================================================

  const receptionistMessages = [
    [
      "Hi. Welcome to <strong>Learning Lok.</strong>",
      "I can help you find somewhere interesting to begin."
    ],

    [
      "There is no admissions interview.",
      "Curiosity is doing most of the paperwork."
    ],

    [
      "That wrong maths answer on the wall?",
      "The correction underneath it is why we kept both."
    ],

    [
      "You do not have to look clever here.",
      "You are allowed to actually learn."
    ],

    [
      "No idea where you belong yet?",
      "Excellent. Wander before you label yourself."
    ],

    [
      "Failed experiment?",
      "Write down what happened. Congratulations — now you have data."
    ],

    [
      "Ugly first draft?",
      "Good. Now there is something real to improve."
    ],

    [
      "The library is nearby.",
      "You may enter for one thing and leave knowing seven unrelated things."
    ],

    [
      "Still confused?",
      "Confusion is usually where the interesting bit starts."
    ],

    [
      "You are allowed to ask obvious questions.",
      "Half the room was wondering the same thing anyway."
    ],

    [
      "You do not need to know everything before you begin.",
      "That would make Learning Lok rather pointless."
    ],

    [
      "A mistake is not a personality trait.",
      "It is just information for attempt number two."
    ],

    [
      "See something interesting?",
      "Go investigate it before your brain invents an excuse."
    ],

    [
      "There is no perfect path through this place.",
      "Choose a door. You can always choose another one later."
    ]
  ];


  let messageIndex = 0;


  function showNextSpeech() {
    if (!speech) return;

    messageIndex =
      (messageIndex + 1) %
      receptionistMessages.length;

    const [lineOne, lineTwo] =
      receptionistMessages[messageIndex];


    // Fade speech bubble out
    speech.style.opacity = "0";
    speech.style.transform = "translateY(4px)";


    window.setTimeout(() => {

      speech.innerHTML = `
        <p>${lineOne}</p>
        <p>${lineTwo}</p>
        <span aria-hidden="true"></span>
      `;


      // Fade back in
      speech.style.opacity = "1";
      speech.style.transform = "translateY(0)";

    }, 210);
  }


  // Change receptionist message every few seconds
  if (speech && !reduceMotion) {

    window.setInterval(
      showNextSpeech,
      7200
    );

  }


  // =========================================================
  // LEARNING SPACE FILTERS
  // =========================================================

  const filters =
    document.querySelectorAll(".filter");

  const cards =
    document.querySelectorAll(".space-card");


  filters.forEach((filterButton) => {

    filterButton.addEventListener(
      "click",
      () => {

        const selectedFilter =
          filterButton.dataset.filter;


        // Remove active state from all filter buttons
        filters.forEach((button) => {
          button.classList.remove("active");
        });


        // Activate clicked button
        filterButton.classList.add("active");


        // Show / hide Learning Lok cards
        cards.forEach((card) => {

          const shouldShow =
            selectedFilter === "all" ||
            card.dataset.group === selectedFilter;


          card.classList.toggle(
            "hidden-card",
            !shouldShow
          );

        });

      }
    );

  });


  // =========================================================
  // SCROLL REVEAL ANIMATIONS
  // =========================================================

  const revealTargets =
    document.querySelectorAll(`
      .attempt-card,
      .directory-card,
      .receptionist-card,
      .space-card,
      .library-copy,
      .library-illustration,
      .rules-grid article
    `);


  revealTargets.forEach((element) => {
    element.classList.add("reveal");
  });


  if (
    "IntersectionObserver" in window &&
    !reduceMotion
  ) {

    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach((entryItem) => {

            if (!entryItem.isIntersecting) {
              return;
            }


            entryItem.target.classList.add(
              "visible"
            );


            observer.unobserve(
              entryItem.target
            );

          });

        },

        {
          threshold: 0.12,
          rootMargin: "0px 0px -30px"
        }

      );


    revealTargets.forEach((element) => {
      observer.observe(element);
    });

  } else {

    revealTargets.forEach((element) => {
      element.classList.add("visible");
    });

  }


  // =========================================================
  // SMOOTH INTERNAL PAGE LINKS
  // =========================================================

  const internalLinks =
    document.querySelectorAll('a[href^="#"]');


  internalLinks.forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(targetId);


        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({

          behavior:
            reduceMotion
              ? "auto"
              : "smooth",

          block: "start"

        });

      }
    );

  });


  // =========================================================
  // SMALL HOVER PERSONALITY
  // =========================================================

  const learningCards =
    document.querySelectorAll(".space-card");


  learningCards.forEach((card, index) => {

    card.addEventListener(
      "mouseenter",
      () => {

        if (reduceMotion) return;

        const rotation =
          index % 2 === 0
            ? "-0.35deg"
            : "0.35deg";


        card.style.transform =
          `translateY(-5px) rotate(${rotation})`;

      }
    );


    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform = "";

      }
    );

  });


  // =========================================================
  // ATTEMPT CARDS
  // Tiny interaction when someone clicks an attempt
  // =========================================================

  const attemptCards =
    document.querySelectorAll(".attempt-card");


  attemptCards.forEach((card) => {

    card.addEventListener(
      "click",
      () => {

        card.classList.toggle(
          "attempt-selected"
        );

      }
    );

  });


  // =========================================================
  // RECEPTIONIST IMAGE MOVEMENT
  // Very subtle mouse movement
  // =========================================================

  const receptionistImage =
    document.querySelector(".receptionist-image");


  if (
    receptionistImage &&
    !reduceMotion
  ) {

    window.addEventListener(
      "mousemove",
      (event) => {

        const x =
          (
            event.clientX /
            window.innerWidth
          ) - 0.5;

        const y =
          (
            event.clientY /
            window.innerHeight
          ) - 0.5;


        receptionistImage.style.transform =
          `
            translate(
              ${x * 2}px,
              ${y * 2}px
            )
          `;

      }
    );

  }


  // =========================================================
  // LIBRARY HOVER MESSAGE
  // =========================================================

  const libraryLink =
    document.querySelector(".library-link");


  if (libraryLink) {

    const originalLibraryText =
      libraryLink.innerHTML;


    libraryLink.addEventListener(
      "mouseenter",
      () => {

        libraryLink.innerHTML = `
          You may accidentally disappear in here
          <span>→</span>
        `;

      }
    );


    libraryLink.addEventListener(
      "mouseleave",
      () => {

        libraryLink.innerHTML =
          originalLibraryText;

      }
    );

  }


  // =========================================================
  // RANDOM HUMAN-LIKE ROTATIONS
  // Makes elements feel a little less digitally perfect
  // =========================================================

  const messyElements =
    document.querySelectorAll(
      ".attempt-card, .handwritten-card, .welcome-note"
    );


  const rotations = [
    -1.4,
    0.8,
    -0.6,
    1.2,
    -0.9,
    0.5
  ];


  messyElements.forEach(
    (element, index) => {

      const rotation =
        rotations[
          index %
          rotations.length
        ];


      element.style.setProperty(
        "--random-rotation",
        `${rotation}deg`
      );

    }
  );


  // =========================================================
  // CONSOLE EASTER EGG
  // =========================================================

  console.log(
    "%cJIGYASA VERSE · LEARNING LOK",
    `
      font-size:18px;
      font-weight:700;
      color:#a46878;
    `
  );


  console.log(
    "Oh... you opened the console."
  );


  console.log(
    "Curiosity requirement: satisfied ✓"
  );


  console.log(
    "Now go build something."
  );

})();
