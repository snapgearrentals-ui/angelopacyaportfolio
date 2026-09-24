/* =========================================================
   ANGELO PACYA — PORTFOLIO SCRIPT
   Gradient × Glassmorphism Portfolio
========================================================= */


/* =========================================================
   GOOGLE DRIVE HELPERS
========================================================= */

function driveImage(id, size = "w1600") {
  return `https://drive.google.com/thumbnail?id=${id}&sz=${size}`;
}

function drivePreview(id) {
  return `https://drive.google.com/file/d/${id}/preview`;
}


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

  /* ---------------------------------------------------------
     FOOTLAB
  --------------------------------------------------------- */

  footlab: {

    title: "FOOTLAB",

    category:
      "Digital Marketing · Brand Development · Creative",

    description:
      "Worked across digital marketing, social media, creative campaigns, SEO, partnerships, events, brand development, content production, and performance reporting for FOOTLAB, a custom orthotic clinic.",

    role:
      "Marketing Assistant",

    year:
      "2025 — 2026",

    services: [
      "Digital Marketing",
      "Social Media",
      "Brand Development",
      "Creative Production",
      "SEO",
      "Events & Partnerships",
      "Analytics & Reporting"
    ],

    media: [

      {
        type: "image",
        id: "1HLJB4XqchXSQvDGCxOOdJySWNg17w2f6",
        alt: "FOOTLAB creative work"
      },

      {
        type: "image",
        id: "1OaM732spQtU9wMFfn7Kn0tkZLJobtpi2",
        alt: "FOOTLAB marketing work"
      },

      {
        type: "image",
        id: "1_nwetHwOkZEZJyfEn8FE38BRAIcsU6Ox",
        alt: "FOOTLAB social media creative"
      },

      {
        type: "image",
        id: "1x_aTEzidyCU-5I0D6gRdlVDCaKbLjzDv",
        alt: "FOOTLAB campaign creative"
      },

      {
        type: "image",
        id: "19--9sx60VpOEDs1nDhTFQPNJ-wkktfQ0",
        alt: "FOOTLAB event marketing"
      },

      {
        type: "image",
        id: "1axbRYiS-pHxghEPdoWwC3gZjIpuZS6ON",
        alt: "FOOTLAB event activation"
      },

      {
        type: "image",
        id: "1Q7BcKjfB6NjxOCQuFDyTprGpEuxmc0EZ",
        alt: "FOOTLAB creative campaign"
      },

      {
        type: "image",
        id: "1aWISvTciZ8Ptlfv_QeEgx5URpBNd_x5N",
        alt: "FOOTLAB branding"
      },

      {
        type: "image",
        id: "1J2PfnMeRqi7lNCK04ELez0KYlkqdtxET",
        alt: "FOOTLAB content"
      },

      {
        type: "image",
        id: "15hOLxhFsXBAJU8j2YTK00-pk0a9uHSLt",
        alt: "FOOTLAB marketing material"
      },

      {
        type: "image",
        id: "1QhkCwEO2bUWJXDTGPGCt6uVZluTR-PLi",
        alt: "FOOTLAB social media content"
      },

      {
        type: "image",
        id: "17W3x-3b2rGylh_NFW16TEmwyFtCwjjYp",
        alt: "FOOTLAB event creative"
      },

      {
        type: "image",
        id: "10bmlvX6h72FEIm4UT4-6DFfSKyPSWNWJ",
        alt: "FOOTLAB campaign"
      },

      {
        type: "image",
        id: "1j1PXhsh6vr72XrSFDcudS1Qh1KwsyfrO",
        alt: "FOOTLAB creative project"
      },

      {
        type: "image",
        id: "1dbtq_MWQ4Xmgt7x4e_nM9HTh-FsGPh3c",
        alt: "FOOTLAB marketing project"
      },

      {
        type: "image",
        id: "1hfAlw4ffECSq53BEcktUnAuOathaxbpp",
        alt: "FOOTLAB campaign material"
      },

      {
        type: "video",
        id: "1IKmOuyCaemAlA2AmaPygY_wx9Gdlc1Vs",
        alt: "FOOTLAB video"
      },

      {
        type: "video",
        id: "1u1LG67UTN3Q9uTAiWbSQ7VE5uOveRmpQ",
        alt: "FOOTLAB video campaign"
      },

      {
        type: "video",
        id: "1oVfMyskS-gE0IK8uSK64bdV0hRPMOw9F",
        alt: "FOOTLAB social media video"
      }

    ]

  },


  /* ---------------------------------------------------------
     KWENCH
  --------------------------------------------------------- */

  kwench: {

    title: "Kwench Juice Cafe",

    category:
      "Social Media · Creative · Digital Marketing",

    description:
      "Managed social media and creative content for Kwench Juice Cafe, developing visual assets, social content, campaigns, and video materials across branch accounts.",

    role:
      "Social Media & Creative",

    year:
      "2025 — 2026",

    services: [
      "Social Media",
      "Content Strategy",
      "Graphic Design",
      "Video Editing",
      "Digital Marketing",
      "Creative Production"
    ],

    media: [

      {
        type: "image",
        id: "1BjQfodMYmvb8uyAbE-h_NIYZZCWP5w1o",
        alt: "Kwench Juice Cafe creative work"
      },

      {
        type: "image",
        id: "1inkF8cQKoAc79BOoHSK4MVgOcdRaVnre",
        alt: "Kwench social media creative"
      },

      {
        type: "image",
        id: "1M23yNIWc8i8Z8j5aQOGw7-hz0Zt4979s",
        alt: "Kwench campaign creative"
      },

      {
        type: "image",
        id: "1fdRw0VsewZRWg-pOrhmV4Yb-bG-IbUQE",
        alt: "Kwench branding"
      },

      {
        type: "image",
        id: "13gvBEWV93TrGvWBrOxPxhM_YAjLQJw6r",
        alt: "Kwench content"
      },

      {
        type: "image",
        id: "1nP5A691jMtCMqvF1FuTRS4EoKqWcwkqz",
        alt: "Kwench social media campaign"
      },

      {
        type: "image",
        id: "1Y6-pI24HGdTKgkAY0ue8hT7gv282YlWz",
        alt: "Kwench marketing creative"
      },

      {
        type: "image",
        id: "1GhV_5bXTNpEwHdjiinHwi7KKexKVqYRV",
        alt: "Kwench promotional content"
      },

      {
        type: "video",
        id: "1eMAD62knoG7Uyyn12QxxYjDNpz6bqlQJ",
        alt: "Kwench video"
      },

      {
        type: "video",
        id: "18x_ap_emNC5bQA-B0F56nhIITs2jnBcp",
        alt: "Kwench social media video"
      },

      {
        type: "video",
        id: "1ZpOjXO_hGEPe1upBEoiPiKHEgPTea8OJ",
        alt: "Kwench campaign video"
      },

      {
        type: "video",
        id: "1ZwD3HOULtJy92z7tjiefWOgzyPnU2G_P",
        alt: "Kwench creative video"
      }

    ]

  },


  /* ---------------------------------------------------------
     ALTA ANIMA
  --------------------------------------------------------- */

  alta: {

    title: "Alta Anima",

    category:
      "Marketing · Design · Creative",

    description:
      "Supported marketing and creative initiatives through visual design, campaign assets, and communication materials.",

    role:
      "Marketing Assistant",

    year:
      "2025 — 2026",

    services: [
      "Marketing",
      "Graphic Design",
      "Creative Direction",
      "Content"
    ],

    media: [

      {
        type: "image",
        id: "1lTUxkyFAPt8_gdKYJDNJF9SqVpzicRMa",
        alt: "Alta Anima creative work"
      },

      {
        type: "image",
        id: "1mrjuvoYDSzh-0-fvuvaqlavAADE9xu6h",
        alt: "Alta Anima marketing work"
      },

      {
        type: "image",
        id: "1OMU-xiu4-uRwyEqNFH9-zqzctpI7l0H_",
        alt: "Alta Anima design"
      },

      {
        type: "image",
        id: "1-jnAnZVFrdvNkKn8MO4utQV8u73KCSee",
        alt: "Alta Anima creative"
      },

      {
        type: "image",
        id: "1rHQdSaqwIqmyPnR69vwjR-b2omc70uWq",
        alt: "Alta Anima marketing material"
      },

      {
        type: "image",
        id: "1tt_P_lT6mJczZd8VarHF8-sb4aUHCZ17",
        alt: "Alta Anima campaign"
      },

      {
        type: "image",
        id: "1f5uHDr4mUJpl9xVA24FW5NDm9OC-cYTC",
        alt: "Alta Anima design project"
      }

    ]

  },


  /* ---------------------------------------------------------
     SOLOUR
  --------------------------------------------------------- */

  solour: {

    title: "Solour",

    category:
      "Brand Strategy · Creative · Marketing",

    description:
      "An academic marketing and branding project focused on a lip-care sunbalm, covering research, target audience, positioning, branding, creative development, and marketing strategy.",

    role:
      "Marketing & Creative",

    year:
      "Academic Project",

    services: [
      "Brand Strategy",
      "Market Research",
      "Positioning",
      "Creative Direction",
      "Graphic Design",
      "Marketing Strategy"
    ],

    media: [

      {
        type: "image",
        id: "1qoD8imjaSILu9wVi-46-ORnRPgOJGTKk",
        alt: "Solour brand project"
      },

      {
        type: "image",
        id: "1IiTa4hUHAAWFIS6nu9PkrKaHjcW-Dzmt",
        alt: "Solour branding"
      },

      {
        type: "image",
        id: "1_2febscGC-VMWCeZ1L1A6tAda2nElI5_",
        alt: "Solour campaign"
      },

      {
        type: "image",
        id: "1SGnr5zjLr45yFaUB9fmqFaOKws4NKS-j",
        alt: "Solour marketing creative"
      },

      {
        type: "image",
        id: "12ysk-3g-gdaCZWat50s-9j2KhpyubcOR",
        alt: "Solour visual identity"
      },

      {
        type: "image",
        id: "1s3SJeJe0VquBI0Ye5GOBkDEQKpayrmF0",
        alt: "Solour creative"
      },

      {
        type: "image",
        id: "1LApEqZ4eHB7OMUGggOVemGjmJyxsSAET",
        alt: "Solour brand presentation"
      }

    ]

  },


  /* ---------------------------------------------------------
     SM SUPERMALLS
  --------------------------------------------------------- */

  sm: {

    title: "SM Supermalls",

    category:
      "Operations · Events · Marketing",

    description:
      "Worked under the MSME team at SM Supermalls Head Office, supporting mall monitoring, reporting, documentation, event coordination, presentations, partnership materials, and physical marketing initiatives.",

    role:
      "Operations Intern · MSME",

    year:
      "2025 — 2026",

    services: [
      "Operations",
      "Reporting",
      "Documentation",
      "Event Coordination",
      "Presentations",
      "Partnerships",
      "Physical Marketing"
    ],

    media: []

  },


  /* ---------------------------------------------------------
     WEB3
  --------------------------------------------------------- */

  web3: {

    title: "Web3",

    category:
      "Community · Marketing · Partnerships",

    description:
      "Started working in Web3 and digital communities while young, working across community management, Discord moderation, community building, partnerships, strategic communications, and digital marketing for more than 30 brands and projects.",

    role:
      "Community · Marketing · Partnerships",

    year:
      "2022 — 2024",

    services: [
      "Community Management",
      "Discord Moderation",
      "Community Building",
      "Partnerships",
      "Strategic Communications",
      "Digital Marketing"
    ],

    media: []

  }

};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const projectModal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxVideo = document.getElementById("lightboxVideo");

