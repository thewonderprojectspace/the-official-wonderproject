"use strict";

/* ======================================================
   HELPER FUNCTION
====================================================== */

function resetTransforms(items) {
    items.forEach(function (item) {
        item.style.transform = "";
    });
}


/* ======================================================
   MOBILE NAVIGATION
====================================================== */

const menuButton = document.querySelector(".mobile-menu-button");
const mainNavigation = document.getElementById("mainNavigation");

if (menuButton && mainNavigation) {
    menuButton.addEventListener("click", function () {
        const isOpen = mainNavigation.classList.toggle("open");

        menuButton.classList.toggle("open", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    const navigationLinks =
        mainNavigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mainNavigation.classList.remove("open");
            menuButton.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });

    document.addEventListener("click", function (event) {
        const clickedInsideNavigation =
            mainNavigation.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);

        if (
            !clickedInsideNavigation &&
            !clickedMenuButton
        ) {
            mainNavigation.classList.remove("open");
            menuButton.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
}


/* ======================================================
   SMOOTH SCROLL FOR PAGE LINKS
====================================================== */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetSection =
            document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        event.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


/* ======================================================
   RESOURCE FILTERS
====================================================== */

const filterButtons =
    document.querySelectorAll(".filter-button");

const resourceCards =
    document.querySelectorAll(".resource-card");

if (
    filterButtons.length > 0 &&
    resourceCards.length > 0
) {
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory =
                button.dataset.category || "all";

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            resourceCards.forEach(function (card) {
                const categories =
                    card.dataset.category || "";

                const shouldShow =
                    selectedCategory === "all" ||
                    categories
                        .split(" ")
                        .includes(selectedCategory);

                if (shouldShow) {
                    card.classList.remove("resource-hidden");
                    card.style.display = "flex";
                } else {
                    card.classList.add("resource-hidden");
                    card.style.display = "none";
                }
            });
        });
    });
}


