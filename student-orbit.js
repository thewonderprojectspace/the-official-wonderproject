document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* =====================================================
       STORY EXPANSION
    ====================================================== */

    const storyButtons =
      document.querySelectorAll(
        ".story-toggle"
      );


    storyButtons.forEach(
      (button) => {

        button.dataset.original =
          button.textContent.trim();


        button.addEventListener(
          "click",
          () => {


            const card =
              button.closest(
                ".story-card"
              );


            const open =
              card.classList.toggle(
                "open"
              );


            button.textContent =
              open
                ? "Fold story back up ↑"
                : button.dataset.original;


          }
        );

      }
    );



    /* =====================================================
       BORROW A THOUGHT
    ====================================================== */

    const thoughtButtons =
      document.querySelectorAll(
        ".borrow-thought"
      );


    const chosenText =
      document.getElementById(
        "chosenThoughtText"
      );


    thoughtButtons.forEach(
      (button) => {


        button.addEventListener(
          "click",
          () => {


            thoughtButtons.forEach(
              (other) => {

                other.classList.remove(
                  "selected"
                );

              }
            );


            button.classList.add(
              "selected"
            );


            const thought =
              button.dataset.thought;


            if (
              chosenText &&
              thought
            ) {

              chosenText.textContent =
                thought;

            }


            /*
              Store locally so the student's
              chosen thought remains if they
              revisit the page.
            */

            localStorage.setItem(
              "student-orbit-thought",
              thought
            );

          }
        );

      }
    );



    /* =====================================================
       RESTORE SAVED THOUGHT
    ====================================================== */

    const savedThought =
      localStorage.getItem(
        "student-orbit-thought"
      );


    if (
      savedThought &&
      chosenText
    ) {

      chosenText.textContent =
        savedThought;


      thoughtButtons.forEach(
        (button) => {

          if (
            button.dataset.thought ===
            savedThought
          ) {

            button.classList.add(
              "selected"
            );

          }

        }
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


    if (
      form &&
      sent
    ) {


      form.addEventListener(
        "submit",
        async (event) => {


          event.preventDefault();


          const button =
            form.querySelector(
              ".post-story-button"
            );


          const originalButton =
            button.innerHTML;


          button.disabled = true;


          button.innerHTML =
            `
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

              Once this is deployed on Netlify,
              the submission should appear
              inside your Netlify Forms area.
            */

            const response =
              await fetch(
                "/",
                {

                  method: "POST",

                  headers: {

                    "Content-Type":
                      "application/x-www-form-urlencoded"

                  },

                  body: encoded

                }
              );


            if (!response.ok) {

              console.warn(
                "Submission could not be confirmed."
              );

            }


            showSentState();


          } catch (error) {


            /*
              Allows you to preview the
              animation locally even when
              Netlify isn't available.
            */

            console.warn(
              "Local preview:",
              error
            );


            showSentState();

          }


          function showSentState() {


            form.style.opacity = "0";


            form.style.transform =
              "translateY(20px)";


            setTimeout(
              () => {


                form.style.display =
                  "none";


                sent.classList.add(
                  "visible"
                );


                sent.scrollIntoView({

                  behavior: "smooth",

                  block: "center"

                });


              },
              250
            );

          }


          button.disabled = false;

          button.innerHTML =
            originalButton;


        }
      );

    }



    /* =====================================================
       SEND ANOTHER
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


          setTimeout(
            () => {

              form.style.opacity =
                "1";

              form.style.transform =
                "none";

            },
            40
          );


        }
      );

    }



    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealItems =
      document.querySelectorAll(
        ".reveal"
      );


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


                observer.unobserve(
                  entry.target
                );


              }

            }
          );


        },

        {

          threshold: 0.12

        }

      );


    revealItems.forEach(
      (item) => {

        observer.observe(item);

      }
    );


  }
);
