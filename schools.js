(() => {
  // ==================================================
  // JIGYASA VERSE SCHOOL ENTRY
  // ==================================================

  const entryScreen = document.querySelector("#schoolEntry");
  const enterButton = document.querySelector("#enterSchoolBtn");
  const reception = document.querySelector("#receptionScene");
  const nav = document.querySelector(".reception-nav");

  let entering = false;


  // ==================================================
  // ENTER THE SCHOOL
  // ==================================================

  function startSchoolEntry() {
    if (!entryScreen || entering) return;

    entering = true;

    if (enterButton) {
      enterButton.disabled = true;
      enterButton.textContent = "Doors opening...";
    }


    // ----------------------------------
    // STEP 1:
    // Automatic glass doors slide open
    // ----------------------------------

    entryScreen.classList.add("doors-open");


    // ----------------------------------
    // STEP 2:
    // Zoom toward / through the doorway
    // ----------------------------------

    window.setTimeout(() => {
      entryScreen.classList.add("entering");
    }, 1400);


    // ----------------------------------
    // STEP 3:
    // Remove entrance and show reception
    // ----------------------------------

    window.setTimeout(() => {
      entryScreen.style.display = "none";

      if (reception) {
        reception.scrollIntoView({
          behavior: "auto",
          block: "start"
        });
      }
    }, 2900);
  }


  // Main entrance button
  if (enterButton) {
    enterButton.addEventListener("click", startSchoolEntry);
  }


  // ==================================================
  // NAVBAR
  // ==================================================

  function updateNav() {
    if (!nav) return;

    nav.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );
  }

  updateNav();

  window.addEventListener(
    "scroll",
    updateNav,
    { passive: true }
  );


  // ==================================================
  // RECEPTIONIST SPEECH
  // ==================================================

  const speech = document.querySelector("[data-speech]");

  const messages = [
    [
      "Hi! Welcome to <strong>Jigyasa Verse Schools.</strong>",
      "Which school would you like to wander into today?"
    ],

    [
      "No admission interview, promise.",
      "The only requirement is that you're willing to learn something."
    ],

    [
      "See those messy things on the wall?",
      "Those are some of our favourite pieces of work."
    ],

    [
      "That maths answer over there is wrong.",
      "The student tried again. That's why we kept it."
    ],

    [
      "The experiment beside it completely failed.",
      "It also taught us something. So up on the wall it went."
    ],

    [
      "You don't have to already be good at something to enter.",
      "<strong>Curiosity gets you through the door.</strong>"
    ],

    [
      "The library is just around reception.",
      "Open one book. Or seven. We don't keep score."
    ],

    [
      "Still deciding?",
      "Choose the school that makes you want to ask one more question."
    ]
  ];

  let messageIndex = 0;


  function swapSpeech() {
    if (!speech) return;

    messageIndex =
      (messageIndex + 1) % messages.length;

    const [firstLine, secondLine] =
      messages[messageIndex];

    speech.innerHTML = `
      <p>${firstLine}</p>
      <p>${secondLine}</p>
      <span class="speech-tip"></span>
    `;
  }


  if (speech) {
    window.setInterval(
      swapSpeech,
      8500
    );
  }


  // ==================================================
  // MESSY STUDENT WORK
  // ==================================================

  const messyPapers =
    document.querySelectorAll(".messy-paper, .messy-work");

  messyPapers.forEach((paper, index) => {
    const rotations = [
      "-5deg",
      "4deg",
      "-2deg",
      "6deg"
    ];

    paper.addEventListener(
      "mouseenter",
      () => {
        paper.style.transform =
          `rotate(${rotations[index % rotations.length]}) scale(1.04)`;

        paper.style.zIndex = "10";
      }
    );


    paper.addEventListener(
      "mouseleave",
      () => {
        paper.style.transform = "";
        paper.style.zIndex = "";
      }
    );
  });


  // ==================================================
  // SCHOOL LINKS
  // ==================================================

  const schoolLinks =
    document.querySelectorAll(
      ".school-frame, .school-direction-wall a"
    );

  schoolLinks.forEach((link) => {
    link.addEventListener(
      "mouseenter",
      () => {
        link.classList.add("school-frame-active");
      }
    );

    link.addEventListener(
      "mouseleave",
      () => {
        link.classList.remove("school-frame-active");
      }
    );
  });


  // ==================================================
  // LIBRARY
  // ==================================================

  const libraryDoor =
    document.querySelector(".library-door");

  if (libraryDoor) {
    const libraryText =
      libraryDoor.querySelector("p");

    const originalText =
      libraryText
        ? libraryText.textContent
        : "";

    libraryDoor.addEventListener(
      "mouseenter",
      () => {
        if (libraryText) {
          libraryText.textContent =
            "Careful. You may accidentally learn something →";
        }
      }
    );

    libraryDoor.addEventListener(
      "mouseleave",
      () => {
        if (libraryText) {
          libraryText.textContent =
            originalText;
        }
      }
    );
  }


  // ==================================================
  // SCROLL REVEALS
  // ==================================================

  const revealElements =
    document.querySelectorAll(
      ".school-frame, .messy-paper, .messy-work, .requirements article"
    );


  if ("IntersectionObserver" in window) {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            observer.unobserve(
              entry.target
            );
          });
        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      (element) => {
        observer.observe(element);
      }
    );

  } else {
    revealElements.forEach(
      (element) => {
        element.classList.add("visible");
      }
    );
  }


  // ==================================================
  // CONSOLE MESSAGE
  // ==================================================

  console.log(
    "%cWelcome to Jigyasa Verse Schools ✏️",
    "font-size:18px; font-weight:bold; color:#6540a7;"
  );

  console.log(
    "Admission requirement: willingness to learn, explore and make mistakes."
  );

})();
