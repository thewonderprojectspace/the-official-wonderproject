const STORAGE_KEY = "wonderverse-messy-beginning-v1";
const NOTE_KEY = "wonderverse-beginning-notes-v1";
const RETURN_KEY = "wonderverse-return-days-v1";

const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const moodResponse = document.querySelector("#moodResponse");
const moodMessages = {
  Ready: "Good. Spend less time preparing to begin than beginning.",
  Tired: "Tired is information. Choose five minutes, remove one obstacle and stop after the promise is kept.",
  Lost: "You do not need the whole map. Choose the next physical action.",
  Nervous: "Nerves are allowed to come. They do not get veto power.",
  Curious: "Follow the curiosity before you ask whether it will be impressive.",
  "Avoiding it": "Honest. Now make the task so small that avoidance becomes more work than doing it."
};

document.querySelectorAll("[data-mood]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-mood]").forEach((item) => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    moodResponse.textContent = moodMessages[button.dataset.mood];
  });
});

const form = document.querySelector("#startForm");
const bigThing = document.querySelector("#bigThing");
const smallMove = document.querySelector("#smallMove");
const minutes = document.querySelector("#minutes");
const promiseType = document.querySelector("#promiseType");
const promiseBig = document.querySelector("#promiseBig");
const promiseSmall = document.querySelector("#promiseSmall");
const promiseTime = document.querySelector("#promiseTime");
const doneButton = document.querySelector("#doneButton");

function readStart() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); }
  catch { return null; }
}

function renderStart(start = readStart()) {
  if (!start) return;
  promiseType.textContent = start.type.toUpperCase();
  promiseBig.textContent = start.thing;
  promiseSmall.textContent = start.move;
  promiseTime.textContent = `${start.minutes} honest minutes. Today—not someday.`;
  doneButton.disabled = false;
  bigThing.value = start.thing;
  smallMove.value = start.move;
  minutes.value = start.minutes;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const type = new FormData(form).get("startType");
  const start = {
    type,
    thing: bigThing.value.trim(),
    move: smallMove.value.trim(),
    minutes: minutes.value
  };
  if (!start.thing || !start.move) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(start));
  renderStart(start);
  document.querySelector("#currentStartSection").scrollIntoView({ behavior: "smooth" });
});

const quickMoves = [
  "Open the file and work until the five-minute timer rings.",
  "Write the first sentence. It is allowed to be extremely average.",
  "Put the materials you need on the table.",
  "Read one page and keep one useful line.",
  "Create the folder and give the project a name.",
  "Do the first physical action before discussing it with yourself."
];

function chooseQuickMove() {
  const move = quickMoves[Math.floor(Math.random() * quickMoves.length)];
  smallMove.value = move;
  document.querySelector("#restart-studio").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => smallMove.focus(), 500);
}

document.querySelector("#quickStartButton").addEventListener("click", chooseQuickMove);

document.querySelectorAll("[data-action]").forEach((card) => {
  card.addEventListener("click", () => {
    const action = card.dataset.action;
    smallMove.value = action;
    document.querySelector("#pickedAction").textContent = `Your borrowed move: ${action}`;
    document.querySelectorAll("[data-action]").forEach((item) => item.classList.remove("picked"));
    card.classList.add("picked");
  });
});

function readReturns() {
  try { return JSON.parse(localStorage.getItem(RETURN_KEY)) || []; }
  catch { return []; }
}

function renderReturns() {
  const returns = readReturns();
  document.querySelector("#returnCount").textContent = returns.length;
  document.querySelector("#returnMarks").innerHTML = returns
    .map((date, index) => `<span title="${date}">${index % 3 === 0 ? "✦" : index % 3 === 1 ? "+" : "●"}</span>`)
    .join("");
}

doneButton.addEventListener("click", () => {
  const returns = readReturns();
  const today = new Date().toISOString().slice(0, 10);
  if (!returns.includes(today)) {
    returns.push(today);
    localStorage.setItem(RETURN_KEY, JSON.stringify(returns));
    renderReturns();
  }
  doneButton.textContent = "You showed up today ✓";
  doneButton.disabled = true;
});

const noteForm = document.querySelector("#noteForm");
const noteText = document.querySelector("#noteText");
const noteList = document.querySelector("#noteList");

function readNotes() {
  try { return JSON.parse(localStorage.getItem(NOTE_KEY)) || []; }
  catch { return []; }
}

function renderNotes() {
  const notes = readNotes();
  if (!notes.length) {
    noteList.innerHTML = '<p class="empty-note">No polished success story required. Your first scrap of evidence can live here.</p>';
    return;
  }
  noteList.innerHTML = notes.slice().reverse().map((note) => `
    <article>
      <time>${note.date}</time>
      <p>${note.text.replace(/[<>&]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[character]))}</p>
    </article>
  `).join("");
}

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = noteText.value.trim();
  if (!text) return;
  const notes = readNotes();
  notes.push({ text, date: new Date().toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) });
  localStorage.setItem(NOTE_KEY, JSON.stringify(notes.slice(-12)));
  noteText.value = "";
  renderNotes();
});

renderStart();
renderReturns();
renderNotes();
