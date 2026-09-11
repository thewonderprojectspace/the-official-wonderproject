const activities = [
  {
    era: "Ancient observations",
    period: "Long before printed lessons",
    title: "The Rope Geometer",
    subject: "Mathematics",
    origin: "Surveying traditions · several ancient cultures",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "outside",
    summary: "Use a knotted rope to create triangles, rectangles and reliable right angles.",
    then: "Builders measured land and structures.",
    now: "Explore perimeter, angles and accuracy.",
    materials: "A long rope, chalk and an open space",
    quest: [
      "Tie equal gaps along a rope.",
      "Make three-sided and four-sided shapes.",
      "Test which knot arrangements create a right angle.",
      "Explain why your method could help a builder."
    ],
    evidence: "A labelled ground diagram and a spoken explanation.",
    respect: "Present this as a cross-cultural measurement idea rather than assigning one invention to a single civilisation."
  },
  {
    era: "Ancient observations",
    period: "Long before printed lessons",
    title: "Shadow Clock Keeper",
    subject: "Science",
    origin: "Sundial traditions · many early civilisations",
    ages: ["5-7", "8-10", "10-12"],
    time: 45,
    place: "outside",
    summary: "Mark a stick’s changing shadow and use it to tell a story about the Sun and time.",
    then: "Shadows helped communities judge time.",
    now: "Investigate light, rotation and patterns.",
    materials: "A stick, chalk, stones and sunshine",
    quest: [
      "Place the stick upright in one safe spot.",
      "Mark the shadow tip several times.",
      "Measure what changed and what stayed still.",
      "Predict where the next mark will appear."
    ],
    evidence: "A shadow map with times and one revised prediction."
  },
  {
    era: "Ancient observations",
    period: "Long before printed lessons",
    title: "Water Clock Challenge",
    subject: "Science",
    origin: "Ancient Egypt, India, Greece and China",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "either",
    summary: "Build a dripping clock, test it and improve its ability to measure equal intervals.",
    then: "Flowing water marked passing time.",
    now: "Test flow rate and fair measurement.",
    materials: "Two reused containers, water, tray, marker and adult help",
    quest: [
      "Create a slow, safe flow between containers.",
      "Mark the water level at equal time intervals.",
      "Use your clock to time a small task.",
      "Change one feature and test whether accuracy improves."
    ],
    evidence: "A prototype, test table and improvement note."
  },
  {
    era: "Ancient observations",
    period: "Long before printed lessons",
    title: "Clay Story Symbols",
    subject: "English & Literacy",
    origin: "Early symbolic recording",
    ages: ["5-7", "8-10"],
    time: 20,
    place: "inside",
    summary: "Record a tiny story using marks and objects—but no alphabet.",
    then: "Marks preserved quantities and messages.",
    now: "Explore symbols, sequence and visual literacy.",
    materials: "Clay or playdough and a blunt modelling tool",
    quest: [
      "Choose a three-part story.",
      "Invent a symbol for each important person, place or action.",
      "Press the story into clay.",
      "Ask someone to decode it before explaining your system."
    ],
    evidence: "A clay message and the decoder’s interpretation."
  },
  {
    era: "Ancient observations",
    period: "Long before printed lessons",
    title: "Sky Memory Calendar",
    subject: "Science",
    origin: "Seasonal sky observation · worldwide",
    ages: ["8-10", "10-12"],
    time: 20,
    place: "outside",
    summary: "Observe the Moon or evening sky repeatedly and build a calendar from evidence.",
    then: "Sky patterns guided seasons and journeys.",
    now: "Study cycles, change and prediction.",
    materials: "A notebook, pencil and a safe viewing place",
    quest: [
      "Observe from the same safe place and time.",
      "Sketch only what you can actually see.",
      "Compare several observations.",
      "Predict the next change and return to check."
    ],
    evidence: "A dated sequence of drawings and one evidence-based claim.",
    respect: "Use local Indigenous seasonal knowledge only through community-approved resources and correct attribution."
  },
  {
    era: "Ancient observations",
    period: "Long before printed lessons",
    title: "The Seed Treasurer",
    subject: "Mathematics",
    origin: "Mancala-family games · Africa and Asia",
    ages: ["5-7", "8-10", "10-12"],
    time: 20,
    place: "either",
    summary: "Move seeds between cups while predicting totals, groups and remainders.",
    then: "Seeds and hollows supported counting games.",
    now: "Practise grouping, strategy and mental calculation.",
    materials: "Dried beans or counters and twelve small cups",
    quest: [
      "Place equal groups of seeds into the cups.",
      "Move one seed into each following cup.",
      "Predict where the final seed will land.",
      "Change the starting quantity and explain the pattern."
    ],
    evidence: "A demonstrated strategy and one invented rule.",
    respect: "Mancala names and rules differ by community. Name the specific game when using an authentic ruleset."
  },

  {
    era: "Oral worlds",
    period: "Knowledge carried by voices",
    title: "The Storykeeper’s Circle",
    subject: "English & Literacy",
    origin: "Oral storytelling traditions · worldwide",
    ages: ["5-7", "8-10", "10-12"],
    time: 20,
    place: "either",
    summary: "Pass a story from listener to listener, then investigate what survived and what changed.",
    then: "Stories carried memory and knowledge.",
    now: "Build listening, sequencing and source awareness.",
    materials: "One short teacher-created story and a circle of listeners",
    quest: [
      "Listen once without writing.",
      "Retell the story privately to the next keeper.",
      "Continue around the circle.",
      "Compare the final version with the first."
    ],
    evidence: "A class list of details that stayed, disappeared or transformed."
  },
  {
    era: "Oral worlds",
    period: "Knowledge carried by voices",
    title: "The Riddle Bazaar",
    subject: "English & Literacy",
    origin: "Riddle traditions · Africa, Asia and the Middle East",
    ages: ["5-7", "8-10", "10-12"],
    time: 20,
    place: "either",
    summary: "Trade handmade riddle tokens by explaining—not merely guessing—the answer.",
    then: "Riddles sharpened memory and social wit.",
    now: "Develop inference and figurative language.",
    materials: "Small paper tokens and pencils",
    quest: [
      "Create a riddle about an ordinary object.",
      "Offer clues without naming the object.",
      "Award the token only when someone explains their reasoning.",
      "Improve any clue that was unfair or too easy."
    ],
    evidence: "One revised riddle and the reasoning that solves it."
  },
  {
    era: "Oral worlds",
    period: "Knowledge carried by voices",
    title: "Message Across the Village",
    subject: "Languages",
    origin: "Spoken messenger traditions",
    ages: ["5-7", "8-10"],
    time: 10,
    place: "either",
    summary: "Carry an exact spoken message through several stations and inspect every change.",
    then: "Messengers carried news without devices.",
    now: "Practise listening, pronunciation and clarity.",
    materials: "A short message and three or more people",
    quest: [
      "Hear the message once.",
      "Carry it to the next station without writing.",
      "Compare the final message with the original.",
      "Design a method that reduces errors."
    ],
    evidence: "An explanation of where information changed and why."
  },
  {
    era: "Oral worlds",
    period: "Knowledge carried by voices",
    title: "Proverb Detective",
    subject: "English & Literacy",
    origin: "Proverb traditions · worldwide",
    ages: ["8-10", "10-12"],
    time: 20,
    place: "inside",
    summary: "Match a proverb to a situation, question it and invent a modern version.",
    then: "Short sayings carried shared wisdom.",
    now: "Explore metaphor, values and interpretation.",
    materials: "Teacher-selected, accurately sourced proverbs",
    quest: [
      "Read or hear one proverb in context.",
      "Describe what it does not mean literally.",
      "Find a situation where it fits—and one where it does not.",
      "Write a new saying for life today."
    ],
    evidence: "A modern proverb with an example and limitation.",
    respect: "Keep the original language, community and meaning attached to any culturally specific proverb."
  },
  {
    era: "Oral worlds",
    period: "Knowledge carried by voices",
    title: "Echo Across the Valley",
    subject: "Music",
    origin: "Call-and-response traditions · worldwide",
    ages: ["5-7", "8-10"],
    time: 10,
    place: "either",
    summary: "Answer a sung or tapped phrase, then change one feature without losing the beat.",
    then: "Groups learned and worked through shared rhythm.",
    now: "Strengthen pulse, memory and improvisation.",
    materials: "Hands, voices or simple percussion",
    quest: [
      "Echo a four-beat phrase exactly.",
      "Change only the final beat.",
      "Lead a phrase for the group.",
      "Describe how everyone knew when to answer."
    ],
    evidence: "A performed pattern with a clearly explained change."
  },
  {
    era: "Oral worlds",
    period: "Knowledge carried by voices",
    title: "Nature Haiku Walk",
    subject: "English & Literacy",
    origin: "Japanese poetic tradition",
    ages: ["8-10", "10-12"],
    time: 20,
    place: "outside",
    summary: "Observe one tiny natural event and compress it into a brief sensory poem.",
    then: "Poetry held a precise moment of attention.",
    now: "Practise imagery, word choice and editing.",
    materials: "Notebook and pencil",
    quest: [
      "Walk slowly and notice one small change.",
      "Record sensory details without explaining them.",
      "Create a short poem from the strongest images.",
      "Remove every word the poem does not need."
    ],
    evidence: "A polished poem and the observation that began it."
  },

  {
    era: "Hands learn too",
    period: "Apprenticeship and useful craft",
    title: "Apprentice for a Day",
    subject: "Design & Technologies",
    origin: "Apprenticeship traditions · worldwide",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "either",
    summary: "Watch a complete demonstration, practise one skill and teach it onward.",
    then: "Skills passed from expert to novice.",
    now: "Build procedural thinking and careful observation.",
    materials: "A safe craft chosen by an adult",
    quest: [
      "Watch the process once without interrupting.",
      "Name the steps you noticed.",
      "Practise one safe component.",
      "Teach that component to a new apprentice."
    ],
    evidence: "A demonstration plus one improvement to the instructions."
  },
  {
    era: "Hands learn too",
    period: "Apprenticeship and useful craft",
    title: "Sloyd Skill Ladder",
    subject: "Design & Technologies",
    origin: "Finland and Sweden · from the 1800s",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "inside",
    summary: "Make one useful object through a sequence of gradually harder craft skills.",
    then: "Craft developed accuracy and independence.",
    now: "Combine design, persistence and reflection.",
    materials: "Cardboard, paper, string and age-safe tools",
    quest: [
      "Choose a small useful object.",
      "Make a simple first model.",
      "Add one new skill or construction challenge.",
      "Test usefulness, strength and finish."
    ],
    evidence: "A finished object with a maker’s note about the hardest improvement."
  },
  {
    era: "Hands learn too",
    period: "Apprenticeship and useful craft",
    title: "Weaving Code",
    subject: "Digital Thinking",
    origin: "Loom patterns and textile knowledge",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "inside",
    summary: "Turn colours into instructions, weave a sequence and ask a partner to decode it.",
    then: "Patterns were planned and repeated by hand.",
    now: "Explore algorithms, encoding and debugging.",
    materials: "Paper strips or yarn in several colours",
    quest: [
      "Assign a short instruction to each colour.",
      "Create a repeating woven sequence.",
      "Give only the code key to a partner.",
      "Find and repair any decoding error."
    ],
    evidence: "A woven algorithm, code key and debug note."
  },
  {
    era: "Hands learn too",
    period: "Apprenticeship and useful craft",
    title: "The Potter’s Message",
    subject: "The Arts",
    origin: "Ceramic traditions · worldwide",
    ages: ["5-7", "8-10"],
    time: 45,
    place: "inside",
    summary: "Shape a clay object whose marks reveal who might use it and why.",
    then: "Vessels carried food, trade and stories.",
    now: "Connect form, function and visual communication.",
    materials: "Air-dry clay or playdough and modelling tools",
    quest: [
      "Choose what your object must hold or do.",
      "Shape it for that purpose.",
      "Add original marks that communicate its use.",
      "Let another explorer infer its story."
    ],
    evidence: "A functional form and the observer’s interpretation."
  },
  {
    era: "Hands learn too",
    period: "Apprenticeship and useful craft",
    title: "Earth-Pigment Studio",
    subject: "The Arts",
    origin: "Early mark-making · worldwide",
    ages: ["5-7", "8-10", "10-12"],
    time: 45,
    place: "outside",
    summary: "Compare safe natural-looking art materials and test how binders change a mark.",
    then: "Artists worked with materials close at hand.",
    now: "Investigate texture, mixture and permanence.",
    materials: "School-safe ochres or chalk, charcoal, water, brushes and heavy paper",
    quest: [
      "Test each dry material.",
      "Mix a little with water.",
      "Compare colour, texture and coverage.",
      "Create an original evidence picture using the best mixture."
    ],
    evidence: "A labelled test strip and finished image.",
    respect: "Do not imitate culturally restricted imagery or describe all earth-pigment art as the same tradition."
  },
  {
    era: "Hands learn too",
    period: "Apprenticeship and useful craft",
    title: "Repair It Beautifully",
    subject: "The Arts",
    origin: "Visible-repair traditions · many cultures",
    ages: ["5-7", "8-10", "10-12"],
    time: 20,
    place: "inside",
    summary: "Repair a torn paper object so the repair becomes the most meaningful part.",
    then: "Useful possessions were repaired, not discarded.",
    now: "Explore sustainability, design and resilience.",
    materials: "Torn paper, thread, tape, glue and coloured scraps",
    quest: [
      "Study the damage before touching it.",
      "Plan a repair that remains visible.",
      "Test whether the object works again.",
      "Explain how the repair changed its story."
    ],
    evidence: "A repaired object and a before-and-after explanation."
  },

  {
    era: "Village squares",
    period: "Learning through communal play",
    title: "Soroban Shopkeeper",
    subject: "Mathematics",
    origin: "Japanese abacus practice",
    ages: ["5-7", "8-10", "10-12"],
    time: 20,
    place: "inside",
    summary: "Run a tiny market with a bead frame and calculate before writing anything down.",
    then: "Merchants needed fast, reliable calculation.",
    now: "Strengthen place value and mental strategies.",
    materials: "Abacus or homemade bead frame, objects and price cards",
    quest: [
      "Build each price on the bead frame.",
      "Combine two purchases.",
      "Calculate change from a chosen amount.",
      "Explain how each bead position changes value."
    ],
    evidence: "Three completed sales and one verbal place-value explanation."
  },
  {
    era: "Village squares",
    period: "Learning through communal play",
    title: "Kolam Pattern Detective",
    subject: "Mathematics",
    origin: "South Indian kolam traditions",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "outside",
    summary: "Explore symmetry and paths around a dot grid using an accurately sourced example.",
    then: "Daily patterns joined mathematics, art and place.",
    now: "Study transformations, curves and spatial reasoning.",
    materials: "Dot paper or outdoor chalk and teacher-approved examples",
    quest: [
      "Mark a regular dot grid.",
      "Trace how one sourced pattern travels around dots.",
      "Identify reflection or rotation.",
      "Create an original mathematical pattern rather than copying a sacred design."
    ],
    evidence: "An annotated pattern showing its symmetry.",
    respect: "Credit kolam specifically, use reliable cultural sources and avoid claiming ownership of the tradition."
  },
  {
    era: "Village squares",
    period: "Learning through communal play",
    title: "Seven Stones Challenge",
    subject: "Physical Education",
    origin: "Lagori / pithu · South Asia",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "outside",
    summary: "Rebuild a stack while another team retrieves and passes a soft ball.",
    then: "Outdoor play built accuracy and teamwork.",
    now: "Combine movement, estimation and strategy.",
    materials: "Seven flat foam pieces and a soft ball",
    quest: [
      "Set a clear safe boundary.",
      "Knock down the stack with an underarm throw.",
      "Work together to rebuild it.",
      "Change one rule to make the game fair for everyone."
    ],
    evidence: "A team strategy and a justified inclusive rule."
  },
  {
    era: "Village squares",
    period: "Learning through communal play",
    title: "Kgati Number Rhythms",
    subject: "Mathematics",
    origin: "Southern African rope-game traditions",
    ages: ["8-10", "10-12"],
    time: 20,
    place: "outside",
    summary: "Use skipping patterns to embody multiplication and solve movement-based problems.",
    then: "Rope play carried rhythm and coordination.",
    now: "Connect number patterns with movement.",
    materials: "A long skipping rope and chalk",
    quest: [
      "Create a repeatable jump pattern.",
      "Count in equal groups.",
      "Turn the pattern into a word problem.",
      "Swap problems with another group."
    ],
    evidence: "A performed pattern and matching number sentence.",
    respect: "Use a community-sourced demonstration when teaching a named traditional version."
  },
  {
    era: "Village squares",
    period: "Learning through communal play",
    title: "Hopscotch Fractions",
    subject: "Mathematics",
    origin: "Hopscotch variations · many countries",
    ages: ["5-7", "8-10"],
    time: 20,
    place: "outside",
    summary: "Turn a chalk path into wholes, halves, quarters and equivalent landing zones.",
    then: "Chalk games transformed shared ground.",
    now: "Make fractions visible and physical.",
    materials: "Chalk and a marker to toss",
    quest: [
      "Draw equal-sized landing boxes.",
      "Declare the whole path.",
      "Label parts as fractions.",
      "Redesign the path to show an equivalent fraction."
    ],
    evidence: "A playable fraction path and oral justification."
  },
  {
    era: "Village squares",
    period: "Learning through communal play",
    title: "Market Without Price Tags",
    subject: "Humanities",
    origin: "Barter and market exchange",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "either",
    summary: "Trade objects with tokens, discover disagreement and design a fairer exchange system.",
    then: "Communities negotiated value through exchange.",
    now: "Explore value, scarcity and economic rules.",
    materials: "Classroom objects, shells or paper tokens",
    quest: [
      "Begin with no fixed prices.",
      "Complete two voluntary exchanges.",
      "Record why each person agreed.",
      "Design a shared pricing rule and test it."
    ],
    evidence: "A market rule with one advantage and one limitation."
  },

  {
    era: "The curious classroom",
    period: "1800s–1900s learning revolutions",
    title: "Froebel Transformation Box",
    subject: "Mathematics",
    origin: "Germany · Froebel’s Gifts, 1840s",
    ages: ["5-7", "8-10"],
    time: 20,
    place: "inside",
    summary: "Transform the same simple blocks into forms of life, beauty and knowledge.",
    then: "Guided objects connected play and ideas.",
    now: "Explore shape, structure and transformation.",
    materials: "Equal wooden blocks or plain building pieces",
    quest: [
      "Build something from everyday life.",
      "Rearrange the same pieces into a repeating design.",
      "Use them to show a mathematical idea.",
      "Describe what remained unchanged."
    ],
    evidence: "Three transformations made from exactly the same pieces."
  },
  {
    era: "The curious classroom",
    period: "1800s–1900s learning revolutions",
    title: "The Apprentice Naturalist",
    subject: "Science",
    origin: "Nature-study movements · 1800s",
    ages: ["5-7", "8-10", "10-12"],
    time: 20,
    place: "outside",
    summary: "Return to one living thing and record changes before searching for explanations.",
    then: "Learners studied nature directly.",
    now: "Develop observation and evidence habits.",
    materials: "Notebook, pencil and magnifier",
    quest: [
      "Choose one safe plant or small habitat.",
      "Draw what is present, not what you expect.",
      "Return later and mark changes.",
      "Ask one question your evidence cannot yet answer."
    ],
    evidence: "Two dated field sketches and one careful question."
  },
  {
    era: "The curious classroom",
    period: "1800s–1900s learning revolutions",
    title: "Mystery Relic Table",
    subject: "History & Geography",
    origin: "Object lessons and museum learning",
    ages: ["5-7", "8-10", "10-12"],
    time: 20,
    place: "inside",
    summary: "Investigate an unfamiliar household object before anyone reveals what it is.",
    then: "Objects became starting points for lessons.",
    now: "Practise historical inference and evidence.",
    materials: "One safe unfamiliar object, cloth and observation cards",
    quest: [
      "Observe shape, material, wear and marks.",
      "Separate observations from guesses.",
      "Propose who used it and for what.",
      "Revise your claim when its identity is revealed."
    ],
    evidence: "An evidence table with an original and revised conclusion."
  },
  {
    era: "The curious classroom",
    period: "1800s–1900s learning revolutions",
    title: "Kamishibai Story Window",
    subject: "Drama",
    origin: "Japan · street storytelling, early 1900s",
    ages: ["5-7", "8-10", "10-12"],
    time: 45,
    place: "inside",
    summary: "Tell a curriculum story through illustrated cards in a small paper theatre.",
    then: "Travelling storytellers performed illustrated tales.",
    now: "Combine speaking, sequencing and visual design.",
    materials: "Cardboard frame, six cards and drawing tools",
    quest: [
      "Plan six clear story moments.",
      "Draw images that work from a distance.",
      "Write brief narration on the back.",
      "Perform and revise where the audience becomes confused."
    ],
    evidence: "A live performance and one audience-informed revision."
  },
  {
    era: "The curious classroom",
    period: "1800s–1900s learning revolutions",
    title: "Sound Map",
    subject: "Music",
    origin: "Listening and field-recording practices",
    ages: ["5-7", "8-10", "10-12"],
    time: 20,
    place: "outside",
    summary: "Sit silently, map every sound by direction and distance, then recreate the soundscape.",
    then: "Careful listening guided work and place-awareness.",
    now: "Develop aural attention and representation.",
    materials: "Paper, pencil and a safe listening place",
    quest: [
      "Mark yourself at the centre of the page.",
      "Use original symbols for nearby and distant sounds.",
      "Notice repeated and changing sounds.",
      "Recreate the soundscape using voice or objects."
    ],
    evidence: "A sound map with a key and a short performance."
  },
  {
    era: "The curious classroom",
    period: "1800s–1900s learning revolutions",
    title: "Human Algorithm",
    subject: "Digital Thinking",
    origin: "Procedures taught through demonstration",
    ages: ["8-10", "10-12"],
    time: 20,
    place: "either",
    summary: "Write instructions precise enough for a human ‘machine’ to follow literally.",
    then: "Complex work relied on remembered sequences.",
    now: "Learn algorithms, conditions and debugging.",
    materials: "Blocks, paper and pencils",
    quest: [
      "Choose a simple building task.",
      "Write one instruction at a time.",
      "Let the human machine obey literally.",
      "Repair every ambiguous instruction."
    ],
    evidence: "A tested algorithm with visible corrections."
  },

  {
    era: "Living knowledge",
    period: "Old habits carried forward",
    title: "Family Time Rope",
    subject: "History & Geography",
    origin: "Genealogy and oral-history practices",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "inside",
    summary: "Tie memories and researched events onto one long line while labelling the source of each.",
    then: "Families carried history through generations.",
    now: "Explore chronology, memory and evidence.",
    materials: "String, tags, pegs and family-approved information",
    quest: [
      "Choose a safe family or community theme.",
      "Interview someone about one event.",
      "Add researched dates where appropriate.",
      "Label every item as memory, object, photograph or published source."
    ],
    evidence: "A source-labelled timeline and one question about conflicting evidence.",
    respect: "Let families decide what is private and offer an invented-community alternative."
  },
  {
    era: "Living knowledge",
    period: "Old habits carried forward",
    title: "The Weather Rope",
    subject: "Science",
    origin: "Seasonal observation traditions",
    ages: ["5-7", "8-10", "10-12"],
    time: 10,
    place: "outside",
    summary: "Tie one colour or knot each day and read the growing weather pattern by touch and sight.",
    then: "Repeated signs helped people anticipate conditions.",
    now: "Collect data and identify patterns.",
    materials: "Rope and coloured yarn",
    quest: [
      "Create a colour key for conditions.",
      "Add one observation at the same time daily.",
      "Read the rope after a week.",
      "State a pattern without claiming more than the data shows."
    ],
    evidence: "A physical data record and one cautious conclusion."
  },
  {
    era: "Living knowledge",
    period: "Old habits carried forward",
    title: "The Repair Café",
    subject: "Design & Technologies",
    origin: "Household repair knowledge",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "inside",
    summary: "Diagnose and safely repair a paper mechanism, book, fabric item or simple toy.",
    then: "Repair skills extended the life of possessions.",
    now: "Use systems thinking and sustainable design.",
    materials: "A safe broken item and age-appropriate repair tools",
    quest: [
      "Describe the intended function.",
      "Find the point of failure.",
      "Test a reversible repair first.",
      "Evaluate whether the repair restored function."
    ],
    evidence: "A diagnosis, repair and test result."
  },
  {
    era: "Living knowledge",
    period: "Old habits carried forward",
    title: "Food Preservation Detectives",
    subject: "Health & Wellbeing",
    origin: "Drying, cooling, pickling and fermentation",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "inside",
    summary: "Compare why communities developed different ways to keep food usable for longer.",
    then: "Preservation supported survival and travel.",
    now: "Connect microbes, environment and food safety.",
    materials: "Sealed teacher samples or photographs and reliable sources",
    quest: [
      "Compare two preservation methods.",
      "Identify what each changes: water, temperature, acidity or access to air.",
      "Predict which conditions slow spoilage.",
      "Check the prediction using a reliable source."
    ],
    evidence: "A comparison model—not a tasting experiment.",
    respect: "Use adult-supervised, food-safe examples only; never ask children to eat experimental food."
  },
  {
    era: "Living knowledge",
    period: "Old habits carried forward",
    title: "Circle of Many Answers",
    subject: "Health & Wellbeing",
    origin: "Community dialogue practices",
    ages: ["5-7", "8-10", "10-12"],
    time: 20,
    place: "either",
    summary: "Explore a fictional dilemma with one speaking object, patient listening and no rushed solution.",
    then: "Communities made meaning through dialogue.",
    now: "Practise empathy, turn-taking and disagreement.",
    materials: "A neutral speaking object and fictional dilemma",
    quest: [
      "Agree on listening rules.",
      "Speak only when holding the object.",
      "Restate one idea before adding your own.",
      "Name what the group still disagrees about."
    ],
    evidence: "A group summary containing more than one reasonable view.",
    respect: "Call this a dialogue circle unless working with a specific community that has invited use of its named protocol."
  },
  {
    era: "Living knowledge",
    period: "Old habits carried forward",
    title: "Travelling Word",
    subject: "Languages",
    origin: "Words carried through trade and migration",
    ages: ["8-10", "10-12"],
    time: 20,
    place: "inside",
    summary: "Trace how one familiar word travelled between languages and changed along the way.",
    then: "People exchanged words with goods and ideas.",
    now: "Explore etymology, sound change and cultural contact.",
    materials: "Dictionaries and reliable etymology sources",
    quest: [
      "Choose one borrowed word.",
      "Find its earlier language and meaning.",
      "Map at least two stages of its journey.",
      "Explain what the word’s history reveals about human contact."
    ],
    evidence: "A word passport with sources."
  },
  {
    era: "Living knowledge",
    period: "Old habits carried forward",
    title: "The Travelling Moral Tale",
    subject: "Ethics & Civics",
    origin: "Teaching tales · many traditions",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "inside",
    summary: "Compare two accurately sourced stories that wrestle with the same human value.",
    then: "Stories invited reflection on choices.",
    now: "Compare perspectives without hunting for one correct moral.",
    materials: "Two age-appropriate stories from reliable cultural sources",
    quest: [
      "Identify the choice at the centre of each story.",
      "Compare consequences.",
      "Ask whose voice is missing.",
      "Create a new dilemma with no easy answer."
    ],
    evidence: "A comparison and a reasoned personal response.",
    respect: "Avoid sacred or restricted stories and describe living belief systems in the present tense."
  },
  {
    era: "Living knowledge",
    period: "Old habits carried forward",
    title: "Build a Country from Its Climate",
    subject: "History & Geography",
    origin: "Place-based survival and settlement knowledge",
    ages: ["8-10", "10-12"],
    time: 45,
    place: "either",
    summary: "Design a fictional settlement using only climate, water, land and material clues.",
    then: "Communities adapted shelter and movement to place.",
    now: "Connect environment, resources and design decisions.",
    materials: "Climate clue cards and loose construction materials",
    quest: [
      "Read the environmental clues.",
      "Choose shelter, food, water and transport solutions.",
      "Build a small model.",
      "Change one climate condition and adapt the settlement."
    ],
    evidence: "A model with four evidence-based design decisions."
  },
  {
    era: "Living knowledge",
    period: "Old habits carried forward",
    title: "Traditional Games Exchange",
    subject: "Physical Education",
    origin: "Family and community play",
    ages: ["5-7", "8-10", "10-12"],
    time: 45,
    place: "outside",
    summary: "Learn a safe childhood game from a family or community member, then teach it with context.",
    then: "Children passed games between ages and places.",
    now: "Build movement, leadership and cultural curiosity.",
    materials: "A family-approved game, safe equipment and space",
    quest: [
      "Ask where and when the game was played.",
      "Learn its rules and local name.",
      "Adapt only what safety or access requires.",
      "Teach both the game and its story."
    ],
    evidence: "A demonstration, rule explanation and source acknowledgement.",
    respect: "Do not label one family’s version as the only authentic version."
  }
];