const modalClose = document.querySelector(".modal-close");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");

const workCards = document.querySelectorAll(".work-card");


/* =========================================================
   STATE
========================================================= */

let currentProject = null;
let currentMediaIndex = 0;


/* =========================================================
   PROJECT MODAL
========================================================= */

function openProject(projectKey) {

  const project = projects[projectKey];

  if (!project) {
    console.warn(`Project "${projectKey}" was not found.`);
    return;
  }

  currentProject = projectKey;
  currentMediaIndex = 0;

  modalContent.innerHTML = buildProjectModal(project);

  projectModal.classList.add("active");
  projectModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  projectModal.scrollTop = 0;

  attachGalleryListeners();
}


function closeProject() {

  projectModal.classList.remove("active");
  projectModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  currentProject = null;

  modalContent.innerHTML = "";
}


/* =========================================================
   BUILD PROJECT MODAL
========================================================= */

function buildProjectModal(project) {

  const mediaHTML = project.media.length
    ? project.media
        .map((item, index) => {

          if (item.type === "video") {

            return `
              <button
                class="project-media-item project-video-item"
                type="button"
                data-media-index="${index}"
              >

                <div class="video-thumbnail">

                  <span class="video-play">
                    ▶
                  </span>

                  <span class="video-label">
                    VIDEO
                  </span>

                </div>

              </button>
            `;

          }

          return `
            <button
              class="project-media-item"
              type="button"
              data-media-index="${index}"
            >

              <img
                src="${driveImage(item.id, "w1200")}"
                alt="${escapeHTML(item.alt)}"
                loading="lazy"
              />

              <span class="media-expand">
                ↗
              </span>

            </button>
          `;

        })
        .join("")
    : `
        <div class="project-no-media">

          <span>
            Project overview
          </span>

          <p>
            Detailed visual documentation available upon request.
          </p>

        </div>
      `;


  const servicesHTML = project.services
    .map(service => `
      <span>${escapeHTML(service)}</span>
    `)
    .join("");


  return `

    <div class="modal-project-header">

      <div class="modal-project-meta">

        <span>${escapeHTML(project.category)}</span>

        <span>${escapeHTML(project.year)}</span>

      </div>


      <h2>
        ${escapeHTML(project.title)}
      </h2>


      <p class="modal-description">
        ${escapeHTML(project.description)}
      </p>

    </div>


    <div class="modal-project-details">

      <div class="modal-detail-block">

        <span class="detail-label">
          ROLE
        </span>

        <strong>
          ${escapeHTML(project.role)}
        </strong>

      </div>


      <div class="modal-detail-block">

        <span class="detail-label">
          SERVICES
        </span>

        <div class="modal-services">
          ${servicesHTML}
        </div>

      </div>

    </div>


    <div class="project-gallery">

      ${mediaHTML}

    </div>

  `;
}


