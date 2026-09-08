(() => {
  const arrival = document.querySelector(".school-arrival");
  const enterButton = document.querySelector("[data-enter-school]");
  const reception = document.querySelector("#reception");
  const nav = document.querySelector(".reception-nav");

  let hasEntered = false;

  function enterSchool() {
    if (!arrival || !reception || hasEntered) return;

    hasEntered = true;

    // Opens the two school doors through the CSS animation
    arrival.classList.add("entered");

    if (enterButton) {
      enterButton.setAttribute(
        "aria-label",
        "School doors opening"
      );
    }

    // After the doors open, move the visitor into reception
    window.setTimeout(() => {
      reception.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 900);
  }

  // Main "Walk through the front doors" button
  if (enterButton) {
    enterButton.addEventListener("click", enterSchool);
  }

  // The illustrated school doors can also be clicked
  const schoolDoor = document.querySelector("[data-school-door]");

  if (schoolDoor) {
    schoolDoor.addEventListener("click", enterSchool);

    // Makes the illustrated door accessible by keyboard
    schoolDoor.setAttribute("role", "button");
    schoolDoor.setAttribute("tabindex", "0");
    schoolDoor.setAttribute(
      "aria-label",
      "Open the Jigyasa Verse school doors"
    );

    schoolDoor.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        enterSchool();
      }
    });
  }

  // ------------------------------------------------
  // NAVBAR CHANGE AFTER SCROLLING
  // ------------------------------------------------

  function updateNav() {
    if (!nav) return;

    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  updateNav();

  window.addEventListener(
    "scroll",
    updateNav,
    { passive: true }
  );

  // ------------------------------------------------
  // RECEPTIONIST SPEECH
  // ------------------------------------------------

  const speech = document.querySelector("[data-speech]");

  const messages = [
    [
      "Hi! Welcome to <strong>Jigyasa Verse Schools.</strong>",
      "Which school would you like to wander into today?"
    ],

    [
      "No admission interview, promise.",
      "Pick the room that makes you say: <strong>“wait… how does that work?”</strong>"
    ],

    [
      "The library is right there too.",
      "Nobody will judge you for opening three books and finishing none of them."
    ],

    [
      "You don't have to be good at something to enter.",
      "Being curious is more than enough."
    ],

    [
      "Oh, and one important school rule.",
      "<strong>Wrong answers are allowed here.</strong>"
    ],

    [
      "That messy thing on the wall?",
      "Someone tried something difficult. We thought that deserved a frame."
    ],

    [
      "Still deciding?",
      "Pick whichever school makes you slightly nervous and very curious."
    ]
  ];

  let messageIndex = 0;

  function swapSpeech() {
    if (!speech) return;

    messageIndex++;

    if (messageIndex >= messages.length) {
      messageIndex = 0;
    }

    const firstLine = messages[messageIndex][0];
    const secondLine = messages[messageIndex][1];

    speech.innerHTML = `
      <p>${firstLine}</p>
      <p>${secondLine}</p>
      <span class="speech-tip"></span>
    `;
  }

  // Receptionist changes message every 8.5 seconds
  window.setInterval(swapSpeech, 8500);


  // ------------------------------------------------
  // SCHOOL CARDS - LITTLE INTERACTION
  // ------------------------------------------------

  const schoolFrames = document.querySelectorAll(".school-frame");

  schoolFrames.forEach((frame) => {

    frame.addEventListener("mouseenter", () => {
      frame.classList.add("school-frame-active");
    });

    frame.addEventListener("mouseleave", () => {
      frame.classList.remove("school-frame-active");
    });

  });


  // ------------------------------------------------
  // RANDOM CHILD-LIKE WALL MOVEMENT
  // ------------------------------------------------

  const messyPapers = document.querySelectorAll(".messy-paper");

  messyPapers.forEach((paper, index) => {

    paper.addEventListener("mouseenter", () => {

      const rotations = [
        "-5deg",
        "4deg",
        "-2deg",
        "6deg"
      ];

      paper.style.transform =
        `rotate(${rotations[index % rotations.length]}) scale(1.04)`;

      paper.style.zIndex = "10";

    });

    paper.addEventListener("mouseleave", () => {

      paper.style.transform = "";
      paper.style.zIndex = "";

    });

  });


  // ------------------------------------------------
  // LIBRARY DOOR MESSAGE
  // ------------------------------------------------

  const libraryDoor = document.querySelector(".library-door");

  if (libraryDoor) {

    const libraryText =
      libraryDoor.querySelector("p");

    const originalLibraryText =
      libraryText ? libraryText.textContent : "";

    libraryDoor.addEventListener("mouseenter", () => {

      if (libraryText) {
        libraryText.textContent =
          "Careful. You may accidentally learn something →";
      }

    });

    libraryDoor.addEventListener("mouseleave", () => {

      if (libraryText) {
        libraryText.textContent =
          originalLibraryText;
      }

    });

  }


  // ------------------------------------------------
  // LITTLE SCHOOL ENTRY SOUND-FREE FEEDBACK
  // ------------------------------------------------

  if (enterButton) {

    enterButton.addEventListener("mouseenter", () => {

      const arrow =
        enterButton.querySelector("span");

      if (arrow) {
        arrow.textContent = "→→";
      }

    });

    enterButton.addEventListener("mouseleave", () => {

      const arrow =
        enterButton.querySelector("span");

      if (arrow) {
        arrow.textContent = "→";
      }

    });

  }


  // ------------------------------------------------
  // REVEAL SCHOOL FRAMES AS USER SCROLLS
  // ------------------------------------------------

  const revealElements = document.querySelectorAll(
    ".school-frame, .messy-paper, .requirements article"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  // ------------------------------------------------
  // CONSOLE MESSAGE
  // ------------------------------------------------

  console.log(
    "%cWelcome to Jigyasa Verse Schools ✏️",
    "font-size:18px; font-weight:bold; color:#6540a7;"
  );

  console.log(
    "Admission requirement: willingness to make mistakes."
  );

})();
(() => {

  const entryScreen =
    document.querySelector(
      "#schoolEntry"
    );

  const enterButton =
    document.querySelector(
      "#enterSchoolBtn"
    );

  const reception =
    document.querySelector(
      "#receptionScene"
    );


  let entering = false;


  function startSchoolEntry() {

    if (
      entering ||
      !entryScreen
    ) {
      return;
    }


    entering = true;


    /* -----------------------------
       STEP 1
       Automatic doors open
    ----------------------------- */

    entryScreen.classList.add(
      "doors-open"
    );


    /* -----------------------------
       STEP 2
       Wait while doors slide apart
    ----------------------------- */

    setTimeout(() => {

      /*
        Zoom through the doorway
      */

      entryScreen.classList.add(
        "entering"
      );

    }, 1400);


    /* -----------------------------
       STEP 3
       Arrive at reception
    ----------------------------- */

    setTimeout(() => {

      entryScreen.style.display =
        "none";


      if (reception) {

        reception.scrollIntoView({
          behavior: "auto",
          block: "start"
        });

      }

    }, 2900);

  }


  if (enterButton) {

    enterButton.addEventListener(
      "click",
      startSchoolEntry
    );

  }


  /* --------------------------------
     OPTIONAL:
     automatically open after a short
     pause if you want it cinematic
  -------------------------------- */

  /*
  setTimeout(() => {

    startSchoolEntry();

  }, 3500);
  */


})();