/* ======================================================
   QUESTION ACCORDION
====================================================== */

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

                const toggleButton =
                    question.querySelector(".question-toggle");

                if (toggleButton) {
                    toggleButton.setAttribute(
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
   FLOATING ITEMS THAT MOVE AWAY FROM THE CURSOR
====================================================== */

function createCursorMovement(
    containerSelector,
    itemSelector,
    movementRadius,
    movementAmount
) {
    const container =
        document.querySelector(containerSelector);

    const items =
        document.querySelectorAll(itemSelector);

    if (!container || items.length === 0) {
        return;
    }

    container.addEventListener(
        "mousemove",
        function (event) {
            const containerBounds =
                container.getBoundingClientRect();

            const cursorX =
                event.clientX - containerBounds.left;

            const cursorY =
                event.clientY - containerBounds.top;

            items.forEach(function (item, index) {
                const itemBounds =
                    item.getBoundingClientRect();

                const itemCentreX =
                    itemBounds.left -
                    containerBounds.left +
                    itemBounds.width / 2;

                const itemCentreY =
                    itemBounds.top -
                    containerBounds.top +
                    itemBounds.height / 2;

                const distanceX =
                    itemCentreX - cursorX;

                const distanceY =
                    itemCentreY - cursorY;

                const distance = Math.sqrt(
                    distanceX * distanceX +
                    distanceY * distanceY
                );

                if (
                    distance < movementRadius &&
                    distance > 0
                ) {
                    const strength =
                        (movementRadius - distance) /
                        movementRadius;

                    const variation =
                        movementAmount +
                        (index % 3) * 5;

                    const moveX =
                        (distanceX / distance) *
                        strength *
                        variation;

                    const moveY =
                        (distanceY / distance) *
                        strength *
                        variation;

                    item.style.transform =
                        `translate(${moveX}px, ${moveY}px) scale(1.08)`;
                } else {
                    item.style.transform = "";
                }
            });
        }
    );

    container.addEventListener(
        "mouseleave",
        function () {
            resetTransforms(items);
        }
    );
}


/* Homepage floating emojis */

createCursorMovement(
    ".hero",
    ".hero .floating-emoji",
    190,
    30
);


/* About-page floating emojis */

createCursorMovement(
    ".about-hero",
    ".about-hero .floating-wonder",
    180,
    28
);


/* Books-page floating items */

createCursorMovement(
    ".books-hero",
    ".books-hero .floating-book-item",
    180,
    26
);


/* ======================================================
   HOMEPAGE ADVENTURE CARDS
====================================================== */

const adventureCards =
    document.querySelectorAll(".wonder-path-card");

adventureCards.forEach(function (card) {
    card.addEventListener("mousemove", function (event) {
        const cardBounds =
            card.getBoundingClientRect();

        const cursorX =
            event.clientX - cardBounds.left;

        const cursorY =
            event.clientY - cardBounds.top;

        const centreX =
            cardBounds.width / 2;

        const centreY =
            cardBounds.height / 2;

        const rotateX =
            ((cursorY - centreY) / centreY) * -2;

        const rotateY =
            ((cursorX - centreX) / centreX) * 2;

        card.style.transform =
            `translateY(-8px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "";
    });
});


/* ======================================================
   QUESTION FORM MESSAGE
====================================================== */

const questionForm =
    document.getElementById("questionSubmissionForm");

const questionFormMessage =
    document.getElementById("questionFormMessage");

if (questionForm && questionFormMessage) {
    questionForm.addEventListener(
        "submit",
        function () {
            questionFormMessage.textContent =
                "Sending your wonderful question... ✨";
        }
    );
}


/* ======================================================
   HOMEPAGE WONDER FORM
====================================================== */

const wonderForm =
    document.getElementById("wonderForm");

if (wonderForm) {
    wonderForm.addEventListener("submit", function () {
        const submitButton =
            wonderForm.querySelector(
                'button[type="submit"]'
            );

        if (submitButton) {
            submitButton.textContent =
                "Sending your wonder... ✨";

            submitButton.disabled = true;
        }
    });
}


/* ======================================================
   REVEAL SECTIONS WHILE SCROLLING
====================================================== */

const revealItems =
    document.querySelectorAll(
        ".wonder-path-card, " +
        ".wonder-card, " +
        ".resource-card, " +
        ".school-feature, " +
        ".section-heading"
    );

if (
    "IntersectionObserver" in window &&
    revealItems.length > 0
) {
    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

    revealItems.forEach(function (item) {
        item.classList.add("reveal-item");
        revealObserver.observe(item);
    });
} else {
    revealItems.forEach(function (item) {
        item.classList.add("reveal-visible");
    });
}


/* ======================================================
   CURRENT YEAR IN FOOTER
====================================================== */

const currentYearElements =
    document.querySelectorAll("[data-current-year]");

currentYearElements.forEach(function (element) {
    element.textContent =
        new Date().getFullYear();
});
/* ======================================================
   MY WONDER SPACE
====================================================== */

const roleCards =
    document.querySelectorAll(".wonder-role-card");

const loginPanel =
    document.getElementById("wonderLoginPanel");

const closeLoginPanel =
    document.getElementById("closeLoginPanel");

const selectedRoleIcon =
    document.getElementById("selectedRoleIcon");

const selectedRoleLabel =
    document.getElementById("selectedRoleLabel");

const selectedRoleTitle =
    document.getElementById("selectedRoleTitle");

const selectedRoleDescription =
    document.getElementById("selectedRoleDescription");

const wonderLoginForm =
    document.getElementById("wonderLoginForm");

const loginFormMessage =
    document.getElementById("loginFormMessage");

const showPasswordButton =
    document.getElementById("showPasswordButton");

const wonderPassword =
    document.getElementById("wonderPassword");


const roleInformation = {
    student: {
        icon: "🎒",
        label: "Student Wonder Space",
        title: "Ready for another adventure?",
        description:
            "Sign in to continue exploring your activities, questions and learning discoveries."
    },

    educator: {
        icon: "🍎",
        label: "Educator Wonder Space",
        title: "Welcome back, educator",
        description:
            "Sign in to explore teaching resources, classroom ideas and future progress tools."
    },

    adult: {
        icon: "🌻",
        label: "Curious Adult Wonder Space",
        title: "Your curiosity belongs here",
        description:
            "Sign in to return to the stories, questions and ideas that helped you rediscover your spark."
    },

    institution: {
        icon: "🏫",
        label: "Institution Wonder Space",
        title: "Welcome, curious community",
        description:
            "Institution accounts and learner progress tools are currently being developed."
    }
};


function openWonderLogin(role) {
    if (!loginPanel) {
        return;
    }

    const roleDetails =
        roleInformation[role] ||
        roleInformation.student;

    if (selectedRoleIcon) {
        selectedRoleIcon.textContent =
            roleDetails.icon;
    }

    if (selectedRoleLabel) {
        selectedRoleLabel.textContent =
            roleDetails.label;
    }

    if (selectedRoleTitle) {
        selectedRoleTitle.textContent =
            roleDetails.title;
    }

    if (selectedRoleDescription) {
        selectedRoleDescription.textContent =
            roleDetails.description;
    }

    if (wonderLoginForm) {
        wonderLoginForm.dataset.role = role;
    }

    if (loginFormMessage) {
        loginFormMessage.textContent = "";
    }

    loginPanel.classList.add("open");

    loginPanel.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "login-panel-open"
    );

    const emailField =
        document.getElementById("wonderEmail");

    if (emailField) {
        window.setTimeout(function () {
            emailField.focus();
        }, 250);
    }
}


function closeWonderLogin() {
    if (!loginPanel) {
        return;
    }

    loginPanel.classList.remove("open");

    loginPanel.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "login-panel-open"
    );
}


roleCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const selectedRole =
            card.dataset.role;

        if (selectedRole === "institution") {
            window.location.href =
                "schools.html";

            return;
        }

        openWonderLogin(selectedRole);
    });
});


if (closeLoginPanel) {
    closeLoginPanel.addEventListener(
        "click",
        closeWonderLogin
    );
}


if (loginPanel) {
    loginPanel.addEventListener(
        "click",
        function (event) {
            if (event.target === loginPanel) {
                closeWonderLogin();
            }
        }
    );
}


document.addEventListener(
    "keydown",
    function (event) {
        if (
            event.key === "Escape" &&
            loginPanel &&
            loginPanel.classList.contains("open")
        ) {
            closeWonderLogin();
        }
    }
);


if (
    showPasswordButton &&
    wonderPassword
) {
    showPasswordButton.addEventListener(
        "click",
        function () {
            const passwordIsHidden =
                wonderPassword.type === "password";

            wonderPassword.type =
                passwordIsHidden
                    ? "text"
                    : "password";

            showPasswordButton.textContent =
                passwordIsHidden
                    ? "🙈"
                    : "👀";

            showPasswordButton.setAttribute(
                "aria-label",
                passwordIsHidden
                    ? "Hide password"
                    : "Show password"
            );
        }
    );
}


if (wonderLoginForm) {
    wonderLoginForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            const selectedRole =
                wonderLoginForm.dataset.role ||
                "student";

            if (loginFormMessage) {
                loginFormMessage.textContent =
                    "Your Wonder Space account system is coming soon ✨";
            }

            /*
             * Later, this section will connect to your
             * real login system using Firebase, Supabase
             * or another secure authentication provider.
             */

            console.log(
                "Selected Wonder Space role:",
                selectedRole
            );
        }
    );
}


/* Open a role automatically from links such as:
   signin.html?role=educator
*/

const wonderPageParameters =
    new URLSearchParams(window.location.search);

const requestedWonderRole =
    wonderPageParameters.get("role");

if (
    requestedWonderRole &&
    roleInformation[requestedWonderRole]
) {
    window.setTimeout(function () {
        openWonderLogin(requestedWonderRole);
    }, 450);
}