/* =========================================================
   GALLERY LISTENERS
========================================================= */

function attachGalleryListeners() {

  const mediaItems = document.querySelectorAll(
    ".project-media-item"
  );

  mediaItems.forEach(item => {

    item.addEventListener("click", () => {

      const index = Number(
        item.dataset.mediaIndex
      );

      openLightbox(index);

    });

  });

}


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(index) {

  if (!currentProject) {
    return;
  }

  const project = projects[currentProject];

  if (!project || !project.media.length) {
    return;
  }

  if (index < 0) {
    index = project.media.length - 1;
  }

  if (index >= project.media.length) {
    index = 0;
  }

  currentMediaIndex = index;

  const item = project.media[index];

  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  renderLightboxMedia(item);
}


function closeLightbox() {

  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");

  stopLightboxVideo();

  document.body.classList.add("modal-open");
}


function renderLightboxMedia(item) {

  stopLightboxVideo();


  if (item.type === "image") {

    lightboxImage.src =
      driveImage(item.id, "w2000");

    lightboxImage.alt =
      item.alt || "";

    lightboxImage.style.display =
      "block";

    lightboxVideo.style.display =
      "none";

    return;
  }


  if (item.type === "video") {

    lightboxImage.style.display =
      "none";

    lightboxVideo.style.display =
      "block";

    lightboxVideo.src =
      drivePreview(item.id);

    lightboxVideo.setAttribute(
      "allow",
      "autoplay; fullscreen"
    );

    lightboxVideo.setAttribute(
      "allowfullscreen",
      ""
    );

    lightboxVideo.style.width =
      "min(90vw, 1100px)";

    lightboxVideo.style.height =
      "min(75vh, 700px)";

    lightboxVideo.style.border =
      "none";

    lightboxVideo.style.borderRadius =
      "14px";

    lightboxVideo.style.background =
      "#111";

  }

}


