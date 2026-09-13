(() => {
  const histories = [
    {era:"c. 1600 BCE",title:"Case notes before casebooks",place:"Ancient Egypt",truth:"The Edwin Smith Papyrus preserves systematic observations of injuries, examinations, diagnoses and prognoses. It shows that careful clinical description is very old.",shadow:"It does not mean all Egyptian medicine was modern science. Empirical observations lived alongside religious and magical explanations."},
    {era:"Classical era",title:"Teacher, text, practice",place:"South Asia",truth:"Charaka and Sushruta traditions joined learned texts with observation, disciplined conduct and practical instruction. Surgical learners were reportedly trained with models and natural materials before procedures.",shadow:"These traditions changed over centuries and existed within unequal social systems. They should not be reduced to a single “first” or borrowed as decoration."},
    {era:"8th–13th c.",title:"The teaching hospital grows",place:"Islamic world",truth:"Bimaristans brought organised care, wards, pharmacies and teaching together. Students learned from senior physicians, cases and a multilingual medical literature.",shadow:"Hospitals differed across regions and centuries. Claims that one institution invented every modern hospital feature are usually too neat."},
    {era:"12th–18th c.",title:"Apprentice to practitioner",place:"Europe and colonies",truth:"Many future practitioners lived or worked with an established healer, copied recipes, prepared medicines, observed patients and gradually took on tasks.",shadow:"Training quality varied enormously. Access was restricted, standards were inconsistent, and physicians, surgeons, apothecaries and midwives followed different routes."},
    {era:"15th–18th c.",title:"The body becomes a textbook",place:"Anatomy theatres",truth:"Direct dissection challenged inherited anatomical errors and made seeing, drawing and demonstrating central to medical study.",shadow:"Bodies were often obtained through execution, poverty or grave-robbing. Scientific gain does not erase the ethical history of whose bodies became available."},
    {era:"19th–20th c.",title:"From lecture hall to ward",place:"Teaching hospitals",truth:"Clinical clerkships placed senior students on wards to take histories, examine patients, keep notes and present cases under supervision. William Osler became a famous advocate, not its sole inventor.",shadow:"Bedside teaching could treat patients as objects and students through humiliation. Consent, privacy and psychological safety are essential corrections."}
  ];

  const countries = [
    {id:"australia",flag:"🇦🇺",name:"Australia",duration:"Commonly 4–6 years for the degree",entry:"Either undergraduate entry (often 5–6 years) or graduate entry (often 4 years). Admissions vary by university.",degree:"MD or MBBS-equivalent primary medical qualification, with clinical placements built into the course.",checkpoint:"Provisional registration and an accredited internship/supervised-practice year lead toward general registration.",after:"Hospital work and competitive college-based specialty training; duration depends on field.",exams:"University assessments; admissions may involve UCAT ANZ, GAMSAT and interviews. Registration is through Ahpra/Medical Board of Australia.",note:"There is no single Australian ‘final licensing exam’ for every domestic graduate. International graduates may follow different assessment pathways, including AMC processes."},
    {id:"uk",flag:"🇬🇧",name:"United Kingdom",duration:"Usually 5 years; some courses are 4 or 6",entry:"Standard-entry medicine, graduate entry, and courses with a foundation/gateway year exist.",degree:"Primary medical qualification approved by the GMC; learning usually integrates science, clinical skills and placements.",checkpoint:"The Medical Licensing Assessment framework applies through medical-school assessment for UK students; graduates enter the two-year Foundation Programme.",after:"General practice or specialty training follows Foundation training, with royal-college curricula and examinations.",exams:"UCAT is common for admission; schools assess knowledge and clinical performance. Exact requirements vary.",note:"Course approval, registration and the training pathway are distinct things. Always check the GMC and the school—not a generic ranking page."},
    {id:"usa",flag:"🇺🇸",name:"United States",duration:"Usually 4-year degree + 4-year medical school",entry:"Most students complete an undergraduate degree and pre-medical requirements, then apply using the MCAT.",degree:"Four-year MD or DO. The first half is commonly pre-clerkship; later years centre on clinical clerkships and electives.",checkpoint:"USMLE for MD pathways or COMLEX-USA for DO pathways; graduates match into supervised residency.",after:"Residency commonly lasts about 3–7 years; some doctors add fellowship training.",exams:"School assessments, licensing examinations and specialty-board certification form separate checkpoints.",note:"A student may spend roughly 11–15 years after secondary school before completing residency, depending on the route and specialty."},
    {id:"india",flag:"🇮🇳",name:"India",duration:"About 5½ years including internship",entry:"Admission to MBBS is primarily through NEET-UG under current national rules.",degree:"Competency-based MBBS curriculum with foundation learning, early clinical exposure, AETCOM, skills and integrated teaching.",checkpoint:"The course includes roughly 4½ academic years followed by a compulsory rotating medical internship.",after:"Doctors may enter practice within registration rules or compete for postgraduate specialty education.",exams:"Professional university examinations apply. National examination and postgraduate-entry arrangements are policy-sensitive and should be checked directly with NMC/NBEMS.",note:"Because India’s proposed NExT arrangements have changed over time, this guide deliberately avoids giving a launch date. Confirm current rules before planning."},
    {id:"germany",flag:"🇩🇪",name:"Germany",duration:"Six years under federal rules",entry:"University admission is highly competitive; German-language proficiency is normally essential.",degree:"At least 5,500 hours across six years, including first aid, nursing service, clinical clerkships and a 48-week Practical Year.",checkpoint:"The state medical examination has three sections: after two years, after five years before the Practical Year, and after six years.",after:"Approbation permits practice; paid specialty training is governed through state medical chambers.",exams:"National legal framework plus university assessments; the Dr. med. research title is not required to practise.",note:"Germany’s route is a useful reminder that ‘doctor’ as a professional licence and ‘doctorate’ as an academic research title are not the same thing."},
    {id:"japan",flag:"🇯🇵",name:"Japan",duration:"Six-year university medical programme",entry:"Students usually enter medicine from secondary school through competitive university admission processes.",degree:"A six-year programme combines basic science, clinical medicine and supervised clinical training.",checkpoint:"Graduates sit the national medical practitioners examination, then complete mandatory postgraduate clinical training.",after:"Initial clinical training is generally two years before advanced specialty development.",exams:"Universities use shared assessments before clinical clerkships; the Ministry of Health runs the national exam.",note:"Language, recognition and eligibility rules matter greatly for international applicants; use Japanese ministry and university sources."},
    {id:"canada",flag:"🇨🇦",name:"Canada",duration:"Usually 3–4 years of MD after prior university study",entry:"Most schools expect university study before entry; admissions processes and residency eligibility vary by province and school.",degree:"MD programmes blend scientific foundations with early clinical experiences and clerkships.",checkpoint:"Graduates enter residency through the matching system; the MCCQE assesses knowledge and clinical decision-making near graduation level.",after:"Residency and certification through family-medicine or specialty colleges; registration is provincial or territorial.",exams:"The MCC, certifying colleges and provincial regulators have different roles. International-graduate pathways add credential verification and may require NAC assessment.",note:"Canada has no single nationwide licence issued once for all locations. Provincial and territorial medical regulatory authorities set registration requirements."}
  ];

  const subjects = [
    {name:"Anatomy & Embryology",title:"The body’s map—and how it was built",items:["Gross anatomy and spatial relationships","Histology: tissues under the microscope","Embryology and developmental change","Imaging anatomy and clinical landmarks"],why:"The point is not to memorise a warehouse of labels. It is to predict what injury, disease or a procedure might affect next."},
    {name:"Physiology",title:"How living systems keep negotiating",items:["Homeostasis and feedback","Nerve, muscle and cardiovascular function","Respiration, kidneys and fluid balance","Endocrine and reproductive systems"],why:"Physiology turns a static body map into a moving system—and makes abnormal findings interpretable."},
    {name:"Biochemistry & Genetics",title:"The molecular receipts",items:["Proteins, enzymes and metabolism","DNA, gene expression and inheritance","Nutrition and energy balance","Molecular mechanisms of disease"],why:"These ideas explain why a mutation, deficiency or drug can ripple from molecule to whole patient."},
    {name:"Cells, Microbes & Immunity",title:"The tiny worlds with enormous consequences",items:["Cell biology and tissue injury","Bacteria, viruses, fungi and parasites","Innate and adaptive immunity","Infection prevention and antimicrobial resistance"],why:"You learn to ask whether damage comes from an invader, the host response, treatment—or several at once."},
    {name:"Clinical Skills",title:"From knowing to noticing",items:["History-taking and communication","Physical examination","Basic procedures and infection control","Clinical reasoning and documentation"],why:"A perfect differential diagnosis is useless if the patient was never heard, examined or kept safe."},
    {name:"Population Health",title:"Zoom out from one bed",items:["Epidemiology and biostatistics","Prevention and screening","Social determinants of health","Health systems and inequity"],why:"Disease is biological, but risk and access are also shaped by housing, work, policy, discrimination and resources."},
    {name:"Ethics & Professionalism",title:"What should we do—not only what can we do?",items:["Consent, capacity and confidentiality","Boundaries and professional duties","Research ethics","Cultural safety and shared decisions"],why:"Ethics is not a decorative oath. It is the practical work of navigating power, uncertainty and competing goods."},
    {name:"Evidence & Research",title:"How medicine changes its mind",items:["Study designs and bias","Reading scientific papers","Risk, uncertainty and diagnostic tests","Quality improvement and patient safety"],why:"Good medicine requires enough humility to ask, ‘How do we know—and what would change our conclusion?’"}
  ];

  const paths = {
    patient:{title:"Explore patient-facing clinical care",text:"You may enjoy work where trust, pattern recognition and human conversation meet under pressure.",tags:["Medicine","Nursing","Dentistry","Physiotherapy","Paramedicine","Speech Pathology"]},
    lab:{title:"Explore discovery and diagnostics",text:"You may enjoy tracing hidden mechanisms and turning careful evidence into better tests or treatments.",tags:["Biomedical Science","Medical Laboratory Science","Pharmacy","Microbiology","Pathology","Clinical Research"]},
    systems:{title:"Explore population and health systems",text:"You may enjoy preventing harm at scale—through data, policy, education, implementation and equity.",tags:["Public Health","Epidemiology","Health Economics","Health Informatics","Medical Education","Policy"]},
    making:{title:"Explore technology-enabled care",text:"You may enjoy designing, testing or operating tools that help clinicians see, measure, restore or intervene.",tags:["Bioengineering","Medical Imaging","Prosthetics","Digital Health","Surgical Technology","Human Factors"]}
  };

  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

  function renderHistory(){
    const host=qs("#historyTimeline");
    histories.forEach((item,index)=>{
      const article=document.createElement("article"); article.className="history-item";
      article.innerHTML=`<time>${item.era}</time><div class="history-card"><button type="button" aria-expanded="${index===0}"><span><span class="eyebrow">${item.place}</span><h3>${item.title}</h3></span><b>${index===0?'−':'+'}</b></button><div class="history-reveal" ${index===0?'':'hidden'}><div><span>WHAT HOLDS UP</span><p>${item.truth}</p></div><div><span>WHAT NEEDS CAUTION</span><p>${item.shadow}</p></div></div></div>`;
      qs("button",article).addEventListener("click",e=>{const btn=e.currentTarget;const panel=qs(".history-reveal",article);const open=btn.getAttribute("aria-expanded")==="true";btn.setAttribute("aria-expanded",String(!open));panel.hidden=open;qs("b",btn).textContent=open?"+":"−"});
      host.appendChild(article);
    });
  }

  function renderCountries(){
    const tabs=qs("#countryTabs"),file=qs("#countryFile");
    const show=(country)=>{
      qsa("button",tabs).forEach(b=>b.setAttribute("aria-selected",String(b.dataset.id===country.id)));
      file.innerHTML=`<div class="file-label"><span class="flag" aria-hidden="true">${country.flag}</span><p class="eyebrow">COUNTRY FILE · ${country.id.toUpperCase()}</p><h3>${country.name}</h3><p class="duration">${country.duration}</p></div><div class="file-grid"><div><span>Entry</span><h4>Before the first ward</h4><p>${country.entry}</p></div><div><span>Degree</span><h4>Inside medical school</h4><p>${country.degree}</p></div><div><span>Checkpoint</span><h4>Before independent practice</h4><p>${country.checkpoint}</p></div><div><span>After graduation</span><h4>The supervised years</h4><p>${country.after}</p></div><div><span>Exams & regulator</span><h4>What proves readiness</h4><p>${country.exams}</p></div><p class="country-note"><strong>Margin note:</strong> ${country.note}</p></div>`;
    };
    countries.forEach((country,index)=>{const btn=document.createElement("button");btn.type="button";btn.role="tab";btn.dataset.id=country.id;btn.setAttribute("aria-selected",String(index===0));btn.textContent=`${country.flag} ${country.name}`;btn.addEventListener("click",()=>show(country));tabs.appendChild(btn)});show(countries[0]);
  }

  function renderSubjects(){
    const cabinet=qs("#subjectCabinet"),detail=qs("#subjectDetail");
    const show=(subject,button)=>{qsa("button",cabinet).forEach(b=>b.classList.remove("active"));button.classList.add("active");detail.innerHTML=`<p class="eyebrow">SPECIMEN NOTE · FIRST YEAR</p><h3>${subject.title}</h3><ul>${subject.items.map(i=>`<li>${i}</li>`).join("")}</ul><p class="why"><strong>Why it matters:</strong> ${subject.why}</p>`};
    subjects.forEach((subject,index)=>{const btn=document.createElement("button");btn.type="button";btn.textContent=subject.name;btn.addEventListener("click",()=>show(subject,btn));cabinet.appendChild(btn);if(index===0)show(subject,btn)});
  }

  function initPaths(){
    const result=qs("#pathResult");
    qsa("#pathChoices button").forEach(btn=>btn.addEventListener("click",()=>{qsa("#pathChoices button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const p=paths[btn.dataset.path];result.innerHTML=`<span class="compass" aria-hidden="true">✦</span><div><p class="eyebrow">A DIRECTION TO INVESTIGATE</p><h3>${p.title}</h3><p>${p.text}</p><div class="tags">${p.tags.map(tag=>`<span>${tag}</span>`).join("")}</div></div>`}));
  }

  function initNavigation(){
    const button=qs("#menuButton"),nav=qs("#mainNav");
    button.addEventListener("click",()=>{const open=button.getAttribute("aria-expanded")==="true";button.setAttribute("aria-expanded",String(!open));nav.classList.toggle("open",!open)});
    qsa("a",nav).forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");button.setAttribute("aria-expanded","false")}));
    const progress=qs("#scrollProgress");window.addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.height=`${max?scrollY/max*100:0}%`},{passive:true});
  }

  function initDialog(){
    const dialog=qs("#pledgeDialog");
    qs("#openPledge").addEventListener("click",()=>dialog.showModal());
    qs("#closePledge").addEventListener("click",()=>dialog.close());
    qs("#acceptPledge").addEventListener("click",()=>{dialog.close();qs("#openPledge").textContent="Pledge carried ✓"});
    dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
  }

  function initSources(){
    const toggle=qs("#sourceToggle"),list=qs("#sourceList");
    toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));list.hidden=open;qs("b",toggle).textContent=open?"+":"−"});
  }

  renderHistory();renderCountries();renderSubjects();initPaths();initNavigation();initDialog();initSources();
})();