const eraOrder = [
  "Ancient observations",
  "Oral worlds",
  "Hands learn too",
  "Village squares",
  "The curious classroom",
  "Living knowledge"
];

const timeline = document.querySelector("#timeline");
const subjectFilter = document.querySelector("#subjectFilter");
const ageFilter = document.querySelector("#ageFilter");
const searchInput = document.querySelector("#activitySearch");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const dialog = document.querySelector("#activityDialog");
const dialogContent = document.querySelector("#dialogContent");

const subjects = [
  ...new Set(activities.map(activity => activity.subject))
].sort();

subjects.forEach(subject => {
  const option = document.createElement("option");

  option.value = subject;
  option.textContent = subject;

  subjectFilter.append(option);
});

function activityMatches(activity) {
  const query = searchInput.value.trim().toLowerCase();

  const matchesSubject =
    subjectFilter.value === "all" ||
    activity.subject === subjectFilter.value;

  const matchesAge =
    ageFilter.value === "all" ||
    activity.ages.includes(ageFilter.value);

  const haystack = `
    ${activity.title}
    ${activity.subject}
    ${activity.origin}
    ${activity.summary}
    ${activity.then}
    ${activity.now}
  `.toLowerCase();

  return (
    matchesSubject &&
    matchesAge &&
    (!query || haystack.includes(query))
  );
}

