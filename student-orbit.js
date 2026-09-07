/* =========================================================
   STUDENT ORBIT
   JIGYASA VERSE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     STORY EXPANSION
  ====================================================== */

  const storyButtons =
    document.querySelectorAll(".story-toggle");

  storyButtons.forEach((button) => {

    button.dataset.original =
      button.textContent.trim();

    button.addEventListener("click", () => {

      const card =
        button.closest(".story-card");

      if (!card) return;

      const isOpen =
        card.classList.toggle("open");

      button.textContent =
        isOpen
          ? "Fold story back up ↑"
          : button.dataset.original;

    });

  });



  /* =====================================================
     BORROW A THOUGHT
  ====================================================== */

  const thoughtButtons =
    document.querySelectorAll(".borrow-thought");

  const chosenText =
    document.getElementById("chosenThoughtText");


  thoughtButtons.forEach((button) => {

    button.addEventListener("click", () => {

      thoughtButtons.forEach((other) => {
        other.classList.remove("selected");
      });

      button.classList.add("selected");

      const thought =
        button.dataset.thought;

      if (chosenText && thought) {
        chosenText.textContent = thought;
      }

      try {

        localStorage.setItem(
          "student-orbit-thought",
          thought
        );

      } catch (error) {

        console.warn(
          "Could not save thought locally:",
          error
        );

      }

    });

  });



  /* =====================================================
     RESTORE SAVED THOUGHT
  ====================================================== */

  try {

    const savedThought =
      localStorage.getItem(
        "student-orbit-thought"
      );

    if (savedThought && chosenText) {

      chosenText.textContent =
        savedThought;

      thoughtButtons.forEach((button) => {

        if (
          button.dataset.thought ===
          savedThought
        ) {

          button.classList.add(
            "selected"
          );

        }

      });

    }

  } catch (error) {

    console.warn(
      "Could not restore saved thought:",
      error
    );

  }



  /* =====================================================
     STUDENT STORY POSTCARD
  ====================================================== */

  const form =
    document.getElementById(
      "studentStoryForm"
    );

  const sent =
    document.getElementById(
      "storySent"
    );

  const sendAnother =
    document.getElementById(
      "sendAnother"
    );


  if (form && sent) {

    form.addEventListener(
      "submit",
      async (event) => {

        event.preventDefault();

        const submitButton =
          form.querySelector(
            ".post-story-button"
          );

        if (!submitButton) return;


        const originalButton =
          submitButton.innerHTML;


        submitButton.disabled = true;

        submitButton.innerHTML = `
          Sending...
          <span>✦</span>
        `;


        const formData =
          new FormData(form);


        try {

          const encoded =
            new URLSearchParams(
              formData
            ).toString();


          /*
            NETLIFY FORM SUBMISSION

            When hosted on Netlify,
            the form will submit here.
          */

          const response =
            await fetch("/", {

              method: "POST",

              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded"
              },

              body: encoded

            });


          if (!response.ok) {

            console.warn(
              "Netlify submission could not be confirmed."
            );

          }


          showSentState();


        } catch (error) {

          /*
            Useful while testing locally.

            The animation will still work even
            if the website isn't currently
            connected to Netlify.
          */

          console.warn(
            "Local preview / form error:",
            error
          );

          showSentState();

        }


        function showSentState() {

          form.style.transition =
            "opacity 250ms ease, transform 250ms ease";

          form.style.opacity = "0";

          form.style.transform =
            "translateY(20px)";


          setTimeout(() => {

            form.style.display =
              "none";

            sent.classList.add(
              "visible"
            );

            sent.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

          }, 250);

        }


        submitButton.disabled = false;

        submitButton.innerHTML =
          originalButton;

      }
    );

  }



  /* =====================================================
     SEND ANOTHER POSTCARD
  ====================================================== */

  if (
    sendAnother &&
    form &&
    sent
  ) {

    sendAnother.addEventListener(
      "click",
      () => {

        form.reset();

        sent.classList.remove(
          "visible"
        );

        form.style.display =
          "block";

        form.style.opacity =
          "0";

        form.style.transform =
          "translateY(15px)";


        requestAnimationFrame(() => {

          requestAnimationFrame(() => {

            form.style.opacity =
              "1";

            form.style.transform =
              "translateY(0)";

          });

        });


        form.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }
    );

  }



  /* =====================================================
     SAFE SCROLL REVEAL
     
     IMPORTANT:
     Elements are visible by default.

     JavaScript only hides them AFTER
     IntersectionObserver has successfully
     been created.

     This prevents the entire site from
     disappearing if JavaScript breaks.
  ====================================================== */

  const revealItems =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver"
    in window
  ) {

    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );

                entry.target.classList.remove(
                  "reveal-pending"
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },

        {
          threshold: 0.08,
          rootMargin:
            "0px 0px -20px 0px"
        }

      );


    revealItems.forEach(
      (item, index) => {

        /*
          Hero should never begin invisible,
          so elements already on screen are
          displayed immediately.
        */

        const rect =
          item.getBoundingClientRect();


        if (
          rect.top <
          window.innerHeight * 0.95
        ) {

          item.classList.add(
            "visible"
          );

        } else {

          item.classList.add(
            "reveal-pending"
          );

          /*
            Tiny stagger gives the cards
            a nicer entrance.
          */

          item.style.transitionDelay =
            `${Math.min(index * 35, 180)}ms`;

          observer.observe(item);

        }

      }
    );

  } else {

    /*
      Older browsers:
      show everything normally.
    */

    revealItems.forEach(
      (item) => {

        item.classList.add(
          "visible"
        );

      }
    );

  }



  /* =====================================================
     REDUCE MOTION ACCESSIBILITY
  ====================================================== */

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );


  if (prefersReducedMotion.matches) {

    revealItems.forEach(
      (item) => {

        item.classList.remove(
          "reveal-pending"
        );

        item.classList.add(
          "visible"
        );

        item.style.transition =
          "none";

      }
    );

  }

});
