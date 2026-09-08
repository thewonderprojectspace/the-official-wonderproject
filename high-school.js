const yearData = {
  6: {
    title: "Build the foundations without making school your entire personality.",
    intro: "Year 6 is a bridge year in many systems. It is a good time to strengthen number sense, reading, scientific thinking, organisation and confidence before secondary-school workload increases.",
    focus: [
      ["Maths", "Fractions, decimals, percentages, ratio, geometry and problem solving."],
      ["Science", "Variables, fair tests, living systems, matter, forces and evidence."],
      ["English", "Clear paragraphs, comprehension, vocabulary, text evidence and creative writing."],
      ["Big skill", "Learning how to ask for help before the confusion becomes a small civilisation."]
    ]
  },

  7: {
    title: "New subjects. New teachers. New mysterious timetable.",
    intro: "Year 7 often introduces more subject switching and independent organisation. Focus on routines, basic algebra, evidence-based writing and learning how each subject thinks.",
    focus: [
      ["Maths", "Integers, algebra basics, fractions, percentages, geometry and data."],
      ["Science", "Classification, mixtures, forces, ecosystems and investigation skills."],
      ["Humanities", "Ancient worlds, geography, civics and source interpretation."],
      ["Big skill", "Keeping track of tasks without relying on your backpack to remember for you."]
    ]
  },

  8: {
    title: "The year where 'I kind of get it' starts needing evidence.",
    intro: "Year 8 is ideal for moving from memorising to explaining. Start showing working, justifying claims and connecting ideas instead of collecting disconnected facts.",
    focus: [
      ["Maths", "Linear relationships, indices, geometry, measurement, probability and statistics."],
      ["Science", "Cells, chemical change, energy, rocks, systems and experimental reasoning."],
      ["English", "Argument, comparative ideas, narrative craft and analytical evidence."],
      ["Big skill", "Explaining why your answer works, not only announcing that it does."]
    ]
  },

  9: {
    title: "Less 'what is the answer?' More 'how do you know?'",
    intro: "Year 9 usually asks for deeper reasoning and more independence. It is a good year to discover which study methods actually work for you before senior school begins.",
    focus: [
      ["Maths", "Algebra, linear relations, similarity, trigonometry foundations and data."],
      ["Science", "Body systems, atoms, reactions, electricity, ecosystems and scientific reports."],
      ["Humanities", "Industrialisation, global change, economics, geography and evidence."],
      ["Big skill", "Testing your understanding without looking at your notes every twelve seconds."]
    ]
  },

  10: {
    title: "Senior school is visible on the horizon. No dramatic soundtrack required.",
    intro: "Year 10 is a useful preparation year for senior subjects. Build strong algebra, reading, writing, scientific analysis and decision-making around subject selection.",
    focus: [
      ["Maths", "Quadratics, trigonometry, statistics, probability, functions and modelling."],
      ["Science", "Genetics, evolution, chemistry, motion, energy and scientific evaluation."],
      ["Humanities", "Modern history, civics, economics, geography and extended responses."],
      ["Big skill", "Choosing subjects based on interests, strengths and pathways—not rumours in the hallway."]
    ]
  },

  11: {
    title: "Welcome to senior school: the content has opinions now.",
    intro: "Year 11 is about building systems that will survive Year 12. Learn course expectations, practise retrieval, review errors and treat assessments as feedback rather than identity reports.",
    focus: [
      ["Course knowledge", "Understand what your subjects actually assess—not merely what was taught today."],
      ["Practice", "Use mixed and spaced questions rather than rereading the same page."],
      ["Feedback", "Turn mistakes into a list of specific skills to repair."],
      ["Big skill", "Keeping momentum across a long year instead of sprinting before every test."]
    ]
  },

  12: {
    title: "Important year. Still only one year.",
    intro: "Year 12 can be academically intense, but strong preparation is usually boring in the best way: consistent practice, targeted feedback, sleep, realistic planning and lots of correction.",
    focus: [
      ["Exam readiness", "Practise under realistic conditions and review every error pattern."],
      ["Priorities", "Know which topics are weak, which are strong and what matters most next."],
      ["Recovery", "Protect sleep, movement and breaks so your brain remains useful."],
      ["Big skill", "Separating your performance on one assessment from your worth as a human being."]
    ]
  }
};


