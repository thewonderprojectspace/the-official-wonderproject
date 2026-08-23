const pressures = [
  {
    id: "family",
    index: "01",
    label: "Family gravity",
    short: "They want you safe.",
    title: "Love can sound a lot like pressure.",
    body: "Sometimes your family is not trying to shrink your life. They remember bills, instability and doors that closed. Their fear may be clumsy, but it can still come from love. You are allowed to understand that without handing over authorship of your life.",
    ask: "Which part is care—and which part is control?",
    line: "I hear why stability matters to you. I also need room to test what matters to me.",
    color: "mint"
  },
  {
    id: "validation",
    index: "02",
    label: "Borrowed approval",
    short: "Applause is addictive.",
    title: "A life can look impressive and feel completely borrowed.",
    body: "Grades, titles, acceptance letters and LinkedIn announcements can become proof that you are doing life correctly. But approval is a moving finish line. If nobody could clap for this decision, would you still want it?",
    ask: "What would you choose if nobody was watching?",
    line: "I am learning to choose work I respect—not only work that earns approval.",
    color: "aqua"
  },
  {
    id: "comparison",
    index: "03",
    label: "Comparison weather",
    short: "Everyone looks ahead.",
    title: "You are comparing your backstage to someone else’s announcement.",
    body: "One friend has a graduate role. Another has moved out. Someone online is twenty-two and apparently owns a company, a podcast and perfect skin. Their timeline is information—not an instruction.",
    ask: "Whose clock have you accidentally started living by?",
    line: "Their progress is real. It is also not a deadline for my life.",
    color: "sky"
  },
  {
    id: "money",
    index: "04",
    label: "Money & survival",
    short: "Food is not a mindset.",
    title: "Practicality is not betrayal.",
    body: "Rent, food, transport and healthcare are not failures of imagination. A nine-to-five can be a foundation, a season, a training ground or the thing that funds your experiment. The system is real. So is your ability to build choices inside it.",
    ask: "What amount of stability would give your dream more oxygen?",
    line: "I can earn, save and learn while I build the next part carefully.",
    color: "lime"
  },
  {
    id: "identity",
    index: "05",
    label: "The good-student role",
    short: "Achievement became identity.",
    title: "You are a person before you are a performance.",
    body: "When being ‘the smart one’ keeps everyone calm, changing direction can feel like disappointing an entire audience. You are allowed to outgrow the version of you that was easiest for other people to understand.",
    ask: "Who are you when you are not proving anything?",
    line: "Changing direction does not erase what I have already achieved.",
    color: "teal"
  },
  {
    id: "uncertainty",
    index: "06",
    label: "The fog",
    short: "No map. Still moving.",
    title: "You do not need a ten-year answer to run a three-month experiment.",
    body: "A dream does not need to become a brand, a career or fame within a year to deserve a beginning. Make the bet smaller. Give it a schedule, a budget and a review date. Evidence is kinder than endless overthinking.",
    ask: "What is the smallest honest test you can run next?",
    line: "I am not asking for certainty. I am asking for a fair chance to try.",
    color: "blue"
  }
];

const routes = {
  anchor: {
    number: "A",
    title: "Build the anchor",
    subtitle: "Income · routine · independence",
    body: "Take the job, qualification or reliable work seriously. Learn how money moves. Save a runway. Let stability reduce panic—not your imagination.",
    actions: ["Know your monthly essentials", "Build an emergency buffer", "Set a time boundary for reassessment"]
  },
  signal: {
    number: "B",
    title: "Protect the signal",
    subtitle: "Practice · portfolio · proof",
    body: "Give the thing you love a real place in the week. Not only when inspiration appears. Make work, collect evidence, find mentors and let consistency answer the question.",
    actions: ["Block two non-negotiable sessions", "Ship one small piece", "Measure learning—not fame"]
  }
};

const pressureList = document.querySelector("#pressure-list");
const pressureDetail = document.querySelector("#pressure-detail");

function showPressure(id) {
  const pressure = pressures.find((item) => item.id === id) || pressures[0];

  document.querySelector("#pressure-number").textContent = `ORBIT ${pressure.index}`;
  document.querySelector("#pressure-title").textContent = pressure.title;
  document.querySelector("#pressure-body").textContent = pressure.body;
  document.querySelector("#pressure-question").textContent = pressure.ask;
  document.querySelector("#pressure-line").textContent = pressure.line;

  pressureDetail.className = `pressure-detail wash-${pressure.color}`;

  pressureList.querySelectorAll(".pressure-tab").forEach((button) => {
    const selected = button.dataset.pressure === pressure.id;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
}

pressures.forEach((pressure) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pressure-tab";
  button.dataset.pressure = pressure.id;
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", "false");
  button.innerHTML = `
    <span class="pressure-dot ${pressure.color}"></span>
    <span class="pressure-index">${pressure.index}</span>
    <span><strong>${pressure.label}</strong><small>${pressure.short}</small></span>
    <b aria-hidden="true">↗</b>
  `;
  button.addEventListener("click", () => showPressure(pressure.id));
  pressureList.appendChild(button);
});

showPressure("family");

function showRoute(routeName) {
  const route = routes[routeName] || routes.anchor;
  const panel = document.querySelector("#route-panel");

  document.querySelector("#route-code").textContent = `TRACK ${route.number}`;
  document.querySelector("#route-subtitle").textContent = route.subtitle;
  document.querySelector("#route-title").textContent = route.title;
  document.querySelector("#route-body").textContent = route.body;
  document.querySelector("#route-actions").innerHTML = route.actions
    .map((action, index) => `<li><span>0${index + 1}</span>${action}</li>`)
    .join("");

  panel.className = `route-panel route-${routeName}`;

  document.querySelectorAll("[data-route]").forEach((button) => {
    const selected = button.dataset.route === routeName;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
}

document.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", () => showRoute(button.dataset.route));
});

showRoute("anchor");

const note = document.querySelector("#student-note");
const saveNoteButton = document.querySelector("#save-note");
const NOTE_KEY = "wonder-verse-student-orbit-note";

try {
  note.value = localStorage.getItem(NOTE_KEY) || "";
} catch (error) {
  // The page still works if browser storage is unavailable.
}

saveNoteButton.addEventListener("click", () => {
  if (!note.value.trim()) {
    note.focus();
    return;
  }

  try {
    localStorage.setItem(NOTE_KEY, note.value.trim());
  } catch (error) {
    // Keep the interaction friendly even when storage is blocked.
  }

  saveNoteButton.innerHTML = "Note saved ✓";
  window.setTimeout(() => {
    saveNoteButton.innerHTML = "Save this note <span>→</span>";
  }, 2200);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
