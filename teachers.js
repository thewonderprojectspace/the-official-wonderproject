(() => {
  "use strict";

  /* =========================================================
     TEACHER CONSTELLATION
     Wonder Verse

     Handles:
     - Private teacher reflections
     - Local storage
     - Workshop selection
     - Smooth form handoff
     - Scroll reveal animations
  ========================================================= */

  const STORAGE_KEY = "wonder-verse-teacher-constellation-v2";


  /* =========================================================
     STATE
  ========================================================= */

  let state = {
    reflections: {}
  };


  /* =========================================================
     LOAD PREVIOUS PRIVATE REFLECTIONS
  ========================================================= */

  try {

    const savedState = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

    state = {
      ...state,
      ...savedState
    };

  } catch (error) {

    console.warn(
      "Teacher Constellation reflections could not be restored.",
      error
    );

  }


  /* =========================================================
     PRIVATE REFLECTION STORAGE
  ========================================================= */

  const reflectionStatus =
    document.getElementById("reflectionStatus");

  let saveTimer;


  function saveReflections() {

    clearTimeout(saveTimer);


    if (reflectionStatus) {

      reflectionStatus.textContent =
        "Saving your private check-in…";

    }


    saveTimer = setTimeout(() => {

      try {

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(state)
        );


        if (reflectionStatus) {

          reflectionStatus.textContent =
            "Saved privately on this device.";

        }

      } catch (error) {

        console.warn(
          "Teacher Constellation could not save reflections.",
          error
        );


        if (reflectionStatus) {

          reflectionStatus.textContent =
            "Your browser could not save this reflection.";

        }

      }

    }, 250);

  }


  /* =========================================================
     RESTORE REFLECTION TEXTAREAS
  ========================================================= */

  const reflectionFields =
    document.querySelectorAll("[data-reflection]");


  reflectionFields.forEach(field => {

    const key =
      field.dataset.reflection;


    /* Restore saved answer */

    if (
      state.reflections &&
      state.reflections[key]
    ) {

      field.value =
        state.reflections[key];

    }


    /* Save as teacher types */

    field.addEventListener(
      "input",
      () => {

        state.reflections[key] =
          field.value;

        saveReflections();

      }
    );

  });


  /* =========================================================
     RESTORE STATUS MESSAGE
  ========================================================= */

  const hasSavedReflections =
    Object.values(
      state.reflections || {}
    ).some(
      value =>
        String(value).trim().length > 0
    );


  if (
    hasSavedReflections &&
    reflectionStatus
  ) {

    reflectionStatus.textContent =
      "Your previous private check-in has been restored from this device.";

  }


  /* =========================================================
     WORKSHOP BUTTONS

     When someone clicks:
     "Suggest a question"

     the relevant workshop checkbox is automatically selected.
  ========================================================= */

  const workshopLinks =
    document.querySelectorAll(
      "[data-workshop-link]"
    );


  const interestCheckboxes =
    [
      ...document.querySelectorAll(
        'input[name="interests"]'
      )
    ];


  const workshopQuestion =
    document.getElementById(
      "workshop-question"
    );


  workshopLinks.forEach(link => {

    link.addEventListener(
      "click",
      () => {

        const requestedInterest =
          link.dataset.workshopLink;


        /* Find matching checkbox */

        const matchingCheckbox =
          interestCheckboxes.find(
            checkbox =>
              checkbox.value ===
              requestedInterest
          );


        /* Select it */

        if (matchingCheckbox) {

          matchingCheckbox.checked = true;

        }


        /* Focus question after scrolling */

        window.setTimeout(
          () => {

            if (workshopQuestion) {

              workshopQuestion.focus();

            }

          },
          450
        );

      }
    );

  });


  /* =========================================================
     SCROLL REVEAL ANIMATIONS
  ========================================================= */

  const revealItems =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );


                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.1,
          rootMargin:
            "0px 0px -30px 0px"
        }
      );


    revealItems.forEach(
      item => {

        revealObserver.observe(
          item
        );

      }
    );

  } else {

    /*
      Fallback for older browsers.
      Everything simply appears.
    */

    revealItems.forEach(
      item => {

        item.classList.add(
          "visible"
        );

      }
    );

  }


  /* =========================================================
     SMOOTH INTERNAL LINKS
  ========================================================= */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetID =
            link.getAttribute("href");


          if (
            !targetID ||
            targetID === "#"
          ) {

            return;

          }


          const target =
            document.querySelector(
              targetID
            );


          if (!target) {

            return;

          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });


          /*
            Update URL without jumping.
          */

          try {

            history.pushState(
              null,
              "",
              targetID
            );

          } catch (error) {

            /* No action needed */

          }

      });

    });


  /* =========================================================
     FORM QUALITY CHECK
  ========================================================= */

  const teacherForm =
    document.querySelector(
      'form[name="teacher-workshop-interest"]'
    );


  if (teacherForm) {

    teacherForm.addEventListener(
      "submit",
      event => {

        /*
          Browser handles required fields.

          This additional check simply makes sure
          the workshop question is not just spaces.
        */

        if (workshopQuestion) {

          const question =
            workshopQuestion.value.trim();


          if (!question) {

            event.preventDefault();

            workshopQuestion.focus();

            workshopQuestion.setCustomValidity(
              "Please share a question you would like the workshop to explore."
            );


            workshopQuestion.reportValidity();

            return;

          }


          workshopQuestion.setCustomValidity(
            ""
          );

        }

      }
    );


    /*
      Remove custom validation warning
      as soon as they begin typing again.
    */

    if (workshopQuestion) {

      workshopQuestion.addEventListener(
        "input",
        () => {

          workshopQuestion.setCustomValidity(
            ""
          );

        }
      );

    }

  }


  /* =========================================================
     LITTLE SUN INTERACTION

     Very subtle — clicking the hero sun changes
     its note.

     This is intentionally not an emoji-heavy
     animation or game.
  ========================================================= */

  const sunDisc =
    document.querySelector(
      ".sun-disc"
    );


  if (sunDisc) {

    const originalText =
      sunDisc.textContent.trim();


    const gentleNotes = [

      "You do not have to solve everything before tomorrow morning.",

      "A difficult lesson is data, not a verdict.",

      "The quiet wins count too.",

      "You are allowed to still be learning.",

      "Not everything needs to become a resource by Monday.",

      "Some days, getting through the day was the work.",

      "You can care deeply without carrying everything.",

      "The person teaching the lesson matters too."

    ];


    let noteIndex = 0;


    sunDisc.setAttribute(
      "role",
      "button"
    );


    sunDisc.setAttribute(
      "tabindex",
      "0"
    );


    sunDisc.setAttribute(
      "aria-label",
      "Show another teacher reminder"
    );


    function changeSunNote() {

      noteIndex =
        (noteIndex + 1) %
        gentleNotes.length;


      sunDisc.style.opacity =
        "0.65";


      window.setTimeout(
        () => {

          sunDisc.textContent =
            gentleNotes[noteIndex];


          sunDisc.style.opacity =
            "1";

        },
        120
      );

    }


    sunDisc.addEventListener(
      "click",
      changeSunNote
    );


    sunDisc.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          changeSunNote();

        }

      }
    );

  }


  /* =========================================================
     CHECK-IN CARD ACTIVE STATE

     Gives the reflection card a small visual response
     when the teacher begins writing.
  ========================================================= */

  reflectionFields.forEach(
    field => {

      const card =
        field.closest(
          ".checkin-card"
        );


      if (!card) return;


      function updateCardState() {

        if (
          field.value.trim()
        ) {

          card.classList.add(
            "has-reflection"
          );

        } else {

          card.classList.remove(
            "has-reflection"
          );

        }

      }


      updateCardState();


      field.addEventListener(
        "input",
        updateCardState
      );

    }
  );


  /* =========================================================
     PAGE READY
  ========================================================= */

  document.documentElement.classList.add(
    "teacher-constellation-ready"
  );

})();