function stopLightboxVideo() {

  lightboxVideo.src = "";

  lightboxVideo.style.display =
    "none";

  lightboxImage.src = "";

  lightboxImage.style.display =
    "none";
}


/* =========================================================
   LIGHTBOX NAVIGATION
========================================================= */

function nextMedia() {

  if (!currentProject) {
    return;
  }

  const project =
    projects[currentProject];

  if (!project.media.length) {
    return;
  }

  openLightbox(
    currentMediaIndex + 1
  );
}


function previousMedia() {

  if (!currentProject) {
    return;
  }

  const project =
    projects[currentProject];

  if (!project.media.length) {
    return;
  }

  openLightbox(
    currentMediaIndex - 1
  );
}


/* =========================================================
   WORK CARD EVENTS
========================================================= */

workCards.forEach(card => {

  card.addEventListener("click", event => {

    const projectKey =
      card.dataset.project;

    if (!projectKey) {
      return;
    }

    openProject(projectKey);

  });

});


/* =========================================================
   CLOSE EVENTS
========================================================= */

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeProject
  );

}


if (lightboxClose) {

  lightboxClose.addEventListener(
    "click",
    closeLightbox
  );

}


if (lightboxPrev) {

  lightboxPrev.addEventListener(
    "click",
    previousMedia
  );

}