const subjectData = {
  Mathematics: {
    icon: "π",
    intro: "Mathematics is less about being fast and more about seeing structure. Good maths students make mistakes, inspect them, then change their method.",
    topics: [
      ["Number & algebra", "Patterns, equations, indices, functions and symbolic reasoning."],
      ["Geometry & measurement", "Shape, scale, trigonometry, coordinates and modelling space."],
      ["Statistics", "Data displays, distributions, inference and what numbers do not tell you."],
      ["Probability", "Chance, simulation, expected outcomes and decision-making."]
    ]
  },

  Science: {
    icon: "⚗",
    intro: "Science is a way of testing explanations. You are not collecting facts for decoration; you are learning how evidence changes what we believe.",
    topics: [
      ["Biology", "Cells, organisms, genetics, ecosystems and evolution."],
      ["Chemistry", "Matter, atoms, bonding, reactions and chemical systems."],
      ["Physics", "Motion, forces, energy, waves, electricity and models."],
      ["Earth & space", "Planetary systems, geology, climate and environmental change."]
    ]
  },

  Humanities: {
    icon: "⌛",
    intro: "Humanities asks how people, places, systems and choices shape the world. Evidence matters, but so does perspective.",
    topics: [
      ["History", "Sources, causation, continuity, change and competing interpretations."],
      ["Geography", "Place, environment, population, spatial data and sustainability."],
      ["Economics", "Choices, markets, incentives, resources and trade-offs."],
      ["Civics", "Government, law, citizenship, institutions and public decision-making."]
    ]
  },

  English: {
    icon: "Aa",
    intro: "English is not about guessing what the teacher thinks. It is about making a defensible interpretation and communicating it clearly.",
    topics: [
      ["Reading", "Comprehension, inference, structure, language and interpretation."],
      ["Writing", "Argument, explanation, narrative voice and deliberate structure."],
      ["Speaking", "Presentation, discussion, rhetoric and audience awareness."],
      ["Analysis", "Evidence, author choices, context and multiple interpretations."]
    ]
  },

  Technology: {
    icon: "⌘",
    intro: "Technology is structured creativity: identify a need, design something, test it, improve it, then explain why your decisions make sense.",
    topics: [
      ["Coding", "Logic, algorithms, data, debugging and computational thinking."],
      ["Design", "Prototypes, constraints, user needs and iteration."],
      ["Digital systems", "Networks, hardware, software, privacy and information."],
      ["Projects", "Planning, testing, evaluation and communicating decisions."]
    ]
  },

  "Creative Arts": {
    icon: "✦",
    intro: "Creative work is not the absence of structure. It is learning how choices in form, sound, movement, image and story create meaning.",
    topics: [
      ["Visual art", "Media, composition, technique, interpretation and experimentation."],
      ["Drama", "Character, performance, staging, voice and audience."],
      ["Music", "Rhythm, melody, harmony, composition and performance."],
      ["Media", "Storytelling, production, editing, representation and audience."]
    ]
  }
};


