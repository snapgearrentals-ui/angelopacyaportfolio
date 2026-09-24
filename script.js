/* =========================================================
   ANGELO PACYA — PORTFOLIO
   Interactive Project Gallery
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

  footlab: {
    title: "FOOTLAB",
    category: "Digital Marketing · Brand Development · Creative",
    role: "Marketing Assistant",
    year: "2025 — 2026",

    description:
      "Worked across digital marketing, social media, creative campaigns, SEO, partnerships, events, brand development, content production, and performance reporting for FOOTLAB.",

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

      ["image", "1HLJB4XqchXSQvDGCxOOdJySWNg17w2f6", "FOOTLAB creative work"],
      ["image", "1OaM732spQtU9wMFfn7Kn0tkZLJobtpi2", "FOOTLAB marketing work"],
      ["image", "1_nwetHwOkZEZJyfEn8FE38BRAIcsU6Ox", "FOOTLAB social media creative"],
      ["image", "1x_aTEzidyCU-5I0D6gRdlVDCaKbLjzDv", "FOOTLAB campaign creative"],
      ["image", "19--9sx60VpOEDs1nDhTFQPNJ-wkktfQ0", "FOOTLAB event marketing"],
      ["image", "1axbRYiS-pHxghEPdoWwC3gZjIpuZS6ON", "FOOTLAB event activation"],
      ["image", "1Q7BcKjfB6NjxOCQuFDyTprGpEuxmc0EZ", "FOOTLAB creative campaign"],
      ["image", "1aWISvTciZ8Ptlfv_QeEgx5URpBNd_x5N", "FOOTLAB branding"],
      ["image", "1J2PfnMeRqi7lNCK04ELez0KYlkqdtxET", "FOOTLAB content"],
      ["image", "15hOLxhFsXBAJU8j2YTK00-pk0a9uHSLt", "FOOTLAB marketing material"],
      ["image", "1QhkCwEO2bUWJXDTGPGCt6uVZluTR-PLi", "FOOTLAB social media content"],
      ["image", "17W3x-3b2rGylh_NFW16TEmwyFtCwjjYp", "FOOTLAB event creative"],
      ["image", "10bmlvX6h72FEIm4UT4-6DFfSKyPSWNWJ", "FOOTLAB campaign"],
      ["image", "1j1PXhsh6vr72XrSFDcudS1Qh1KwsyfrO", "FOOTLAB creative project"],
      ["image", "1dbtq_MWQ4Xmgt7x4e_nM9HTh-FsGPh3c", "FOOTLAB marketing project"],
      ["image", "1hfAlw4ffECSq53BEcktUnAuOathaxbpp", "FOOTLAB campaign material"],

      ["video", "1IKmOuyCaemAlA2AmaPygY_wx9Gdlc1Vs", "FOOTLAB video"],
      ["video", "1u1LG67UTN3Q9uTAiWbSQ7VE5uOveRmpQ", "FOOTLAB video campaign"],
      ["video", "1oVfMyskS-gE0IK8uSK64bdV0hRPMOw9F", "FOOTLAB social media video"]

    ]
  },


  kwench: {
    title: "Kwench Juice Cafe",
    category: "Social Media · Creative · Digital Marketing",
    role: "Social Media & Creative",
    year: "2025 — 2026",

    description:
      "Managed social media and creative content for Kwench Juice Cafe, developing visual assets, social content, campaigns, and video materials across branch accounts.",

    services: [
      "Social Media",
      "Content Strategy",
      "Graphic Design",
      "Video Editing",
      "Digital Marketing",
      "Creative Production"
    ],

    media: [

      ["image", "1BjQfodMYmvb8uyAbE-h_NIYZZCWP5w1o", "Kwench Juice Cafe creative work"],
      ["image", "1inkF8cQKoAc79BOoHSK4MVgOcdRaVnre", "Kwench social media creative"],
      ["image", "1M23yNIWc8i8Z8j5aQOGw7-hz0Zt4979s", "Kwench campaign creative"],
      ["image", "1fdRw0VsewZRWg-pOrhmV4Yb-bG-IbUQE", "Kwench branding"],
      ["image", "13gvBEWV93TrGvWBrOxPxhM_YAjLQJw6r", "Kwench content"],
      ["image", "1nP5A691jMtCMqvF1FuTRS4EoKqWcwkqz", "Kwench social media campaign"],
      ["image", "1Y6-pI24HGdTKgkAY0ue8hT7gv282YlWz", "Kwench marketing creative"],
      ["image", "1GhV_5bXTNpEwHdjiinHwi7KKexKVqYRV", "Kwench promotional content"],

      ["video", "1eMAD62knoG7Uyyn12QxxYjDNpz6bqlQJ", "Kwench video"],
      ["video", "18x_ap_emNC5bQA-B0F56nhIITs2jnBcp", "Kwench social media video"],
      ["video", "1ZpOjXO_hGEPe1upBEoiPiKHEgPTea8OJ", "Kwench campaign video"],
      ["video", "1ZwD3HOULtJy92z7tjiefWOgzyPnU2G_P", "Kwench creative video"]

    ]
  },


  alta: {
    title: "Alta Anima",
    category: "Marketing · Design · Creative",
    role: "Marketing Assistant",
    year: "2025 — 2026",

    description:
      "Supported marketing and creative initiatives through visual design, campaign assets, and communication materials.",

    services: [
      "Marketing",
      "Graphic Design",
      "Creative Direction",
      "Content"
    ],

    media: [

      ["image", "1lTUxkyFAPt8_gdKYJDNJF9SqVpzicRMa", "Alta Anima creative work"],
      ["image", "1mrjuvoYDSzh-0-fvuvaqlavAADE9xu6h", "Alta Anima marketing work"],
      ["image", "1OMU-xiu4-uRwyEqNFH9-zqzctpI7l0H_", "Alta Anima design"],
      ["image", "1-jnAnZVFrdvNkKn8MO4utQV8u73KCSee", "Alta Anima creative"],
      ["image", "1rHQdSaqwIqmyPnR69vwjR-b2omc70uWq", "Alta Anima marketing material"],
      ["image", "1tt_P_lT6mJczZd8VarHF8-sb4aUHCZ17", "Alta Anima campaign"],
      ["image", "1f5uHDr4mUJpl9xVA24FW5NDm9OC-cYTC", "Alta Anima design project"]

    ]
  },


  solour: {
    title: "Solour",
    category: "Brand Strategy · Creative · Marketing",
    role: "Marketing & Creative",
    year: "Academic Project",

    description:
      "An academic marketing and branding project focused on a lip-care sunbalm, covering research, target audience, positioning, branding, creative development, and marketing strategy.",

    services: [
      "Brand Strategy",
      "Market Research",
      "Positioning",
      "Creative Direction",
      "Graphic Design",
      "Marketing Strategy"
    ],

    media: [

      ["image", "1qoD8imjaSILu9wVi-46-ORnRPgOJGTKk", "Solour brand project"],
      ["image", "1IiTa4hUHAAWFIS6nu9PkrKaHjcW-Dzmt", "Solour branding"],
      ["image", "1_2febscGC-VMWCeZ1L1A6tAda2nElI5_", "Solour campaign"],
      ["image", "1SGnr5zjLr45yFaUB9fmqFaOKws4NKS-j", "Solour marketing creative"],
      ["image", "12ysk-3g-gdaCZWat50s-9j2KhpyubcOR", "Solour visual identity"],
      ["image", "1s3SJeJe0VquBI0Ye5GOBkDEQKpayrmF0", "Solour creative"],
      ["image", "1LApEqZ4eHB7OMUGggOVemGjmJyxsSAET", "Solour brand presentation"]

    ]
  },


  sm: {
    title: "SM Supermalls",
    category: "Operations · Events · Marketing",
    role: "Operations Intern · MSME",
    year: "2025 — 2026",

    description:
      "Worked under the MSME team at SM Supermalls Head Office, supporting mall monitoring, reporting, documentation, event coordination, presentations, partnership materials, and physical marketing initiatives.",

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


  web3: {
    title: "Web3",
    category: "Community · Marketing · Partnerships",
    role: "Community · Marketing · Partnerships",
    year: "2022 — 2024",

    description:
      "Started working in Web3 and digital communities while young, working across community management, Discord moderation, community building, partnerships, strategic communications, and digital marketing for more than 30 brands and projects.",

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
   DOM
========================================================= */

