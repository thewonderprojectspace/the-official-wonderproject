(() => {

  const entryScreen =
    document.querySelector(
      "#schoolEntry"
    );

  const enterButton =
    document.querySelector(
      "#enterSchoolBtn"
    );

  const reception =
    document.querySelector(
      "#receptionScene"
    );


  let entering = false;


  function startSchoolEntry() {

    if (
      entering ||
      !entryScreen
    ) {
      return;
    }


    entering = true;


    /* -----------------------------
       STEP 1
       Automatic doors open
    ----------------------------- */

    entryScreen.classList.add(
      "doors-open"
    );


    /* -----------------------------
       STEP 2
       Wait while doors slide apart
    ----------------------------- */

    setTimeout(() => {

      /*
        Zoom through the doorway
      */

      entryScreen.classList.add(
        "entering"
      );

    }, 1400);


    /* -----------------------------
       STEP 3
       Arrive at reception
    ----------------------------- */

    setTimeout(() => {

      entryScreen.style.display =
        "none";


      if (reception) {

        reception.scrollIntoView({
          behavior: "auto",
          block: "start"
        });

      }

    }, 2900);

  }


  if (enterButton) {

    enterButton.addEventListener(
      "click",
      startSchoolEntry
    );

  }


  /* --------------------------------
     OPTIONAL:
     automatically open after a short
     pause if you want it cinematic
  -------------------------------- */

  /*
  setTimeout(() => {

    startSchoolEntry();

  }, 3500);
  */


})();
