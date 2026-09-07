document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     BLOG STORY EXPANSION
  ====================================================== */

  const storyButtons =
    document.querySelectorAll(".read-story");


  storyButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const card =
        button.closest(".blog-card");

      const isOpen =
        card.classList.contains("open");


      card.classList.toggle("open");


      if (isOpen) {

        const originalText =
          button.dataset.originalText;

        if (originalText) {
          button.textContent =
            originalText;
        }

      } else {

        if (!button.dataset.originalText) {

          button.dataset.originalText =
            button.textContent;

        }

        button.textContent =
          "Fold story back up ↑";
      }

    });

  });



  /* =====================================================
     POSTCARD SUBMISSION
  ====================================================== */

  const form =
    document.getElementById(
      "teacherPostcard"
    );

  const sentCard =
    document.getElementById(
      "postcardSent"
    );

  const sendAnother =
    document.getElementById(
      "sendAnother"
    );


  if (form && sentCard) {

    form.addEventListener(
      "submit",
      async (event) => {

        event.preventDefault();


        const submitButton =
          form.querySelector(
            ".post-button"
          );


        const originalButton =
          submitButton.innerHTML;


        submitButton.disabled = true;

        submitButton.innerHTML =
          "Sending into the constellation... ✦";


        const formData =
          new FormData(form);


        /*
          NETLIFY FORM SUBMISSION

          This works when the website is deployed
          through Netlify and Netlify Forms
          detects the HTML form.
        */

        try {

          const encoded =
            new URLSearchParams(
              formData
            ).toString();


          const response =
            await fetch("/", {

              method: "POST",

              headers: {

                "Content-Type":
                  "application/x-www-form-urlencoded"

              },

              body: encoded

            });


          /*
            Even if you're testing locally,
            we can still preview the
            postcard animation.

            On Netlify, response.ok
            confirms the actual form.
          */

          if (!response.ok) {

            console.warn(
              "Form submission could not be confirmed."
            );

          }


          showSentPostcard();


        } catch (error) {

          /*
            LOCAL DEVELOPMENT FALLBACK

            Netlify forms don't submit properly
            when simply opening the HTML file
            on your computer.

            We still show the postcard animation
            so you can test the design.
          */

          console.warn(
            "Local preview or network error:",
            error
          );


          showSentPostcard();

        }


        function showSentPostcard() {

          form.style.opacity = "0";

          form.style.transform =
            "translateY(40px) rotate(4deg)";


          setTimeout(() => {

            form.style.display = "none";

            sentCard.classList.add(
              "visible"
            );


            sentCard.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

          }, 280);

        }


        submitButton.disabled = false;

        submitButton.innerHTML =
          originalButton;

      }

    );

  }



  /* =====================================================
     SEND ANOTHER STORY
  ====================================================== */

  if (
    sendAnother &&
    form &&
    sentCard
  ) {

    sendAnother.addEventListener(
      "click",
      () => {

        form.reset();


        sentCard.classList.remove(
          "visible"
        );


        form.style.display = "grid";

        form.style.opacity = "0";

        form.style.transform =
          "translateY(30px) rotate(2deg)";


        setTimeout(() => {

          form.style.opacity = "1";

          form.style.transform =
            "rotate(0.7deg)";

        }, 50);


        form.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }

    );

  }



  /* =====================================================
     SCROLL REVEAL
  ====================================================== */

  const revealTargets =
    document.querySelectorAll(
      `
      .blog-card,
      .truth-item,
      .stories-intro,
      .middle-quote,
      .share-heading,
      .postcard-wrapper
      `
    );


  revealTargets.forEach(
    (element) => {

      element.classList.add(
        "reveal-item"
      );

    }
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


  revealTargets.forEach(
    (element) => {

      observer.observe(element);

    }
  );

});