const projectModal =
  document.getElementById("projectModal");

const modalContent =
  document.getElementById("modalContent");

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxVideo =
  document.getElementById("lightboxVideo");

const modalClose =
  document.querySelector(".modal-close");

const lightboxClose =
  document.querySelector(".lightbox-close");

const lightboxPrev =
  document.querySelector(".lightbox-prev");

const lightboxNext =
  document.querySelector(".lightbox-next");

const workCards =
  document.querySelectorAll(".work-card");


/* =========================================================
   STATE
========================================================= */

let currentProject = null;
let currentMediaIndex = 0;


/* =========================================================
   MEDIA COUNTS
========================================================= */

function getMediaCounts(project) {

  const photos =
    project.media.filter(
      item => item[0] === "image"
    ).length;

  const videos =
    project.media.filter(
      item => item[0] === "video"
    ).length;

  return {
    photos,
    videos,
    total: photos + videos
  };

}


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(projectKey) {

  const project =
    projects[projectKey];

  if (!project) return;

  currentProject =
    projectKey;

  currentMediaIndex = 0;

  modalContent.innerHTML =
    buildProjectModal(project);

  projectModal.classList.add("active");

  projectModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

  projectModal.scrollTop = 0;

  attachGalleryListeners();

}


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

  projectModal.classList.remove(
    "active"
  );

  projectModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

  closeLightbox();

  currentProject = null;

  modalContent.innerHTML = "";

}


