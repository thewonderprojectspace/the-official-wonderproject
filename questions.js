(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const answerKey = "jigyasa-andar-ka-kyun";
  const audienceKey = "jigyasa-audience-answer";
  const originKey = "jigyasa-origin-answer";
  const finalKey = "jigyasa-honest-purpose";

  const safeGet = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const safeSet = (key, value) => { try { localStorage.setItem(key, value); } catch { /* storage can be blocked */ } };
  const readObject = (key, fallback = {}) => {
    try { return JSON.parse(safeGet(key)) || fallback; } catch { return fallback; }
  };

  const menuButton = $("#menuButton");
  const navLinks = $("#navLinks");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    $$("a", navLinks).forEach(link => link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const reveals = $$(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    reveals.forEach(el => observer.observe(el));
  }

  const voiceResult = $("#voiceResult p");
  const selectedVoices = new Set();
  $$("#voiceCloud button").forEach(button => {
    button.addEventListener("click", () => {
      const voice = button.dataset.voice;
      button.classList.toggle("is-selected");
      button.classList.contains("is-selected") ? selectedVoices.add(voice) : selectedVoices.delete(voice);
      if (!voiceResult) return;
      if (!selectedVoices.size) {
        voiceResult.textContent = "The goal is not to silence everyone. It is to notice who has been speaking for you.";
      } else if (selectedVoices.size === 1 && selectedVoices.has("Myself")) {
        voiceResult.textContent = "Good. Now stay curious: is this your quiet voice—or the version of you that learned what would be rewarded?";
      } else {
        voiceResult.textContent = `Right now you can hear: ${[...selectedVoices].join(", ")}. You do not have to obey every voice you can hear.`;
      }
    });
  });

  function bindAutosave(selector, key) {
    const field = $(selector);
    if (!field) return;
    field.value = safeGet(key) || "";
    let timer;
    field.addEventListener("input", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => safeSet(key, field.value.trim()), 350);
    });
  }
  bindAutosave("#audienceAnswer", audienceKey);
  bindAutosave("#originAnswer", originKey);

  const motiveResponse = $("#motiveResponse");
  $$(".motive-card").forEach(card => {
    card.addEventListener("click", () => {
      $$(".motive-card").forEach(item => item.classList.remove("is-active"));
      card.classList.add("is-active");
      if (motiveResponse) motiveResponse.textContent = card.dataset.message || "Stay with the uncomfortable answer for a moment.";
    });
  });

  const stateCycle = ["questioning", "keep", "release"];
  const stateLabels = { questioning: "?", keep: "KEEP", release: "RELEASE" };
  $$("#choiceBoard button").forEach(button => {
    button.addEventListener("click", () => {
      const current = button.dataset.state || "questioning";
      const next = stateCycle[(stateCycle.indexOf(current) + 1) % stateCycle.length];
      button.dataset.state = next;
      const label = $("strong", button);
      if (label) label.textContent = stateLabels[next];
    });
  });

  const questions = [
    "If nobody could ever know you achieved it, would you still want it?",
    "Did this purpose begin as curiosity, care, fear, regret—or a need to prove something?",
    "Are you building a life you want, or a life that photographs well?",
    "What did you once need that you now want to create for someone else?",
    "Which mistake taught you something worth passing forward?",
    "If you could no longer become the person you admire, what part of this path would you still choose?",
    "What habit, lifestyle or relationship repeatedly pulls you away from yourself?",
    "Does this goal ask you to grow—or ask you to keep punishing an older version of yourself?",
    "What would you practise even if you were never called naturally talented?",
    "Who becomes safer, freer or less alone if you keep going?",
    "What are you willing to do when inspiration disappears and only the ordinary work remains?",
    "If this path changes shape, what deeper purpose would you refuse to lose?"
  ];

  let currentQuestion = 0;
  const questionNumber = $("#questionNumber");
  const questionText = $("#questionText");
  const answerText = $("#answerText");
  const saveStatus = $("#saveStatus");
  let savedAnswers = readObject(answerKey);

  function renderQuestion() {
    if (!questionText || !answerText || !questionNumber) return;
    questionNumber.textContent = `QUESTION ${String(currentQuestion + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
    questionText.textContent = questions[currentQuestion];
    answerText.value = savedAnswers[currentQuestion] || "";
    if (saveStatus) saveStatus.textContent = savedAnswers[currentQuestion] ? "This answer is saved." : "";
  }

  $("#previousQuestion")?.addEventListener("click", () => {
    currentQuestion = (currentQuestion - 1 + questions.length) % questions.length;
    renderQuestion();
  });
  $("#nextQuestion")?.addEventListener("click", () => {
    currentQuestion = (currentQuestion + 1) % questions.length;
    renderQuestion();
  });
  $("#saveAnswer")?.addEventListener("click", () => {
    const answer = answerText?.value.trim();
    if (!answer) {
      if (saveStatus) saveStatus.textContent = "Write the unpolished answer first.";
      return;
    }
    savedAnswers[currentQuestion] = answer;
    safeSet(answerKey, JSON.stringify(savedAnswers));
    if (saveStatus) saveStatus.textContent = "Kept. You can change your answer when you change.";
    renderSaved();
  });

  $$(".mirror-prompt").forEach((button, index) => {
    button.addEventListener("click", () => {
      const exactIndex = questions.findIndex(question => question === button.dataset.question);
      currentQuestion = exactIndex >= 0 ? exactIndex : Math.min(index + 2, questions.length - 1);
      if (questionText && button.dataset.question) questions[currentQuestion] = button.dataset.question;
      renderQuestion();
      $("#questionChamber")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    });
  });

  const finalForm = $("#finalForm");
  const finalAnswer = $("#finalAnswer");
  const whyAnswer = $("#whyAnswer");
  const finalResult = $("#finalResult");

  function renderFinal() {
    const saved = readObject(finalKey, null);
    if (!saved) return;
    if (finalAnswer) finalAnswer.value = saved.want || "";
    if (whyAnswer) whyAnswer.value = saved.why || "";
    if (finalResult) finalResult.textContent = `“I still want ${saved.want}, because ${saved.why}.”`;
  }

  finalForm?.addEventListener("submit", event => {
    event.preventDefault();
    const want = finalAnswer.value.trim();
    const why = whyAnswer.value.trim();
    if (!want || !why) return;
    safeSet(finalKey, JSON.stringify({ want, why }));
    renderFinal();
    renderSaved();
  });

  function renderSaved() {
    const savedList = $("#savedList");
    if (!savedList) return;
    const entries = Object.entries(savedAnswers).filter(([, value]) => String(value).trim());
    const purpose = readObject(finalKey, null);
    savedList.replaceChildren();

    if (!entries.length && !purpose) {
      const empty = document.createElement("p");
      empty.className = "empty-note";
      empty.textContent = "Your honest answers will gather here.";
      savedList.append(empty);
      return;
    }

    entries.forEach(([index, answer]) => {
      const article = document.createElement("article");
      article.className = "saved-entry";
      const label = document.createElement("small");
      label.textContent = questions[Number(index)] || `QUESTION ${Number(index) + 1}`;
      const text = document.createElement("p");
      text.textContent = answer;
      article.append(label, text);
      savedList.append(article);
    });

    if (purpose) {
      const article = document.createElement("article");
      article.className = "saved-entry";
      const label = document.createElement("small");
      label.textContent = "THE HONEST VERSION";
      const text = document.createElement("p");
      text.textContent = `I still want ${purpose.want}, because ${purpose.why}.`;
      article.append(label, text);
      savedList.append(article);
    }
  }

  renderQuestion();
  renderFinal();
  renderSaved();
})();

