const ANSWER_KEY = "wonderverse-questionarium-answers-v2";
const ALIGNMENT_KEY = "wonderverse-questionarium-alignment-v2";
const ACTION_KEY = "wonderverse-questionarium-action-v2";

const questions = [
  ["Purpose", "If nobody could see or praise your life, which parts would you still choose?"],
  ["Purpose", "Are you building a life you want—or a life that proves something to people you no longer need to impress?"],
  ["Purpose", "What do you keep calling your purpose because admitting you have outgrown it would be inconvenient?"],
  ["Purpose", "Which problem are you willing to work on for years, even when the work becomes repetitive?"],
  ["Purpose", "What makes you feel useful without making you feel false?"],
  ["Purpose", "If your job title disappeared tomorrow, what part of you would remain worth knowing?"],
  ["Values", "Does your calendar reflect the values you selected, or only the obligations you accepted?"],
  ["Values", "Where do you say yes and then punish the other person with resentment?"],
  ["Values", "Which goal is impressive but no longer yours?"],
  ["Values", "What are you unwilling to sacrifice, even for a goal you deeply want?"],
  ["Values", "Which value do you claim publicly but repeatedly abandon when it costs you comfort?"],
  ["Values", "Are you pursuing freedom, or simply trying to escape responsibility?"],
  ["Reality", "Is this situation wrong for you, or are you frustrated because you are still new at it?"],
  ["Reality", "What financial fact are you avoiding because it complicates the decision you want to make?"],
  ["Reality", "What bridge can you build before leaving the place you no longer want to stay?"],
  ["Reality", "What evidence would tell you to wait—and what evidence would tell you to leave?"],
  ["Reality", "Are you staying strategically, or using practicality as a respectable name for fear?"],
  ["Reality", "What review date would prevent 'not yet' from becoming 'never'?"],
  ["Boundaries", "What criticism do you keep replaying because part of you believes it?"],
  ["Boundaries", "What would standing up for yourself sound like if you did not need to sound angry to feel strong?"],
  ["Boundaries", "Are you explaining your choice, or asking permission from someone who will not live with the consequences?"],
  ["Boundaries", "Which boundary have you avoided because you are rehearsing the other person's reaction?"],
  ["Boundaries", "Where have you confused keeping the peace with abandoning yourself?"],
  ["Boundaries", "What behaviour would you stop accepting if you believed your discomfort was enough information?"],
  ["Perspective", "What fact would genuinely change your mind? If the answer is 'nothing,' are you still thinking?"],
  ["Perspective", "What might the other person be protecting, fearing or misunderstanding?"],
  ["Perspective", "Are you responding to what was said—or to what it reminded you of?"],
  ["Perspective", "Have you interpreted disagreement as disrespect because certainty feels safer than discussion?"],
  ["Perspective", "Can you describe their position in a way they would recognise as fair?"],
  ["Perspective", "What part of this conflict belongs to you, even if most of it does not?"],
  ["Ego", "Were you ever overconfident about something? What humbled you?"],
  ["Ego", "What do you pretend to understand because asking would make you feel inexperienced?"],
  ["Ego", "Which mistake do you keep explaining away because admitting it would alter your self-image?"],
  ["Ego", "Who do you criticise most quickly—and what might they expose in you?"],
  ["Ego", "When did being the smartest person in the room stop you from learning from it?"],
  ["Ego", "Are you confident, or merely unwilling to be corrected?"],
  ["Action", "What do you already know enough about but still refuse to act on?"],
  ["Action", "What conversation would make the next six months clearer?"],
  ["Action", "What is the smallest experiment that could replace six more months of speculation?"],
  ["Action", "If your answer is true, what must you stop doing this week?"],
  ["Action", "Which decision are you asking more questions about because you dislike the answer you already have?"],
  ["Action", "What will become harder if you postpone this for another year?"]
];

const categories = ["All", "Purpose", "Values", "Reality", "Boundaries", "Perspective", "Ego", "Action"];
let activeCategory = "All";
let activeIndex = 0;

const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => navLinks.classList.remove("open")));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const selectedValues = new Set();
document.querySelectorAll("[data-value]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    if (selectedValues.has(value)) selectedValues.delete(value);
    else if (selectedValues.size < 4) selectedValues.add(value);
    else {
      document.querySelector("#valueStatus").textContent = "Four is enough. If everything is a priority, nothing is.";
      return;
    }
    button.setAttribute("aria-pressed", String(selectedValues.has(value)));
    const selected = [...selectedValues];
    document.querySelector("#valueStatus").textContent = selected.length
      ? `${selected.length} of 4: ${selected.join(" · ")}. Now ask whether your choices can prove it.`
      : "0 of 4 chosen. Do not choose what sounds admirable. Choose what costs you something when it is absent.";
  });
});

["value", "reality", "energy"].forEach((name) => {
  const range = document.querySelector(`#${name}Range`);
  const output = document.querySelector(`#${name}Output`);
  range.addEventListener("input", () => output.textContent = range.value);
});

