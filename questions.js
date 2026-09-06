(() => {

  "use strict";


  /* ========================================
     STORAGE
  ========================================= */

  const STORAGE_KEY =
    "jigyasa-questionarium-v2";


  const loadData = () => {

    try {

      return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      ) || {
        voices: [],
        audience: "",
        answers: [],
        finalWant: "",
        finalWhy: ""
      };

    } catch {

      return {
        voices: [],
        audience: "",
        answers: [],
        finalWant: "",
        finalWhy: ""
      };

    }

  };


  const saveData = () => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );

  };


  let data = loadData();



  /* ========================================
     NAV
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

  }



  /* ========================================
     REVEALS
  ========================================= */

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target
              .classList
              .add("visible");

            observer
              .unobserve(entry.target);

          }

        });

      },
      {
        threshold: .12
      }
    );


  document
    .querySelectorAll(".reveal")
    .forEach(item => {

      observer.observe(item);

    });



  /* ========================================
     VOICES
  ========================================= */

  const voiceButtons =
    document.querySelectorAll(
      "#voiceCloud button"
    );

  const voiceResult =
    document.getElementById(
      "voiceResult"
    );


  const updateVoices = () => {

    voiceButtons.forEach(button => {

      const selected =
        data.voices.includes(
          button.dataset.voice
        );

      button.classList.toggle(
        "active",
        selected
      );

    });


    if (data.voices.length) {

      voiceResult.innerHTML = `
        <small>VOICES YOU NOTICED</small>

        <p>
          ${data.voices.join(" · ")}
        </p>
      `;

    }

  };


  voiceButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const voice =
          button.dataset.voice;


        if (
          data.voices.includes(voice)
        ) {

          data.voices =
            data.voices.filter(
              item => item !== voice
            );

        } else {

          data.voices.push(voice);

        }


        saveData();

        updateVoices();

      }
    );

  });



  /* ========================================
     AUDIENCE ANSWER
  ========================================= */

  const audienceAnswer =
    document.getElementById(
      "audienceAnswer"
    );


  if (audienceAnswer) {

    audienceAnswer.value =
      data.audience || "";


    audienceAnswer.addEventListener(
      "input",
      () => {

        data.audience =
          audienceAnswer.value;

        saveData();

      }
    );

  }



  /* ========================================
     MOTIVE CARDS
  ========================================= */

  const motiveCards =
    document.querySelectorAll(
      ".motive-card"
    );

  const motiveResponse =
    document.getElementById(
      "motiveResponse"
    );


  motiveCards.forEach(card => {

    card.addEventListener(
      "click",
      () => {

        motiveCards.forEach(
          other => {

            other
              .classList
              .remove("active");

          }
        );


        card
          .classList
          .add("active");


        motiveResponse.textContent =
          card.dataset.message;

      }
    );

  });



  /* ========================================
     QUESTIONS
  ========================================= */

  const questions = [

    "If nobody could ever know you achieved it, would you still want it?",

    "Do you want the life itself—or the reaction you imagine people having to it?",

    "Who are you hoping will finally be impressed?",

    "Who are you secretly trying to prove wrong?",

    "If everyone you compare yourself with disappeared tomorrow, what would you choose?",

    "What would you pursue even if you were average at it for a very long time?",

    "Which dream did you inherit rather than choose?",

    "What are you afraid people would think if you changed direction?",

    "What are you maintaining because abandoning it would embarrass your past self?",

    "What part of your ambition comes from curiosity—and what part comes from insecurity?",

    "Which achievement do you imagine will finally make you feel like enough?",

    "If success brought no status at all, what kind of work would still interest you?",

    "What do you envy in other people—and what desire might that envy be revealing?",

    "What are you pretending not to know about your current life?",

    "What decision keeps returning when everything becomes quiet?",

    "If you trusted yourself completely for one day, what would you do differently?",

    "What would remain important if you stopped trying to look successful?",

    "What are you doing because you love it—and what are you doing because you love being seen doing it?",

    "What would your younger self recognise immediately as genuinely yours?",

    "If your life stayed exactly like this for five years, what would you regret not questioning today?"

  ];


  let currentQuestion = 0;


  const questionNumber =
    document.getElementById(
      "questionNumber"
    );

  const questionText =
    document.getElementById(
      "questionText"
    );

  const answerText =
    document.getElementById(
      "answerText"
    );

  const saveStatus =
    document.getElementById(
      "saveStatus"
    );


  const renderQuestion = () => {

    questionNumber.textContent =
      `QUESTION ${String(
        currentQuestion + 1
      ).padStart(2,"0")}`;


    questionText.textContent =
      questions[currentQuestion];


    const saved =
      data.answers.find(
        item =>
          item.question ===
          questions[currentQuestion]
      );


    answerText.value =
      saved
        ? saved.answer
        : "";


    saveStatus.textContent = "";

  };



  document
    .getElementById("nextQuestion")
    .addEventListener(
      "click",
      () => {

        currentQuestion =
          (
            currentQuestion + 1
          )
          %
          questions.length;

        renderQuestion();

      }
    );



  document
    .getElementById("previousQuestion")
    .addEventListener(
      "click",
      () => {

        currentQuestion =
          (
            currentQuestion -
            1 +
            questions.length
          )
          %
          questions.length;

        renderQuestion();

      }
    );



  document
    .getElementById("saveAnswer")
    .addEventListener(
      "click",
      () => {

        const answer =
          answerText.value.trim();


        if (!answer) {

          saveStatus.textContent =
            "Write something true first.";

          return;

        }


        const question =
          questions[currentQuestion];


        const existing =
          data.answers.find(
            item =>
              item.question ===
              question
          );


        if (existing) {

          existing.answer =
            answer;

        } else {

          data.answers.push({
            question,
            answer,
            date:
              new Date()
                .toLocaleDateString()
          });

        }


        saveData();

        renderSaved();


        saveStatus.textContent =
          "Kept.";

      }
    );



  /* ========================================
     MIRROR QUESTIONS
  ========================================= */

  document
    .querySelectorAll(
      ".mirror-prompt"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const selected =
            button.dataset.question;


          const index =
            questions.findIndex(
              question =>
                question === selected
            );


          if (index >= 0) {

            currentQuestion =
              index;

          } else {

            questions.unshift(
              selected
            );

            currentQuestion = 0;

          }


          renderQuestion();


          document
            .getElementById(
              "questionChamber"
            )
            .scrollIntoView({
              behavior: "smooth"
            });

        }
      );

    });



  /* ========================================
     FINAL ANSWER
  ========================================= */

  const finalForm =
    document.getElementById(
      "finalForm"
    );

  const finalAnswer =
    document.getElementById(
      "finalAnswer"
    );

  const whyAnswer =
    document.getElementById(
      "whyAnswer"
    );

  const finalResult =
    document.getElementById(
      "finalResult"
    );


  finalAnswer.value =
    data.finalWant || "";

  whyAnswer.value =
    data.finalWhy || "";


  finalForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      data.finalWant =
        finalAnswer
          .value
          .trim();

      data.finalWhy =
        whyAnswer
          .value
          .trim();


      saveData();


      finalResult.innerHTML = `
        You said you still want
        <strong>${escapeHTML(
          data.finalWant
        )}</strong>
        because
        <strong>${escapeHTML(
          data.finalWhy
        )}</strong>.
        <br><br>
        Keep checking whether that remains true.
      `;

    }
  );



  /* ========================================
     SAVED
  ========================================= */

  const savedList =
    document.getElementById(
      "savedList"
    );


  function escapeHTML(value) {

    const div =
      document.createElement("div");

    div.textContent = value;

    return div.innerHTML;

  }


  function renderSaved() {

    savedList.innerHTML = "";


    if (!data.answers.length) {

      savedList.innerHTML = `
        <div class="saved-answer">
          <small>NOTHING HERE YET</small>
          <strong>
            Some questions need silence before they need an answer.
          </strong>
        </div>
      `;

      return;

    }


    [...data.answers]
      .reverse()
      .forEach(item => {

        const article =
          document.createElement(
            "article"
          );


        article.className =
          "saved-answer";


        article.innerHTML = `
          <small>
            ${escapeHTML(item.date)}
          </small>

          <strong>
            ${escapeHTML(item.question)}
          </strong>

          <p>
            ${escapeHTML(item.answer)}
          </p>
        `;


        savedList
          .appendChild(article);

      });

  }



  /* ========================================
     FIRST RENDER
  ========================================= */

  updateVoices();

  renderQuestion();

  renderSaved();

})();