function makeCard(activity, index) {
  const article = document.createElement("article");

  article.className = "activity-card reveal";
  article.dataset.index = index;
  article.tabIndex = 0;

  article.innerHTML = `
    <div class="card-meta">
      <span class="subject-stamp">${activity.subject}</span>
      <span class="origin">${activity.origin}</span>
    </div>

    <h4>${activity.title}</h4>

    <p>${activity.summary}</p>

    <div class="then-now">
      <span>
        <b>Then</b>
        ${activity.then}
      </span>

      <span>
        <b>Still today</b>
        ${activity.now}
      </span>
    </div>

    <button class="open-card" type="button">
      Open the field note →
    </button>
  `;

  article.addEventListener("click", () => {
    openActivity(activity, index);
  });

  article.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openActivity(activity, index);
    }
  });

  return article;
}

let observer;

function observeCards() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) {
    document.querySelectorAll(".reveal").forEach(card => {
      card.classList.add("visible");
    });

    return;
  }

  observer?.disconnect();

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  document.querySelectorAll(".reveal").forEach(card => {
    observer.observe(card);
  });
}

function renderTimeline() {
  timeline.innerHTML = "";

  const filteredActivities = activities.filter(activityMatches);

  resultCount.textContent = filteredActivities.length;
  emptyState.hidden = filteredActivities.length !== 0;

  eraOrder.forEach(eraName => {
    const eraActivities = filteredActivities.filter(
      activity => activity.era === eraName
    );

    if (!eraActivities.length) {
      return;
    }

    const era = document.createElement("section");
    const sampleActivity = eraActivities[0];

    era.className = "era";

    era.innerHTML = `
      <header class="era-heading">
        <small>${sampleActivity.period}</small>
        <h3>${eraName}</h3>
      </header>
    `;

    eraActivities.forEach(activity => {
      const originalIndex = activities.indexOf(activity);

      era.append(
        makeCard(activity, originalIndex)
      );
    });

    timeline.append(era);
  });

  observeCards();
}

