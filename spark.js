(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }

  const hesitantText = $("#hesitantText");
  const messyThoughts = [
    "I will start when I feel ready.",
    "I will start when I feel less scared.",
    "I will start when it is perfect.",
    "Actually... I will start now."
  ];

  async function runHesitantTyping() {
    if (!hesitantText || prefersReducedMotion) return;
    const wait = ms => new Promise(resolve => window.setTimeout(resolve, ms));
    for (let round = 0; round < messyThoughts.length; round += 1) {
      const thought = messyThoughts[round];
      hesitantText.textContent = "";
      for (const character of thought) {
        hesitantText.textContent += character;
        await wait(28 + Math.random() * 55);
      }
      await wait(round === messyThoughts.length - 1 ? 2600 : 1100);
      if (round < messyThoughts.length - 1) {
        while (hesitantText.textContent.length) {
          hesitantText.textContent = hesitantText.textContent.slice(0, -1);
          await wait(18);
        }
      }
    }
  }
  runHesitantTyping();

  const honestyResponse = $("#honestyResponse");
  $$(".honesty-card").forEach(card => {
    card.addEventListener("click", () => {
      $$(".honesty-card").forEach(item => item.classList.remove("is-active"));
      card.classList.add("is-active");
      if (honestyResponse) {
        const response = $("p", honestyResponse);
        if (response) response.textContent = card.dataset.response || "Start with one honest move.";
        honestyResponse.animate(
          [{ transform: "rotate(-0.7deg) scale(.98)" }, { transform: "rotate(-0.7deg) scale(1)" }],
          { duration: 260, easing: "ease-out" }
        );
      }
    });
  });

  $$(".flip-card").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("is-flipped"));
  });

  const storageKey = "jigyasa-messy-beginning";
  const countKey = "jigyasa-return-count";
  const startForm = $("#startForm");
  const bigThing = $("#bigThing");
  const smallMove = $("#smallMove");
  const activeBig = $("#activeBig");
  const activeMove = $("#activeMove");
  const timerDisplay = $("#timerDisplay");
  const timerButton = $("#timerButton");
  const doneButton = $("#doneButton");
  const resetStart = $("#resetStart");
  const returnCount = $("#returnCount");
  const returnMarks = $("#returnMarks");

  let selectedMinutes = 5;
  let secondsLeft = selectedMinutes * 60;
  let timerId = null;
  let timerRunning = false;

  const safeRead = key => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const safeWrite = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* private browsing can block storage */ }
  };
  const safeRemove = key => {
    try { localStorage.removeItem(key); } catch { /* no action needed */ }
  };

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function updateTimer() {
    if (timerDisplay) timerDisplay.textContent = formatTime(secondsLeft);
  }

  function renderPlan(plan) {
    if (!plan) return;
    selectedMinutes = Number(plan.minutes) || 5;
    secondsLeft = selectedMinutes * 60;
    if (activeBig) activeBig.textContent = plan.big;
    if (activeMove) activeMove.textContent = plan.move;
    if (timerButton) timerButton.disabled = false;
    if (doneButton) doneButton.disabled = false;
    updateTimer();
  }

  function loadPlan() {
    const saved = safeRead(storageKey);
    if (!saved) return;
    try { renderPlan(JSON.parse(saved)); } catch { safeRemove(storageKey); }
  }

  function renderReturns() {
    const count = Math.max(0, Number(safeRead(countKey)) || 0);
    if (returnCount) returnCount.textContent = String(count);
    if (!returnMarks) return;
    returnMarks.replaceChildren();
    for (let index = 0; index < Math.min(count, 80); index += 1) {
      const mark = document.createElement("span");
      mark.className = "return-mark";
      mark.textContent = index % 3 === 0 ? "/" : "|";
      mark.style.setProperty("--mark-rotation", `${-12 + (index * 7) % 24}deg`);
      returnMarks.append(mark);
    }
  }

  if (startForm) {
    startForm.addEventListener("submit", event => {
      event.preventDefault();
      const minutesInput = $("input[name='minutes']:checked", startForm);
      const plan = {
        big: bigThing.value.trim(),
        move: smallMove.value.trim(),
        minutes: Number(minutesInput?.value || 5)
      };
      if (!plan.big || !plan.move) return;
      safeWrite(storageKey, JSON.stringify(plan));
      renderPlan(plan);
      $("#activeSection")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  if (timerButton) {
    timerButton.addEventListener("click", () => {
      if (timerRunning) {
        window.clearInterval(timerId);
        timerRunning = false;
        timerButton.textContent = "RESUME TIMER";
        return;
      }
      if (secondsLeft <= 0) secondsLeft = selectedMinutes * 60;
      timerRunning = true;
      timerButton.textContent = "PAUSE";
      timerId = window.setInterval(() => {
        secondsLeft -= 1;
        updateTimer();
        if (secondsLeft <= 0) {
          window.clearInterval(timerId);
          timerRunning = false;
          timerButton.textContent = "START AGAIN";
          if (timerDisplay) timerDisplay.textContent = "DONE!";
        }
      }, 1000);
    });
  }

  if (doneButton) {
    doneButton.addEventListener("click", () => {
      const nextCount = (Number(safeRead(countKey)) || 0) + 1;
      safeWrite(countKey, String(nextCount));
      renderReturns();
      doneButton.textContent = "YOU SHOWED UP ✓";
      doneButton.disabled = true;
      window.setTimeout(() => {
        doneButton.textContent = "I DID THE THING ✓";
        doneButton.disabled = false;
      }, 2200);
    });
  }

  if (resetStart) {
    resetStart.addEventListener("click", () => {
      window.clearInterval(timerId);
      timerRunning = false;
      safeRemove(storageKey);
      selectedMinutes = 5;
      secondsLeft = 300;
      if (activeBig) activeBig.textContent = "Nothing yet.";
      if (activeMove) activeMove.textContent = "Give yourself one real action.";
      if (timerButton) { timerButton.disabled = true; timerButton.textContent = "START TIMER"; }
      if (doneButton) doneButton.disabled = true;
      if (startForm) startForm.reset();
      updateTimer();
    });
  }

  loadPlan();
  renderReturns();
  updateTimer();
})();
