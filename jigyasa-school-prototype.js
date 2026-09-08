(() => {
  "use strict";

  // =========================================================
  // JIGYASA VERSE SCHOOL
  // Entrance • Reception • Animations • Interactions
  // =========================================================

  const entry = document.querySelector("#schoolEntry");
  const enterBtn = document.querySelector("#enterSchoolBtn");
  const reception = document.querySelector("#receptionScene");
  const nav = document.querySelector(".reception-nav");
  const speech = document.querySelector("[data-speech]");

  let entering = false;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  // =========================================================
  // ENTER JIGYASA VERSE SCHOOL
  // =========================================================

  function enterSchool() {
    if (!entry || entering) return;

    entering = true;

    if (enterBtn) {
      enterBtn.disabled = true;

      const buttonText = enterBtn.querySelector("span");

      if (buttonText) {
        buttonText.textContent = "Doors opening...";
      }
    }


    // ---------------------------------------------------------
    // STEP 1 — GLASS DOORS OPEN
    // ---------------------------------------------------------

    entry.classList.add("doors-open");


    // ---------------------------------------------------------
    // STEP 2 — CAMERA MOVES THROUGH THE DOORS
    // ---------------------------------------------------------

    const zoomDelay = prefersReducedMotion
      ? 120
      : 1250;

    const finishDelay = prefersReducedMotion
      ? 300
      : 2800;


    window.setTimeout(() => {
      entry.classList.add("entering");
    }, zoomDelay);


    // ---------------------------------------------------------
    // STEP 3 — ARRIVE AT RECEPTION
    // ---------------------------------------------------------

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


  // Lock scrolling while visitor is outside the school
  document.body.style.overflow = "hidden";


  // Entrance button
  if (enterBtn) {
    enterBtn.addEventListener(
      "click",
      enterSchool
    );
  }


  // Keyboard accessibility
  // Enter or Space can also open the school
  if (entry) {

    entry.addEventListener(
      "keydown",
      (event) => {

        if (
          (event.key === "Enter" ||
           event.key === " ") &&
          !entering
        ) {

          enterSchool();

        }

      }
    );

  }


  // =========================================================
  // RECEPTION NAVIGATION
  // =========================================================

  function updateNav() {

    if (!nav) return;

    nav.classList.toggle(
      "scrolled",
      window.scrollY > 28
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

  const messages = [

    [
      "Hi. Welcome to <strong>Jigyasa Verse School.</strong>",
      "Ignore the coffee. Do not ignore your curiosity."
    ],

    [
      "There is no admissions interview.",
      "I barely found a working pen, so that would be ambitious."
    ],

    [
      "That wrong maths answer on the wall?",
      "The correction underneath it is why we kept both."
    ],

    [
      "We like beautiful work.",
      "We just refuse to pretend beautiful work arrives first."
    ],

    [
      "You can enter by age, subject or obsession.",
      "Or click the room whose name makes you curious."
    ],

    [
      "Nobody here expects you to know everything.",
      "That would make school rather pointless."
    ],

    [
      "See all those crossed-out answers?",
      "Those are not decorations. Those are evidence."
    ],

    [
      "Evidence of what?",
      "Someone actually tried."
    ],

    [
      "The library is down the hall.",
      "Open one book. Open seven. Lose the afternoon. We do not mind."
    ],

    [
      "Around here, trying again is not a punishment.",
      "It is one of the things we are actually teaching."
    ],

    [
      "Failed experiment?",
      "Write down what happened. Congratulations — now you have data."
    ],

    [
      "Ugly first draft?",
      "Excellent. Now there is something to improve."
    ],

    [
      "You do not have to be gifted.",
      "You do have to be willing to begin."
    ],

    [
      "Still deciding where you belong?",
      "Good. Wander first. Labels can catch up later."
    ],

    [
      "One tiny rule before you go...",
      "<strong>Please do things.</strong> Thinking about doing them does not count."
    ]

  ];


  let speechIndex = 0;


  function changeSpeech() {

    if (!speech) return;


    speechIndex =
      (speechIndex + 1) %
      messages.length;


    const [firstLine, secondLine] =
      messages[speechIndex];


    // Fade out
    speech.style.opacity = "0";


    window.setTimeout(() => {

      speech.innerHTML = `
        <p>${firstLine}</p>
        <p>${secondLine}</p>
        <span></span>
      `;

      // Fade back in
      speech.style.opacity = "1";

    }, 220);

  }


  // Change receptionist message every 7.2 seconds
  if (!prefersReducedMotion) {

    window.setInterval(
      changeSpeech,
      7200
    );

  }


  // =========================================================
  // WALL OF ATTEMPTS
  // =========================================================

  const attemptCards =
    document.querySelectorAll(
      ".attempt-card"
    );


  attemptCards.forEach((card) => {

    card.addEventListener(
      "click",
      () => {

        card.classList.toggle(
          "pinned"
        );

      }
    );

  });


  // =========================================================
  // SCHOOL CARDS
  // Little hover personality
  // =========================================================

  const schoolCards =
    document.querySelectorAll(
      ".school-card"
    );


  schoolCards.forEach((card) => {

    card.addEventListener(
      "mouseenter",
      () => {

        card.classList.add(
          "school-card-active"
        );

      }
    );


    card.addEventListener(
      "mouseleave",
      () => {

        card.classList.remove(
          "school-card-active"
        );

      }
    );

  });


  // =========================================================
  // RANDOM SLIGHT ROTATIONS
  // Makes papers feel less digitally perfect
  // =========================================================

  const messyItems =
    document.querySelectorAll(
      ".attempt-card, .messy-paper, .student-note"
    );


  messyItems.forEach(
    (item, index) => {

      const rotations = [
        -2.5,
        1.8,
        -1.2,
        2.4,
        -3,
        1.1
      ];


      const rotation =
        rotations[
          index %
          rotations.length
        ];


      item.style.setProperty(
        "--messy-rotation",
        `${rotation}deg`
      );

    }
  );


  // =========================================================
  // SCROLL REVEAL ANIMATIONS
  // =========================================================

  const revealTargets =
    document.querySelectorAll(
      `
      .school-card,
      .requirements article,
      .library-copy,
      .library-visual,
      .attempt-card
      `
    );


  revealTargets.forEach(
    (element) => {

      element.classList.add(
        "reveal"
      );

    }
  );


  if (
    "IntersectionObserver" in window &&
    !prefersReducedMotion
  ) {

    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (item) => {

              if (
                !item.isIntersecting
              ) {
                return;
              }


              item.target.classList.add(
                "visible"
              );


              observer.unobserve(
                item.target
              );

            }
          );

        },

        {
          threshold: 0.14,

          rootMargin:
            "0px 0px -35px"
        }

      );


    revealTargets.forEach(
      (element) => {

        observer.observe(
          element
        );

      }
    );

  }

  else {

    revealTargets.forEach(
      (element) => {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  // =========================================================
  // LIBRARY DOOR
  // =========================================================

  const libraryDoor =
    document.querySelector(
      ".library-door"
    );


  if (libraryDoor) {

    const libraryText =
      libraryDoor.querySelector(
        "[data-library-text]"
      );


    if (libraryText) {

      const originalText =
        libraryText.textContent;


      libraryDoor.addEventListener(
        "mouseenter",
        () => {

          libraryText.textContent =
            "Warning: you may accidentally lose three hours in here →";

        }
      );


      libraryDoor.addEventListener(
        "mouseleave",
        () => {

          libraryText.textContent =
            originalText;

        }
      );

    }

  }


  // =========================================================
  // CURSOR / MOUSE MOVEMENT
  // Very subtle movement for reception objects
  // =========================================================

  const floatingObjects =
    document.querySelectorAll(
      "[data-float]"
    );


  if (
    floatingObjects.length &&
    !prefersReducedMotion
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


        floatingObjects.forEach(
          (object, index) => {

            const strength =
              (index % 3 + 1) * 2;


            object.style.transform =
              `
              translate(
                ${x * strength}px,
                ${y * strength}px
              )
              `;

          }
        );

      }
    );

  }


  // =========================================================
  // SCHOOL DIRECTORY MESSAGE
  // =========================================================

  const directory =
    document.querySelector(
      ".school-directory"
    );


  if (directory) {

    directory.addEventListener(
      "mouseenter",
      () => {

        directory.classList.add(
          "being-explored"
        );

      }
    );


    directory.addEventListener(
      "mouseleave",
      () => {

        directory.classList.remove(
          "being-explored"
        );

      }
    );

  }


  // =========================================================
  // SECRET CONSOLE MESSAGE
  // Because curious people inspect things.
  // =========================================================

  console.log(
    "%cJIGYASA VERSE SCHOOL",
    `
    font-size:20px;
    font-weight:800;
    color:#6f4bb8;
    `
  );


  console.log(
    "Oh. You opened the console."
  );


  console.log(
    "That means you were curious enough to look behind the page."
  );


  console.log(
    "Admission requirement satisfied. ✓"
  );


  console.log(
    "Now go build something."
  );

})();