function openActivity(activity, index) {
  const formattedAges = activity.ages
    .map(age => age.replace("-", "–"))
    .join(", ");

  const questSteps = activity.quest
    .map(step => `<li>${step}</li>`)
    .join("");

  const respectNote = activity.respect
    ? `
      <p class="respect-note">
        <strong>Learn with respect:</strong>
        ${activity.respect}
      </p>
    `
    : "";

  dialogContent.innerHTML = `
    <article class="dialog-sheet">
      <div class="card-meta">
        <span class="subject-stamp">
          ${activity.subject}
        </span>

        <span class="origin">
          Ages ${formattedAges} · about ${activity.time} minutes
        </span>
      </div>

      <p class="eyebrow">
        Field note ${(index + 1).toString().padStart(2, "0")}
        · ${activity.origin}
      </p>

      <h2 id="dialogTitle">${activity.title}</h2>

      <p class="dialog-lead">${activity.summary}</p>

      <div class="dialog-grid">
        <div class="dialog-block">
          <h3>Gather</h3>
          <p>${activity.materials}</p>
        </div>

        <div class="dialog-block">
          <h3>Leave behind</h3>
          <p>${activity.evidence}</p>
        </div>
      </div>

      <h3 class="eyebrow">Your quest</h3>

      <ol class="dialog-steps">
        ${questSteps}
      </ol>

      ${respectNote}
    </article>
  `;

  dialog.showModal();
}

