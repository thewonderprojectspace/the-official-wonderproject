const welcomeButton = document.getElementById("welcomeButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const wonderForm = document.getElementById("wonderForm");
const wonderMessage = document.getElementById("wonderMessage");

/* =========================================
   RESOURCE FILTERS
========================================= */

const filterButtons = document.querySelectorAll(".filter-button");
const resourceCards = document.querySelectorAll(".resource-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.category;

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        resourceCards.forEach(function (card) {
            const cardCategories = card.dataset.category || "";

            if (
                selectedCategory === "all" ||
                cardCategories.includes(selectedCategory)
            ) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});


/* =========================================
   HOMEPAGE WONDER FORM
========================================= */

if (wonderForm && wonderMessage) {
    wonderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        wonderMessage.textContent =
            "Your question has entered the Wonder Universe! ✨";

        wonderForm.reset();
    });
}


/* =========================================
   OLD WELCOME BUTTON
========================================= */

if (welcomeButton) {
    welcomeButton.addEventListener("click", function () {
        alert("What are you wondering about today?");
    });
}


/* =========================================
   CONTACT FORM
========================================= */

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");

        const name =
            nameInput && nameInput.value.trim()
                ? nameInput.value.trim()
                : "curious explorer";

        formMessage.textContent =
            `Thank you, ${name}. Your form is working on the webpage.`;

        contactForm.reset();
    });
}


/* =========================================
   QUESTION ACCORDION
========================================= */

const questionButtons =
    document.querySelectorAll(".question-toggle");

questionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const currentQuestion =
            button.closest(".question-item");

        if (!currentQuestion) {
            return;
        }

        const isAlreadyOpen =
            currentQuestion.classList.contains("open");

        document
            .querySelectorAll(".question-item")
            .forEach(function (question) {
                question.classList.remove("open");

                const questionButton =
                    question.querySelector(".question-toggle");

                if (questionButton) {
                    questionButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            });

        if (!isAlreadyOpen) {
            currentQuestion.classList.add("open");

            button.setAttribute(
                "aria-expanded",
                "true"
            );
        }
    });
});


/* =========================================
   QUESTION SUBMISSION FORM
========================================= */

const questionSubmissionForm =
    document.getElementById("questionSubmissionForm");

const questionFormMessage =
    document.getElementById("questionFormMessage");

if (questionSubmissionForm && questionFormMessage) {
    questionSubmissionForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            const submittedQuestionInput =
                document.getElementById("submittedQuestion");

            const submittedQuestion =
                submittedQuestionInput
                    ? submittedQuestionInput.value.trim()
                    : "";

            if (submittedQuestion === "") {
                questionFormMessage.textContent =
                    "Please share your question before sending it.";

                return;
            }

            questionFormMessage.textContent =
                "Your question has joined the Wonder Universe! ✨";

            questionSubmissionForm.reset();
        }
    );
}