/* =========================================================
   BUILD PROJECT MODAL
========================================================= */

function buildProjectModal(project) {

  const counts =
    getMediaCounts(project);


  const servicesHTML =
    project.services
      .map(service => `
        <span>${escapeHTML(service)}</span>
      `)
      .join("");


  const galleryHTML =
    project.media.length
      ? project.media
          .map(
            (item, index) =>
              buildGalleryItem(
                item,
                index
              )
          )
          .join("")
      : `
        <div class="project-no-media">

          <span>PROJECT OVERVIEW</span>

          <p>
            Visual documentation available upon request.
          </p>

        </div>
      `;


  return `

    <div class="project-modal-inner">


      <!-- PROJECT HEADER -->

      <header class="modal-project-header">

        <div class="modal-project-topline">

          <span>
            ${escapeHTML(project.category)}
          </span>

          <span>
            ${escapeHTML(project.year)}
          </span>

        </div>


        <div class="modal-title-row">

          <div>

            <h2>
              ${escapeHTML(project.title)}
            </h2>

            <p class="modal-description">
              ${escapeHTML(project.description)}
            </p>

          </div>


          <div class="modal-media-summary">

            <strong>
              ${counts.total}
            </strong>

            <span>
              CREATIVE PIECES
            </span>

            <small>
              ${counts.photos} photos
              ${counts.videos ? ` · ${counts.videos} videos` : ""}
            </small>

          </div>

        </div>

      </header>


      <!-- ROLE / SERVICES -->

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
            WHAT I WORKED ON
          </span>

          <div class="modal-services">
            ${servicesHTML}
          </div>

        </div>

      </div>


      <!-- GALLERY INTRO -->

      ${
        project.media.length
          ? `

            <div class="gallery-heading">

              <div>

                <span class="gallery-eyebrow">
                  CREATIVE OUTPUT
                </span>

                <h3>
                  Explore the work.
                </h3>

              </div>


              <p>
                Click any piece to view it larger.
              </p>

            </div>

          `
          : ""
      }


      <!-- CREATIVE GALLERY -->

      <div class="project-gallery">

        ${galleryHTML}

      </div>


      ${
        project.media.length
          ? `

            <div class="gallery-footer">

              <span>
                ${counts.photos} PHOTOS
              </span>

              ${
                counts.videos
                  ? `
                    <span>
                      ${counts.videos} VIDEOS
                    </span>
                  `
                  : ""
              }

              <span>
                CLICK TO EXPLORE
              </span>

            </div>

          `
          : ""
      }


    </div>

  `;

}


/* =========================================================
   GALLERY ITEM
========================================================= */

function buildGalleryItem(
  item,
  index
) {

  const type =
    item[0];

  const id =
    item[1];

  const alt =
    item[2];


  if (type === "video") {

    return `

      <button
        type="button"
        class="project-media-item gallery-video"
        data-media-index="${index}"
      >

        <div class="video-preview">

          <div class="video-preview-gradient"></div>

          <span class="video-play-button">
            ▶
          </span>

          <span class="video-badge">
            VIDEO
          </span>

          <span class="media-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

        </div>

      </button>

    `;

  }


  return `

    <button
      type="button"
      class="project-media-item gallery-image"
      data-media-index="${index}"
    >

      <img
        src="${driveImage(id, "w1600")}"
        alt="${escapeHTML(alt)}"
        loading="lazy"
      />


      <div class="media-hover">

        <span>
          VIEW
        </span>

        <span>
          ↗
        </span>

      </div>


      <span class="media-number">
        ${String(index + 1).padStart(2, "0")}
      </span>

    </button>

  `;

}


/* =========================================================
   GALLERY EVENTS
========================================================= */

function attachGalleryListeners() {

  const mediaItems =
    document.querySelectorAll(
      ".project-media-item"
    );


  mediaItems.forEach(item => {

    item.addEventListener(
      "click",
      () => {

        const index =
          Number(
            item.dataset.mediaIndex
          );

        openLightbox(index);

      }
    );

  });

}


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(index) {

  if (!currentProject) return;


  const project =
    projects[currentProject];


  if (!project.media.length) {
    return;
  }


  if (index < 0) {

    index =
      project.media.length - 1;

  }


  if (
    index >=
    project.media.length
  ) {

    index = 0;

  }


  currentMediaIndex =
    index;


  const item =
    project.media[index];


  lightbox.classList.add(
    "active"
  );

  lightbox.setAttribute(
    "aria-hidden",
    "false"
  );


  renderLightboxMedia(item);

}


