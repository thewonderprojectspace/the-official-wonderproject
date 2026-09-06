(() => {
  "use strict";


  /* =========================================
     STORAGE
  ========================================= */

  const STORAGE_KEY = "jigyasa-moon-beginnings-v2";


  const getData = () => {
    try {

      return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      ) || {
        goal: "",
        move: "",
        minutes: 5,
        returns: []
      };

    } catch {

      return {
        goal: "",
        move: "",
        minutes: 5,
        returns: []
      };

    }
  };


  const saveData = (data) => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );

  };


  let data = getData();



  /* =========================================
     MOBILE NAV
  ========================================= */

  const menuButton =
    document.getElementById("menuButton");

  const navLinks =
    document.getElementById("navLinks");


  if (menuButton && navLinks) {

    menuButton.addEventListener(
      "click",
      () => {

        const open =
          navLinks.classList.toggle("open");

        menuButton.setAttribute(
          "aria-expanded",
          String(open)
        );

      }
    );


    navLinks
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            navLinks.classList.remove("open");

            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      });

  }



  /* =========================================
     REVEAL ON SCROLL
  ========================================= */

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

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

        });

      },
      {
        threshold: 0.12
      }
    );


  document
    .querySelectorAll(".reveal")
    .forEach(element => {

      revealObserver
        .observe(element);

    });



  /* =========================================
     HONESTY CARDS
  ========================================= */

  const honestyCards =
    document.querySelectorAll(
      ".honesty-card"
    );

  const honestyResponse =
    document.getElementById(
      "honestyResponse"
    );


  honestyCards.forEach(card => {

    card.addEventListener(
      "click",
      () => {

        honestyCards
          .forEach(other => {

            other
              .classList
              .remove("active");

          });


        card
          .classList
          .add("active");


        const response =
          card.dataset.response;


        honestyResponse.innerHTML = `
          <span>GOOD. NOW WE KNOW.</span>
          <p>${response}</p>
        `;

      }
    );

  });



  /* =========================================
     FLIP EXCUSE CARDS
  ========================================= */

  document
    .querySelectorAll(".flip-card")
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          card
            .classList
            .toggle("flipped");

        }
      );

    });



  /* =========================================
     START FORM
  ========================================= */

  const startForm =
    document.getElementById(
      "startForm"
    );

  const bigThing =
    document.getElementById(
      "bigThing"
    );

  const smallMove =
    document.getElementById(
      "smallMove"
    );


  const activeBig =
    document.getElementById(
      "activeBig"
    );

  const activeMove =
    document.getElementById(
      "activeMove"
    );

  const activeSection =
    document.getElementById(
      "activeSection"
    );

  const timerDisplay =
    document.getElementById(
      "timerDisplay"
    );

  const timerButton =
    document.getElementById(
      "timerButton"
    );

  const doneButton =
    document.getElementById(
      "doneButton"
    );



  /* =========================================
     TIMER
  ========================================= */

  let timerInterval = null;

  let remainingSeconds =
    data.minutes * 60;


  const formatTime =
    seconds => {

      const minutes =
        Math.floor(
          seconds / 60
        );

      const secs =
        seconds % 60;


      return (
        String(minutes)
          .padStart(2, "0")
        +
        ":"
        +
        String(secs)
          .padStart(2, "0")
      );

    };


  const updateTimerDisplay =
    () => {

      timerDisplay.textContent =
        formatTime(
          remainingSeconds
        );

    };


  const resetTimer =
    () => {

      if (timerInterval) {

        clearInterval(
          timerInterval
        );

      }


      timerInterval = null;

      remainingSeconds =
        data.minutes * 60;


      updateTimerDisplay();


      timerButton.textContent =
        "START TIMER";

    };



  /* =========================================
     RENDER CURRENT GOAL
  ========================================= */

  const renderGoal =
    () => {

      if (
        data.goal &&
        data.move
      ) {

        activeBig.textContent =
          data.goal;

        activeMove.textContent =
          data.move;


        bigThing.value =
          data.goal;

        smallMove.value =
          data.move;


        const radio =
          document.querySelector(
            `input[name="minutes"][value="${data.minutes}"]`
          );


        if (radio) {
          radio.checked = true;
        }


        timerButton.disabled =
          false;

        doneButton.disabled =
          false;

      } else {

        activeBig.textContent =
          "Nothing yet.";

        activeMove.textContent =
          "Give yourself one real action.";


        timerButton.disabled =
          true;

        doneButton.disabled =
          true;

      }


      remainingSeconds =
        data.minutes * 60;


      updateTimerDisplay();

    };



  /* =========================================
     SUBMIT START
  ========================================= */

  if (startForm) {

    startForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const selectedTime =
          document.querySelector(
            'input[name="minutes"]:checked'
          );


        data.goal =
          bigThing.value.trim();

        data.move =
          smallMove.value.trim();

        data.minutes =
          Number(
            selectedTime
              ? selectedTime.value
              : 5
          );


        saveData(data);

        renderGoal();

        resetTimer();


        activeSection
          .scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

      }
    );

  }



  /* =========================================
     TIMER BUTTON
  ========================================= */

  if (timerButton) {

    timerButton.addEventListener(
      "click",
      () => {

        if (timerInterval) {

          clearInterval(
            timerInterval
          );

          timerInterval = null;

          timerButton.textContent =
            "CONTINUE TIMER";

          return;

        }


        timerButton.textContent =
          "PAUSE";


        timerInterval =
          setInterval(
            () => {

              remainingSeconds--;


              updateTimerDisplay();


              if (
                remainingSeconds <= 0
              ) {

                clearInterval(
                  timerInterval
                );

                timerInterval =
                  null;


                remainingSeconds =
                  0;


                updateTimerDisplay();


                timerButton.textContent =
                  "TIME'S UP ✓";


                document.title =
                  "Time's up — Moon of Beginnings";

              }

            },
            1000
          );

      }
    );

  }



  /* =========================================
     RETURN TRACKING
  ========================================= */

  const returnCount =
    document.getElementById(
      "returnCount"
    );

  const returnMarks =
    document.getElementById(
      "returnMarks"
    );


  const todayKey =
    () => {

      const date =
        new Date();


      return [
        date.getFullYear(),

        String(
          date.getMonth() + 1
        ).padStart(2, "0"),

        String(
          date.getDate()
        ).padStart(2, "0")

      ].join("-");

    };


  const renderReturns =
    () => {

      returnCount.textContent =
        data.returns.length;


      returnMarks.innerHTML =
        "";


      if (
        data.returns.length === 0
      ) {

        const empty =
          document.createElement(
            "p"
          );

        empty.textContent =
          "Your first mark is waiting.";

        empty.style.opacity =
          ".55";

        returnMarks
          .appendChild(
            empty
          );

        return;

      }


      data.returns.forEach(
        (date, index) => {

          const mark =
            document.createElement(
              "span"
            );

          mark.className =
            "return-mark";

          mark.textContent =
            index + 1;

          mark.title =
            date;


          returnMarks
            .appendChild(
              mark
            );

        }
      );

    };



  /* =========================================
     I DID THE THING
  ========================================= */

  if (doneButton) {

    doneButton.addEventListener(
      "click",
      () => {

        const today =
          todayKey();


        if (
          !data.returns.includes(
            today
          )
        ) {

          data.returns.push(
            today
          );


          saveData(data);

          renderReturns();


          doneButton.textContent =
            "YOU SHOWED UP ✓";

        } else {

          doneButton.textContent =
            "TODAY ALREADY COUNTS ✓";

        }

      }
    );

  }



  /* =========================================
     RESET CURRENT START
  ========================================= */

  const resetStart =
    document.getElementById(
      "resetStart"
    );


  if (resetStart) {

    resetStart.addEventListener(
      "click",
      () => {

        data.goal = "";
        data.move = "";
        data.minutes = 5;


        saveData(data);


        bigThing.value =
          "";

        smallMove.value =
          "";


        const five =
          document.querySelector(
            'input[name="minutes"][value="5"]'
          );


        if (five) {
          five.checked = true;
        }


        resetTimer();

        renderGoal();

      }
    );

  }



  /* =========================================
     INITIAL RENDER
  ========================================= */

  renderGoal();

  renderReturns();

})();