const worksheetBanks = {
  Mathematics: {
    prerequisite: [
      "Write down one rule or formula you already know that might be useful.",
      "Estimate what a sensible answer might look like before calculating."
    ],

    warm: [
      "Simplify 3(2x + 4) - 5.",
      "A jacket costs $80 and is discounted by 25%. What is the sale price?",
      "Explain one mistake a student could make when subtracting negative numbers."
    ],

    steady: [
      "A linear rule passes through (2, 7) and (6, 19). Find the gradient and equation.",
      "A rectangle has area 96 cm². Create three possible pairs of side lengths and compare their perimeters.",
      "A data set has a mean of 18. What could happen to the mean if one very large outlier is added? Explain."
    ],

    stretch: [
      "Create two different equations that both have x = 4 as a solution. Make one linear and one nonlinear.",
      "A quantity increases by 20% and is then reduced by 20%. Is it back to its original value? Prove your answer.",
      "Design a real-world situation that could be modelled by y = 3x + 12. Explain what the gradient and intercept mean."
    ],

    reflect: "Which question required the most decision-making rather than calculation?"
  },


  Science: {
    prerequisite: [
      "What variable would you measure in a fair investigation?",
      "What evidence would make you change your current explanation?"
    ],

    warm: [
      "Identify the independent and dependent variables in an experiment testing light intensity on plant growth.",
      "Explain the difference between an observation and an inference.",
      "Name one control variable that could matter in a temperature experiment."
    ],

    steady: [
      "A plant grows faster in one treatment group. List two alternative explanations before concluding the treatment caused it.",
      "Sketch a simple particle explanation for why gases can be compressed more easily than solids.",
      "A student repeats an experiment five times. Explain why this may improve confidence in the result."
    ],

    stretch: [
      "Design an investigation that tests a claim while controlling at least three variables.",
      "A graph shows correlation between two variables. Write two reasons why this does not automatically prove causation.",
      "Choose a scientific model you know. Identify one thing it explains well and one limitation."
    ],

    reflect: "What evidence would be strong enough to make you reject your first hypothesis?"
  },


  Humanities: {
    prerequisite: [
      "What makes a source useful?",
      "What is the difference between a fact, interpretation and opinion?"
    ],

    warm: [
      "List two questions you should ask before trusting a historical source.",
      "Give one push factor and one pull factor that can influence migration.",
      "Explain why two people may interpret the same event differently."
    ],

    steady: [
      "A government introduces a new tax. Identify one possible benefit, one cost and one group that may be affected differently.",
      "Compare a primary source and a secondary source. When might each be more useful?",
      "Choose a local environmental issue and identify two stakeholders with different priorities."
    ],

    stretch: [
      "Build an argument explaining whether economic growth always improves quality of life.",
      "Create a source reliability checklist with at least five criteria.",
      "Explain how geography can influence political or economic decisions using one example."
    ],

    reflect: "Which assumption in your answer would be easiest for someone else to challenge?"
  },


  English: {
    prerequisite: [
      "What is your main claim in one sentence?",
      "Which exact piece of evidence best supports it?"
    ],

    warm: [
      "Rewrite a vague sentence so it makes one clear claim.",
      "Choose a character from a text you know. Describe them using one adjective, then justify it.",
      "Turn the statement 'the author uses imagery' into a deeper analytical sentence."
    ],

    steady: [
      "Write a TEEL/PEEL-style paragraph responding to: 'Conflict reveals character.'",
      "Take a persuasive claim and write one counterargument a reasonable person could make.",
      "Rewrite a paragraph opening so it focuses on an idea rather than retelling the plot."
    ],

    stretch: [
      "Write two different interpretations of the same symbol or scene.",
      "Create a persuasive paragraph that uses logic without exaggeration.",
      "Analyse how changing one word in a sentence could alter tone or meaning."
    ],

    reflect: "Where did you explain significance instead of merely describing a technique?"
  },


  Technology: {
    prerequisite: [
      "What problem is the design actually solving?",
      "Who is the user and what might they need?"
    ],

    warm: [
      "Write pseudocode for checking whether a number is even or odd.",
      "List two constraints for designing a school reminder app.",
      "Explain the difference between a bug and a feature request."
    ],

    steady: [
      "Design pseudocode for a program that calculates an average and gives a simple result category.",
      "Choose a common school problem and propose a digital solution. Identify one risk.",
      "Describe how you would test whether an interface is easy for a new user to understand."
    ],

    stretch: [
      "Design an algorithm that contains sequence, selection and repetition.",
      "Critique an everyday digital product using accessibility, efficiency and privacy as criteria.",
      "Create a tiny data model for a library system. What information should be stored and why?"
    ],

    reflect: "What would you change after seeing a real user interact with your design?"
  }
};


const studyTips = {
  start: {
    title: "Shrink the starting line.",
    body: "Choose a task that can begin in under two minutes: open the document, write the first heading, or solve one question. Starting is a separate skill from finishing."
  },

  forget: {
    title: "Stop testing recognition. Test recall.",
    body: "Close the notes and retrieve what you know from memory. Then compare. Use short spaced reviews across several days instead of one giant reread."
  },

  notes: {
    title: "Your notes are not the textbook's autobiography.",
    body: "Reduce each page to: key idea, one example, one common mistake and one question you still cannot answer."
  },

  exam: {
    title: "Make practice feel more like the real thing.",
    body: "Do small timed sets before full papers. Practise recovering after a hard question, not just answering questions you already like."
  },

  behind: {
    title: "Triage before catching up.",
    body: "List topics as: essential-now, weak-but-later, and already-okay. Start with the highest-impact gap instead of trying to rescue the whole term tonight."
  },

  bored: {
    title: "Change the task, not necessarily the subject.",
    body: "Turn the topic into a challenge: teach it badly, find a contradiction, create a quiz, compare two examples or explain why the obvious answer is wrong."
  }
};


const breakTips = {
  move:
    "Stand up. Walk for five minutes. Get water. Your next study block does not receive bonus points for being completed in the posture of a fossil.",

  stuck:
    "Mark the exact step where you became unsure. Skip the question temporarily, do one related easier question, then return with a fresh entry point.",

  scroll:
    "No guilt spiral required. Put the phone physically out of reach and choose one 10-minute task. A lost 45 minutes does not require losing the next 45.",

  done:
    "Then stop. Pack up, write tomorrow's first task on one line, and leave. Rest is part of learning, not a reward you unlock after becoming a machine."
};


// ===============================
// YEAR TABS
// ===============================

const yearPanel = document.getElementById("yearPanel");
const yearButtons = document.querySelectorAll(".year-tabs button");

function renderYear(year) {
  const item = yearData[year];

  yearPanel.innerHTML = `
    <div class="year-number">
      <span>you are here</span>
      <strong>${year}</strong>
      <small>Year ${year}</small>
    </div>

    <div class="year-info">
      <p class="eyebrow">Year ${year} field guide</p>

      <h3>${item.title}</h3>

      <p>${item.intro}</p>

      <div class="year-focus">
        ${item.focus
          .map(
            ([title, text]) => `
              <div class="focus-item">
                <strong>${title}</strong>
                <span>${text}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}


