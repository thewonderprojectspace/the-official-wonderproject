(() => {
  "use strict";

  /* =========================================================
     BOOKS / STORYVERSE
     Wonder Verse

     Handles:
     - Scroll reveal animations
     - Smooth internal links
     - Interactive editorial poster
  ========================================================= */


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  const revealItems =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.1,
          rootMargin:
            "0px 0px -30px 0px"
        }
      );


    revealItems.forEach(item => {

      observer.observe(item);

    });


  } else {

    /*
      Fallback for older browsers
    */

    revealItems.forEach(item => {

      item.classList.add(
        "visible"
      );

    });

  }


  /* =========================================================
     SMOOTH INTERNAL LINKS
  ========================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const id =
            link.getAttribute("href");


          if (
            !id ||
            id === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(id);


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });


          /*
            Update URL without
            causing another jump
          */

          try {

            history.pushState(
              null,
              "",
              id
            );

          } catch (error) {

            /*
              Nothing needed here.
            */

          }

        }
      );

    });


  /* =========================================================
     INTERACTIVE HERO POSTER
  ========================================================= */

  const poster =
    document.querySelector(
      ".poster-main"
    );


  if (poster) {

    /*
      Each array represents one
      version of the poster text.
    */

    const messages = [

      [
        "READ",
        "LIKE",
        "YOU",
        "MEAN IT."
      ],

      [
        "ONE",
        "MORE",
        "CHAPTER",
        "APPARENTLY."
      ],

      [
        "PAPER",
        "HAS",
        "NO",
        "NOTIFICATIONS."
      ],

      [
        "UNDERLINE",
        "THINGS",
        "WITH",
        "CONFIDENCE."
      ],

      [
        "THE",
        "ALGORITHM",
        "CAN",
        "WAIT."
      ],

      [
        "SCROLL",
        "LATER.",
        "READ",
        "NOW."
      ],

      [
        "YES.",
        "PEOPLE",
        "STILL",
        "READ."
      ],

      [
        "BOOKS.",
        "VERY",
        "RETRO.",
        "VERY COOL."
      ]

    ];


    let index = 0;


    const posterText =
      poster.querySelector("strong");


    function changePoster() {

      index =
        (index + 1) %
        messages.length;


      if (!posterText) {
        return;
      }


      /*
        Tiny fade while changing text.
      */

      poster.style.opacity =
        "0.7";


      poster.style.transform =
        "translate(-50%, -50%) rotate(-2deg) scale(0.98)";


      window.setTimeout(
        () => {

          posterText.innerHTML =
            messages[index]
              .join("<br>");


          poster.style.opacity =
            "1";


          poster.style.transform =
            "translate(-50%, -50%) rotate(-4deg) scale(1)";

        },
        120
      );

    }


    poster.addEventListener(
      "click",
      changePoster
    );


    /*
      Make the poster keyboard accessible.
    */

    poster.setAttribute(
      "role",
      "button"
    );


    poster.setAttribute(
      "tabindex",
      "0"
    );


    poster.setAttribute(
      "aria-label",
      "Show another reading poster"
    );


    poster.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          changePoster();

        }

      }
    );

  }


  /* =========================================================
     PATHWAY CARD HOVER / FOCUS EFFECT
  ========================================================= */

  const pathwayCards =
    document.querySelectorAll(
      ".pathway-card"
    );


  pathwayCards.forEach(card => {

    const link =
      card.querySelector("a");


    if (!link) {
      return;
    }


    link.addEventListener(
      "focus",
      () => {

        card.classList.add(
          "pathway-active"
        );

      }
    );


    link.addEventListener(
      "blur",
      () => {

        card.classList.remove(
          "pathway-active"
        );

      }
    );

  });


  /* =========================================================
     BOOK CARD INTERACTION
  ========================================================= */

  const books =
    document.querySelectorAll(
      ".book-feature"
    );


  books.forEach(book => {

    const mockup =
      book.querySelector(
        ".mock-cover"
      );


    if (!mockup) {
      return;
    }


    book.addEventListener(
      "mouseenter",
      () => {

        mockup.style.transform =
          "rotate(-1deg) translateY(-5px)";

      }
    );


    book.addEventListener(
      "mouseleave",
      () => {

        /*
          Different rotation for
          the coming-soon book.
        */

        if (
          book.classList.contains(
            "coming"
          )
        ) {

          mockup.style.transform =
            "rotate(3deg)";

        } else {

          mockup.style.transform =
            "rotate(-4deg)";

        }

      }
    );

  });


  /* =========================================================
     LITTLE LIBRARY CARD DETAIL
  ========================================================= */

  const libraryCard =
    document.querySelector(
      ".mini-library-card"
    );


  if (libraryCard) {

    const barcode =
      libraryCard.querySelector(
        ".barcode"
      );


    const barcodeVersions = [

      "|||| ||| |||| | ||||| ||",

      "||| ||||| | ||| || |||||",

      "||||| || |||| ||| | ||||",

      "|| |||| ||||| || ||| |||"

    ];


    let barcodeIndex = 0;


    libraryCard.addEventListener(
      "click",
      () => {

        barcodeIndex =
          (barcodeIndex + 1) %
          barcodeVersions.length;


        if (barcode) {

          barcode.textContent =
            barcodeVersions[
              barcodeIndex
            ];

        }

      }
    );


    libraryCard.setAttribute(
      "role",
      "button"
    );


    libraryCard.setAttribute(
      "tabindex",
      "0"
    );


    libraryCard.setAttribute(
      "aria-label",
      "Interactive Wonder Verse library card"
    );


    libraryCard.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          libraryCard.click();

        }

      }
    );

  }


  /* =========================================================
     PAGE READY
  ========================================================= */

  document.documentElement.classList.add(
    "books-storyverse-ready"
  );

})();
