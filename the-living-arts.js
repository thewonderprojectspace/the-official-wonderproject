(() => {
  "use strict";

  /*
   * Tell the page that JavaScript
   * is available.
   */

  document.documentElement.classList.add(
    "js-ready"
  );

  /*
   * SELECT IMPORTANT ELEMENTS
   */

  const header =
    document.querySelector(
      "#siteHeader"
    );

  const progress =
    document.querySelector(
      "#scrollProgress"
    );

  const menuButton =
    document.querySelector(
      "#menuButton"
    );

  const nav =
    document.querySelector(
      "#mainNav"
    );

  const promptText =
    document.querySelector(
      "#creativePrompt"
    );

  const promptButton =
    document.querySelector(
      "#newPrompt"
    );

  /*
   * CREATIVE ENCOURAGEMENT PROMPTS
   */

  const creativePrompts = [
    "Make the smallest possible version of the thing you are afraid to begin.",

    "Borrow a technique from the past, then change one rule with intention.",

    "Create for twenty minutes before deciding whether the idea is good.",

    "Turn today's strongest feeling into a colour, sound, movement or scene.",

    "Make an ugly first draft on purpose. Now you have something to transform.",

    "Study one artist you admire. Notice the years behind the work, not only the result.",

    "Choose one ordinary object and make an audience see it differently.",

    "Return to the part that feels difficult. Stay with it for ten patient minutes.",

    "Ask whose story is missing, then make room to listen before you create.",

    "Finish one small piece instead of imagining ten perfect ones."
  ];

  let lastPrompt = 0;

  /*
   * HEADER AND SCROLL PROGRESS
   */

  function updatePagePosition() {
    const current =
      window.scrollY;

    const total =
      document.documentElement.scrollHeight
      - window.innerHeight;

    header?.classList.toggle(
      "scrolled",
      current > 24
    );

    if (progress) {
      const percentage =
        total > 0
          ? (current / total) * 100
          : 0;

      progress.style.width =
        `${percentage}%`;
    }
  }

  /*
   * MOBILE NAVIGATION
   */

  function closeMenu() {
    if (!menuButton || !nav) {
      return;
    }

    nav.classList.remove(
      "open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.setAttribute(
      "aria-label",
      "Open navigation"
    );
  }

  menuButton?.addEventListener(
    "click",
    () => {
      const opening =
        !nav?.classList.contains(
          "open"
        );

      nav?.classList.toggle(
        "open",
        opening
      );

      menuButton.setAttribute(
        "aria-expanded",
        String(opening)
      );

      menuButton.setAttribute(
        "aria-label",
        opening
          ? "Close navigation"
          : "Open navigation"
      );
    }
  );

  nav
    ?.querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        closeMenu
      );
    });

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    }
  );

  /*
   * SCROLL REVEAL ANIMATIONS
   */

  const revealItems =
    document.querySelectorAll(
      ".reveal"
    );

  const reducedMotion =
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches;

  if (
    reducedMotion
    || !(
      "IntersectionObserver"
      in window
    )
  ) {
    revealItems.forEach(
      (item) => {
        item.classList.add(
          "visible"
        );
      }
    );
  } else {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -35px"
        }
      );

    revealItems.forEach(
      (item) => {
        observer.observe(item);
      }
    );
  }

  /*
   * RANDOM CREATIVE PROMPT
   */

  promptButton?.addEventListener(
    "click",
    () => {
      if (!promptText) {
        return;
      }

      let nextPrompt;

      do {
        nextPrompt =
          Math.floor(
            Math.random()
            * creativePrompts.length
          );
      } while (
        nextPrompt === lastPrompt
        && creativePrompts.length > 1
      );

      lastPrompt =
        nextPrompt;

      /*
       * Add a small transition whenever
       * the prompt changes.
       */

      if (
        !window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        promptText.animate(
          [
            {
              opacity: 0,
              transform:
                "translateY(8px)"
            },
            {
              opacity: 1,
              transform:
                "translateY(0)"
            }
          ],
          {
            duration: 400
          }
        );
      }

      promptText.textContent =
        creativePrompts[nextPrompt];
    }
  );

  /*
   * LOGO FALLBACK
   */

  document
    .querySelector(
      ".brand-logo"
    )
    ?.addEventListener(
      "error",
      (event) => {
        event.currentTarget.style.display =
          "none";
      }
    );

  /*
   * PAGE EVENTS
   */

  window.addEventListener(
    "scroll",
    updatePagePosition,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    () => {
      updatePagePosition();

      if (
        window.innerWidth > 980
      ) {
        closeMenu();
      }
    }
  );

  /*
   * INITIAL SETUP
   */

  updatePagePosition();
})();