if (lightboxNext) {

  lightboxNext.addEventListener(
    "click",
    nextMedia
  );

}


/* =========================================================
   BACKDROP CLOSE
========================================================= */

if (projectModal) {

  projectModal.addEventListener(
    "click",
    event => {

      if (
        event.target === projectModal ||
        event.target.classList.contains(
          "modal-backdrop"
        )
      ) {

        closeProject();

      }

    }
  );

}


if (lightbox) {

  lightbox.addEventListener(
    "click",
    event => {

      if (event.target === lightbox) {

        closeLightbox();

      }

    }
  );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      if (
        lightbox.classList.contains("active")
      ) {

        closeLightbox();

      } else if (
        projectModal.classList.contains("active")
      ) {

        closeProject();

      }

    }


    if (
      lightbox.classList.contains("active")
    ) {

      if (event.key === "ArrowRight") {
        nextMedia();
      }

      if (event.key === "ArrowLeft") {
        previousMedia();
      }

    }

  }
);


/* =========================================================
   SMOOTH ANCHOR NAVIGATION
========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener(
      "click",
      event => {

        const targetID =
          anchor.getAttribute("href");

        if (
          !targetID ||
          targetID === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(targetID);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================================================
   HEADER SCROLL STATE
========================================================= */

const siteHeader =
  document.querySelector(".site-header");

function updateHeader() {

  if (!siteHeader) {
    return;
  }

  if (window.scrollY > 40) {

    siteHeader.classList.add(
      "scrolled"
    );

  } else {

    siteHeader.classList.remove(
      "scrolled"
    );

  }

}

