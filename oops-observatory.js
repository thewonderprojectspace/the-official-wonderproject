(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const keys = {
    anger: "jigyasa-oops-anger",
    log: "jigyasa-oops-log",
    repair: "jigyasa-oops-repair",
    action: "jigyasa-oops-action"
  };

  const safeGet = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const safeSet = (key,value) => { try { localStorage.setItem(key,value); } catch { /* storage may be blocked */ } };
  const readJSON = (key,fallback={}) => { try { return JSON.parse(safeGet(key)) || fallback; } catch { return fallback; } };

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
    },{threshold:.12});
    reveals.forEach(el => observer.observe(el));
  }

  const angerInput = $("#angerInput");
  const angerStatus = $("#angerStatus");
  if (angerInput) angerInput.value = safeGet(keys.anger) || "";
  $("#holdAnger")?.addEventListener("click",() => {
    const value = angerInput.value.trim();
    if (!value) {
      angerStatus.textContent = "Write the honest version first.";
      return;
    }
    safeSet(keys.anger,value);
    angerStatus.textContent = "Held without judgement. Anger named clearly is easier to direct.";
  });

  let log = readJSON(keys.log);
  const logCards = $$(".log-card");

  function renderLog() {
    let total = 0;
    logCards.forEach(card => {
      const key = card.dataset.key;
      const textarea = $("textarea",card);
      const status = $("small",card);
      if (log[key]) {
        textarea.value = log[key];
        card.classList.add("is-saved");
        status.textContent = "Held";
        total += 1;
      } else {
        card.classList.remove("is-saved");
        status.textContent = "Unsaved";
      }
    });
    if ($("#oopsProgress")) $("#oopsProgress").textContent = String(total);
  }

  logCards.forEach(card => {
    const textarea = $("textarea",card);
    let timer;
    textarea.addEventListener("input",() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const value = textarea.value.trim();
        if (value) log[card.dataset.key] = value;
        else delete log[card.dataset.key];
        safeSet(keys.log,JSON.stringify(log));
        renderLog();
      },350);
    });
  });

  const excuseInput = $("#excuseInput");
  const burnChamber = $("#burnChamber");
  const keptLesson = $("#keptLesson");
  $("#burnExcuse")?.addEventListener("click",() => {
    const excuse = excuseInput.value.trim();
    if (!excuse) {
      keptLesson.textContent = "Name the defence before you burn it.";
      return;
    }
    const span = document.createElement("span");
    span.textContent = excuse;
    burnChamber.replaceChildren(span);
    burnChamber.classList.remove("is-burning");
    void burnChamber.offsetWidth;
    burnChamber.classList.add("is-burning");
    window.setTimeout(() => {
      burnChamber.classList.remove("is-burning");
      burnChamber.innerHTML = "<span>Excuse released.</span>";
      keptLesson.textContent = "Keep this instead: context can explain your action; it does not erase your responsibility.";
      excuseInput.value = "";
    },1350);
  });

  const repairForm = $("#repairForm");
  const acceptInput = $("#acceptInput");
  const repairInput = $("#repairInput");
  const preventInput = $("#preventInput");
  const repairResult = $("#repairResult");

  function renderRepair() {
    const plan = readJSON(keys.repair,null);
    if (!plan) return;
    acceptInput.value = plan.accept || "";
    repairInput.value = plan.repair || "";
    preventInput.value = plan.prevent || "";
    repairResult.innerHTML = "";
    const heading = document.createElement("h3");
    heading.textContent = "Your response has three parts:";
    const text = document.createElement("p");
    text.textContent = `I accept: ${plan.accept} Repair: ${plan.repair} Prevention: ${plan.prevent}`;
    repairResult.append(heading,text);
  }

  repairForm?.addEventListener("submit",event => {
    event.preventDefault();
    const plan = {
      accept: acceptInput.value.trim(),
      repair: repairInput.value.trim(),
      prevent: preventInput.value.trim()
    };
    if (!plan.accept || !plan.repair || !plan.prevent) return;
    safeSet(keys.repair,JSON.stringify(plan));
    renderRepair();
  });

  const nextAction = $("#nextAction");
  const actionStatus = $("#actionStatus");
  if (nextAction) nextAction.value = safeGet(keys.action) || "";
  $("#commitAction")?.addEventListener("click",() => {
    const value = nextAction.value.trim();
    if (!value) {
      actionStatus.textContent = "Choose one action small enough to complete.";
      return;
    }
    safeSet(keys.action,value);
    actionStatus.textContent = "Committed. Responsibility becomes real through action.";
  });

  function textReport() {
    const plan = readJSON(keys.repair,{});
    const lines = [
      "OOPS OBSERVATORY · GALTIYON KI BHATTI",
      "Jigyasa Verse",
      "",
      "ANGER I NAMED",
      safeGet(keys.anger) || "—",
      "",
      "WHAT HAPPENED",
      log.happened || "—",
      "",
      "WHO PAID / WHAT IT COST",
      log.cost || "—",
      "",
      "WHAT IS MINE TO OWN",
      log.mine || "—",
      "",
      "WHAT MUST CHANGE",
      log.different || "—",
      "",
      "ACCEPT",
      plan.accept || "—",
      "",
      "REPAIR",
      plan.repair || "—",
      "",
      "PREVENT",
      plan.prevent || "—",
      "",
      "NEXT RESPONSIBLE ACTION",
      safeGet(keys.action) || "—",
      "",
      "Face it. Own it. Repair it. Change it."
    ];
    return lines.join("\n");
  }

  $("#downloadObservatory")?.addEventListener("click",() => {
    const blob = new Blob([textReport()],{type:"text/plain;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "my-oops-observatory.txt";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    const status = $("#saveStatus");
    if (status) status.textContent = "Saved. Keep the lesson; refuse the pattern.";
  });

  renderLog();
  renderRepair();
})();

