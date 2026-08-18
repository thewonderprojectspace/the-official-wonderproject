(() => {
  "use strict";

  document.querySelectorAll("[data-wv-nav]").forEach((nav) => {
    const button = nav.querySelector("[data-wv-menu]");
    const links = nav.querySelector("[data-wv-links]");
    if (!button || !links) return;

    const closeMenu = () => {
      links.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation menu");
    };

    button.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    links.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && links.classList.contains("is-open")) {
        closeMenu();
        button.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target) && links.classList.contains("is-open")) closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });
  });
})();
