document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------
     Reveal sections while scrolling
  ---------------------------------- */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal-ready");
      revealObserver.observe(element);
    });
  } else {
    /* Keeps content visible in older browsers */
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  /* ---------------------------------
     Daily reminders
  ---------------------------------- */

  const reminders = [
    "You do not need more time. You need one honest beginning.",
    "Motivation may leave. Your reason can stay.",
    "Your next chapter does not require permission from your last one.",
    "Small actions are how enormous dreams learn to walk.",
    "Thank who you were. Then help who you are becoming.",
    "There is no perfect Monday. There is only the choice available now."
  ];

  let reminderIndex = 0;

  const reminderText = document.getElementById("reminderText");
  const newReminder = document.getElementById("newReminder");

  /* Run only when both elements exist */
  if (reminderText && newReminder) {
    newReminder.addEventListener("click", () => {
      reminderIndex = (reminderIndex + 1) % reminders.length;

      reminderText.classList.add("changing");

      window.setTimeout(() => {
        reminderText.textContent = reminders[reminderIndex];
        reminderText.classList.remove("changing");
      }, 180);
    });
  }
});
