/* Wonder Verse shared interactions */

document.addEventListener("DOMContentLoaded", () => {
    /*
     * PRIVATE REFLECTION SAVING
     * Saves entries only in the visitor's browser.
     */
    document.querySelectorAll("[data-storage]").forEach((form) => {
        const storageKey = form.dataset.storage;
        const textArea = form.querySelector("textarea");
        const status = form.querySelector(".status");

        if (!storageKey || !textArea) return;

        try {
            textArea.value = localStorage.getItem(storageKey) || "";
        } catch (error) {
            if (status) {
                status.textContent =
                    "Private saving is unavailable in this browser.";
            }
        }

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            try {
                localStorage.setItem(storageKey, textArea.value);

                if (status) {
                    status.textContent =
                        "Saved privately on this device";

                    window.setTimeout(() => {
                        status.textContent =
                            "Only you can see this entry";
                    }, 1800);
                }
            } catch (error) {
                if (status) {
                    status.textContent =
                        "This entry could not be saved.";
                }
            }
        });
    });

    /*
     * SCHOOL PAGE TABS
     * Switches between Students, Educators and School Teams.
     */
    const tabButtons = document.querySelectorAll("[data-tab]");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const panelId = button.dataset.tab;
            const selectedPanel = panelId
                ? document.getElementById(panelId)
                : null;

            if (!selectedPanel) return;

            tabButtons.forEach((item) => {
                item.classList.remove("active");
                item.setAttribute("aria-selected", "false");
            });

            tabPanels.forEach((panel) => {
                panel.classList.remove("active");
                panel.hidden = true;
            });

            button.classList.add("active");
            button.setAttribute("aria-selected", "true");

            selectedPanel.classList.add("active");
            selectedPanel.hidden = false;
        });
    });

    /*
     * Keeps the tab marked "active" visible when the page opens.
     */
    tabPanels.forEach((panel) => {
        panel.hidden = !panel.classList.contains("active");
    });

    /*
     * MOBILE NAVIGATION
     */
    const menuButton = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {
        function closeMenu() {
            mobileMenu.classList.remove("open");
            menuButton.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        }

        menuButton.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("open");

            menuButton.classList.toggle("open", isOpen);
            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        mobileMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });
    }
});
