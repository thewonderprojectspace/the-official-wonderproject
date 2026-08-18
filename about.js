const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const reminders = [
  "You do not need more time. You need one honest beginning.",
  "Motivation may leave. Your reason can stay.",
  "Your next chapter does not require permission from your last one.",
  "Small actions are how enormous dreams learn to walk.",
  "Thank who you were. Then help who you are becoming.",
  "There is no perfect Monday. There is only the choice available now."
];

let reminderIndex = 0;
const reminderText = document.querySelector("#reminderText");
const newReminder = document.querySelector("#newReminder");

newReminder.addEventListener("click", () => {
  reminderIndex = (reminderIndex + 1) % reminders.length;
  reminderText.classList.add("changing");
  window.setTimeout(() => {
    reminderText.textContent = reminders[reminderIndex];
    reminderText.classList.remove("changing");
  }, 180);
});