yearButtons.forEach((button) => {
  button.addEventListener("click", () => {
    yearButtons.forEach((btn) =>
      btn.setAttribute("aria-selected", "false")
    );

    button.setAttribute("aria-selected", "true");

    renderYear(button.dataset.year);
  });
});


renderYear("6");


// ===============================
// SUBJECT POP-UP WORLDS
// ===============================

const subjectDialog = document.getElementById("subjectDialog");
const subjectDialogContent = document.getElementById(
  "subjectDialogContent"
);


document.querySelectorAll(".subject-open").forEach((button) => {
  button.addEventListener("click", () => {
    const subject =
      button.closest(".subject-card").dataset.subject;

    const item = subjectData[subject];

    subjectDialogContent.innerHTML = `
      <div class="dialog-inner">

        <div class="big-icon">
          ${item.icon}
        </div>

        <p class="eyebrow">
          Subject world
        </p>

        <h2 id="subjectDialogTitle">
          ${subject}
        </h2>

        <p>
          ${item.intro}
        </p>

        <div class="dialog-topics">

          ${item.topics
            .map(
              ([title, text]) => `
                <div>
                  <strong>${title}</strong>
                  <span>${text}</span>
                </div>
              `
            )
            .join("")}

        </div>

      </div>
    `;

    subjectDialog.showModal();
  });
});


document
  .getElementById("dialogClose")
  .addEventListener("click", () => {
    subjectDialog.close();
  });


subjectDialog.addEventListener("click", (event) => {
  if (event.target === subjectDialog) {
    subjectDialog.close();
  }
});


// ===============================
// WORKSHEET GENERATOR
// ===============================

document
  .getElementById("generateWorksheet")
  .addEventListener("click", () => {

    const year =
      document.getElementById("worksheetYear").value;

    const subject =
      document.getElementById("worksheetSubject").value;

    const level =
      document.getElementById("worksheetLevel").value;

    const bank = worksheetBanks[subject];

    const levelLabel = {
      warm: "Warm-up",
      steady: "Steady",
      stretch: "Stretch"
    }[level];


    document.getElementById(
      "worksheetStamp"
    ).textContent =
      `YEAR ${year} · ${levelLabel.toUpperCase()}`;


    document.getElementById(
      "worksheetContent"
    ).innerHTML = `

      <p class="paper-kicker">
        Year ${year} · ${subject} · ${levelLabel}
      </p>

      <h3>
        Mini Practice Sheet
      </h3>


      <div class="worksheet-section">

        <h4>
          Before you begin
        </h4>

        <ol>
          ${bank.prerequisite
            .map(
              (question) =>
                `<li>${question}</li>`
            )
            .join("")}
        </ol>

      </div>


      <div class="worksheet-section">

        <h4>
          Core practice
        </h4>

        <ol>
          ${bank[level]
            .map(
              (question) =>
                `<li>${question}</li>`
            )
            .join("")}
        </ol>

      </div>


      <div class="worksheet-section">

        <h4>
          Reflection
        </h4>

        <p>
          ${bank.reflect}
        </p>

      </div>


      <div class="worksheet-section">

        <h4>
          Extension
        </h4>

        <p>
          Create one new question that would test the
          same skill in a different context.
        </p>

      </div>

    `;
  });


// ===============================
// STUDY STUDIO
// ===============================

document
  .querySelectorAll("[data-study]")
  .forEach((button, index) => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll("[data-study]")
        .forEach((btn) => {
          btn.classList.remove("active");
        });


      button.classList.add("active");


      const tip =
        studyTips[button.dataset.study];


      document.getElementById(
        "studyAnswer"
      ).innerHTML = `

        <span class="answer-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <p class="eyebrow">
          Try this next
        </p>

        <h3>
          ${tip.title}
        </h3>

        <p>
          ${tip.body}
        </p>

      `;
    });
  });


// ===============================
// BRAIN BREAK
// ===============================

document
  .querySelectorAll("[data-break]")
  .forEach((button) => {

    button.addEventListener("click", () => {

      document.getElementById(
        "resetResult"
      ).textContent =
        breakTips[button.dataset.break];

    });

  });


// ===============================
// MOBILE MENU
// ===============================

const mobileMenu =
  document.getElementById("mobileMenu");

const mainNav =
  document.getElementById("mainNav");


mobileMenu.addEventListener("click", () => {

  const open =
    mainNav.classList.toggle("open");

  mobileMenu.setAttribute(
    "aria-expanded",
    String(open)
  );

});


mainNav
  .querySelectorAll("a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      mobileMenu.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });
