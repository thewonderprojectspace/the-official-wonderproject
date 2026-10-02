(() => {
  "use strict";

  /*
   * Tell the CSS that JavaScript
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

  const promiseForm =
    document.querySelector(
      "#promiseForm"
    );

  const promiseOutput =
    document.querySelector(
      "#promiseOutput"
    );

  const dreamInput =
    document.querySelector(
      "#dreamInput"
    );

  const minimumInput =
    document.querySelector(
      "#minimumInput"
    );

  /*
   * HEADER AND SCROLL PROGRESS
   */

  function updatePagePosition() {
    const top =
      window.scrollY;

    const available =
      document.documentElement.scrollHeight
      - window.innerHeight;

    header?.classList.toggle(
      "scrolled",
      top > 24
    );

    if (progress) {
      const percentage =
        available > 0
          ? (top / available) * 100
          : 0;

      progress.style.width =
        `${percentage}%`;
    }
  }

  /*
   * MOBILE NAVIGATION
   */

  function closeMenu() {
    if (!nav || !menuButton) {
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
      const open =
        !nav?.classList.contains(
          "open"
        );

      nav?.classList.toggle(
        "open",
        open
      );

      menuButton.setAttribute(
        "aria-expanded",
        String(open)
      );

      menuButton.setAttribute(
        "aria-label",
        open
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
   * SAFELY DISPLAY USER TEXT
   */

  function escapeText(value) {
    const element =
      document.createElement(
        "span"
      );

    element.textContent =
      value;

    return element.innerHTML;
  }

  /*
   * DISPLAY THE STUDENT'S PROMISE
   */

  function showPromise(
    dream,
    minimum
  ) {
    if (
      !promiseOutput
      || !dream
      || !minimum
    ) {
      return;
    }

    promiseOutput.classList.add(
      "saved"
    );

    promiseOutput.innerHTML = `
      <span>MY NEXT SMALL STEP</span>

      <p>
        I am building towards
        <strong>
          ${escapeText(dream)}
        </strong>.

        <br>

        Even on a difficult day,
        I will
        <strong>
          ${escapeText(minimum)}
        </strong>.
      </p>
    `;
  }

  /*
   * LOAD A PREVIOUSLY SAVED PROMISE
   */

  try {
    const stored =
      JSON.parse(
        localStorage.getItem(
          "jvUniversePromise"
        )
        || "null"
      );

    if (
      stored?.dream
      && stored?.minimum
    ) {
      if (dreamInput) {
        dreamInput.value =
          stored.dream;
      }

      if (minimumInput) {
        minimumInput.value =
          stored.minimum;
      }

      showPromise(
        stored.dream,
        stored.minimum
      );
    }
  } catch (error) {
    console.info(
      "The saved promise could not be loaded."
    );
  }

  /*
   * SAVE A NEW PROMISE
   */

  promiseForm?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const dream =
        dreamInput?.value.trim();

      const minimum =
        minimumInput?.value.trim();

      if (!dream || !minimum) {
        return;
      }

      showPromise(
        dream,
        minimum
      );

      try {
        localStorage.setItem(
          "jvUniversePromise",
          JSON.stringify({
            dream,
            minimum
          })
        );
      } catch (error) {
        console.info(
          "The promise will remain visible for this visit."
        );
      }
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
