(() => {
  "use strict";


  /* ==========================================================
     SELECT ELEMENTS
  ========================================================== */

  const header =
    document.querySelector("#siteHeader");

  const menuButton =
    document.querySelector("#menuButton");

  const siteNav =
    document.querySelector("#siteNav");

  const canvas =
    document.querySelector("#starCanvas");

  const questionButton =
    document.querySelector("#questionButton");

  const questionOutput =
    document.querySelector("#questionOutput");

  const newFinalQuestion =
    document.querySelector("#newFinalQuestion");

  const finalQuestion =
    document.querySelector("#finalQuestion");

  const mysteryButton =
    document.querySelector("#mysteryButton");

  const mysteryPopup =
    document.querySelector("#mysteryPopup");

  const closeMystery =
    document.querySelector("#closeMystery");


  /* ==========================================================
     HEADER
  ========================================================== */

  function updateHeader() {

    if (!header) {
      return;
    }

    header.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );

  }


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );


  updateHeader();


  /* ==========================================================
     MOBILE MENU
  ========================================================== */

  if (menuButton && siteNav) {

    menuButton.addEventListener(
      "click",
      () => {

        const isOpen =
          siteNav.classList.toggle("open");

        menuButton.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

      }
    );


    siteNav
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener(
          "click",
          () => {

            siteNav.classList.remove("open");

            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      });

  }


  /* ==========================================================
     STAR FIELD
  ========================================================== */

  if (canvas) {

    const ctx =
      canvas.getContext("2d");

    let width = 0;
    let height = 0;

    let stars = [];

    const STAR_COUNT = 150;


    function resizeCanvas() {

      const ratio =
        Math.min(
          window.devicePixelRatio || 1,
          2
        );

      width =
        window.innerWidth;

      height =
        window.innerHeight;

      canvas.width =
        width * ratio;

      canvas.height =
        height * ratio;

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
      );

      createStars();

    }


    function createStars() {

      stars =
        Array.from(
          {
            length: STAR_COUNT
          },
          () => ({
            x:
              Math.random() * width,

            y:
              Math.random() * height,

            radius:
              Math.random() * 1.4 + 0.2,

            opacity:
              Math.random() * 0.7 + 0.15,

            speed:
              Math.random() * 0.004 + 0.001,

            phase:
              Math.random() * Math.PI * 2
          })
        );

    }


    function drawStars(time = 0) {

      ctx.clearRect(
        0,
        0,
        width,
        height
      );


      stars.forEach((star) => {

        const pulse =
          Math.sin(
            time * star.speed +
            star.phase
          );

        const opacity =
          Math.max(
            0.08,
            star.opacity +
            pulse * 0.18
          );


        ctx.beginPath();

        ctx.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(255, 244, 220, ${opacity})`;

        ctx.fill();

      });


      requestAnimationFrame(drawStars);

    }


    window.addEventListener(
      "resize",
      resizeCanvas
    );


    resizeCanvas();

    requestAnimationFrame(drawStars);

  }


  /* ==========================================================
     SCROLL REVEALS
  ========================================================== */

  const revealElements =
    document.querySelectorAll(".reveal");


  if (
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target
              .classList
              .add("visible");

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

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element
          .classList
          .add("visible");

      }
    );

  }


  /* ==========================================================
     WONDER QUESTIONS
  ========================================================== */

  const wonderQuestions = [

    "When was the last time you changed your mind about something important?",

    "Why do humans care so much about what strangers think of them?",

    "What would you attempt if the first version were allowed to be terrible?",

    "What ordinary thing around you would look extraordinary to someone from 500 years ago?",

    "Who were you before you started trying to impress anybody?",

    "What is something everybody seems to accept that you still don't understand?",

    "If nobody could see the result, what would you still want to make?",

    "What question did you ask constantly as a child that you stopped asking?",

    "Why do some memories stay while entire years disappear?",

    "If you could become a beginner at something tomorrow, what would you choose?",

    "What have you been calling failure that might actually just be an unfinished attempt?",

    "What would your twelve-year-old self find completely unbelievable about your life now?",

    "Why do humans decorate spaces they know they will eventually leave?",

    "What is something you believe only because somebody told you it was normal?",

    "If your life had no audience, what would you do differently?",

    "What have you walked past a hundred times without actually noticing?",

    "Which version of yourself are you still trying to prove something to?",

    "What would happen if you stopped trying to become impressive and became interested instead?",

    "Why do we remember embarrassing moments at 2am but forget where we left our keys?",

    "What deserves one brave hour from you today?",

    "What would you investigate if nobody asked whether it was useful?",

    "Which question would you rather live with than immediately answer?",

    "What is one thing you are completely wrong about right now — without knowing it?",

    "What have humans invented that would be impossible to explain to a confused pigeon?",

    "If curiosity had a physical shape, what would yours look like?"

  ];


  let previousQuestion = -1;


  function getRandomQuestion() {

    if (
      wonderQuestions.length === 0
    ) {
      return "";
    }


    let index;


    do {

      index =
        Math.floor(
          Math.random() *
          wonderQuestions.length
        );

    } while (
      index === previousQuestion &&
      wonderQuestions.length > 1
    );


    previousQuestion =
      index;


    return wonderQuestions[index];

  }


  /* ==========================================================
     WONDER MACHINE
  ========================================================== */

  if (
    questionButton &&
    questionOutput
  ) {

    questionButton.addEventListener(
      "click",
      () => {

        questionOutput.classList.remove(
          "question-arrived"
        );


        const question =
          getRandomQuestion();


        questionOutput.innerHTML =
          `<span>${question}</span>`;


        requestAnimationFrame(
          () => {

            questionOutput.classList.add(
              "question-arrived"
            );

          }
        );

      }
    );

  }


  /* ==========================================================
     FINAL QUESTION
  ========================================================== */

  if (
    newFinalQuestion &&
    finalQuestion
  ) {

    newFinalQuestion.addEventListener(
      "click",
      () => {

        finalQuestion.style.opacity =
          "0";


        window.setTimeout(
          () => {

            finalQuestion.textContent =
              getRandomQuestion();

            finalQuestion.style.opacity =
              "1";

          },
          180
        );

      }
    );

  }


  /* ==========================================================
     MYSTERY BUTTON
  ========================================================== */

  function openMystery() {

    if (!mysteryPopup) {
      return;
    }

    mysteryPopup
      .classList
      .add("open");

    mysteryPopup.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  function closeMysteryPopup() {

    if (!mysteryPopup) {
      return;
    }

    mysteryPopup
      .classList
      .remove("open");

    mysteryPopup.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  if (mysteryButton) {

    mysteryButton.addEventListener(
      "click",
      openMystery
    );

  }


  if (closeMystery) {

    closeMystery.addEventListener(
      "click",
      closeMysteryPopup
    );

  }


  if (mysteryPopup) {

    mysteryPopup.addEventListener(
      "click",
      (event) => {

        if (
          event.target ===
          mysteryPopup
        ) {

          closeMysteryPopup();

        }

      }
    );

  }


  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {

        closeMysteryPopup();

      }

    }
  );


  /* ==========================================================
     LITTLE PAPER MOVEMENT
  ========================================================== */

  const paper =
    document.querySelector(".paper-main");


  if (
    paper &&
    window.matchMedia(
      "(pointer: fine)"
    ).matches
  ) {

    paper.addEventListener(
      "mousemove",
      (event) => {

        const rect =
          paper.getBoundingClientRect();


        const x =
          (
            event.clientX -
            rect.left
          ) /
          rect.width;


        const y =
          (
            event.clientY -
            rect.top
          ) /
          rect.height;


        const rotateX =
          (0.5 - y) * 1.2;


        const rotateY =
          (x - 0.5) * 1.2;


        paper.style.transform =
          `
            rotate(-1deg)
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
          `;

      }
    );


    paper.addEventListener(
      "mouseleave",
      () => {

        paper.style.transform =
          "rotate(-1deg)";

      }
    );

  }


  /* ==========================================================
     RANDOM FALLING SCRAP PARALLAX
  ========================================================== */

  const fallScraps =
    document.querySelectorAll(
      ".falling-scraps span"
    );


  function updateFallScraps() {

    const scroll =
      window.scrollY;


    fallScraps.forEach(
      (scrap, index) => {

        const direction =
          index % 2 === 0
            ? 1
            : -1;


        const movement =
          scroll *
          0.018 *
          (index + 1);


        scrap.style.translate =
          `0 ${movement * direction}px`;

      }
    );

  }


  window.addEventListener(
    "scroll",
    updateFallScraps,
    {
      passive: true
    }
  );


  /* ==========================================================
     CONSOLE MESSAGE
  ========================================================== */

  console.log(
    "%cYou opened the console.",
    "font-size:18px; font-weight:bold;"
  );

  console.log(
    "%cCurious human detected.",
    "font-size:14px;"
  );

  console.log(
    "%cThere is nothing useful hidden here. Probably.",
    "font-size:12px; font-style:italic;"
  );

})();