/* =========================================================
   LIGHTBOX MEDIA
========================================================= */

function renderLightboxMedia(item) {

  stopLightboxVideo();


  if (item[0] === "image") {

    lightboxImage.src =
      driveImage(
        item[1],
        "w2400"
      );

    lightboxImage.alt =
      item[2] || "";


    lightboxImage.style.display =
      "block";


    lightboxVideo.style.display =
      "none";


    return;

  }


  if (item[0] === "video") {

    lightboxImage.style.display =
      "none";


    lightboxVideo.style.display =
      "block";


    lightboxVideo.src =
      drivePreview(item[1]);


    lightboxVideo.setAttribute(
      "allow",
      "autoplay; fullscreen"
    );


    lightboxVideo.setAttribute(
      "allowfullscreen",
      ""
    );

  }

}


/* =========================================================
   CLOSE LIGHTBOX
========================================================= */

function closeLightbox() {

  if (!lightbox) return;


  lightbox.classList.remove(
    "active"
  );


  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );


  stopLightboxVideo();

}


/* =========================================================
   STOP VIDEO
========================================================= */

function stopLightboxVideo() {

  if (!lightboxVideo) return;

  lightboxVideo.src = "";

}


/* =========================================================
   NAVIGATION
========================================================= */

function nextMedia() {

  if (!currentProject) return;


  const project =
    projects[currentProject];


  openLightbox(
    currentMediaIndex + 1
  );

}


function previousMedia() {

  if (!currentProject) return;


  openLightbox(
    currentMediaIndex - 1
  );

}


/* =========================================================
   WORK CARDS
========================================================= */

workCards.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      const projectKey =
        card.dataset.project;

      if (!projectKey) return;

      openProject(projectKey);

    }
  );

});


/* =========================================================
   CLOSE BUTTONS
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


if (lightboxNext) {

  lightboxNext.addEventListener(
    "click",
    nextMedia
  );

}


if (lightboxPrev) {

  lightboxPrev.addEventListener(
    "click",
    previousMedia
  );

}


/* =========================================================
   BACKDROP CLICK
========================================================= */

if (projectModal) {

  projectModal.addEventListener(
    "click",
    event => {

      if (
        event.target === projectModal
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

      if (
        event.target === lightbox
      ) {

        closeLightbox();

      }

    }
  );

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      if (
        lightbox.classList.contains(
          "active"
        )
      ) {

        closeLightbox();

      } else if (
        projectModal.classList.contains(
          "active"
        )
      ) {

        closeProject();

      }

    }


    if (
      lightbox.classList.contains(
        "active"
      )
    ) {

      if (
        event.key === "ArrowRight"
      ) {

        nextMedia();

      }


      if (
        event.key === "ArrowLeft"
      ) {

        previousMedia();

      }

    }

  }
);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(anchor => {

    anchor.addEventListener(
      "click",
      event => {

        const targetID =
          anchor.getAttribute(
            "href"
          );


        if (
          !targetID ||
          targetID === "#"
        ) {

          return;

        }


        const target =
          document.querySelector(
            targetID
          );


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================================================
   HEADER
========================================================= */

const siteHeader =
  document.querySelector(
    ".site-header"
  );


function updateHeader() {

  if (!siteHeader) return;


  siteHeader.classList.toggle(
    "scrolled",
    window.scrollY > 40
  );

}


window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);


updateHeader();


/* =========================================================
   REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".section-heading, .about-main, .about-side, .capability-item, .work-card, .experience-row, .tools-section, .contact-container"
  );


if (
  "IntersectionObserver"
  in window
) {

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

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

          }
        );

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
   ESCAPE HTML
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
   BODY SCROLL CONTROL
========================================================= */

const bodyObserver =
  new MutationObserver(
    () => {

      const projectOpen =
        projectModal &&
        projectModal.classList.contains(
          "active"
        );


      const lightboxOpen =
        lightbox &&
        lightbox.classList.contains(
          "active"
        );


      document.body.classList.toggle(
        "modal-open",
        projectOpen ||
        lightboxOpen
      );

    }
  );


if (projectModal) {

  bodyObserver.observe(
    projectModal,
    {
      attributes: true,
      attributeFilter: [
        "class"
      ]
    }
  );

}


if (lightbox) {

  bodyObserver.observe(
    lightbox,
    {
      attributes: true,
      attributeFilter: [
        "class"
      ]
    }
  );

}


/* =========================================================
   INITIALIZED
========================================================= */

console.log(
  "Angelo Pacya Portfolio — Gallery Ready"
);
