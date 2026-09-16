(() => {
  "use strict";

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  /* -------------------------------------------
     SHORTEN THE EXISTING PAGE TEXT
  ------------------------------------------- */

  const setText = (selector, text) => {
    const element = $(selector);
    if (element) element.textContent = text;
  };

  setText(
    ".entry-lede",
    "Learning once moved through fields, kitchens, studios, workshops and conversations. Enter with a question. Leave with something useful."
  );

  setText(".entry-sign h2", "Questions welcome.");

  setText(
    ".entry-sign p:not(.chalk)",
    "No ranks. No perfect starting point."
  );

  const opening = $(".opening");

  if (opening) {
    opening.innerHTML = `
      <p class="folio">COURTYARD NOTE · 01</p>

      <div>
        <p class="eyebrow">What we carry forward</p>

        <h2>
          Learning has never belonged to one kind of classroom.
        </h2>

        <p>
          Across time and place, people learned by observing,
          practising, questioning and contributing. We carry those
          useful ideas forward—without copying the exclusion or fear
          that also existed.
        </p>
      </div>

      <blockquote>
        Keep what helps people learn.<br>
        Leave behind what limits them.
      </blockquote>
    `;
  }

  const copyEdits = [
    [
      ".world-school .section-heading h2",
      "Many places. Many ways to learn."
    ],
    [
      ".world-school .section-heading > p",
      "Open a field note only when you want the history."
    ],
    [
      ".water-copy h2",
      "Take what you need. Return when you are ready."
    ],
    [
      ".water-copy p:nth-of-type(2)",
      "A teacher can guide, question and make practice possible. The learner builds understanding."
    ],
    [
      ".water-copy p:nth-of-type(3)",
      "Choose a cup for today, a bucket for a project, or a river to share with others."
    ],
    [
      ".carry-section .section-heading h2",
      "Carry the wisdom. Leave the harm."
    ],
    [
      ".carry-section .section-heading > p",
      "Old is not automatically better. Useful, fair and humane ideas earn their place."
    ],
    [
      ".community-manifesto > p",
      "Learning should help us understand, create and care—not decide who is worth more."
    ],
    [
      ".teacher-copy h2",
      "Teachers create encounters. Learners create understanding."
    ],
    [
      ".teacher-copy p:nth-of-type(2)",
      "A teacher places a question where it can be noticed, makes practice possible and keeps uncertainty safe."
    ],
    [
      ".teacher-copy p:nth-of-type(3)",
      "The world provides the material. The learner does the learning."
    ],
    [
      ".library-copy p",
      "Browse stories, field guides, visual explainers and questions worth following."
    ],
    [
      ".paths .section-heading h2",
      "Choose a courtyard."
    ],
    [
      ".paths .section-heading > p",
      "You only need one useful doorway. You can change direction at any time."
    ]
  ];

  copyEdits.forEach(([selector, text]) => {
    setText(selector, text);
  });

  /* -------------------------------------------
     HISTORICAL FIELD NOTES
  ------------------------------------------- */

  const traditions = [
    {
      place: "SOUTH ASIA",
      title: "Learning close to daily life",
      short:
        "Dialogue, memory, observation and responsibility often sat beside formal study.",
      more:
        "Useful inheritance: sustained mentorship and knowledge linked to conduct. Necessary caution: access was unequal, and no single model represents all South Asian education."
    },
    {
      place: "ISLAMIC WORLDS",
      title: "Knowledge through circles",
      short:
        "Learners gathered around scholars, books and questions across homes, libraries, mosques and madrasas.",
      more:
        "Useful inheritance: dialogue, libraries and travelling communities of scholarship. Practices varied greatly across regions, eras and fields."
    },
    {
      place: "EAST ASIA",
      title: "Reflection joined practice",
      short:
        "Academies, local schools and craft traditions connected texts, patient practice and mentorship.",
      more:
        "Useful inheritance: contemplation, discipline and craft. Necessary caution: hierarchy, exam pressure and unequal access also shaped these systems."
    },
    {
      place: "INDIGENOUS COMMUNITIES",
      title: "Observe, participate, belong",
      short:
        "In many communities, learners watch closely, listen and gradually take meaningful responsibility.",
      more:
        "There is no single Indigenous pedagogy. Living knowledge belongs to specific peoples and places and must be approached through their voices and permissions."
    },
    {
      place: "AFRICAN COMMUNITIES",
      title: "Knowledge moved through people",
      short:
        "Oral histories, performance, apprenticeship and shared work carried skill, memory and identity.",
      more:
        "Africa contains countless distinct traditions. The transferable idea is that skill, memory and social responsibility can grow together."
    },
    {
      place: "EUROPE & THE MEDITERRANEAN",
      title: "Learning by making and debating",
      short:
        "Workshops, philosophical schools, religious centres and universities supported different forms of study.",
      more:
        "Useful inheritance: apprenticeship, dialogue and communities of inquiry. Necessary caution: exclusion, punishment and rigid authority were also common."
    }
  ];

  const traditionHost = $("#traditions");

  if (traditionHost) {
    traditionHost.replaceChildren();

    traditions.forEach((tradition, index) => {
      const article = document.createElement("article");

      article.className = "tradition-card";

      article.innerHTML = `
        <span class="place">${tradition.place}</span>

        <h3>${tradition.title}</h3>

        <p>${tradition.short}</p>

        <button
          type="button"
          aria-expanded="false"
          aria-controls="field-note-${index}"
        >
          Read the field note
          <span aria-hidden="true">+</span>
        </button>

        <div
          class="tradition-more"
          id="field-note-${index}"
          hidden
        >
          ${tradition.more}
        </div>
      `;

      const button = $("button", article);
      const note = $(".tradition-more", article);

      button.addEventListener("click", () => {
        const isOpen =
          button.getAttribute("aria-expanded") === "true";

        button.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );

        button.lastElementChild.textContent =
          isOpen ? "+" : "−";

        note.hidden = isOpen;
      });

      traditionHost.appendChild(article);
    });
  }

  /* -------------------------------------------
     THREE EXPLORATION COURTYARDS
  ------------------------------------------- */

  const courtyards = [
    {
      id: "grow",
      number: "01",
      label: "Grow",
      hindi: "बढ़ना",
      title: "The Courtyard of Growth",
      description:
        "Find the learning stage or role that fits where you are now.",
      colour: "saffron",

      paths: [
        [
          "01",
          "△ ○ □",
          "Play & Early Learning",
          "Begin with movement, stories and wonder.",
          "play-school.html"
        ],
        [
          "02",
          "✎ ☀",
          "Primary & Elementary",
          "Build strong roots through active discovery.",
          "primary-exploration.html"
        ],
        [
          "03",
          "x + ?",
          "Middle School",
          "Question, connect and find your voice.",
          "middle-school.html"
        ],
        [
          "04",
          "x² ∑",
          "Secondary & Senior",
          "Prepare for exams without losing curiosity.",
          "senior-exploration.html"
        ],
        [
          "17",
          "? → ?",
          "University & Research",
          "Follow better questions with honest evidence.",
          "research-exploration.html"
        ],
        [
          "18",
          "✎ ◌",
          "Educators & Leaders",
          "Create conditions in which others can learn.",
          "educator-exploration.html"
        ]
      ]
    },

    {
      id: "explore",
      number: "02",
      label: "Explore",
      hindi: "खोजना",
      title: "The Courtyard of Ideas",
      description:
        "Choose a way of seeing, interpreting and understanding the world.",
      colour: "indigo",

      paths: [
        [
          "05",
          "π ≠ 3",
          "Mathematics",
          "Find patterns, test claims and build proofs.",
          "math-exploration.html"
        ],
        [
          "06",
          "⚗ ?",
          "Science",
          "Observe, test and learn from the evidence.",
          "science-exploration.html"
        ],
        [
          "07",
          "⌛ ◇",
          "Humanities & Society",
          "Study people, places, choices and change.",
          "humanities-exploration.html"
        ],
        [
          "08",
          "Aa अ",
          "Language & Literature",
          "Read closely and express ideas with courage.",
          "language-exploration.html"
        ],
        [
          "09",
          "✎ ✦",
          "Art & Design",
          "Make ideas, feelings and possibilities visible.",
          "art-exploration.html"
        ],
        [
          "10",
          "♪ ♫",
          "Music & Sound",
          "Listen deeply, practise patiently and create.",
          "music-exploration.html"
        ]
      ]
    },

    {
      id: "contribute",
      number: "03",
      label: "Create & Contribute",
      hindi: "बनाना और बाँटना",
      title: "The Courtyard of Practice",
      description:
        "Turn knowledge into stories, tools, care, enterprise and skilled work.",
      colour: "leaf",

      paths: [
        [
          "11",
          "ACT I",
          "Theatre, Film & Story",
          "Understand life through another point of view.",
          "story-exploration.html"
        ],
        [
          "12",
          "{ }",
          "Technology & Computing",
          "Build, break, debug and improve.",
          "technology-exploration.html"
        ],
        [
          "13",
          "⚙ ↗",
          "Engineering & Making",
          "Design knowledge that works in the world.",
          "engineering-exploration.html"
        ],
        [
          "14",
          "♡ ⚕",
          "Medical & Health",
          "Learn the science. Keep the human.",
          "medical-exploration.html"
        ],
        [
          "15",
          "↗ idea",
          "Business & Enterprise",
          "Create value without losing your values.",
          "business-exploration.html"
        ],
        [
          "16",
          "⌁ 🔧",
          "Trade & Vocational",
          "Learn through skilled hands and real practice.",
          "trade-exploration.html"
        ]
      ]
    }
  ];

  const filters = $("#filters");
  const pathGrid = $("#pathGrid");
  const empty = $("#empty");

  if (filters && pathGrid) {
    filters.className = "courtyard-chooser";
    filters.setAttribute("role", "tablist");

    filters.setAttribute(
      "aria-label",
      "Choose an exploration courtyard"
    );

    filters.replaceChildren();

    pathGrid.className = "courtyard-panels";
    pathGrid.replaceChildren();

    if (empty) empty.hidden = true;

    courtyards.forEach((courtyard, index) => {
      const tab = document.createElement("button");

      tab.type = "button";

      tab.className =
        `courtyard-door courtyard-door--${courtyard.colour}`;

      tab.id = `tab-${courtyard.id}`;

      tab.setAttribute("role", "tab");

      tab.setAttribute(
        "aria-controls",
        `panel-${courtyard.id}`
      );

      tab.setAttribute(
        "aria-selected",
        String(index === 0)
      );

      tab.tabIndex = index === 0 ? 0 : -1;

      tab.innerHTML = `
        <span class="door-number">
          COURTYARD ${courtyard.number}
        </span>

        <span class="door-name">
          ${courtyard.label}
        </span>

        <span class="door-hindi" lang="hi">
          ${courtyard.hindi}
        </span>

        <span class="door-description">
          ${courtyard.description}
        </span>

        <span class="door-action">
          Enter <b aria-hidden="true">→</b>
        </span>
      `;

      filters.appendChild(tab);

      const panel = document.createElement("section");

      panel.className =
        `courtyard-panel courtyard-panel--${courtyard.colour}`;

      panel.id = `panel-${courtyard.id}`;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tab.id);

      panel.tabIndex = 0;
      panel.hidden = index !== 0;

      panel.innerHTML = `
        <div class="courtyard-intro">
          <div>
            <p class="eyebrow">
              ${courtyard.number} · ${courtyard.label}
            </p>

            <h3>${courtyard.title}</h3>
          </div>

          <p>${courtyard.description}</p>
        </div>

        <div class="courtyard-paths"></div>
      `;

      const cardContainer =
        $(".courtyard-paths", panel);

      courtyard.paths.forEach((path) => {
        const card = document.createElement("a");

        card.className = "path-card";
        card.href = path[4];

        card.innerHTML = `
          <div class="path-top">
            <span class="path-number">
              PATH ${path[0]}
            </span>

            <span
              class="path-icon"
              aria-hidden="true"
            >
              ${path[1]}
            </span>
          </div>

          <h4>${path[2]}</h4>

          <p>${path[3]}</p>

          <span class="path-link">
            Explore this path
            <b aria-hidden="true">→</b>
          </span>
        `;

        cardContainer.appendChild(card);
      });

      pathGrid.appendChild(panel);
    });

    const tabs = $$(
      "[role='tab']",
      filters
    );

    const panels = $$(
      "[role='tabpanel']",
      pathGrid
    );

    const openCourtyard = (
      selectedTab,
      focusPanel = false
    ) => {
      tabs.forEach((tab) => {
        const isSelected = tab === selectedTab;

        tab.setAttribute(
          "aria-selected",
          String(isSelected)
        );

        tab.tabIndex = isSelected ? 0 : -1;
      });

      panels.forEach((panel) => {
        panel.hidden =
          panel.id !==
          selectedTab.getAttribute("aria-controls");
      });

      if (focusPanel) {
        const panelId =
          selectedTab.getAttribute("aria-controls");

        const selectedPanel =
          document.getElementById(panelId);

        selectedPanel?.focus({
          preventScroll: true
        });
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        openCourtyard(tab, true);
      });

      tab.addEventListener("keydown", (event) => {
        let nextIndex = null;

        if (
          event.key === "ArrowRight" ||
          event.key === "ArrowDown"
        ) {
          nextIndex = (index + 1) % tabs.length;
        }

        if (
          event.key === "ArrowLeft" ||
          event.key === "ArrowUp"
        ) {
          nextIndex =
            (index - 1 + tabs.length) %
            tabs.length;
        }

        if (event.key === "Home") {
          nextIndex = 0;
        }

        if (event.key === "End") {
          nextIndex = tabs.length - 1;
        }

        if (nextIndex === null) return;

        event.preventDefault();

        tabs[nextIndex].focus();
        openCourtyard(tabs[nextIndex]);
      });
    });
  }

  /* -------------------------------------------
     KNOWLEDGE RIVER BUTTONS
  ------------------------------------------- */

  const vesselCopy = {
    cup: [
      "One idea",
      "Choose something useful today."
    ],
    bucket: [
      "One practice",
      "Stay long enough to try, adjust and understand."
    ],
    river: [
      "Something to share",
      "Let learning move through service, teaching and care."
    ]
  };

  $$("#vessels button").forEach((button) => {
    button.addEventListener("click", () => {
      $$("#vessels button").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const copy =
        vesselCopy[button.dataset.vessel];

      const result = $("#waterResult");

      if (result && copy) {
        result.innerHTML = `
          <p class="eyebrow">YOUR CHOICE</p>
          <h3>${copy[0]}</h3>
          <p>${copy[1]}</p>
        `;
      }
    });
  });

  /* -------------------------------------------
     MOBILE MENU
  ------------------------------------------- */

  const menu = $("#menu");
  const nav = $("#nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const isOpen =
        menu.getAttribute("aria-expanded") === "true";

      menu.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      nav.classList.toggle("open", !isOpen);
    });

    $$("a", nav).forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");

        menu.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
  }

  /* -------------------------------------------
     COURTYARD NOTE DIALOG
  ------------------------------------------- */

  const dialog = $("#entryDialog");
  const openNote = $("#openNote");
  const closeNote = $("#closeNote");
  const carryNote = $("#carryNote");

  if (
    dialog &&
    openNote &&
    closeNote &&
    carryNote
  ) {
    openNote.addEventListener("click", () => {
      dialog.showModal();
    });

    closeNote.addEventListener("click", () => {
      dialog.close();
    });

    carryNote.addEventListener("click", () => {
      dialog.close();

      openNote.textContent =
        "Courtyard note carried ✓";
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }

  /* -------------------------------------------
     SOURCES
  ------------------------------------------- */

  const sourceToggle = $("#sourceToggle");
  const sourceList = $("#sourceList");

  if (sourceToggle && sourceList) {
    sourceToggle.addEventListener("click", () => {
      const isOpen =
        sourceToggle.getAttribute("aria-expanded") ===
        "true";

      sourceToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      sourceList.hidden = isOpen;

      const symbol = $("b", sourceToggle);

      if (symbol) {
        symbol.textContent = isOpen ? "+" : "−";
      }
    });
  }

  /* -------------------------------------------
     PAGE PROGRESS BAR
  ------------------------------------------- */

  const progress = $("#progress");

  if (progress) {
    const updateProgress = () => {
      const maximum =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        maximum > 0
          ? (window.scrollY / maximum) * 100
          : 0;

      progress.style.height =
        `${percentage}%`;
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );
  }
})();