function chooseQuest({ scroll = false } = {}) {
  const maxTime = Number(
    document.querySelector("#questTime").value
  );

  const place = document.querySelector("#questPlace").value;

  const matchingActivities = activities.filter(activity => {
    const matchesTime = activity.time <= maxTime;

    const matchesPlace =
      place === "either" ||
      activity.place === "either" ||
      activity.place === place;

    return matchesTime && matchesPlace;
  });

  const availableActivities = matchingActivities.length
    ? matchingActivities
    : activities;

  const activity =
    availableActivities[
      Math.floor(Math.random() * availableActivities.length)
    ];

  const index = activities.indexOf(activity);
  const result = document.querySelector("#questResult");

  result.innerHTML = `
    <span class="quest-number">
      ${(index + 1).toString().padStart(2, "0")}
    </span>

    <div>
      <p class="eyebrow">
        The compass chose · ${activity.subject}
      </p>

      <h3>${activity.title}</h3>

      <button class="open-card" type="button">
        Open this quest →
      </button>
    </div>
  `;

  result
    .querySelector("button")
    .addEventListener("click", () => {
      openActivity(activity, index);
    });

  if (scroll) {
    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

searchInput.addEventListener("input", renderTimeline);
subjectFilter.addEventListener("change", renderTimeline);
ageFilter.addEventListener("change", renderTimeline);

document
  .querySelector("#clearFilters")
  .addEventListener("click", () => {
    searchInput.value = "";
    subjectFilter.value = "all";
    ageFilter.value = "all";

    renderTimeline();
  });

document
  .querySelector("#makeQuest")
  .addEventListener("click", () => {
    chooseQuest();
  });

document
  .querySelector("#surpriseQuest")
  .addEventListener("click", () => {
    chooseQuest({
      scroll: true
    });
  });

document
  .querySelector("#closeDialog")
  .addEventListener("click", () => {
    dialog.close();
  });

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});

const mobileMenu = document.querySelector("#mobileMenu");
const navigation = document.querySelector("#mainNav");

mobileMenu.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  mobileMenu.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  mobileMenu.textContent = isOpen ? "×" : "☰";
});

navigation.addEventListener("click", event => {
  if (event.target.closest("a")) {
    navigation.classList.remove("open");
    mobileMenu.setAttribute("aria-expanded", "false");
    mobileMenu.textContent = "☰";
  }
});

renderTimeline();
