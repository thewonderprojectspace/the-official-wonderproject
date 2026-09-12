(() => {
  "use strict";

  const activities = [
    {
      id: 1,
      symbol: "⚖",
      title: "The Shastrartha Sabha",
      region: "India · structured scholarly debate",
      subjects: ["Philosophy", "Science", "Civics"],
      method: "Debate",
      time: 45,
      mode: "team",
      summary:
        "Test an idea through disciplined questions, counterclaims and respectful public reasoning.",
      origin:
        "Inspired by Indian traditions of scholarly dialogue and philosophical disputation.",
      materials: [
        "One debatable proposition",
        "Evidence cards",
        "A timer",
        "A speaking token"
      ],
      steps: [
        "Divide into proposition, opposition and questioners.",
        "Each side states its strongest claim and supporting evidence.",
        "Questioners challenge an assumption, definition or source.",
        "Each side must accurately restate the other argument before replying.",
        "Record which evidence—not which speaker—changed your thinking."
      ],
      questions: [
        "Which assumption was doing the most work?",
        "Did confidence ever disguise weak evidence?",
        "What would make you revise your position?"
      ],
      respect:
        "Present this as one family of Indian intellectual traditions, not as the single way everyone in India learned."
    },

    {
      id: 2,
      symbol: "◯",
      title: "The Halaqa Evidence Circle",
      region: "Islamic scholarly traditions",
      subjects: ["History", "English", "Religious Studies"],
      method: "Discussion",
      time: 45,
      mode: "team",
      summary:
        "Build knowledge in a circle where every important claim must show where it came from.",
      origin:
        "Inspired by the halaqa: a circle for teaching, discussion and the transmission of knowledge.",
      materials: [
        "A central question",
        "Three short sources",
        "Claim and source cards"
      ],
      steps: [
        "Sit in a circle with the question placed at its centre.",
        "Offer one claim and name the source supporting it.",
        "A peer tests the source for authority, context and possible bias.",
        "Separate what is known, inferred and still uncertain.",
        "Create a chain showing how the conclusion was reached."
      ],
      questions: [
        "Can a reliable source still be incomplete?",
        "Where does interpretation enter the chain?",
        "Which uncertainty should remain visible?"
      ],
      respect:
        "Use accurate historical framing and avoid imitating religious rituals or sacred recitation."
    },

    {
      id: 3,
      symbol: "?",
      title: "The Socratic Courtyard",
      region: "Ancient Greece",
      subjects: ["Philosophy", "English", "Civics"],
      method: "Questioning",
      time: 45,
      mode: "team",
      summary:
        "Reach a better question by exposing contradictions hidden inside an easy answer.",
      origin:
        "Inspired by Socratic questioning represented in classical Greek philosophical texts.",
      materials: [
        "One deceptively simple question",
        "A chalk circle",
        "Reflection cards"
      ],
      steps: [
        "Place the opening question in the centre.",
        "Students may respond only with questions during the first round.",
        "Identify two answers that cannot both be true without qualification.",
        "Define the key word everyone has been using differently.",
        "Write the more difficult question the group discovered."
      ],
      questions: [
        "What did we think was obvious?",
        "Which definition changed the conversation?",
        "Did questioning clarify or merely complicate?"
      ],
      respect:
        "Distinguish the historical Socrates from the interpretations later writers created."
    },

    {
      id: 4,
      symbol: "◎",
      title: "The Griot Memory Trial",
      region: "West African oral traditions",
      subjects: ["History", "English", "Media"],
      method: "Storytelling",
      time: 45,
      mode: "team",
      summary:
        "Discover how rhythm, structure and responsibility allow history to travel without paper.",
      origin:
        "Inspired by West African traditions of oral historians and knowledge keepers, often described as griots or jeliw.",
      materials: [
        "An approved public historical account",
        "Audio recorder",
        "Sequence tokens"
      ],
      steps: [
        "Hear the account once without taking notes.",
        "Retell it in groups using repeated phrases or rhythm.",
        "Compare the different versions and mark what shifted.",
        "Investigate why certain details were easier to remember.",
        "Record a careful final version and identify its source."
      ],
      questions: [
        "What makes oral evidence durable?",
        "Is written memory automatically more reliable?",
        "Who carries responsibility for a shared story?"
      ],
      respect:
        "Use public accounts from named communities. Students should not impersonate griots or perform restricted community knowledge."
    },

    {
      id: 5,
      symbol: "⌘",
      title: "The Apprentice’s Workshop",
      region: "Craft traditions across many regions",
      subjects: ["Design", "Technology", "Art"],
      method: "Making",
      time: 90,
      mode: "team",
      summary:
        "Learn a useful skill by watching closely, practising deliberately and teaching it onward.",
      origin:
        "Inspired by master–apprentice learning found in craft, trade and artistic traditions around the world.",
      materials: [
        "A safe practical task",
        "Basic tools",
        "Scrap materials",
        "Quality checklist"
      ],
      steps: [
        "The first maker demonstrates silently while apprentices observe.",
        "Apprentices list the decisions they noticed—not only the actions.",
        "Each learner makes one attempt and receives precise feedback.",
        "Roles switch so every apprentice teaches another learner.",
        "Compare the first and final objects for evidence of transmitted skill."
      ],
      questions: [
        "What could observation reveal that instructions missed?",
        "Which mistake improved the technique?",
        "How did teaching change your own skill?"
      ],
      respect:
        "Credit the craft and maker accurately. Do not reproduce culturally protected designs or sacred objects."
    },

    {
      id: 6,
      symbol: "算",
      title: "The Merchant’s Abacus",
      region: "China and East Asia",
      subjects: ["Mathematics", "Economics"],
      method: "Calculation",
      time: 20,
      mode: "either",
      summary:
        "Run a market ledger using place value, moving beads and mental calculation.",
      origin:
        "Inspired by the Chinese suanpan and related East Asian abacus traditions.",
      materials: [
        "Abacus or printable bead frame",
        "Market ledger",
        "Price and tax cards"
      ],
      steps: [
        "Learn how the columns encode place value.",
        "Record three purchases and calculate the running balance.",
        "Apply a changing tax or discount without clearing the frame.",
        "Trade ledgers with a partner for an audit.",
        "Explain one calculation using both beads and symbols."
      ],
      questions: [
        "Where is zero represented?",
        "How does the tool make regrouping visible?",
        "When is a physical representation faster than notation?"
      ],
      respect:
        "Name the specific tool being used. Chinese suanpan, Japanese soroban and other abacuses have different structures."
    },

    {
      id: 7,
      symbol: "¤",
      title: "The Bazaar Bargain",
      region: "Markets across Asia, Africa and the Middle East",
      subjects: ["Mathematics", "Economics", "Languages"],
      method: "Simulation",
      time: 45,
      mode: "team",
      summary:
        "Negotiate scarce goods while prices, information and trust keep changing.",
      origin:
        "Inspired by marketplaces as spaces of calculation, language, negotiation and social exchange.",
      materials: [
        "Goods cards",
        "Tokens",
        "Secret buyer and seller goals",
        "Market-event cards"
      ],
      steps: [
        "Assign buyers, sellers, recorders and observers.",
        "Negotiate the first round with unequal information.",
        "Reveal an event affecting supply or demand.",
        "Run a second round and record every price.",
        "Graph the results and identify where power influenced value."
      ],
      questions: [
        "Is the lowest price always fair?",
        "How did information change bargaining power?",
        "Where did trust have economic value?"
      ],
      respect:
        "Avoid accents, costumes and caricatures. Focus on exchange, numeracy and social systems."
    },

    {
      id: 8,
      symbol: "⌁",
      title: "The Quipu Code Mystery",
      region: "Andes · Inka record-keeping",
      subjects: ["Mathematics", "History", "Computing"],
      method: "Coding",
      time: 45,
      mode: "team",
      summary:
        "Encode a dataset using knots, colour and position, then test whether another group can recover it.",
      origin:
        "Inspired by Andean khipu or quipu: complex cord records associated especially with Inka administration.",
      materials: [
        "Coloured cord",
        "Dataset cards",
        "Tags",
        "A codebook"
      ],
      steps: [
        "Study what historians know and still debate about khipu.",
        "Invent a transparent cord code for a small dataset.",
        "Encode the data without using written numerals.",
        "Exchange records and attempt to decode them.",
        "Evaluate which features made the record reliable or ambiguous."
      ],
      questions: [
        "What can a physical code store effectively?",
        "What knowledge does decoding require?",
        "How is uncertainty represented in historical interpretation?"
      ],
      respect:
        "Do not claim the invented classroom code is an authentic khipu. Separate the historical system from the modelling activity."
    },

    {
      id: 9,
      symbol: "✦",
      title: "The Wayfinder’s Sky",
      region: "Pacific voyaging knowledge",
      subjects: ["Astronomy", "Geography", "Physics"],
      method: "Navigation",
      time: 90,
      mode: "team",
      summary:
        "Plan a voyage using stars, swell, wind and living signs instead of satellite directions.",
      origin:
        "Inspired by sophisticated navigation knowledge maintained by Pacific voyaging communities.",
      materials: [
        "Sky map",
        "Voyage chart",
        "Wind and swell clues",
        "Compass for later comparison"
      ],
      steps: [
        "Locate the departure point and intended destination.",
        "Use a reputable star-compass resource to select a heading.",
        "Respond to changing swell, weather and wildlife clues.",
        "Draw the route from memory.",
        "Compare this relational system with coordinate navigation."
      ],
      questions: [
        "What must a navigator continuously notice?",
        "How does the ocean become a map?",
        "What does GPS allow us to stop learning?"
      ],
      respect:
        "Use resources created or endorsed by Pacific navigators. Do not present all Pacific traditions as identical."
    },

    {
      id: 10,
      symbol: "☼",
      title: "The Seasonal Calendar",
      region: "Indigenous and agricultural knowledge worldwide",
      subjects: ["Biology", "Geography", "Environmental Science"],
      method: "Observation",
      time: 90,
      mode: "either",
      summary:
        "Read a season through flowering, animal behaviour, wind and water—not only through a date.",
      origin:
        "Inspired by place-specific ecological calendars created through long-term observation.",
      materials: [
        "Observation journal",
        "Local field guide",
        "Weather record",
        "Camera if permitted"
      ],
      steps: [
        "Choose a safe local observation site.",
        "Record five biological or atmospheric signals.",
        "Compare observations with an approved local seasonal calendar.",
        "Return later or use archived observations to detect change.",
        "Create an evidence-based seasonal entry for this place."
      ],
      questions: [
        "Which signals are more useful than temperature alone?",
        "What happens when climate patterns shift?",
        "Whose observations are missing?"
      ],
      respect:
        "Indigenous calendars belong to specific peoples and places. Credit local knowledge holders and use approved sources."
    },

    {
      id: 11,
      symbol: "⌖",
      title: "The Community Knowledge Walk",
      region: "Community-based traditions worldwide",
      subjects: ["Geography", "Sociology", "Biology"],
      method: "Fieldwork",
      time: 90,
      mode: "team",
      summary:
        "Treat the neighbourhood as a living text by observing its work, language, ecology and change.",
      origin:
        "Inspired by place-based and intergenerational approaches to learning through walking, observing and listening.",
      materials: [
        "Route map",
        "Field notebook",
        "Consent questions",
        "Audio recorder if permitted"
      ],
      steps: [
        "Choose one inquiry: water, work, language, plants or architecture.",
        "Mark evidence along a safe planned route.",
        "Ask a community member a consent-based question.",
        "Compare visible evidence with an official map or dataset.",
        "Create a layered map showing what an ordinary map leaves out."
      ],
      questions: [
        "Who is recognised as an expert?",
        "What cannot be understood from a desk?",
        "How has the place changed—and for whom?"
      ],
      respect:
        "Seek consent before recording people and follow local environmental and cultural protocols."
    },

    {
      id: 12,
      symbol: "▦",
      title: "The Memory Palace",
      region: "Ancient Greek and Roman rhetoric",
      subjects: ["Psychology", "Biology", "History"],
      method: "Memory",
      time: 20,
      mode: "solo",
      summary:
        "Store a difficult sequence inside an imagined building and retrieve it through a mental walk.",
      origin:
        "Inspired by the method of loci described in classical rhetorical traditions.",
      materials: [
        "A sequence to remember",
        "Sketch paper",
        "A familiar building or route"
      ],
      steps: [
        "Select ten fixed locations along a familiar route.",
        "Turn each concept into a vivid and unusual image.",
        "Place one image at every location.",
        "Walk through the route mentally and retrieve the sequence.",
        "Test your recall later and compare it with rereading."
      ],
      questions: [
        "Why are strange images memorable?",
        "What knowledge resists this method?",
        "Does remembering something mean understanding it?"
      ],
      respect:
        "Present it as a mnemonic technique rather than a magical or universally superior learning method."
    },

    {
      id: 13,
      symbol: "墨",
      title: "The Calligrapher’s Focus",
      region: "East Asian and other manuscript traditions",
      subjects: ["Art", "Languages", "Psychology"],
      method: "Making",
      time: 20,
      mode: "solo",
      summary:
        "Investigate how deliberate movement, repetition and attention affect memory.",
      origin:
        "Inspired by manuscript and calligraphic traditions found across different regions.",
      materials: [
        "Brush or broad pen",
        "Ink",
        "Practice paper",
        "A public-domain proverb or principle"
      ],
      steps: [
        "Research the writing tradition and tool being used.",
        "Study the meaning and structure of a short text.",
        "Copy it slowly three times, changing only spacing and pressure.",
        "Reproduce its meaning from memory.",
        "Reflect on whether physical attention affected recall."
      ],
      questions: [
        "When does repetition become thoughtless?",
        "Can form alter meaning?",
        "What did your hand notice before your mind named it?"
      ],
      respect:
        "Do not mix writing systems as decoration. Use correct examples, meanings and writing directions."
    },

    {
      id: 14,
      symbol: "¶",
      title: "The Marginalia Exchange",
      region: "European and Mediterranean manuscript cultures",
      subjects: ["English", "History", "Religious Studies"],
      method: "Annotation",
      time: 45,
      mode: "team",
      summary:
        "Hold a conversation across the page by questioning a text and answering earlier readers.",
      origin:
        "Inspired by notes, glosses and arguments preserved in handwritten and early printed texts.",
      materials: [
        "A large-format source text",
        "Three ink colours",
        "Annotation key"
      ],
      steps: [
        "First readers mark claims, confusing terms and missing context.",
        "Second readers answer a question or dispute an interpretation.",
        "Third readers connect the text to another source.",
        "Trace one idea through the entire chain of notes.",
        "Explain the most valuable disagreement."
      ],
      questions: [
        "When does annotation illuminate rather than distract?",
        "How does a later reader change a text?",
        "Which voice holds authority on the page?"
      ],
      respect:
        "Use reproductions that may be legally and ethically annotated. Never mark an original or sacred text."
    },

    {
      id: 15,
      symbol: "◇",
      title: "The Living Geometry Studio",
      region: "Islamic geometric design traditions",
      subjects: ["Mathematics", "Art", "Architecture"],
      method: "Making",
      time: 90,
      mode: "either",
      summary:
        "Construct a repeating pattern and uncover the transformations holding it together.",
      origin:
        "Inspired by geometric design traditions across Islamic art and architecture.",
      materials: [
        "Compass",
        "Straightedge",
        "Tracing paper",
        "Grid paper"
      ],
      steps: [
        "Study one accurately identified architectural pattern.",
        "Find its underlying circle, polygon or grid.",
        "Reconstruct a unit using a compass and straightedge.",
        "Repeat it through rotation, reflection or translation.",
        "Explain the mathematics without reducing the artwork to mathematics alone."
      ],
      questions: [
        "Where does the eye find order?",
        "Which transformation creates continuity?",
        "What is lost when cultural art becomes only a diagram?"
      ],
      respect:
        "Identify the building, region, period and source rather than calling everything an Islamic pattern."
    },

    {
      id: 16,
      symbol: "♟",
      title: "The Strategy Table",
      region: "Game traditions across Asia, Africa and Europe",
      subjects: ["Mathematics", "Psychology", "History"],
      method: "Game",
      time: 45,
      mode: "team",
      summary:
        "Play a historically grounded strategy game and investigate the decisions that changed its outcome.",
      origin:
        "Inspired by traditions surrounding chess, Go, mancala-family games and other strategy systems.",
      materials: [
        "One researched strategy game",
        "Turn record",
        "Decision tokens"
      ],
      steps: [
        "Learn the actual rules and cultural history of the game.",
        "Play once without interruption.",
        "Replay and pause at three turning points.",
        "Identify the information and options available at each point.",
        "Change one rule and predict how it alters the strategy."
      ],
      questions: [
        "Was the result caused by one move or an accumulation?",
        "What did you sacrifice for position?",
        "Does the game reward cooperation, aggression or patience?"
      ],
      respect:
        "Name the specific game and community instead of describing it as a generic ancient game."
    },

    {
      id: 17,
      symbol: "◒",
      title: "The Shadow Observatory",
      region: "Astronomical traditions worldwide",
      subjects: ["Physics", "Mathematics", "Astronomy"],
      method: "Observation",
      time: 90,
      mode: "team",
      summary:
        "Use a vertical stick and a moving shadow to turn sunlight into direction, time and measurement.",
      origin:
        "Inspired by gnomons and shadow observations used across multiple astronomical traditions.",
      materials: [
        "Straight stick",
        "Chalk or markers",
        "Measuring tape",
        "Clock for comparison"
      ],
      steps: [
        "Place a vertical stick on level ground and mark its shadow.",
        "Repeat the measurement at regular intervals.",
        "Plot shadow length and direction against time.",
        "Use the shortest shadow and movement pattern to infer direction.",
        "Explain errors caused by season, latitude and alignment."
      ],
      questions: [
        "What exactly is moving in the model?",
        "Why does the result depend on place and date?",
        "How could repeated observations become a calendar?"
      ],
      respect:
        "Recognise that many societies independently developed shadow-based astronomical knowledge."
    },

    {
      id: 18,
      symbol: "☷",
      title: "The Village Council",
      region: "Community deliberation traditions worldwide",
      subjects: ["Civics", "Environmental Science", "Economics"],
      method: "Simulation",
      time: 90,
      mode: "team",
      summary:
        "Reach a public decision when every possible choice helps one group and costs another.",
      origin:
        "Inspired by traditions of community assembly and collective deliberation.",
      materials: [
        "A local resource dilemma",
        "Stakeholder records",
        "Evidence pack",
        "Decision ledger"
      ],
      steps: [
        "Assign roles based on interests and responsibilities.",
        "Examine the evidence and identify what every role values.",
        "Propose three solutions and reveal their hidden costs.",
        "Negotiate a decision and record disagreement.",
        "Review whose voice, evidence or future received the most weight."
      ],
      questions: [
        "Is consensus always fair?",
        "Who bears a cost without being present?",
        "How should future generations be represented?"
      ],
      respect:
        "Do not imitate a named cultural governance ceremony unless the activity is community-led and permission has been given."
    }
  ];

  const $ = (selector) => document.querySelector(selector);

  const grid = $("#activityGrid");
  const search = $("#activitySearch");
  const subjectFilter = $("#subjectFilter");
  const methodFilter = $("#methodFilter");
  const count = $("#resultCount");
  const empty = $("#emptyState");
  const dialog = $("#activityDialog");
  const dialogContent = $("#dialogContent");

  const unique = (values) => [...new Set(values)].sort();

  const escapeHTML = (value) =>
    String(value).replace(/[&<>'"]/g, (character) => {
      const symbols = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      };

      return symbols[character];
    });

  const numeral = (number) => String(number).padStart(2, "0");

  function fillFilters() {
    const subjects = unique(
      activities.flatMap((activity) => activity.subjects)
    );

    const methods = unique(
      activities.map((activity) => activity.method)
    );

    subjects.forEach((subject) => {
      subjectFilter.add(new Option(subject, subject));
    });

    methods.forEach((method) => {
      methodFilter.add(new Option(method, method));
    });
  }

  function filteredActivities() {
    const query = search.value.trim().toLowerCase();

    return activities.filter((activity) => {
      const searchableText = [
        activity.title,
        activity.region,
        activity.summary,
        activity.method,
        ...activity.subjects
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        query === "" || searchableText.includes(query);

      const matchesSubject =
        subjectFilter.value === "all" ||
        activity.subjects.includes(subjectFilter.value);

      const matchesMethod =
        methodFilter.value === "all" ||
        activity.method === methodFilter.value;

      return matchesSearch && matchesSubject && matchesMethod;
    });
  }

  function renderActivities() {
    const results = filteredActivities();

    grid.innerHTML = results
      .map(
        (activity) => `
          <article class="record-card">
            <div class="record-top">
              <span class="record-number">
                DRAWER ${numeral(activity.id)}
              </span>

              <span class="region">
                ${escapeHTML(activity.region)}
              </span>
            </div>

            <div class="record-symbol" aria-hidden="true">
              ${escapeHTML(activity.symbol)}
            </div>

            <h3>${escapeHTML(activity.title)}</h3>

            <p>${escapeHTML(activity.summary)}</p>

            <div class="record-tags">
              ${activity.subjects
                .map(
                  (subject) =>
                    `<span>${escapeHTML(subject)}</span>`
                )
                .join("")}

              <span>${escapeHTML(activity.method)}</span>
            </div>

            <button
              class="open-record"
              type="button"
              data-id="${activity.id}"
            >
              Unseal this record →
            </button>
          </article>
        `
      )
      .join("");

    count.textContent = results.length;
    empty.hidden = results.length !== 0;
  }

  function openActivity(id) {
    const activity = activities.find(
      (item) => item.id === Number(id)
    );

    if (!activity) return;

    dialogContent.innerHTML = `
      <article class="dialog-inner">
        <p class="dialog-kicker">
          Archive record ${numeral(activity.id)}
          ·
          ${escapeHTML(activity.method)}
        </p>

        <h2 id="dialogTitle">
          ${escapeHTML(activity.title)}
        </h2>

        <p class="dialog-origin">
          ${escapeHTML(activity.origin)}
        </p>

        <p>${escapeHTML(activity.summary)}</p>

        <section class="dialog-section">
          <h3>Gather from the cabinet</h3>

          <ul>
            ${activity.materials
              .map((item) => `<li>${escapeHTML(item)}</li>`)
              .join("")}
          </ul>
        </section>

        <section class="dialog-section">
          <h3>The investigation</h3>

          <ol>
            ${activity.steps
              .map((item) => `<li>${escapeHTML(item)}</li>`)
              .join("")}
          </ol>
        </section>

        <section class="dialog-section">
          <h3>Questions worth carrying</h3>

          <ul>
            ${activity.questions
              .map((item) => `<li>${escapeHTML(item)}</li>`)
              .join("")}
          </ul>
        </section>

        <aside class="respect-note">
          <strong>Archive note:</strong>
          ${escapeHTML(activity.respect)}
        </aside>
      </article>
    `;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeActivity() {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  function chooseQuest() {
    const chosenTime = Number($("#questTime").value);
    const chosenMode = $("#questMode").value;

    let possibleActivities = activities.filter((activity) => {
      const matchesTime = activity.time <= chosenTime;

      const matchesMode =
        chosenMode === "either" ||
        activity.mode === "either" ||
        activity.mode === chosenMode;

      return matchesTime && matchesMode;
    });

    if (possibleActivities.length === 0) {
      possibleActivities = activities;
    }

    const randomIndex = Math.floor(
      Math.random() * possibleActivities.length
    );

    const activity = possibleActivities[randomIndex];
    const result = $("#questResult");
    const resultText = result.querySelector("div:last-child");

    result.classList.remove("is-spinning");

    void result.offsetWidth;

    result.classList.add("is-spinning");

    resultText.innerHTML = `
      <p class="eyebrow">
        The compass points to drawer ${numeral(activity.id)}
      </p>

      <h3>${escapeHTML(activity.title)}</h3>

      <p>
        ${escapeHTML(activity.summary)}

        <button
          class="open-record"
          type="button"
          data-id="${activity.id}"
        >
          Open the record →
        </button>
      </p>
    `;

    window.setTimeout(() => {
      result.classList.remove("is-spinning");
    }, 900);
  }

  function clearFilters() {
    search.value = "";
    subjectFilter.value = "all";
    methodFilter.value = "all";

    renderActivities();
    search.focus();
  }

  fillFilters();
  renderActivities();

  search.addEventListener("input", renderActivities);
  subjectFilter.addEventListener("change", renderActivities);
  methodFilter.addEventListener("change", renderActivities);

  $("#clearFilters").addEventListener("click", clearFilters);

  document.addEventListener("click", (event) => {
    const recordButton = event.target.closest("[data-id]");

    if (recordButton) {
      openActivity(recordButton.dataset.id);
    }
  });

  $("#closeDialog").addEventListener("click", closeActivity);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeActivity();
    }
  });

  $("#makeQuest").addEventListener("click", chooseQuest);

  $("#surpriseQuest").addEventListener("click", () => {
    chooseQuest();

    $(".challenge-vault").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  const mobileMenu = $("#mobileMenu");
  const navigation = $("#mainNav");

  mobileMenu.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    mobileMenu.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    mobileMenu.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navigation.addEventListener("click", (event) => {
    if (!event.target.matches("a")) return;

    navigation.classList.remove("is-open");
    mobileMenu.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-label", "Open navigation");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) {
      closeActivity();
    }
  });
})();
