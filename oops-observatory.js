(() => {
  "use strict";

  const STORAGE_KEY = "wonder-verse-oops-observatory-v1";


  /* ==========================================================
     OBSERVATORY SECTIONS
  ========================================================== */

  const observations = [

    {
      number: "01",
      title: "The Oops",
      kicker: "State the incident without writing your own prosecution",

      intro:
        "We begin with the revolutionary concept of describing what happened without immediately concluding that you are fundamentally incompetent.",

      prompts: [

        [
          "oops_event",
          "What happened? Describe the failure as plainly as possible."
        ],

        [
          "oops_expectation",
          "What were you expecting to happen instead?"
        ],

        [
          "oops_drama",
          "What did your brain immediately claim this failure meant about you?"
        ]

      ]
    },


    {
      number: "02",
      title: "The Sting",
      kicker: "Find the part that actually hurt",

      intro:
        "The mistake and the meaning you gave the mistake are not always the same thing.",

      prompts: [

        [
          "sting_hurt",
          "What part of this genuinely hurt?"
        ],

        [
          "sting_fear",
          "What insecurity did the experience poke?"
        ],

        [
          "sting_confirm",
          "What were you terrified this experience had 'proven' about you?"
        ]

      ]
    },


    {
      number: "03",
      title: "The Data",
      kicker: "Congratulations, your disaster has information",

      intro:
        "Failure becomes considerably more useful once we stop using all of our energy to hide it.",

      prompts: [

        [
          "data_control",
          "Which part was genuinely within your control?"
        ],

        [
          "data_missing",
          "What skill, information, preparation or boundary was missing?"
        ],

        [
          "data_surprise",
          "What did this teach you that success probably would not have?"
        ]

      ]
    },


    {
      number: "04",
      title: "The Mirror",
      kicker: "Meet the person beneath the performance",

      intro:
        "Sometimes failure reveals less about your capability and more about where you have attached your worth.",

      prompts: [

        [
          "mirror_identity",
          "What identity were you trying desperately to protect?"
        ],

        [
          "mirror_witness",
          "Whose judgement were you most afraid of?"
        ],

        [
          "mirror_without",
          "If nobody else ever knew this happened, how differently would you understand it?"
        ]

      ]
    },


    {
      number: "05",
      title: "The Advantage",
      kicker: "Steal something useful from the wreckage",

      intro:
        "You do not need to call the failure a blessing. You are, however, allowed to leave with equipment.",

      prompts: [

        [
          "advantage_keep",
          "What strength, boundary or skill can you keep because this happened?"
        ],

        [
          "advantage_change",
          "What will you do differently next time?"
        ],

        [
          "advantage_edge",
          "How could this experience eventually make you unusually good at helping, building or understanding something?"
        ]

      ]
    },


    {
      number: "06",
      title: "The Return",
      kicker: "Decide whether you are willing to enter the arena again",

      intro:
        "Courage after failure usually looks less cinematic than expected. Often it is just sending another email.",

      prompts: [

        [
          "return_try",
          "What would trying again look like at a smaller, smarter scale?"
        ],

        [
          "return_risk",
          "What embarrassment, discomfort or uncertainty must you accept if you continue?"
        ],

        [
          "return_reason",
          "Why might the possibility still be worth another attempt?"
        ]

      ]
    }

  ];


  /* ==========================================================
     MIRROR FIELDS
  ========================================================== */

  const mirrorPrompts = [

    [
      "mirror_not_enough",
      "“I am not good enough.”",
      "Good enough for whom, and measured by what evidence?"
    ],

    [
      "mirror_behind",
      "“I am behind.”",
      "Behind whose timeline? What would your own starting line look like?"
    ],

    [
      "mirror_embarrassed",
      "“Everyone will think I failed.”",
      "Who exactly is 'everyone'? And how much authority do they actually have over your life?"
    ],

    [
      "mirror_fake",
      "“Maybe I was delusional.”",
      "Was the vision wrong, or did the first method simply fail?"
    ],

    [
      "mirror_quit",
      "“Maybe I should stop.”",
      "Is stopping wisdom, exhaustion, fear — or some combination of the three?"
    ],

    [
      "mirror_again",
      "“I cannot go through that again.”",
      "What would need to change before another attempt felt safer or wiser?"
    ]

  ];


  /* ==========================================================
     STATE
  ========================================================== */

  let state = {
    answers: {},
    failures: [],
    flip: {},
    vision: "",
    experiment: {}
  };


  try {

    const stored = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

    state = {
      ...state,
      ...stored
    };

  } catch (error) {

    console.warn(
      "Oops Observatory storage could not be loaded.",
      error
    );

  }


  const $ = selector =>
    document.querySelector(selector);


  let saveTimer;


  /* ==========================================================
     UTILITIES
  ========================================================== */

  const escapeHTML = value =>

    String(value).replace(
      /[&<>'"]/g,
      character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      })[character]
    );


  function persist(
    message = "Saved privately on this device."
  ) {

    clearTimeout(saveTimer);

    const status = $("#saveStatus");

    if (status) {
      status.textContent = "Observatory recording…";
    }

    saveTimer = setTimeout(() => {

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
      );

      if (status) {
        status.textContent = message;
      }

    }, 300);

  }


  /* ==========================================================
     PROGRESS
  ========================================================== */

  function updateProgress() {

    const total = observations.reduce(
      (sum, section) =>
        sum + section.prompts.length,
      0
    );

    const completed = observations
      .flatMap(section => section.prompts)
      .filter(([key]) => {

        const value = state.answers[key];

        return (
          value &&
          String(value).trim().length > 0
        );

      }).length;


    const progressElement =
      $("#oopsProgress");

    if (progressElement) {
      progressElement.textContent =
        completed;
    }


    const progressCopy =
      document.querySelector(".progress-copy");

    if (progressCopy) {

      progressCopy.innerHTML =
        `<strong id="oopsProgress">${completed}</strong>
         of ${total} observations recorded`;

    }

  }


  /* ==========================================================
     ANSWER INPUT
  ========================================================== */

  function handleAnswer(event) {

    state.answers[
      event.target.dataset.key
    ] = event.target.value;

    updateProgress();

    persist();

  }


  /* ==========================================================
     RENDER OBSERVATIONS
  ========================================================== */

  function renderObservations() {

    const root =
      $("#observationChapters");

    if (!root) return;


    const symbols = [
      "×",
      "!",
      "⌁",
      "◌",
      "↗",
      "↺"
    ];


    root.innerHTML =
      observations.map(
        (section, index) => `

          <article class="observation-card">

            <div class="observation-side">

              <span class="observation-number">
                ${section.number}
              </span>

              <span
                class="observation-symbol"
                aria-hidden="true"
              >
                ${symbols[index]}
              </span>

            </div>


            <div class="observation-body">

              <p class="kicker">
                ${section.kicker}
              </p>

              <h3>
                ${section.title}
              </h3>

              <p class="observation-intro">
                ${section.intro}
              </p>


              <div class="observation-prompts">

                ${section.prompts.map(
                  ([key, question]) => `

                    <label class="observation-prompt">

                      <span>
                        ${question}
                      </span>

                      <textarea
                        data-key="${key}"
                        rows="3"
                        placeholder="No polished answer required…"
                      >${escapeHTML(
                        state.answers[key] || ""
                      )}</textarea>

                    </label>

                  `
                ).join("")}

              </div>

            </div>

          </article>

        `
      ).join("");


    document
      .querySelectorAll(
        "textarea[data-key]"
      )
      .forEach(textarea => {

        textarea.addEventListener(
          "input",
          handleAnswer
        );

      });


    updateProgress();

  }


  /* ==========================================================
     MIRROR ROOM
  ========================================================== */

  function renderMirrorRoom() {

    const root =
      $("#mirrorFields");

    if (!root) return;


    root.innerHTML =
      mirrorPrompts.map(
        ([key, title, prompt]) => `

          <label class="mirror-card">

            <span class="mirror-thought">
              ${title}
            </span>

            <small>
              ${prompt}
            </small>

            <textarea
              data-key="${key}"
              rows="4"
              placeholder="Answer the thought instead of automatically believing it…"
            >${escapeHTML(
              state.answers[key] || ""
            )}</textarea>

          </label>

        `
      ).join("");


    root
      .querySelectorAll(
        "textarea[data-key]"
      )
      .forEach(textarea => {

        textarea.addEventListener(
          "input",
          handleAnswer
        );

      });

  }


  /* ==========================================================
     FAILURE WALL
  ========================================================== */

  function renderFailures() {

    const root =
      $("#failureEntries");

    if (!root) return;


    if (!state.failures.length) {

      root.innerHTML = `

        <div class="failure-empty">

          <span>
            +
          </span>

          <h3>
            The wall is suspiciously clean.
          </h3>

          <p>
            Either you have achieved perfection,
            or you have not logged the evidence yet.
          </p>

        </div>

      `;

      return;

    }


    root.innerHTML =
      state.failures
        .map(
          (failure, index) => `

            <article class="failure-entry">

              <button
                type="button"
                class="remove-failure"
                data-remove-failure="${failure.id}"
                aria-label="Remove ${escapeHTML(
                  failure.title
                )}"
              >
                ×
              </button>


              <span class="failure-index">
                ${String(
                  index + 1
                ).padStart(2, "0")}
              </span>


              <p class="failure-level">
                ${escapeHTML(
                  failure.level
                )}
              </p>


              <h3>
                ${escapeHTML(
                  failure.title
                )}
              </h3>


              ${
                failure.exposed
                  ? `
                    <p>
                      <b>
                        It exposed:
                      </b>

                      ${escapeHTML(
                        failure.exposed
                      )}
                    </p>
                  `
                  : ""
              }


              <p>
                <b>
                  Useful now:
                </b>

                ${escapeHTML(
                  failure.useful
                )}
              </p>

            </article>

          `
        ).join("");


    root
      .querySelectorAll(
        "[data-remove-failure]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const id =
              Number(
                button.dataset
                  .removeFailure
              );

            state.failures =
              state.failures.filter(
                failure =>
                  failure.id !== id
              );

            renderFailures();

            persist(
              "Observation removed."
            );

          }
        );

      });

  }


  /* ==========================================================
     ADD FAILURE
  ========================================================== */

  const addFailure =
    $("#addFailure");


  if (addFailure) {

    addFailure.addEventListener(
      "click",
      () => {

        const title =
          $("#failureTitle")
            .value
            .trim();

        const useful =
          $("#failureUseful")
            .value
            .trim();


        if (!title || !useful) {

          $("#saveStatus").textContent =
            "Name the oops and one useful thing you are taking from it.";

          return;

        }


        state.failures.push({

          id: Date.now(),

          level:
            $("#failureLevel").value,

          title,

          exposed:
            $("#failureExposed")
              .value
              .trim(),

          useful

        });


        [
          "#failureTitle",
          "#failureExposed",
          "#failureUseful"
        ].forEach(selector => {

          $(selector).value = "";

        });


        renderFailures();

        persist(
          "Oops officially entered into the scientific record."
        );

      }
    );

  }


  /* ==========================================================
     INSECURITY FLIP
  ========================================================== */

  function restoreFlip() {

    const insecurity =
      $("#insecurityInput");

    const signal =
      $("#signalInput");

    const advantage =
      $("#advantageInput");


    if (insecurity) {
      insecurity.value =
        state.flip.insecurity || "";
    }

    if (signal) {
      signal.value =
        state.flip.signal || "";
    }

    if (advantage) {
      advantage.value =
        state.flip.advantage || "";
    }

  }


  const saveFlip =
    $("#saveFlip");


  if (saveFlip) {

    saveFlip.addEventListener(
      "click",
      () => {

        state.flip = {

          insecurity:
            $("#insecurityInput")
              .value
              .trim(),

          signal:
            $("#signalInput")
              .value
              .trim(),

          advantage:
            $("#advantageInput")
              .value
              .trim()

        };


        persist(
          "Insecurity successfully converted into research material."
        );


        const status =
          $("#flipStatus");

        if (status) {

          status.textContent =
            "Experiment saved. Your insecurity has been demoted from CEO to consultant.";

        }

      }
    );

  }


  /* ==========================================================
     VISION + EXPERIMENT AUTO SAVE
  ========================================================== */

  function restoreLooseFields() {

    const vision =
      $("#visionInput");

    if (vision) {

      vision.value =
        state.vision || "";

      vision.addEventListener(
        "input",
        event => {

          state.vision =
            event.target.value;

          persist();

        }
      );

    }


    const experimentMap = {

      nextTry: "try",
      nextEvidence: "evidence",
      nextBadAt: "badAt"

    };


    Object.entries(
      experimentMap
    ).forEach(
      ([elementId, stateKey]) => {

        const element =
          $(`#${elementId}`);

        if (!element) return;


        element.value =
          state.experiment[
            stateKey
          ] || "";


        element.addEventListener(
          "input",
          event => {

            state.experiment[
              stateKey
            ] = event.target.value;

            persist();

          }
        );

      }
    );

  }


  /* ==========================================================
     DOWNLOAD
  ========================================================== */

  const downloadButton =
    $("#downloadObservatory");


  if (downloadButton) {

    downloadButton.addEventListener(
      "click",
      () => {

        const lines = [

          "THE OOPS OBSERVATORY",

          "A Wonder Verse record of mistakes, insecurity, evidence and trying again.",

          ""

        ];


        observations.forEach(
          section => {

            lines.push(
              `${section.number} — ${section.title.toUpperCase()}`
            );


            section.prompts.forEach(
              ([key, question]) => {

                lines.push(
                  "",
                  question,
                  state.answers[key] || "—"
                );

              }
            );


            lines.push("");

          }
        );


        lines.push(
          "",
          "THE MIRROR ROOM"
        );


        mirrorPrompts.forEach(
          ([key, title, prompt]) => {

            lines.push(
              "",
              title,
              prompt,
              state.answers[key] || "—"
            );

          }
        );


        lines.push(
          "",
          "INSECURITY EXPERIMENT",
          "",
          "The insecurity:",
          state.flip.insecurity || "—",
          "",
          "What it may be pointing towards:",
          state.flip.signal || "—",
          "",
          "How I can use it:",
          state.flip.advantage || "—"
        );


        lines.push(
          "",
          "FAILURE WALL"
        );


        state.failures.forEach(
          failure => {

            lines.push(
              "",
              `[${failure.level}] ${failure.title}`,
              `It exposed: ${failure.exposed || "—"}`,
              `Useful now: ${failure.useful}`
            );

          }
        );


        lines.push(
          "",
          "THE VISION",
          state.vision || "—"
        );


        lines.push(
          "",
          "THE NEXT EXPERIMENT",
          "",
          "What I will try:",
          state.experiment.try || "—",
          "",
          "Useful evidence:",
          state.experiment.evidence || "—",
          "",
          "What I am willing to be bad at:",
          state.experiment.badAt || "—"
        );


        const blob =
          new Blob(
            [lines.join("\n")],
            {
              type: "text/plain"
            }
          );


        const link =
          document.createElement("a");


        link.href =
          URL.createObjectURL(blob);


        link.download =
          "my-oops-observatory.txt";


        link.click();


        URL.revokeObjectURL(
          link.href
        );

      }
    );

  }


  /* ==========================================================
     INITIAL RENDER
  ========================================================== */

  renderObservations();

  renderMirrorRoom();

  renderFailures();

  restoreFlip();

  restoreLooseFields();


  if (
    Object.keys(
      state.answers
    ).length ||

    state.failures.length ||

    state.vision ||

    Object.keys(
      state.flip
    ).length
  ) {

    const status =
      $("#saveStatus");

    if (status) {

      status.textContent =
        "Your previous observations have been restored from this device.";

    }

  }

})();
