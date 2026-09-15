(() => {
  const origins = [
    {
      era: "Before writing",
      title: "Bodies become instruments",
      place: "Across human communities",
      evidence:
        "Voice, clapping, stamping and found objects require no specialised instrument. Music may have grown with movement, play, bonding, ritual and communication.",
      caution:
        "We cannot identify one first song or purpose. Sound rarely fossilises, so certainty should stay modest."
    },
    {
      era: "Deep prehistory",
      title: "Flutes survive where melodies do not",
      place: "Europe and beyond",
      evidence:
        "Very old bone and ivory flutes show that people deliberately shaped material to control pitch tens of thousands of years ago.",
      caution:
        "A surviving flute is evidence of music-making—not proof that instrumental music began in that place."
    },
    {
      era: "c. 2600–2400 BCE",
      title: "Lyres beside the dead",
      place: "Ur · Ancient Mesopotamia",
      evidence:
        "Elaborate lyres found in the Royal Cemetery at Ur reveal specialised makers, performers and the importance of music in elite ritual life.",
      caution:
        "Archaeology preserves objects and royal settings more readily than the experiences of ordinary musicians."
    },
    {
      era: "Ancient era",
      title: "Hymn becomes melodic memory",
      place: "South Asia",
      evidence:
        "The Sama Veda arranges verses for musical chanting. Exact oral methods helped transmit sound, language and ritual knowledge across generations.",
      caution:
        "Vedic chant is a living sacred tradition, not background music or a single summary of Indian music."
    },
    {
      era: "1st millennium BCE",
      title: "Bronze bells organise pitch",
      place: "Ancient China",
      evidence:
        "Tuned sets of bronze bells demonstrate sophisticated knowledge of pitch and ensemble performance within ritual and political life.",
      caution:
        "Court objects illuminate power and ceremony, but they do not represent every community’s musical world."
    },
    {
      era: "Living inheritance",
      title: "History carried by a performer",
      place: "Mande traditions · West Africa",
      evidence:
        "Griots or jeliw may combine music, genealogy, counsel and oral history. Performance keeps knowledge responsive to people and occasions.",
      caution:
        "These are diverse living professions and traditions—not unchanged remains of an ancient Africa."
    },
    {
      era: "Living inheritance",
      title: "Song, Country and responsibility",
      place: "First Nations Australia",
      evidence:
        "Across many distinct Aboriginal and Torres Strait Islander traditions, song can connect knowledge, place, kinship, ceremony and law.",
      caution:
        "Knowledge may be community-owned, gendered or restricted. Not every song or story is open for outsiders to copy or perform."
    }
  ];

  const atlas = [
    {
      id: "mesopotamia",
      symbol: "𒀭",
      name: "Ancient Mesopotamia",
      carried: "Ritual, courtly life and lament",
      sound:
        "Lyres, harps, pipes, drums and voices appear in surviving objects and texts.",
      word:
        "Hymns and laments addressed deities, cities, rulers, loss and disorder.",
      question:
        "What does a community sing when a city itself seems to suffer?",
      note:
        "Written notation survives only in fragments, and scholarly interpretations differ. A modern performance is a reconstruction—not a recording of the ancient sound."
    },
    {
      id: "southasia",
      symbol: "ॐ",
      name: "South Asia",
      carried: "Chant, devotion, story and disciplined listening",
      sound:
        "Voice, drone, rhythmic cycles and melodic frameworks developed across many regions and traditions.",
      word:
        "Sacred chant, epic recitation, devotional poetry and courtly forms joined language to sound in different ways.",
      question:
        "Can repetition preserve a text while also changing the person who repeats it?",
      note:
        "There is no single Indian music. Sacred, classical, folk, film and community traditions have distinct histories and contexts."
    },
    {
      id: "china",
      symbol: "鐘",
      name: "Ancient China",
      carried: "Ritual order, philosophy and court ceremony",
      sound:
        "Tuned bells, zithers, flutes and drums connected material craftsmanship with systems of pitch.",
      word:
        "Poetry, ethics and music were often discussed together as forces capable of shaping feeling and social conduct.",
      question:
        "If music can train emotion, can it also influence how a society behaves?",
      note:
        "Elite instruments survive disproportionately. Court traditions provide one window—not the entire soundscape."
    },
    {
      id: "mediterranean",
      symbol: "Λ",
      name: "Ancient Mediterranean",
      carried: "Poetry, theatre, education and civic ritual",
      sound:
        "Lyres, kitharas, auloi, percussion and voices accompanied song, drama and gatherings.",
      word:
        "Poetry was often heard in performance rather than read silently. Its metre was physical and musical.",
      question:
        "What changes when a poem is sung to a room instead of read alone?",
      note:
        "Greek and Roman music cover long periods, many regions and considerable social differences. Surviving theory cannot recreate every practice."
    },
    {
      id: "mande",
      symbol: "✺",
      name: "Mande sound worlds",
      carried: "Genealogy, counsel, praise and public memory",
      sound:
        "Voice may meet the kora, balafon and ngoni within specialised living traditions.",
      word:
        "A performer can preserve names and events while shaping their presentation for the present audience.",
      question:
        "Is history still history when rhythm, audience and performance help create it?",
      note:
        "Use community-preferred names and living performers as guides. Do not present griots as museum figures from a finished past."
    },
    {
      id: "firstnations",
      symbol: "◌",
      name: "First Nations Australia",
      carried: "Country, kinship, ceremony and knowledge",
      sound:
        "Hundreds of Nations hold distinct vocal, rhythmic, instrumental and ceremonial practices.",
      word:
        "Songs may map relationships and responsibilities as much as they tell a linear story.",
      question:
        "What if knowing a place also means knowing how—and whether—you may sing it?",
      note:
        "Some knowledge is restricted. Learn from the relevant Traditional Owners and do not reproduce ceremonial material without permission."
    }
  ];

  const prompts = {
    grief: [
      "Name what is missing without naming the feeling.",
      "Let the second line repeat one word the first line could not release.",
      "Place the memory inside a physical object.",
      "End with something that continues despite the loss."
    ],

    wonder: [
      "Begin with a small thing that suddenly seems enormous.",
      "Ask a question no instrument can fully answer.",
      "Give the sky, river or room one human action.",
      "End before the mystery closes."
    ],

    belonging: [
      "Begin with a sound that tells you where you are.",
      "Name a person, place or habit that carries home.",
      "Let one line be answered by an imagined chorus.",
      "End with what you promise to carry forward."
    ],

    resistance: [
      "Begin with the rule you refuse to accept.",
      "Turn a quiet object into a witness.",
      "Make the third line short enough to chant together.",
      "End with a future written as an action."
    ],

    hope: [
      "Begin in darkness without pretending it is gone.",
      "Introduce one ordinary sign of change.",
      "Let another voice enter the third line.",
      "End with a door—not a victory speech."
    ]
  };

  const paths = {
    voice: {
      title: "Follow breath into voice",
      text:
        "Begin with humming, call-and-response, choir, chant traditions and the mechanics of resonance.",
      tags: [
        "Singing",
        "Choir",
        "Vocal traditions",
        "Breath",
        "Language"
      ]
    },

    rhythm: {
      title: "Follow the organising pulse",
      text:
        "Explore percussion, body rhythm, dance, metre and how groups synchronise through time.",
      tags: [
        "Percussion",
        "Dance",
        "Polyrhythm",
        "Ensemble",
        "Movement"
      ]
    },

    story: {
      title: "Follow words into song",
      text:
        "Explore lyric writing, oral history, epic, spoken word, translation and songs of protest or devotion.",
      tags: [
        "Poetry",
        "Songwriting",
        "Oral history",
        "Languages",
        "Story"
      ]
    },

    making: {
      title: "Follow material into sound",
      text:
        "Explore how wood, skin, metal, string, air and electronics become instruments—and how design changes tone.",
      tags: [
        "Instrument making",
        "Acoustics",
        "Composition",
        "Craft",
        "Sound design"
      ]
    }
  };

  const qs = (selector, root = document) =>
    root.querySelector(selector);

  const qsa = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  function renderOrigins() {
    const host = qs("#originTimeline");

    if (!host) return;

    origins.forEach((item, index) => {
      const article = document.createElement("article");

      article.className = "origin-item reveal";

      article.innerHTML = `
        <time>${item.era}</time>

        <div class="origin-card">
          <button
            type="button"
            aria-expanded="${index === 0}"
          >
            <span>
              <span class="eyebrow">${item.place}</span>
              <h3>${item.title}</h3>
            </span>

            <b>${index === 0 ? "−" : "+"}</b>
          </button>

          <div
            class="origin-reveal"
            ${index === 0 ? "" : "hidden"}
          >
            <div>
              <span>WHAT THE EVIDENCE SUGGESTS</span>
              <p>${item.evidence}</p>
            </div>

            <div>
              <span>LISTEN WITH CAUTION</span>
              <p>${item.caution}</p>
            </div>
          </div>
        </div>
      `;

      const button = qs("button", article);

      button.addEventListener("click", (event) => {
        const clickedButton = event.currentTarget;
        const panel = qs(".origin-reveal", article);

        const isOpen =
          clickedButton.getAttribute("aria-expanded") === "true";

        clickedButton.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );

        panel.hidden = isOpen;

        qs("b", clickedButton).textContent =
          isOpen ? "+" : "−";
      });

      host.appendChild(article);
    });
  }

  function renderAtlas() {
    const tabs = qs("#atlasTabs");
    const leaf = qs("#atlasLeaf");

    if (!tabs || !leaf) return;

    const showTradition = (item) => {
      qsa("button", tabs).forEach((button) => {
        button.setAttribute(
          "aria-selected",
          String(button.dataset.id === item.id)
        );
      });

      leaf.innerHTML = `
        <div class="atlas-label">
          <span class="atlas-symbol" aria-hidden="true">
            ${item.symbol}
          </span>

          <p class="eyebrow">
            LISTENING LEAF · ${item.id.toUpperCase()}
          </p>

          <h3>${item.name}</h3>

          <p class="carried">${item.carried}</p>
        </div>

        <div class="leaf-grid">
          <div>
            <span>Sound</span>
            <h4>What was heard?</h4>
            <p>${item.sound}</p>
          </div>

          <div>
            <span>Word</span>
            <h4>What did language carry?</h4>
            <p>${item.word}</p>
          </div>

          <div>
            <span>Question</span>
            <h4>Listen beyond the object</h4>
            <p>${item.question}</p>
          </div>

          <p class="atlas-note">
            <strong>Archive caution:</strong>
            ${item.note}
          </p>
        </div>
      `;
    };

    atlas.forEach((item, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.role = "tab";
      button.dataset.id = item.id;

      button.setAttribute(
        "aria-selected",
        String(index === 0)
      );

      button.textContent = item.name;

      button.addEventListener("click", () => {
        showTradition(item);
      });

      button.addEventListener("keydown", (event) => {
        const arrowKeys = ["ArrowLeft", "ArrowRight"];

        if (!arrowKeys.includes(event.key)) return;

        event.preventDefault();

        const buttons = qsa("button", tabs);
        const currentIndex = buttons.indexOf(button);
        const direction =
          event.key === "ArrowRight" ? 1 : -1;

        const nextIndex =
          (currentIndex + direction + buttons.length) %
          buttons.length;

        buttons[nextIndex].focus();
        buttons[nextIndex].click();
      });

      tabs.appendChild(button);
    });

    showTradition(atlas[0]);
  }

  let audioContext;

  function playTone(
    frequency,
    start,
    duration,
    type = "sine",
    gain = 0.035
  ) {
    const AudioContext =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    audioContext ||= new AudioContext();

    const oscillator = audioContext.createOscillator();
    const volume = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    const beginning =
      audioContext.currentTime + start;

    volume.gain.setValueAtTime(0, beginning);

    volume.gain.linearRampToValueAtTime(
      gain,
      beginning + 0.025
    );

    volume.gain.exponentialRampToValueAtTime(
      0.0001,
      beginning + duration
    );

    oscillator.connect(volume);
    volume.connect(audioContext.destination);

    oscillator.start(beginning);

    oscillator.stop(
      beginning + duration + 0.03
    );
  }

  function initSoundExperiments() {
    const controls = qs("#toneControls");
    const status = qs("#soundStatus");

    if (!controls || !status) return;

    qsa("button", controls).forEach((button) => {
      button.addEventListener("click", () => {
        qsa("button", controls).forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");

        const sound = button.dataset.sound;

        if (sound === "pulse") {
          [0, 0.34, 0.68, 1.02].forEach((start) => {
            playTone(
              150,
              start,
              0.18,
              "triangle",
              0.025
            );
          });

          status.textContent =
            "A repeated pulse makes separate moments feel connected.";
        }

        if (sound === "drone") {
          playTone(
            110,
            0,
            2.4,
            "sine",
            0.025
          );

          playTone(
            165,
            0,
            2.4,
            "sine",
            0.012
          );

          status.textContent =
            "A drone creates a tonal ground. Notice how long sound changes your sense of time.";
        }

        if (sound === "interval") {
          playTone(
            220,
            0,
            1.4,
            "sine",
            0.025
          );

          playTone(
            330,
            0.42,
            1.3,
            "sine",
            0.022
          );

          status.textContent =
            "A second pitch turns one sound into a relationship.";
        }

        if (sound === "silence") {
          status.textContent =
            "No tone played. Notice the sounds already present around you.";
        }
      });
    });
  }

  function initWritingPrompt() {
    const button = qs("#makePrompt");
    const select = qs("#emotionSelect");
    const output = qs("#promptSlip");

    if (!button || !select || !output) return;

    const currentIndexes = {};

    button.addEventListener("click", () => {
      const emotion = select.value;

      const previousIndex =
        currentIndexes[emotion] ?? -1;

      const nextIndex =
        (previousIndex + 1) %
        prompts[emotion].length;

      currentIndexes[emotion] = nextIndex;

      const heading =
        emotion.charAt(0).toUpperCase() +
        emotion.slice(1);

      output.innerHTML = `
        <p>
          <strong>${heading}:</strong>
          ${prompts[emotion][nextIndex]}
        </p>
      `;
    });
  }

  function initPathfinder() {
    const result = qs("#pathResult");
    const choices = qs("#pathChoices");

    if (!result || !choices) return;

    qsa("button", choices).forEach((button) => {
      button.addEventListener("click", () => {
        qsa("button", choices).forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");

        const selectedPath =
          paths[button.dataset.path];

        if (!selectedPath) return;

        result.innerHTML = `
          <span class="compass" aria-hidden="true">
            ◉
          </span>

          <div>
            <p class="eyebrow">
              A DOORWAY TO INVESTIGATE
            </p>

            <h3>${selectedPath.title}</h3>

            <p>${selectedPath.text}</p>

            <div class="tags">
              ${selectedPath.tags
                .map((tag) => `<span>${tag}</span>`)
                .join("")}
            </div>
          </div>
        `;
      });
    });
  }

  function initNavigation() {
    const menuButton = qs("#menuButton");
    const navigation = qs("#mainNav");
    const progress = qs("#scrollProgress");

    if (menuButton && navigation) {
      menuButton.addEventListener("click", () => {
        const isOpen =
          menuButton.getAttribute("aria-expanded") ===
          "true";

        menuButton.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );

        navigation.classList.toggle(
          "open",
          !isOpen
        );
      });

      qsa("a", navigation).forEach((link) => {
        link.addEventListener("click", () => {
          navigation.classList.remove("open");

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );
        });
      });
    }

    if (progress) {
      window.addEventListener(
        "scroll",
        () => {
          const maximumScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

          const percentage = maximumScroll
            ? (window.scrollY / maximumScroll) * 100
            : 0;

          progress.style.height =
            `${percentage}%`;
        },
        { passive: true }
      );
    }
  }

  function initSources() {
    const toggle = qs("#sourceToggle");
    const list = qs("#sourceList");

    if (!toggle || !list) return;

    toggle.addEventListener("click", () => {
      const isOpen =
        toggle.getAttribute("aria-expanded") ===
        "true";

      toggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      list.hidden = isOpen;

      const symbol = qs("b", toggle);

      if (symbol) {
        symbol.textContent =
          isOpen ? "+" : "−";
      }
    });
  }

  function initVowDialog() {
    const dialog = qs("#vowDialog");
    const openButton = qs("#openVow");
    const closeButton = qs("#closeVow");
    const acceptButton = qs("#acceptVow");

    if (
      !dialog ||
      !openButton ||
      !closeButton ||
      !acceptButton
    ) {
      return;
    }

    openButton.addEventListener("click", () => {
      dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
      dialog.close();
    });

    acceptButton.addEventListener("click", () => {
      dialog.close();

      openButton.textContent =
        "Vow carried ✓";
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }

  function initScrollReveals() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealItems = qsa(".reveal");

    if (reducedMotion) {
      revealItems.forEach((item) => {
        item.classList.add("visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach((item) => {
      observer.observe(item);
    });
  }

  renderOrigins();
  renderAtlas();
  initSoundExperiments();
  initWritingPrompt();
  initPathfinder();
  initNavigation();
  initSources();
  initVowDialog();
  initScrollReveals();
})();
