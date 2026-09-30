(() => {
  "use strict";

  /*
   * LEARNING COURTYARD INFORMATION
   */

  const courtyards = [
    {
      title: "Numbers & Patterns",
      hindi: "संख्या और आकार",

      description:
        "Follow numbers into patterns, puzzles, measurement and the hidden structures around us.",

      symbol: "∞",

      image: "images/thewhy.png",

      accent: "#ffd56a",

      paths: [
        [
          "NOTICE",
          "Pattern hunt",
          "Look for repetition, rhythm and symmetry in an ordinary day."
        ],

        [
          "TRY",
          "Estimate first",
          "Make a guess before measuring. The gap is part of the lesson."
        ],

        [
          "FOLLOW",
          "Numbers in the world",
          "Explore how trade, music, buildings and maps use maths."
        ]
      ]
    },

    {
      title: "Nature & Cosmos",
      hindi: "प्रकृति और ब्रह्मांड",

      description:
        "Look closely at living systems, weather, matter, the Earth and the sky beyond it.",

      symbol: "✦",

      image: "images/wonder.png",

      accent: "#6de7ff",

      paths: [
        [
          "NOTICE",
          "One small ecosystem",
          "Watch a plant, puddle or patch of soil change over time."
        ],

        [
          "TRY",
          "Ask the sky",
          "Track the Moon, clouds or sunset from the same place."
        ],

        [
          "FOLLOW",
          "Scale of everything",
          "Travel from the smallest cells to the widest galaxies."
        ]
      ]
    },

    {
      title: "People & Society",
      hindi: "लोग और समाज",

      description:
        "Explore how humans live together, make choices, build cultures and change history.",

      symbol: "◎",

      image: "images/student.png",

      accent: "#ff8e9d",

      paths: [
        [
          "NOTICE",
          "Whose voice?",
          "Ask who is speaking, who is missing and who gets remembered."
        ],

        [
          "TRY",
          "Map a decision",
          "Trace how one public choice can affect many different people."
        ],

        [
          "FOLLOW",
          "Everyday history",
          "Find the larger story hidden inside an ordinary object."
        ]
      ]
    },

    {
      title: "Making & Tinkering",
      hindi: "बनाना और आज़माना",

      description:
        "Let the hands think through materials, mechanisms, experiments and useful mistakes.",

      symbol: "⌁",

      image: "images/Iamamess.png",

      accent: "#b9ff8a",

      paths: [
        [
          "NOTICE",
          "How is it held?",
          "Study the joints, folds and fasteners in something nearby."
        ],

        [
          "TRY",
          "Build a rough version",
          "Use what you have. Make it work before making it beautiful."
        ],

        [
          "FOLLOW",
          "Learn from failure",
          "Record what broke, why it broke and what changed next."
        ]
      ]
    },

    {
      title: "Stories & Language",
      hindi: "कहानियाँ और भाषा",

      description:
        "Enter poems, histories, myths and the many ways language holds a human life.",

      symbol: "❦",

      image: "images/becoming.png",

      accent: "#d4a7ff",

      paths: [
        [
          "NOTICE",
          "A word with a past",
          "Choose one familiar word and follow where it came from."
        ],

        [
          "TRY",
          "Change the narrator",
          "Retell a moment from another person’s point of view."
        ],

        [
          "FOLLOW",
          "Stories that travel",
          "Compare how one idea changes across places and generations."
        ]
      ]
    },

    {
      title: "Beyond the Syllabus",
      hindi: "पाठ्यक्रम के आगे",

      description:
        "Make room for money, care, work, emotions, media and everything life forgot to timetable.",

      symbol: "↗",

      image: "images/teaching.png",

      accent: "#ffad66",

      paths: [
        [
          "NOTICE",
          "A life skill",
          "Name something useful you learned outside a classroom."
        ],

        [
          "TRY",
          "Read the fine print",
          "Examine one bill, label, form or claim that shapes daily life."
        ],

        [
          "FOLLOW",
          "Ask someone experienced",
          "Invite a person to explain what practice taught them."
        ]
      ]
    }
  ];

  /*
   * LEARNING COURTYARD CARDS
   */

  const grid = document.querySelector("#worldGrid");
  const drawer = document.querySelector("#worldDrawer");
  const closeWorld = document.querySelector("#closeWorld");

  courtyards.forEach((world, index) => {
    if (!grid) {
      return;
    }

    const card = document.createElement("button");

    card.type = "button";
    card.className = "world-card reveal";

    card.style.setProperty(
      "--accent",
      world.accent
    );

    card.setAttribute(
      "aria-expanded",
      "false"
    );

    card.innerHTML = `
      <img
        src="${world.image}"
        alt=""
        loading="lazy"
        decoding="async"
      >

      <span class="world-card-copy">
        <span class="world-index">
          COURTYARD ${String(index + 1).padStart(2, "0")}
          · ${world.symbol}
        </span>

        <h3>${world.title}</h3>

        <p>
          ${world.hindi} · ${world.description}
        </p>

        <span class="world-enter">
          OPEN THIS COURTYARD ↗
        </span>
      </span>
    `;

    card.addEventListener("click", () => {
      openCourtyard(world, card);
    });

    grid.appendChild(card);
  });

  /*
   * OPEN A COURTYARD
   */

  function openCourtyard(world, activeCard) {
    if (!grid || !drawer) {
      return;
    }

    grid
      .querySelectorAll(".world-card")
      .forEach((card) => {
        card.setAttribute(
          "aria-expanded",
          String(card === activeCard)
        );
      });

    drawer.style.setProperty(
      "--drawer-accent",
      world.accent
    );

    const drawerSymbol =
      document.querySelector("#drawerSymbol");

    const drawerTitle =
      document.querySelector("#drawerTitle");

    const drawerHindi =
      document.querySelector("#drawerHindi");

    const drawerDescription =
      document.querySelector(
        "#drawerDescription"
      );

    const explorationGrid =
      document.querySelector(
        "#explorationGrid"
      );

    if (drawerSymbol) {
      drawerSymbol.textContent =
        world.symbol;
    }

    if (drawerTitle) {
      drawerTitle.textContent =
        world.title;
    }

    if (drawerHindi) {
      drawerHindi.textContent =
        world.hindi;
    }

    if (drawerDescription) {
      drawerDescription.textContent =
        world.description;
    }

    if (explorationGrid) {
      explorationGrid.innerHTML =
        world.paths
          .map(
            (path) => `
              <article class="exploration-card">
                <span>${path[0]}</span>

                <h3>${path[1]}</h3>

                <p>${path[2]}</p>
              </article>
            `
          )
          .join("");
    }

    drawer.hidden = false;

    requestAnimationFrame(() => {
      drawer.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });

    closeWorld?.focus({
      preventScroll: true
    });
  }

  /*
   * CLOSE A COURTYARD
   */

  closeWorld?.addEventListener(
    "click",
    () => {
      if (drawer) {
        drawer.hidden = true;
      }

      const activeCard =
        grid?.querySelector(
          '[aria-expanded="true"]'
        );

      grid
        ?.querySelectorAll(".world-card")
        .forEach((card) => {
          card.setAttribute(
            "aria-expanded",
            "false"
          );
        });

      activeCard?.focus({
        preventScroll: true
      });
    }
  );

  /*
   * MOBILE NAVIGATION
   */

  const menu =
    document.querySelector("#menu");

  const nav =
    document.querySelector("#nav");

  function closeMenu() {
    menu?.setAttribute(
      "aria-expanded",
      "false"
    );

    nav?.classList.remove("open");
  }

  menu?.addEventListener("click", () => {
    const nextState =
      menu.getAttribute(
        "aria-expanded"
      ) !== "true";

    menu.setAttribute(
      "aria-expanded",
      String(nextState)
    );

    nav?.classList.toggle(
      "open",
      nextState
    );
  });

  nav
    ?.querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        closeMenu
      );
    });

  document.addEventListener(
    "click",
    (event) => {
      const menuIsOpen =
        nav?.classList.contains("open");

      const clickedInsideNavigation =
        nav?.contains(event.target);

      const clickedMenuButton =
        menu?.contains(event.target);

      if (
        menuIsOpen &&
        !clickedInsideNavigation &&
        !clickedMenuButton
      ) {
        closeMenu();
      }
    }
  );

  /*
   * NOTE BENEATH THE TREE
   */

  const dialog =
    document.querySelector(
      "#entryDialog"
    );

  const openNote =
    document.querySelector("#openNote");

  const closeNote =
    document.querySelector(
      "#closeNote"
    );

  const carryNote =
    document.querySelector(
      "#carryNote"
    );

  openNote?.addEventListener(
    "click",
    () => {
      dialog?.showModal();
    }
  );

  closeNote?.addEventListener(
    "click",
    () => {
      dialog?.close();
    }
  );

  carryNote?.addEventListener(
    "click",
    () => {
      dialog?.close();

      document
        .querySelector("#courtyard")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }
  );

  /*
   * Close dialog when the user
   * clicks the dark backdrop
   */

  dialog?.addEventListener(
    "click",
    (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    }
  );

  /*
   * KNOWLEDGE RIVER
   */

  const vesselMessages = {
    cup: [
      "One useful idea is enough.",

      "Choose one courtyard. Notice one thing. Write down the question it leaves behind."
    ],

    bucket: [
      "Practise changes understanding.",

      "Choose one small activity and repeat it. Pay attention to what becomes easier—and what becomes more interesting."
    ],

    river: [
      "Follow the question further.",

      "Connect ideas across courtyards. Read, test, ask someone, make something and return with a better question."
    ]
  };

  const waterResult =
    document.querySelector(
      "#waterResult"
    );

  document
    .querySelectorAll("[data-vessel]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          document
            .querySelectorAll(
              "[data-vessel]"
            )
            .forEach((item) => {
              item.classList.toggle(
                "active",
                item === button
              );
            });

          const vessel =
            button.dataset.vessel;

          const message =
            vesselMessages[vessel];

          if (
            !waterResult ||
            !message
          ) {
            return;
          }

          waterResult.innerHTML = `
            <p class="eyebrow">
              NO WRONG CHOICE
            </p>

            <h3>
              ${message[0]}
            </h3>

            <p>
              ${message[1]}
            </p>
          `;
        }
      );
    });

  /*
   * HEADER AND SCROLL PROGRESS
   */

  const topbar =
    document.querySelector("#topbar");

  const progress =
    document.querySelector(
      "#scrollProgress"
    );

  function updateScroll() {
    topbar?.classList.toggle(
      "scrolled",
      window.scrollY > 24
    );

    const scrollable =
      document.documentElement
        .scrollHeight -
      window.innerHeight;

    const amount =
      scrollable > 0
        ? (window.scrollY /
            scrollable) *
          100
        : 0;

    if (progress) {
      progress.style.width =
        `${amount}%`;
    }
  }

  window.addEventListener(
    "scroll",
    updateScroll,
    {
      passive: true
    }
  );

  updateScroll();

  /*
   * REVEAL ANIMATIONS
   */

  if (
    "IntersectionObserver" in window
  ) {
    const revealObserver =
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

                revealObserver.unobserve(
                  entry.target
                );
              }
            }
          );
        },

        {
          threshold: 0.1
        }
      );

    document
      .querySelectorAll(".reveal")
      .forEach((item) => {
        revealObserver.observe(item);
      });
  } else {
    document
      .querySelectorAll(".reveal")
      .forEach((item) => {
        item.classList.add(
          "visible"
        );
      });
  }

  /*
   * COSMIC STAR BACKGROUND
   */

  function seededRandom(seed) {
    let value =
      seed % 2147483647;

    return () => {
      value =
        (value * 16807) %
        2147483647;

      return (
        (value - 1) /
        2147483646
      );
    };
  }

  function drawStars() {
    const canvas =
      document.querySelector(
        "#cosmicSky"
      );

    if (!canvas) {
      return;
    }

    const context =
      canvas.getContext("2d");

    if (!context) {
      return;
    }

    const ratio = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    canvas.width = Math.floor(
      window.innerWidth * ratio
    );

    canvas.height = Math.floor(
      window.innerHeight * ratio
    );

    context.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    context.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );

    const starCount = Math.min(
      180,

      Math.floor(
        (
          window.innerWidth *
          window.innerHeight
        ) / 6500
      )
    );

    const random =
      seededRandom(90817);

    for (
      let index = 0;
      index < starCount;
      index += 1
    ) {
      const x =
        random() *
        window.innerWidth;

      const y =
        random() *
        window.innerHeight;

      const radius =
        random() * 1.35 + 0.25;

      const alpha =
        random() * 0.68 + 0.18;

      const starColour =
        random() > 0.78
          ? "158,225,255"
          : "255,255,255";

      context.beginPath();

      context.fillStyle =
        `rgba(${starColour}, ${alpha})`;

      context.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      );

      context.fill();
    }
  }

  drawStars();

  /*
   * Redraw stars when the
   * browser size changes
   */

  let resizeTimer;

  window.addEventListener(
    "resize",
    () => {
      window.clearTimeout(
        resizeTimer
      );

      resizeTimer =
        window.setTimeout(
          drawStars,
          120
        );
    }
  );
})();
