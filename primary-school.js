(() => {
  "use strict";

  const resources = [
    {
      id: 1, title: "The Mystery of the Missing Number", subject: "Mathematics", years: "Years 1–2", time: "15 min", format: "Print & play", familiar: "Ready to stretch", color: "sun",
      description: "Use clues, number lines and drawings to find who quietly disappeared.", question: "Can two different strategies both be clever?",
      materials: ["Printed activity", "Pencil", "10 small counters or buttons"],
      steps: ["Circle the numbers you already know.", "Use counters or a drawing to test each clue.", "Explain which clue helped you most."],
      prompts: ["What did you notice first?", "How could we check without starting again?", "Can you invent a new clue?"],
      extension: "Hide your own number and write three clues for an adult."
    },
    {
      id: 2, title: "Why Does a Kite Stay Up?", subject: "Science", years: "Years 3–4", time: "35 min", format: "Make & investigate", familiar: "Something new", color: "sky",
      description: "Build a tiny paper kite, change one feature and observe what the air does.", question: "Is a failed flight still useful evidence?",
      materials: ["Paper", "String", "Tape", "Scissors", "Outdoor breeze"],
      steps: ["Sketch what you predict will happen.", "Build and test your first kite.", "Change only one thing, then test again."],
      prompts: ["What pushed or pulled the kite?", "Which observation surprised you?", "Was your test fair?"],
      extension: "Interview someone who has flown a kite and compare their explanation with yours."
    },
    {
      id: 3, title: "The Ant Census", subject: "Mathematics", years: "Years 2–4", time: "20 min", format: "Observe & record", familiar: "Feels familiar", color: "leaf",
      description: "Count moving things without losing your place, then design a better recording system.", question: "What makes some things difficult to count?",
      materials: ["Clipboard or firm book", "Pencil", "Timer", "Safe outdoor patch"],
      steps: ["Observe for one minute without counting.", "Choose a recording method.", "Count for three minutes and reflect on errors."],
      prompts: ["How did movement change your method?", "What might make the total inaccurate?", "What would a scientist do?"],
      extension: "Compare two locations without disturbing the insects."
    },
    {
      id: 4, title: "A Story With No Ending", subject: "English", years: "Years 3–6", time: "25 min", format: "Write & imagine", familiar: "Ready to stretch", color: "berry",
      description: "Follow a mysterious opening, then create three endings that change its meaning.", question: "Does an ending tell us what the whole story was about?",
      materials: ["Printed story starter", "Pencil or keyboard", "Imagination"],
      steps: ["Underline clues in the opening.", "Draft a funny, serious and surprising ending.", "Choose one and explain why."],
      prompts: ["Which clue did you use?", "What did the character learn?", "What should the reader still wonder?"],
      extension: "Read only the ending to someone. Ask what opening they imagine."
    },
    {
      id: 5, title: "Kitchen Fraction Detectives", subject: "Mathematics", years: "Years 3–5", time: "30 min", format: "Cook & compare", familiar: "Feels familiar", color: "peach",
      description: "Find halves, quarters and equivalent amounts using real cups, spoons and snacks.", question: "Can different-looking amounts be equal?",
      materials: ["Measuring cups", "Dry rice or water", "Bowls", "Towel for spills"],
      steps: ["Predict how many quarters fill one cup.", "Measure and record.", "Find two different ways to make the same amount."],
      prompts: ["What stayed the same?", "How could you prove they are equal?", "Where else do families use fractions?"],
      extension: "Scale a simple recipe up or down with an adult."
    },
    {
      id: 6, title: "Interview a Living Library", subject: "Humanities", years: "Years 2–6", time: "40 min", format: "Ask & listen", familiar: "Something new", color: "violet",
      description: "Ask a trusted adult about a childhood object, game, journey or tradition.", question: "How is a person different from a search result?",
      materials: ["Question sheet", "Pencil", "A willing trusted adult"],
      steps: ["Choose five open questions.", "Listen without interrupting.", "Record one fact, one feeling and one new question."],
      prompts: ["What could not be found in a textbook?", "What might another person remember differently?", "How will you thank your source?"],
      extension: "Find an object or photograph that adds another piece of evidence."
    },
    {
      id: 7, title: "Shadow Tracker", subject: "Science", years: "Years 1–4", time: "All day, 5 min each", format: "Observe & record", familiar: "Ready to stretch", color: "sky",
      description: "Trace one shadow at different times and investigate why it refuses to stay still.", question: "Did the object move—or did something else change?",
      materials: ["Chalk", "Sunny safe space", "Clock", "Recording sheet"],
      steps: ["Choose one stationary object.", "Trace its shadow morning, midday and afternoon.", "Compare direction and length."],
      prompts: ["What pattern can you see?", "What is your evidence?", "What might happen tomorrow?"],
      extension: "Use the shadow as a rough clock and test its reliability."
    },
    {
      id: 8, title: "Design a Kind Playground", subject: "Wellbeing", years: "Years 2–6", time: "45 min", format: "Design challenge", familiar: "Something new", color: "leaf",
      description: "Redesign a playground so more bodies, senses, interests and friendships can belong.", question: "Who might a ‘normal’ playground accidentally leave out?",
      materials: ["Large paper", "Coloured pencils", "Building blocks (optional)"],
      steps: ["List who uses a playground.", "Notice three possible barriers.", "Draw or build a design that reduces them."],
      prompts: ["Who did you design for?", "What trade-off did you make?", "Who should review your idea?"],
      extension: "Ask someone with a different perspective to improve your design."
    },
    {
      id: 9, title: "The Unfair Shop", subject: "Mathematics", years: "Years 4–6", time: "25 min", format: "Role-play", familiar: "Ready to stretch", color: "sun",
      description: "Spot strange pricing, calculate change and decide what ‘fair’ actually means.", question: "Is the cheapest choice always the fairest?",
      materials: ["Price cards", "Play money", "Calculator for checking only"],
      steps: ["Choose a shopper and shopkeeper.", "Complete three transactions.", "Investigate the deliberately unfair offer."],
      prompts: ["How did you check the change?", "Who benefits from the offer?", "What information is missing?"],
      extension: "Write a fairer offer that still works for the shop."
    },
    {
      id: 10, title: "Neighbourhood Sound Map", subject: "The Arts", years: "Years 1–6", time: "20 min", format: "Listen & create", familiar: "Feels familiar", color: "berry",
      description: "Map nearby sounds using marks, colours and invented symbols instead of words.", question: "Can a drawing show something invisible?",
      materials: ["Paper", "Coloured pencils", "A safe listening place"],
      steps: ["Sit quietly for sixty seconds.", "Invent a symbol for each sound.", "Place each symbol according to direction and distance."],
      prompts: ["Which sound was closest?", "What did you hear only after slowing down?", "Would another person make the same map?"],
      extension: "Turn your sound map into a short piece of music."
    },
    {
      id: 11, title: "Can You Trust This Picture?", subject: "Digital Literacy", years: "Years 4–6", time: "20 min", format: "Think & verify", familiar: "Something new", color: "violet",
      description: "Examine a fictional online image and practise checking source, context and missing information.", question: "Why might a true picture still tell a misleading story?",
      materials: ["Printed activity", "Two coloured pens", "An adult discussion partner"],
      steps: ["Write what the image shows—not what you assume.", "List information you still need.", "Plan two ways to verify it."],
      prompts: ["Who posted it?", "What happened before or after?", "What would count as stronger evidence?"],
      extension: "Create two honest captions that change the focus without changing the facts."
    },
    {
      id: 12, title: "Build a One-Metre Creature", subject: "Mathematics", years: "Years 2–5", time: "30 min", format: "Make & measure", familiar: "Feels familiar", color: "peach",
      description: "Create a strange creature whose body parts total exactly one metre.", question: "How many different creatures can one metre make?",
      materials: ["Scrap paper", "Tape", "Ruler or tape measure", "Scissors"],
      steps: ["Plan body-part lengths that total 100 cm.", "Build and measure each piece.", "Record and correct the final total."],
      prompts: ["Where did measurement error appear?", "Which combinations total 100?", "How can another group verify it?"],
      extension: "Write your measurements as fractions of a metre."
    }
  ];

  const roleContent = {
    child: { icon: "✦", title: "Pick something that makes you say ‘huh?’", text: "You do not have to be good at it already. Choose a mystery, make a guess and see what happens." },
    parent: { icon: "♥", title: "Ten useful minutes beats one stressful hour.", text: "Find printable activities, questions to ask and guidance that helps without taking over." },
    teacher: { icon: "▤", title: "Less searching. More noticing learners.", text: "Find curriculum-aware prompts, investigations, printable practice and adaptable classroom collections." }
  };

  const tonightQuestions = [
    "Where do you think the wind goes when it stops?",
    "If animals ran a school, what would they teach first?",
    "What mistake taught you something today?",
    "Can two different answers both be reasonable?",
    "What is something adults pretend to understand?",
    "How would you explain the number 24 without saying ‘twenty-four’?",
    "What ordinary object would look strange to someone from 500 years ago?",
    "If your shadow could speak, what would it complain about?"
  ];

  const grid = document.querySelector("#resourceGrid");
  const search = document.querySelector("#resourceSearch");
  const subjectFilter = document.querySelector("#subjectFilter");
  const yearFilter = document.querySelector("#yearFilter");
  const resultCount = document.querySelector("#resultCount");
  const emptyState = document.querySelector("#emptyState");
  const dialog = document.querySelector("#activityDialog");
  const dialogContent = document.querySelector("#dialogContent");

  [...new Set(resources.map(resource => resource.subject))].sort().forEach(subject => {
    const option = document.createElement("option");
    option.textContent = subject;
    subjectFilter.append(option);
  });

  function renderResources() {
    const query = search.value.trim().toLowerCase();
    const selectedSubject = subjectFilter.value;
    const selectedYear = yearFilter.value;
    const visible = resources.filter(resource => {
      const haystack = `${resource.title} ${resource.subject} ${resource.description} ${resource.format}`.toLowerCase();
      return (!query || haystack.includes(query)) &&
        (selectedSubject === "All subjects" || resource.subject === selectedSubject) &&
        (selectedYear === "All years" || resource.years.includes(selectedYear));
    });

    grid.innerHTML = visible.map(resource => `
      <article class="resource-card ${resource.color}">
        <div class="resource-top"><span>${resource.subject}</span><span>${resource.familiar}</span></div>
        <h3>${resource.title}</h3><p>${resource.description}</p>
        <div class="resource-meta"><span>◎ ${resource.years}</span><span>◷ ${resource.time}</span><span>▣ ${resource.format}</span></div>
        <button type="button" data-resource-id="${resource.id}">Open activity <span aria-hidden="true">→</span></button>
      </article>`).join("");

    resultCount.textContent = `${visible.length} useful ${visible.length === 1 ? "thing" : "things"} found`;
    emptyState.hidden = visible.length > 0;
  }

  function openActivity(resource) {
    dialogContent.innerHTML = `
      <p class="kicker">${resource.subject} · ${resource.years} · ${resource.time}</p>
      <h2 id="dialogTitle">${resource.title}</h2>
      <p class="activity-description">${resource.description}</p>
      <div class="activity-question"><span aria-hidden="true">?</span><div><small>Big question</small><strong>${resource.question}</strong></div></div>
      <div class="activity-columns">
        <div><h4>Bring</h4><ul>${resource.materials.map(item => `<li>${item}</li>`).join("")}</ul></div>
        <div><h4>Try</h4><ol>${resource.steps.map(item => `<li>${item}</li>`).join("")}</ol></div>
      </div>
      <div class="adult-prompts"><h4>Grown-ups: ask, don’t rescue</h4>${resource.prompts.map(item => `<p>“${item}”</p>`).join("")}</div>
      <div class="extension"><span aria-hidden="true">✦</span><div><small>Ready to stretch?</small><strong>${resource.extension}</strong></div></div>
      <div class="dialog-actions"><button type="button" id="printActivity">▣ Print activity</button><button type="button" id="pdfNotice">↓ PDF coming next</button></div>`;

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    document.querySelector("#printActivity").addEventListener("click", () => window.print());
    document.querySelector("#pdfNotice").addEventListener("click", () => alert("The downloadable PDF library is the next build stage. This activity can already be printed from your browser."));
  }

  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-resource-id]");
    if (!button) return;
    openActivity(resources.find(resource => resource.id === Number(button.dataset.resourceId)));
  });
  search.addEventListener("input", renderResources);
  subjectFilter.addEventListener("change", renderResources);
  yearFilter.addEventListener("change", renderResources);
  document.querySelector("#clearFilters").addEventListener("click", () => {
    search.value = ""; subjectFilter.value = "All subjects"; yearFilter.value = "All years"; renderResources(); search.focus();
  });

  document.querySelectorAll("[data-role]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-role]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const content = roleContent[button.dataset.role];
    document.querySelector("#roleIcon").textContent = content.icon;
    document.querySelector("#roleTitle").textContent = content.title;
    document.querySelector("#roleText").textContent = content.text;
  }));

  let questionIndex = 0;
  document.querySelector("#anotherQuestion").addEventListener("click", () => {
    questionIndex = (questionIndex + 1) % tonightQuestions.length;
    document.querySelector("#tonightQuestion").textContent = `“${tonightQuestions[questionIndex]}”`;
  });

  document.querySelector("#generateAdventure").addEventListener("click", () => {
    const age = document.querySelector("#adventureAge").value;
    const time = document.querySelector("#adventureTime").value;
    const place = document.querySelector("#adventurePlace").value;
    const people = document.querySelector("#adventurePeople").value;
    const starts = place === "Outside" ? [
      "Find five leaves, stones or safe natural objects. Sort them in two different ways, then invent a third rule that might fool your partner.",
      "Choose one shadow and sketch it twice during your adventure. Look for what changed and what stayed the same.",
      "Listen quietly and map five sounds using invented symbols. Add arrows to show where each sound came from."
    ] : [
      "Choose six ordinary objects nearby. Arrange them to show a pattern, then let your partner work out the rule.",
      "Build the tallest freestanding structure you can from safe household objects. Change only one feature and test again.",
      "Find three containers and predict which holds the most. Design a fair way to test your claim."
    ];
    const mission = starts[Math.floor(Math.random() * starts.length)];
    const result = document.querySelector("#adventureResult");
    result.classList.add("ready");
    result.innerHTML = `<span class="result-number">01</span><p class="kicker">Your offline mission · ages ${age}</p><h3>Notice something ordinary in an unexpected way.</h3><p>${mission} You have ${time}. For ${people.toLowerCase()}, finish by asking: “Could a different answer also be reasonable?”</p><div class="mission-rule"><span aria-hidden="true">♧</span>Rule: leave living things where you found them.</div>`;
  });

  const mobileMenu = document.querySelector("#mobileMenu");
  const mainNav = document.querySelector("#mainNav");
  mobileMenu.addEventListener("click", () => {
    const open = mainNav.classList.toggle("nav-open");
    mobileMenu.setAttribute("aria-expanded", String(open));
    mobileMenu.textContent = open ? "×" : "☰";
  });
  mainNav.addEventListener("click", event => {
    if (!event.target.closest("a")) return;
    mainNav.classList.remove("nav-open"); mobileMenu.setAttribute("aria-expanded", "false"); mobileMenu.textContent = "☰";
  });

  document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });

  renderResources();
})();