window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".section-heading, .about-main, .about-side, .capability-item, .work-card, .experience-row, .tools-section, .contact-container"
  );


if (
  "IntersectionObserver" in window
) {

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "is-visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.08
      }
    );


  revealElements.forEach(
    element => {

      element.classList.add(
        "reveal"
      );

      revealObserver.observe(
        element
      );

    }
  );

}


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
  "error",
  event => {

    const element =
      event.target;

    if (
      element.tagName !== "IMG"
    ) {
      return;
    }

    if (
      element.dataset.fallbackApplied
    ) {
      return;
    }

    element.dataset.fallbackApplied =
      "true";

    element.src =
      createFallbackImage(
        element.alt || "Creative project"
      );

  },
  true
);


/* =========================================================
   FALLBACK IMAGE
========================================================= */

function createFallbackImage(
  text
) {

  const safeText =
    String(text)
      .replace(
        /[<>&'"]/g,
        ""
      )
      .slice(0, 35);


  const svg = `

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="1000"
      viewBox="0 0 1200 1000"
    >

      <defs>

        <linearGradient
          id="gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >

          <stop
            offset="0%"
            stop-color="#cfc5ff"
          />

          <stop
            offset="50%"
            stop-color="#b9d8ff"
          />

          <stop
            offset="100%"
            stop-color="#c8e8d8"
          />

        </linearGradient>

      </defs>


      <rect
        width="1200"
        height="1000"
        fill="url(#gradient)"
      />


      <circle
        cx="950"
        cy="170"
        r="260"
        fill="rgba(255,255,255,0.28)"
      />


      <circle
        cx="250"
        cy="850"
        r="320"
        fill="rgba(255,255,255,0.20)"
      />


      <text
        x="600"
        y="500"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Arial, sans-serif"
        font-size="54"
        font-weight="700"
        fill="#171717"
      >
        ${safeText}
      </text>

    </svg>

  `;


  return `
    data:image/svg+xml;charset=UTF-8,
    ${encodeURIComponent(svg)}
  `;
}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHTML(value) {

  return String(value)
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroVisual =
  document.querySelector(".hero-visual");


if (
  heroVisual &&
  window.matchMedia(
    "(pointer: fine)"
  ).matches
) {

  heroVisual.addEventListener(
    "mousemove",
    event => {

      const rect =
        heroVisual.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width -
        0.5;

      const y =
        (event.clientY - rect.top) /
        rect.height -
        0.5;


      const mainCard =
        heroVisual.querySelector(
          ".glass-card-main"
        );

      const smallOne =
        heroVisual.querySelector(
          ".small-one"
        );

      const smallTwo =
        heroVisual.querySelector(
          ".small-two"
        );


      if (mainCard) {

        mainCard.style.transform =
          `translate(${x * 10}px, ${y * 10}px) rotate(3deg)`;

      }


      if (smallOne) {

        smallOne.style.transform =
          `translate(${x * -15}px, ${y * -15}px) rotate(-7deg)`;

      }


      if (smallTwo) {

        smallTwo.style.transform =
          `translate(${x * 18}px, ${y * 18}px) rotate(7deg)`;

      }

    }
  );


  heroVisual.addEventListener(
    "mouseleave",
    () => {

      const mainCard =
        heroVisual.querySelector(
          ".glass-card-main"
        );

      const smallOne =
        heroVisual.querySelector(
          ".small-one"
        );

      const smallTwo =
        heroVisual.querySelector(
          ".small-two"
        );


      if (mainCard) {
        mainCard.style.transform =
          "";
      }

      if (smallOne) {
        smallOne.style.transform =
          "";
      }

      if (smallTwo) {
        smallTwo.style.transform =
          "";
      }

    }
  );

}


/* =========================================================
   INITIALIZE
========================================================= */

console.log(
  "Angelo Pacya portfolio initialized."
);
