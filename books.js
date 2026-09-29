/* =========================================================
   JIGYASAVERSE LIVING LIBRARY
========================================================= */

(() => {

  /* =======================================================
     REDUCED-MOTION PREFERENCE
  ======================================================= */

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* =======================================================
     LIVING STAR BACKGROUND
  ======================================================= */

  const canvas =
    document.getElementById("starField");

  const context =
    canvas
      ? canvas.getContext("2d")
      : null;

  let stars = [];
  let animationFrame;


  function resizeStars() {

    if (!canvas || !context) {
      return;
    }

    const density =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );

    canvas.width =
      window.innerWidth * density;

    canvas.height =
      window.innerHeight * density;

    canvas.style.width =
      `${window.innerWidth}px`;

    canvas.style.height =
      `${window.innerHeight}px`;

    context.setTransform(
      density,
      0,
      0,
      density,
      0,
      0
    );


    stars = Array.from(
      {
        length:
          Math.min(
            190,
            Math.floor(
              window.innerWidth / 7
            )
          )
      },

      () => ({
        x:
          Math.random() *
          window.innerWidth,

        y:
          Math.random() *
          window.innerHeight,

        radius:
          Math.random() * 1.35 + 0.15,

        opacity:
          Math.random() * 0.7 + 0.2,

        speed:
          Math.random() * 0.005 + 0.001
      })
    );

  }


  function drawStars(time = 0) {

    if (!canvas || !context) {
      return;
    }

    context.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );


    stars.forEach((star) => {

      const opacity = reducedMotion
        ? star.opacity
        : star.opacity *
          (
            0.62 +
            0.38 *
            Math.sin(
              time * star.speed +
              star.x
            )
          );


      context.beginPath();

      context.fillStyle =
        `rgba(255, 241, 202, ${opacity})`;

      context.arc(
        star.x,
        star.y,
        star.radius,
        0,
        Math.PI * 2
      );

      context.fill();

    });


    if (!reducedMotion) {

      animationFrame =
        window.requestAnimationFrame(
          drawStars
        );

    }

  }


  resizeStars();
  drawStars();


  window.addEventListener(
    "resize",
    () => {

      window.cancelAnimationFrame(
        animationFrame
      );

      resizeStars();
      drawStars();

    }
  );


  /* =======================================================
     SCROLL REVEALS
  ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  if (
    "IntersectionObserver" in window &&
    !reducedMotion
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              revealObserver.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.1
        }
      );


    revealElements.forEach(
      (element) => {

        revealObserver.observe(element);

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element.classList.add("visible");

      }
    );

  }


  /* =======================================================
     SHRINKING HEADER
  ======================================================= */

  const header =
    document.getElementById("siteHeader");


  function updateHeader() {

    if (!header) {
      return;
    }

    header.classList.toggle(
      "scrolled",
      window.scrollY > 30
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


  /* =======================================================
     MOBILE NAVIGATION
  ======================================================= */

  const menuButton =
    document.getElementById("menuButton");

  const navigation =
    document.getElementById("mainNav");


  if (menuButton && navigation) {

    menuButton.addEventListener(
      "click",
      () => {

        const open =
          navigation.classList.toggle(
            "open"
          );

        menuButton.setAttribute(
          "aria-expanded",
          String(open)
        );

      }
    );


    navigation
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener(
          "click",
          () => {

            navigation.classList.remove(
              "open"
            );

            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      });


    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          navigation.classList.contains(
            "open"
          )
        ) {

          navigation.classList.remove(
            "open"
          );

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

          menuButton.focus();

        }

      }
    );

  }


  /* =======================================================
     MOOD FILTER AND SEARCH
  ======================================================= */

  const moodButtons = [
    ...document.querySelectorAll(
      "[data-mood]"
    )
  ];

  const rooms = [
    ...document.querySelectorAll(
      ".shelf-room"
    )
  ];

  const search =
    document.getElementById(
      "shelfSearch"
    );

  const result =
    document.getElementById(
      "moodResult"
    );

  const roomCount =
    document.getElementById(
      "roomCount"
    );

  const noResults =
    document.getElementById(
      "noResults"
    );


  let activeMood = "all";


  const moodMessages = {

    all:
      "Every room is currently open.",

    wonder:
      "The shelves for questions and possibility are glowing.",

    learn:
      "The learning rooms have moved closer.",

    seen:
      "These rooms may feel a little like recognition.",

    brave:
      "Courage is rarely loud. These shelves know that.",

    quiet:
      "The quietest rooms are now open."

  };


  function filterRooms() {

    if (
      !search ||
      !result ||
      !roomCount ||
      !noResults
    ) {
      return;
    }


    const query =
      search.value
        .trim()
        .toLowerCase();


    let visibleRooms = 0;


    rooms.forEach((room) => {

      const roomMoods =
        room.dataset.moods
          ? room.dataset.moods.split(" ")
          : [];


      const searchableText = [
        room.dataset.search || "",
        room.textContent || ""
      ]
        .join(" ")
        .toLowerCase();


      const matchesMood =
        activeMood === "all" ||
        roomMoods.includes(activeMood);


      const matchesSearch =
        query === "" ||
        searchableText.includes(query);


      const shouldShow =
        matchesMood &&
        matchesSearch;


      room.classList.toggle(
        "filtered-out",
        !shouldShow
      );


      room.setAttribute(
        "aria-hidden",
        String(!shouldShow)
      );


      if (shouldShow) {
        visibleRooms += 1;
      }

    });


    roomCount.textContent =
      `Showing ${visibleRooms} ${
        visibleRooms === 1
          ? "room"
          : "rooms"
      }`;


    noResults.hidden =
      visibleRooms !== 0;


    if (query) {

      if (visibleRooms > 0) {

        result.textContent =
          `The shelves found ${visibleRooms} possible ${
            visibleRooms === 1
              ? "room"
              : "rooms"
          } for “${search.value.trim()}”.`;

      } else {

        result.textContent =
          `Nothing appeared for “${search.value.trim()}” yet.`;

      }

    } else {

      result.textContent =
        moodMessages[activeMood];

    }

  }


  moodButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        activeMood =
          button.dataset.mood || "all";


        moodButtons.forEach(
          (otherButton) => {

            const isActive =
              otherButton === button;


            otherButton.classList.toggle(
              "active",
              isActive
            );


            otherButton.setAttribute(
              "aria-pressed",
              String(isActive)
            );

          }
        );


        filterRooms();

      }
    );

  });


  if (search) {

    search.addEventListener(
      "input",
      filterRooms
    );


    search.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          search.value
        ) {

          search.value = "";

          filterRooms();

        }

      }
    );

  }


  /* =======================================================
     KEYBOARD SUPPORT FOR BOOK SPINES
  ======================================================= */

  document
    .querySelectorAll(
      "a.spine"
    )
    .forEach((book) => {

      book.addEventListener(
        "focus",
        () => {

          book.classList.add(
            "keyboard-focus"
          );

        }
      );


      book.addEventListener(
        "blur",
        () => {

          book.classList.remove(
            "keyboard-focus"
          );

        }
      );

    });


  /* =======================================================
     ANALYTICS FOR AMAZON BOOK LINKS
  ======================================================= */

  document
    .querySelectorAll(
      'a[href*="amazon.com.au"]'
    )
    .forEach((amazonLink) => {

      amazonLink.addEventListener(
        "click",
        () => {

          if (
            typeof window.gtag ===
            "function"
          ) {

            window.gtag(
              "event",
              "open_book_on_amazon",
              {
                book_title:
                  amazonLink.textContent
                    .replace(/\s+/g, " ")
                    .trim()
              }
            );

          }

        }
      );

    });


  /* =======================================================
     ANALYTICS FOR CONTACT BOOTH
  ======================================================= */

  document
    .querySelectorAll(
      'a[href*="endearing-cat-c1f80e.netlify.app"]'
    )
    .forEach((contactLink) => {

      contactLink.addEventListener(
        "click",
        () => {

          if (
            typeof window.gtag ===
            "function"
          ) {

            window.gtag(
              "event",
              "open_communication_booth",
              {
                source_page:
                  "living_library"
              }
            );

          }

        }
      );

    });


  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  const year =
    document.getElementById("year");


  if (year) {

    year.textContent =
      new Date().getFullYear();

  }


  /* Run the filter once on page load */

  filterRooms();

})();
