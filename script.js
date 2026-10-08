const dialog = document.querySelector("#dialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogDetail = document.querySelector("#dialogDetail");

const translations = {
  en: {
    title: "Daniela Villagomez Castro | Plumbing & Fire Protection Engineer",
    nav: ["Profile", "Expertise", "Projects", "Contact"],
    status: "Available for projects",
    meta: "Daniela Villagómez Castro - CIVIL ENGINEER / BIM COORDINATOR",
    heroTitle: "Systems that<br />work together.",
    heroIntro:
      "Plumbing & Fire Protection Engineer specializing in BIM modeling and multidisciplinary coordination for projects in Bolivia and the United States.",
    heroButtons: ["View projects <span>↘</span>", "About me <span>↘</span>"],
    expertiseTitle: "Engineering knowledge<br />behind every model.",
    expertise: [
      ["Plumbing", "Systems designed for performance, access and buildability.", ["Domestic water", "Sanitary drainage", "Vent & storm systems", "Gas systems"]],
      ["Fire Protection", "Coordinated sprinkler systems shaped by engineering and code.", ["Fire sprinkler systems", "Hydraulic calculations", "Risers & hose hydrants", "NFPA-based design"]],
      ["BIM & Modeling", "Clear models and documents that help teams build with confidence.", ["Revit & AutoCAD", "Navisworks review", "HydraCAD & AutoSPRINK", "Construction documents"]],
      ["MEP Coordination", "Resolving the space between disciplines before it reaches the field.", ["Clash detection", "Architecture & structure", "HVAC & electrical", "Sleeves & core drills"]],
    ],
    profileTitle: "More than a modeler.<br /><em>An engineer who coordinates.</em>",
    profile: [
      "Civil Engineer with professional experience in Plumbing, Fire Protection and MEP coordination across projects in Bolivia and the United States.",
      "My experience combines engineering design and construction with BIM modeling and multidisciplinary coordination. In Bolivia, I developed hydrosanitary and fire protection projects, hydraulic calculations, construction execution and site supervision.",
      "In the United States, I have specialized in BIM modeling and coordination for Plumbing and Fire Protection systems, working with Revit, AutoCAD and Navisworks on commercial, residential and hospitality projects.",
    ],
    experienceTitle: "From design<br />to coordination.",
    boliviaRole: "Design · Construction · Supervision",
    documented: "documented projects",
    years: "years of experience",
    usRole: "BIM Modeling · MEP Coordination",
    coordination: "Coordination",
    projectsTitle: "Selected work<br />from Bolivia.",
    viewProject: "View project ↗",
    selectedWork: "Commercial · Hospitality · Residential",
    workflowTitle: "A practical process<br />for complex work.",
    workflow: ["Review", "Model", "Coordinate", "Resolve", "Document", "Update"],
    workflowText: [
      "Architectural, structural and MEP backgrounds.",
      "Plumbing and Fire Protection systems in Revit.",
      "Systems aligned with every discipline.",
      "Clashes and constructability issues addressed.",
      "Coordinated shop drawings and documents.",
      "RFIs, ASIs, field conditions and changes.",
    ],
    toolsTitle: "Tools in service<br />of the system.",
    contactTitle: "Ready to make<br />things <em>work?</em>",
    contactDescription: "Available for BIM Modeling, Plumbing, Fire Protection and MEP Coordination projects.",
    contactLocation: "BASED IN BOLIVIA<br />WORKING INTERNATIONALLY",
    dialogLabel: "SELECTED PROJECT",
    dialogCta: "Start a conversation ↗",
    whatsappMessage: "Hello Daniela, I would like to learn more about your professional services.",
  },
  es: {
    title: "Daniela Villagómez Castro | Ingeniería Hidrosanitaria y Protección contra Incendios",
    nav: ["Perfil", "Especialidades", "Proyectos", "Contacto"],
    status: "Disponible para proyectos",
    meta: "Daniela Villagómez Castro - INGENIERA CIVIL / COORDINADORA BIM",
    heroTitle: "Sistemas que<br />trabajan juntos.",
    heroIntro:
      "Ingeniera especializada en sistemas hidrosanitarios y protección contra incendios, modelado BIM y coordinación multidisciplinaria para proyectos en Bolivia y Estados Unidos.",
    heroButtons: ["Ver proyectos <span>↘</span>", "Sobre mí <span>↘</span>"],
    expertiseTitle: "Conocimiento de ingeniería<br />detrás de cada modelo.",
    expertise: [
      ["Hidrosanitario", "Sistemas diseñados para rendimiento, acceso y construcción.", ["Agua doméstica", "Drenaje sanitario", "Ventilación y pluvial", "Sistemas de gas"]],
        ["Protección contra incendios", "Sistemas de rociadores coordinados desde la ingeniería y la normativa.", ["Rociadores contra incendios", "Cálculos hidráulicos", "Risers e hidrantes", "Diseño basado en NFPA"]],
        ["BIM y modelado", "Modelos y documentos claros para construir con confianza.", ["Revit y AutoCAD", "Revisión en Navisworks", "HydraCAD y AutoSPRINK", "Documentación constructiva"]],
        ["Coordinación MEP", "Resolución de conflictos entre disciplinas antes de llegar a obra.", ["Detección de interferencias", "Arquitectura y estructura", "HVAC y electricidad", "Mangas y perforaciones"]],
    ],
    profileTitle: "Más que una modeladora.<br /><em>Una ingeniera que coordina.</em>",
    profile: [
      "Ingeniera Civil con experiencia profesional en sistemas hidrosanitarios, protección contra incendios y coordinación MEP en proyectos de Bolivia y Estados Unidos.",
      "Mi experiencia combina diseño de ingeniería y construcción con modelado BIM y coordinación multidisciplinaria. En Bolivia desarrollé proyectos hidrosanitarios y contra incendios, cálculos hidráulicos, ejecución y supervisión de obra.",
      "En Estados Unidos me he especializado en modelado BIM y coordinación de sistemas hidrosanitarios y de protección contra incendios, trabajando con Revit, AutoCAD y Navisworks en proyectos comerciales, residenciales y hoteleros.",
    ],
    experienceTitle: "Del diseño<br />a la coordinación.",
    boliviaRole: "Diseño · Construcción · Supervisión",
    documented: "proyectos documentados",
    years: "años de experiencia",
    usRole: "Modelado BIM · Coordinación MEP",
    coordination: "Coordinación",
    projectsTitle: "Trabajo seleccionado<br />de Bolivia.",
    viewProject: "Ver proyecto ↗",
    selectedWork: "Comercial · Hotelero · Residencial",
    workflowTitle: "Un proceso práctico<br />para trabajo complejo.",
    workflow: ["Revisar", "Modelar", "Coordinar", "Resolver", "Documentar", "Actualizar"],
    workflowText: [
      "Referencias arquitectónicas, estructurales y MEP.",
      "Sistemas hidrosanitarios y de protección contra incendios en Revit.",
      "Sistemas alineados con cada disciplina.",
      "Interferencias y constructibilidad resueltas.",
      "Shop drawings y documentos coordinados.",
      "RFIs, ASIs, condiciones de obra y cambios.",
    ],
    toolsTitle: "Herramientas al servicio<br />del sistema.",
    contactTitle: "¿Lista para hacer<br />que todo <em>funcione?</em>",
    contactDescription: "Disponible para proyectos de modelado BIM, sistemas hidrosanitarios, protección contra incendios y coordinación MEP.",
    contactLocation: "BASE EN BOLIVIA<br />TRABAJANDO INTERNACIONALMENTE",
    dialogLabel: "PROYECTO SELECCIONADO",
    dialogCta: "Iniciar una conversación ↗",
    whatsappMessage: "Hola Daniela, me gustaría conocer más sobre tus servicios profesionales.",
  },
};

const fixedTranslations = {
  en: {
    labels: [
      "AREAS OF EXPERTISE",
      "PROFESSIONAL PROFILE",
      "EXPERIENCE",
      "FEATURED PROJECTS",
      "PROJECT WORKFLOW",
      "SOFTWARE & TECHNICAL SKILLS",
      "LET'S WORK TOGETHER",
    ],
    visualIndex: "BOLIVIA <span>+</span> UNITED STATES",
    visualCaption: "ENGINEERING<br />+ CONSTRUCTABILITY",
    heroFoot: ["PLUMBING", "FIRE PROTECTION", "BIM MODELING", "MEP COORDINATION"],
    profileQuote: "“Not only correctly designed, but also coordinated and practical to build.”",
    experienceIntro: "Two contexts. One consistent approach: understand the system, coordinate the constraints and make the work buildable.",
    boliviaDescription: "Instacom S.R.L. — hydrosanitary and fire protection design, hydraulic calculations, construction execution and site supervision.",
    usDescription: "Plumbing and Fire Protection modeling, clash resolution, penetrations, riser coordination, field conditions and construction documentation.",
    projectMeta: ["2019 · CONSTRUCTION", "2023 · DESIGN + CALCULATION", "2022 · DESIGN", "2021—2023 · SELECTED WORK"],
    projectDescription: ["Automatic sprinklers & hose hydrants", "Hydrosanitary & fire protection design", "Hydrosanitary design & calculation", "Explore the complete project record on request."],
    projectQuote: "“The best coordination is the one that makes the field feel simple.”",
    projectRequest: "Request project list ↗",
    tools: ["MEP BIM Modeling", "Multidisciplinary Coordination", "Construction Documentation", "Fire Protection Layouts"],
    footer: ["© 2026 DANIELA VILLAGOMEZ CASTRO", "CIVIL ENGINEER / BIM COORDINATOR"],
    dialogDetails: [
      "Fire protection construction with automatic sprinklers and hose hydrants, delivered with a focus on field execution and system reliability.",
      "Hydrosanitary and fire protection design and calculation for a complex building project.",
      "Hydrosanitary design and hydraulic calculation supporting an institutional project.",
    ],
  },
  es: {
    labels: [
      "ÁREAS DE ESPECIALIDAD",
      "PERFIL PROFESIONAL",
      "EXPERIENCIA",
      "PROYECTOS DESTACADOS",
      "FLUJO DE TRABAJO",
      "SOFTWARE Y HABILIDADES TÉCNICAS",
      "TRABAJEMOS JUNTOS",
    ],
    visualIndex: "BOLIVIA <span>+</span> ESTADOS UNIDOS",
    visualCaption: "INGENIERÍA<br />+ CONSTRUCTIBILIDAD",
    heroFoot: ["HIDROSANITARIO", "PROTECCIÓN CONTRA INCENDIOS", "MODELADO BIM", "COORDINACIÓN MEP"],
    profileQuote: "“No solo correctamente diseñado, sino también coordinado y práctico para construir.”",
    experienceIntro: "Dos contextos. Un mismo enfoque: entender el sistema, coordinar las restricciones y hacer que el trabajo sea construible.",
    boliviaDescription: "Instacom S.R.L. — diseño hidrosanitario y contra incendios, cálculos hidráulicos, ejecución y supervisión de obra.",
    usDescription: "Modelado de sistemas hidrosanitarios y protección contra incendios, resolución de interferencias, penetraciones, coordinación de risers, condiciones de obra y documentación constructiva.",
    projectMeta: ["2019 · CONSTRUCCIÓN", "2023 · DISEÑO + CÁLCULO", "2022 · DISEÑO", "2021—2023 · TRABAJO SELECCIONADO"],
    projectDescription: ["Rociadores automáticos e hidrantes", "Diseño hidrosanitario y contra incendios", "Diseño y cálculo hidrosanitario", "Consulta el registro completo de proyectos."],
    projectQuote: "“La mejor coordinación es la que hace que el trabajo en obra parezca sencillo.”",
    projectRequest: "Solicitar lista de proyectos ↗",
    tools: ["Modelado BIM MEP", "Coordinación multidisciplinaria", "Documentación constructiva", "Planos de protección contra incendios"],
    footer: ["© 2026 DANIELA VILLAGÓMEZ CASTRO", "INGENIERA CIVIL / COORDINADORA BIM"],
    dialogDetails: [
      "Construcción de sistemas contra incendios con rociadores automáticos e hidrantes, enfocada en la ejecución en obra y la confiabilidad del sistema.",
      "Diseño y cálculo hidrosanitario y contra incendios para un proyecto de alta complejidad.",
      "Diseño hidrosanitario y cálculo hidráulico para un proyecto institucional.",
    ],
  },
};

function setLanguage(language) {
  const content = translations[language];
  const fixed = fixedTranslations[language];
  document.documentElement.lang = language;
  document.title = content.title;
  document.querySelectorAll(".nav-links a").forEach((link, index) => {
    link.textContent = content.nav[index];
  });
  document.querySelector(".nav-status").lastChild.textContent = ` ${content.status}`;
  document.querySelector(".hero-meta span").textContent = content.meta;
  document.querySelector(".hero h1").innerHTML = content.heroTitle;
  document.querySelector(".hero-intro").textContent = content.heroIntro;
  document.querySelector(".visual-index").innerHTML = fixed.visualIndex;
  const visualCaption = document.querySelector(".visual-caption strong");
  if (visualCaption) {
    visualCaption.innerHTML = fixed.visualCaption;
  }
  document.querySelectorAll(".hero-foot span").forEach((item, index) => {
    item.textContent = fixed.heroFoot[index];
  });
  document.querySelectorAll(".hero-actions a").forEach((link, index) => {
    link.innerHTML = content.heroButtons[index];
  });
  document.querySelector(".section-heading h2").innerHTML = content.expertiseTitle;
  [
    ".expertise .eyebrow",
    ".profile .eyebrow",
    ".experience .eyebrow",
    ".projects .eyebrow",
    ".workflow .eyebrow",
    ".tools .eyebrow",
    ".contact .eyebrow",
  ].forEach((selector, index) => {
    document.querySelector(selector).textContent = fixed.labels[index];
  });
  document.querySelectorAll(".expertise-card").forEach((card, index) => {
    const [title, description, items] = content.expertise[index];
    card.querySelector("h3").textContent = title;
    card.querySelector("p").textContent = description;
    card.querySelectorAll("li").forEach((item, itemIndex) => {
      item.textContent = items[itemIndex];
    });
  });
  document.querySelector(".profile-copy h2").innerHTML = content.profileTitle;
  document.querySelector(".profile-copy blockquote").textContent = fixed.profileQuote;
  document.querySelectorAll(".profile-copy > p:not(.eyebrow):not(.profile-name)").forEach((paragraph, index) => {
    paragraph.textContent = content.profile[index];
  });
  document.querySelector(".experience-intro h2").innerHTML = content.experienceTitle;
  document.querySelector(".experience-intro > p:last-child").textContent = fixed.experienceIntro;
  document.querySelector(".timeline-item:first-child h4").textContent = content.boliviaRole;
  document.querySelector(".timeline-item:first-child > div > p").textContent = fixed.boliviaDescription;
  document.querySelectorAll(".metric-row > span")[0].textContent = content.documented;
  document.querySelectorAll(".metric-row > span")[1].textContent = content.years;
  document.querySelector(".timeline-item.current h4").textContent = content.usRole;
  document.querySelector(".timeline-item.current > div > p").textContent = fixed.usDescription;
  document.querySelector(".tag-row span:last-child").textContent = content.coordination;
  document.querySelector(".projects h2").innerHTML = content.projectsTitle;
  document.querySelectorAll(".project-card > div > span").forEach((item, index) => {
    item.textContent = fixed.projectMeta[index];
  });
  document.querySelectorAll(".project-card > div > p").forEach((item, index) => {
    item.textContent = fixed.projectDescription[index];
  });
  document.querySelector(".project-quote").textContent = fixed.projectQuote;
  document.querySelector(".light-link").textContent = fixed.projectRequest;
  document.querySelectorAll(".open-case").forEach((button) => {
    button.textContent = content.viewProject;
  });
  document.querySelector(".project-wide h3").textContent = content.selectedWork;
  document.querySelector(".workflow h2").innerHTML = content.workflowTitle;
  document.querySelectorAll(".workflow-grid h3").forEach((heading, index) => {
    heading.textContent = content.workflow[index];
  });
  document.querySelectorAll(".workflow-grid p").forEach((paragraph, index) => {
    paragraph.textContent = content.workflowText[index];
  });
  document.querySelector(".tools h2").innerHTML = content.toolsTitle;
  document.querySelectorAll(".tool-list > div > span").forEach((item, index) => {
    item.textContent = fixed.tools[index];
  });
  document.querySelector(".contact-top > span").innerHTML = content.contactLocation;
  document.querySelector(".contact h2").innerHTML = content.contactTitle;
  document.querySelector(".contact > p:not(.eyebrow)").textContent = content.contactDescription;
  document.querySelectorAll("footer span").forEach((item, index) => {
    item.textContent = fixed.footer[index];
  });
  document.querySelector("#dialog .eyebrow").textContent = content.dialogLabel;
  document.querySelector("#dialogCta").textContent = content.dialogCta;
  document.querySelector("#whatsappButton").href = `https://wa.me/59177019733?text=${encodeURIComponent(content.whatsappMessage)}`;
  document.querySelectorAll(".open-case").forEach((button, index) => {
    button.dataset.detail = fixed.dialogDetails[index];
  });
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });
  localStorage.setItem("language", language);
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(localStorage.getItem("language") || "en");

document.querySelectorAll(".open-case").forEach((button) => {
  button.addEventListener("click", () => {
    dialogTitle.textContent = button.dataset.case;
    dialogDetail.textContent = button.dataset.detail;
    dialog.showModal();
  });
});

document
  .querySelector(".close")
  .addEventListener("click", () => dialog.close());
document
  .querySelector("#dialogCta")
  .addEventListener("click", () => dialog.close());

const emailButton = document.querySelector("#emailButton");
emailButton.addEventListener("click", async () => {
  const email = "danielavc0506@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    emailButton.innerHTML = "Email copied <span>✓</span>";
    setTimeout(() => {
      emailButton.innerHTML = `${email} <span>↗</span>`;
    }, 2000);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
