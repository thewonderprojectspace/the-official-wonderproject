(() => {

  "use strict";


  /* =========================================================
     LEARNING WORLDS
  ========================================================= */

  const learningWorlds = [

    {
      id: "numbers",

      number: "01",

      title: "Numbers & Patterns",

      hindi: "संख्या और पैटर्न",

      symbol: "⌁",

      accent: "#efc96c",

      description:
        "Find the patterns hiding underneath the world.",

      paths: [

        {
          label: "MATHEMATICS",
          title: "Maths & Patterns",
          description:
            "Numbers, shapes, puzzles and the strange logic beneath everyday life.",
          href: "maths-exploration.html"
        },

        {
          label: "LOGIC",
          title: "Puzzles & Reasoning",
          description:
            "Train your brain to notice what doesn't immediately make sense.",
          href: "logic-exploration.html"
        },

        {
          label: "COMPUTING",
          title: "Code & Algorithms",
          description:
            "Turn instructions, patterns and ideas into things computers understand.",
          href: "coding-exploration.html"
        }

      ]
    },


    {
      id: "life",

      number: "02",

      title: "Life & Nature",

      hindi: "जीवन और प्रकृति",

      symbol: "❋",

      accent: "#9eb67e",

      description:
        "From a cell to an ecosystem — investigate what lives.",

      paths: [

        {
          label: "SCIENCE",
          title: "Science",
          description:
            "Ask the world a question and find a way to test the answer.",
          href: "science-exploration.html"
        },

        {
          label: "BIOLOGY",
          title: "Life & Biology",
          description:
            "Cells, bodies, ecosystems and the machinery of being alive.",
          href: "biology-exploration.html"
        },

        {
          label: "MEDICINE",
          title: "Medicine & the Human Body",
          description:
            "Explore the systems keeping a human body alive.",
          href: "medical-exploration.html"
        },

        {
          label: "EARTH",
          title: "Nature & Environment",
          description:
            "Follow water, weather, animals, plants and changing landscapes.",
          href: "nature-exploration.html"
        }

      ]
    },


    {
      id: "people",

      number: "03",

      title: "People & Worlds",

      hindi: "लोग और दुनिया",

      symbol: "◎",

      accent: "#d28a5d",

      description:
        "Explore how humans built, remembered and understood worlds.",

      paths: [

        {
          label: "HISTORY",
          title: "History",
          description:
            "Meet people who lived before us without pretending they were simple.",
          href: "history-exploration.html"
        },

        {
          label: "GEOGRAPHY",
          title: "Places & Geography",
          description:
            "See how land, climate, movement and people shape one another.",
          href: "geography-exploration.html"
        },

        {
          label: "SOCIETY",
          title: "People & Society",
          description:
            "Explore communities, systems, behaviour and how humans live together.",
          href: "society-exploration.html"
        },

        {
          label: "PHILOSOPHY",
          title: "Big Questions",
          description:
            "Questions humans have argued about for thousands of years.",
          href: "philosophy-exploration.html"
        }

      ]
    },


    {
      id: "making",

      number: "04",

      title: "Making & Creating",

      hindi: "बनाना और रचना",

      symbol: "✦",

      accent: "#df9f56",

      description:
        "Knowledge changes when your hands get involved.",

      paths: [

        {
          label: "ART",
          title: "Art & Drawing",
          description:
            "Notice more closely by trying to make what you see.",
          href: "art-exploration.html"
        },

        {
          label: "DESIGN",
          title: "Design",
          description:
            "Turn a messy human problem into something useful.",
          href: "design-exploration.html"
        },

        {
          label: "ENGINEERING",
          title: "Build & Engineer",
          description:
            "Make it. Break it. Work out why. Build it again.",
          href: "engineering-exploration.html"
        },

        {
          label: "CRAFT",
          title: "Craft & Making",
          description:
            "Learn what materials can teach your hands.",
          href: "craft-exploration.html"
        }

      ]
    },


    {
      id: "stories",

      number: "05",

      title: "Words, Stories & Sound",

      hindi: "शब्द, कहानी और ध्वनि",

      symbol: "〰",

      accent: "#c99ac8",

      description:
        "Read it. Write it. Speak it. Hear it differently.",

      paths: [

        {
          label: "WORDS",
          title: "Reading & Writing",
          description:
            "Use words to understand another mind — or your own.",
          href: "language-exploration.html"
        },

        {
          label: "STORIES",
          title: "Stories & Literature",
          description:
            "Walk into lives, places and possibilities that aren't yours.",
          href: "literature-exploration.html"
        },

        {
          label: "LANGUAGE",
          title: "Languages",
          description:
            "Discover how different sounds and structures carry human thought.",
          href: "languages-exploration.html"
        },

        {
          label: "SOUND",
          title: "Music & Sound",
          description:
            "Train your ear through rhythm, listening and patient practice.",
          href: "music-exploration.html"
        }

      ]
    },


    {
      id: "life-skills",

      number: "06",

      title: "Life Skills & Future",

      hindi: "जीवन और आगे",

      symbol: "⌂",

      accent: "#8fb1a4",

      description:
        "Things worth knowing when the textbook closes.",

      paths: [

        {
          label: "MONEY",
          title: "Money & Everyday Maths",
          description:
            "Understand the numbers that quietly shape everyday decisions.",
          href: "money-exploration.html"
        },

        {
          label: "FOOD",
          title: "Food & Cooking",
          description:
            "Chemistry, culture, measurement and survival meet in the kitchen.",
          href: "food-exploration.html"
        },

        {
          label: "FUTURE",
          title: "Work & Possibility",
          description:
            "Explore what you could build, learn or contribute next.",
          href: "career-exploration.html"
        },

        {
          label: "EVERYDAY LIFE",
          title: "Things Nobody Taught Me",
          description:
            "Practical knowledge for navigating an increasingly complicated world.",
          href: "life-skills-exploration.html"
        }

      ]
    }

  ];



  /* =========================================================
     ELEMENTS
  ========================================================= */

  const worldGrid =
    document.querySelector("#worldGrid");

  const worldDrawer =
    document.querySelector("#worldDrawer");

  const closeWorld =
    document.querySelector("#closeWorld");

  const drawerSymbol =
    document.querySelector("#drawerSymbol");

  const drawerTitle =
    document.querySelector("#drawerTitle");

  const drawerHindi =
    document.querySelector("#drawerHindi");

  const drawerDescription =
    document.querySelector("#drawerDescription");

  const explorationGrid =
    document.querySelector("#explorationGrid");

  const topbar =
    document.querySelector("#topbar");

  const menu =
    document.querySelector("#menu");

  const nav =
    document.querySelector("#nav");

  const entryDialog =
    document.querySelector("#entryDialog");

  const openNote =
    document.querySelector("#openNote");

  const closeNote =
    document.querySelector("#closeNote");

  const carryNote =
    document.querySelector("#carryNote");

  const vessels =
    document.querySelector("#vessels");

  const waterResult =
    document.querySelector("#waterResult");



  /* =========================================================
     ANALYTICS
  ========================================================= */

  function trackEvent(name, parameters = {}) {

    if (
      typeof window.gtag !== "function"
    ) {
      return;
    }

    window.gtag(
      "event",
      name,
      parameters
    );

  }



  /* =========================================================
     RENDER SIX COURTYARDS
  ========================================================= */

  function renderWorlds() {

    if (!worldGrid) {
      return;
    }


    worldGrid.innerHTML =
      learningWorlds
        .map((world) => {

          return `
            <button
              class="world-card reveal"
              type="button"
              data-world="${world.id}"
              style="--world-accent:${world.accent}"
              aria-expanded="false"
            >

              <span class="world-number">
                ${world.number}
              </span>

              <span
                class="world-symbol"
                aria-hidden="true"
              >
                ${world.symbol}
              </span>

              <h3>
                ${world.title}
              </h3>

              <span class="world-hindi">
                ${world.hindi}
              </span>

              <p>
                ${world.description}
              </p>

              <span class="world-enter">
                OPEN COURTYARD ↘
              </span>

            </button>
          `;

        })
        .join("");


    worldGrid
      .querySelectorAll(".world-card")
      .forEach((card) => {

        card.addEventListener(
          "click",
          () => {

            openWorld(
              card.dataset.world
            );

          }
        );

      });


    observeReveals();

  }



  /* =========================================================
     OPEN A COURTYARD
  ========================================================= */

  function openWorld(worldId) {

    const world =
      learningWorlds.find(
        (item) =>
          item.id === worldId
      );


    if (
      !world ||
      !worldDrawer
    ) {
      return;
    }


    worldGrid
      ?.querySelectorAll(".world-card")
      .forEach((card) => {

        card.setAttribute(
          "aria-expanded",
          String(
            card.dataset.world ===
            worldId
          )
        );

      });


    drawerSymbol.textContent =
      world.symbol;


    drawerSymbol.style.color =
      world.accent;


    drawerTitle.textContent =
      world.title;


    drawerHindi.textContent =
      world.hindi;


    drawerHindi.style.color =
      world.accent;


    drawerDescription.textContent =
      world.description;


    explorationGrid.innerHTML =
      world.paths
        .map((path) => {

          return `
            <a
              class="exploration-card"
              href="${path.href}"
              data-exploration="${path.title}"
            >

              <small>
                ${path.label}
              </small>

              <div>

                <h3>
                  ${path.title}
                </h3>

                <p>
                  ${path.description}
                </p>

              </div>

            </a>
          `;

        })
        .join("");


    worldDrawer.hidden = false;


    trackEvent(
      "learning_courtyard_open",
      {
        courtyard:
          world.title
      }
    );


    explorationGrid
      .querySelectorAll(
        ".exploration-card"
      )
      .forEach((link) => {

        link.addEventListener(
          "click",
          () => {

            trackEvent(
              "learning_exploration_enter",
              {
                exploration:
                  link.dataset.exploration,

                courtyard:
                  world.title
              }
            );

          }
        );

      });


    window.setTimeout(
      () => {

        worldDrawer.scrollIntoView({
          behavior:
            window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches
              ? "auto"
              : "smooth",

          block: "start"
        });

      },
      60
    );

  }



  /* =========================================================
     CLOSE COURTYARD
  ========================================================= */

  function closeWorldDrawer() {

    if (!worldDrawer) {
      return;
    }


    worldDrawer.hidden = true;


    worldGrid
      ?.querySelectorAll(".world-card")
      .forEach((card) => {

        card.setAttribute(
          "aria-expanded",
          "false"
        );

      });

  }


  closeWorld?.addEventListener(
    "click",
    closeWorldDrawer
  );



  /* =========================================================
     KNOWLEDGE RIVER
  ========================================================= */

  const vesselMessages = {

    cup: {

      eyebrow:
        "A CUP · ONE IDEA",

      title:
        "Learn one thing properly.",

      text:
        "One useful idea is enough for today. Notice it. Try it once. Carry it with you."

    },


    bucket: {

      eyebrow:
        "A BUCKET · PRACTICE",

      title:
        "Stay long enough to try.",

      text:
        "Understanding grows through use. Solve it, build it, explain it, test it or practise it again."

    },


    river: {

      eyebrow:
        "THE RIVER · GO DEEP",

      title:
        "Follow the question.",

      text:
        "Read sideways. Compare ideas. Make something. Find what you disagree with. Teach somebody else. Let one question become five."

    }

  };


  vessels
    ?.querySelectorAll(
      "button[data-vessel]"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const type =
            button.dataset.vessel;


          const message =
            vesselMessages[type];


          if (!message) {
            return;
          }


          vessels
            .querySelectorAll(
              "button"
            )
            .forEach((item) => {

              item.classList.remove(
                "active"
              );

            });


          button.classList.add(
            "active"
          );


          waterResult.innerHTML = `

            <p class="eyebrow">
              ${message.eyebrow}
            </p>

            <h3>
              ${message.title}
            </h3>

            <p>
              ${message.text}
            </p>

          `;


          trackEvent(
            "knowledge_river_choice",
            {
              vessel: type
            }
          );

        }
      );

    });



  /* =========================================================
     COURTYARD NOTE DIALOG
  ========================================================= */

  openNote?.addEventListener(
    "click",
    () => {

      entryDialog?.showModal();

    }
  );


  closeNote?.addEventListener(
    "click",
    () => {

      entryDialog?.close();

    }
  );


  carryNote?.addEventListener(
    "click",
    () => {

      entryDialog?.close();


      document
        .querySelector("#explore")
        ?.scrollIntoView({
          behavior:
            window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches
              ? "auto"
              : "smooth"
        });

    }
  );


  entryDialog?.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        entryDialog
      ) {

        entryDialog.close();

      }

    }
  );



  /* =========================================================
     MOBILE NAV
  ========================================================= */

  function toggleMenu(force) {

    if (
      !menu ||
      !nav
    ) {
      return;
    }


    const currentlyOpen =
      menu.getAttribute(
        "aria-expanded"
      ) === "true";


    const open =
      typeof force === "boolean"
        ? force
        : !currentlyOpen;


    menu.setAttribute(
      "aria-expanded",
      String(open)
    );


    nav.classList.toggle(
      "open",
      open
    );


    document.body.style.overflow =
      open
        ? "hidden"
        : "";

  }


  menu?.addEventListener(
    "click",
    () => {

      toggleMenu();

    }
  );


  nav
    ?.querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          toggleMenu(false);

        }
      );

    });


  window.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        toggleMenu(false);

        if (
          entryDialog?.open
        ) {
          entryDialog.close();
        }

      }

    }
  );



  /* =========================================================
     HEADER
  ========================================================= */

  function updateHeader() {

    topbar
      ?.classList
      .toggle(
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



  /* =========================================================
     REVEAL ANIMATIONS
  ========================================================= */

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  let revealObserver;


  function observeReveals() {

    const elements =
      document.querySelectorAll(
        ".reveal:not(.is-visible)"
      );


    if (reduceMotion) {

      elements.forEach(
        (element) => {

          element.classList.add(
            "is-visible"
          );

        }
      );

      return;
    }


    if (
      !(
        "IntersectionObserver"
        in window
      )
    ) {

      elements.forEach(
        (element) => {

          element.classList.add(
            "is-visible"
          );

        }
      );

      return;
    }


    if (!revealObserver) {

      revealObserver =
        new IntersectionObserver(
          (entries) => {

            entries.forEach(
              (entry) => {

                if (
                  entry.isIntersecting
                ) {

                  entry.target
                    .classList
                    .add(
                      "is-visible"
                    );


                  revealObserver
                    .unobserve(
                      entry.target
                    );

                }

              }
            );

          },
          {
            threshold: .12
          }
        );

    }


    elements.forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );

  }



  /* =========================================================
     INITIALISE
  ========================================================= */

  renderWorlds();

  observeReveals();

})();