document.querySelector("#alignmentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const goal = document.querySelector("#goalInput").value.trim();
  const scores = {
    values: Number(document.querySelector("#valueRange").value),
    reality: Number(document.querySelector("#realityRange").value),
    energy: Number(document.querySelector("#energyRange").value)
  };
  const lowest = Object.entries(scores).sort((a, b) => a[1] - b[1])[0];
  const messages = {
    values: "The values score is lowest. The plan may be working while the purpose is not. Ask whether the goal is yours, or merely impressive.",
    reality: "Practicality is the tension. Do not abandon the direction; design the bridge. Name the money, time, skill or support required before moving.",
    energy: "Energy is lowest. Distinguish temporary effort from chronic self-betrayal. What part drains you: the goal, the method, the environment or the pace?"
  };
  const result = { goal, scores, values: [...selectedValues], calendar: document.querySelector("#calendarAnswer").value.trim(), date: new Date().toISOString() };
  localStorage.setItem(ALIGNMENT_KEY, JSON.stringify(result));
  document.querySelector("#alignmentResult").innerHTML = `<span>THE TENSION IN: ${escapeHTML(goal).toUpperCase()}</span><p>${messages[lowest[0]]}</p>`;
});

function escapeHTML(text) {
  return text.replace(/[<>&]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[character]));
}

function filteredQuestions() {
  return activeCategory === "All" ? questions : questions.filter((item) => item[0] === activeCategory);
}

function readAnswers() {
  try { return JSON.parse(localStorage.getItem(ANSWER_KEY)) || []; }
  catch { return []; }
}

function renderFilters() {
  const filters = document.querySelector("#filters");
  filters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.setAttribute("aria-pressed", String(category === activeCategory));
    button.addEventListener("click", () => {
      activeCategory = category;
      activeIndex = 0;
      renderFilters();
      renderQuestion();
    });
    filters.append(button);
  });
}

function renderQuestion() {
  const pool = filteredQuestions();
  if (activeIndex >= pool.length) activeIndex = 0;
  if (activeIndex < 0) activeIndex = pool.length - 1;
  const [category, text] = pool[activeIndex];
  document.querySelector("#questionCategory").textContent = category.toUpperCase();
  document.querySelector("#questionNumber").textContent = `QUESTION ${String(questions.findIndex((item) => item[1] === text) + 1).padStart(2, "0")}`;
  document.querySelector("#questionText").textContent = text;
  const existing = readAnswers().find((item) => item.question === text);
  document.querySelector("#answerText").value = existing?.answer || "";
  document.querySelector("#saveStatus").textContent = existing ? "You have answered this before. Read what your earlier self knew." : "";
}

document.querySelector("#nextQuestion").addEventListener("click", () => { activeIndex += 1; renderQuestion(); });
document.querySelector("#previousQuestion").addEventListener("click", () => { activeIndex -= 1; renderQuestion(); });

function chooseRandom() {
  activeCategory = "All";
  activeIndex = Math.floor(Math.random() * questions.length);
  renderFilters();
  renderQuestion();
  document.querySelector("#question-room").scrollIntoView({ behavior: "smooth" });
}
document.querySelector("#randomHero").addEventListener("click", chooseRandom);
document.querySelector("#randomRoom").addEventListener("click", chooseRandom);

document.querySelector("#saveAnswer").addEventListener("click", () => {
  const question = document.querySelector("#questionText").textContent;
  const category = document.querySelector("#questionCategory").textContent;
  const answer = document.querySelector("#answerText").value.trim();
  if (!answer) {
    document.querySelector("#saveStatus").textContent = "Write the answer you do not want to admit first.";
    return;
  }
  const answers = readAnswers().filter((item) => item.question !== question);
  answers.push({ question, category, answer, date: new Date().toISOString() });
  localStorage.setItem(ANSWER_KEY, JSON.stringify(answers.slice(-30)));
  document.querySelector("#saveStatus").textContent = "Answer saved in this browser.";
  renderSaved();
});

function renderSaved() {
  const savedList = document.querySelector("#savedList");
  const answers = readAnswers().slice().reverse();
  if (!answers.length) {
    savedList.innerHTML = '<p class="empty-saved">No answers saved yet. The useful question is usually the one you are tempted to skip.</p>';
    return;
  }
  savedList.innerHTML = answers.map((item) => `
    <article>
      <span>${escapeHTML(item.category)}</span>
      <h3>${escapeHTML(item.question)}</h3>
      <p>${escapeHTML(item.answer)}</p>
    </article>
  `).join("");
}

document.querySelectorAll("[data-humble]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-humble]").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    document.querySelector("#humilitySelected").textContent = button.dataset.humble;
  });
});

document.querySelector("#actionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const action = document.querySelector("#actionInput").value.trim();
  if (!action) return;
  localStorage.setItem(ACTION_KEY, action);
  document.querySelector("#actionResult").textContent = `Your seven-day answer: ${action}`;
});

const previousAlignment = (() => {
  try { return JSON.parse(localStorage.getItem(ALIGNMENT_KEY)); }
  catch { return null; }
})();
if (previousAlignment) {
  document.querySelector("#goalInput").value = previousAlignment.goal || "";
  document.querySelector("#calendarAnswer").value = previousAlignment.calendar || "";
}
const previousAction = localStorage.getItem(ACTION_KEY);
if (previousAction) {
  document.querySelector("#actionInput").value = previousAction;
  document.querySelector("#actionResult").textContent = `Your seven-day answer: ${previousAction}`;
}

renderFilters();
renderQuestion();
renderSaved();
