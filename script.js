const welcomeButton = document.getElementById("welcomeButton");


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
   OLD WELCOME BUTTON
========================================= */

if (welcomeButton) {
    welcomeButton.addEventListener("click", function () {
        alert("What are you wondering about today?");
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


/* ======================================================
   ABOUT PAGE FLOATING EMOJIS
====================================================== */

const aboutHero = document.querySelector(".about-hero");

const floatingWonderItems =
    document.querySelectorAll(".floating-wonder");

if (aboutHero && floatingWonderItems.length > 0) {

    aboutHero.addEventListener("mousemove", function (event) {

        const heroBounds =
            aboutHero.getBoundingClientRect();

        const cursorX =
            event.clientX - heroBounds.left;

        const cursorY =
            event.clientY - heroBounds.top;

        floatingWonderItems.forEach(function (item, index) {

            const itemBounds =
                item.getBoundingClientRect();

            const itemCentreX =
                itemBounds.left -
                heroBounds.left +
                itemBounds.width / 2;

            const itemCentreY =
                itemBounds.top -
                heroBounds.top +
                itemBounds.height / 2;

            const distanceX =
                itemCentreX - cursorX;

            const distanceY =
                itemCentreY - cursorY;

            const distance = Math.sqrt(
                distanceX * distanceX +
                distanceY * distanceY
            );

            const movementRadius = 180;

            if (
                distance < movementRadius &&
                distance > 0
            ) {
                const movementStrength =
                    (movementRadius - distance) /
                    movementRadius;

                const movementAmount =
                    28 + (index % 3) * 5;

                const moveX =
                    (distanceX / distance) *
                    movementStrength *
                    movementAmount;

                const moveY =
                    (distanceY / distance) *
                    movementStrength *
                    movementAmount;

                item.style.transform =
                    `translate(${moveX}px, ${moveY}px) scale(1.08)`;

            } else {
                item.style.transform = "";
            }

        });

    });

    aboutHero.addEventListener("mouseleave", function () {

        floatingWonderItems.forEach(function (item) {
            item.style.transform = "";
        });

    });

}
