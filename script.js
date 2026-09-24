/* =========================================================
   ANGELO R. PACYA — PORTFOLIO SCRIPT
   Project Gallery + Google Drive Media
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     PROJECT DATA
  ======================================================= */

  const projects = {

    footlab: {
      title: "FOOTLAB",
      category: "Marketing • Creative • Digital",
      description:
        "A healthcare marketing project focused on building FOOTLAB's digital presence, brand communication, content strategy, campaigns, events, partnerships, and creative production.",
      media: [

        /* IMAGES */
        {
          type: "image",
          id: "1HLJB4XqchXSQvDGCxOOdJySWNg17w2f6"
        },
        {
          type: "image",
          id: "1OaM732spQtU9wMFfn7Kn0tkZLJobtpi2"
        },
        {
          type: "image",
          id: "1_nwetHwOkZEZJyfEn8FE38BRAIcsU6Ox"
        },
        {
          type: "image",
          id: "1x_aTEzidyCU-5I0D6gRdlVDCaKbLjzDv"
        },
        {
          type: "image",
          id: "19--9sx60VpOEDs1nDhTFQPNJ-wkktfQ0"
        },
        {
          type: "image",
          id: "1axbRYiS-pHxghEPdoWwC3gZjIpuZS6ON"
        },
        {
          type: "image",
          id: "1Q7BcKjfB6NjxOCQuFDyTprGpEuxmc0EZ"
        },
        {
          type: "image",
          id: "1aWISvTciZ8Ptlfv_QeEgx5URpBNd_x5N"
        },
        {
          type: "image",
          id: "1J2PfnMeRqi7lNCK04ELez0KYlkqdtxET"
        },
        {
          type: "image",
          id: "15hOLxhFsXBAJU8j2YTK00-pk0a9uHSLt"
        },
        {
          type: "image",
          id: "1QhkCwEO2bUWJXDTGPGCt6uVZluTR-PLi"
        },
        {
          type: "image",
          id: "17W3x-3b2rGylh_NFW16TEmwyFtCwjjYp"
        },
        {
          type: "image",
          id: "10bmlvX6h72FEIm4UT4-6DFfSKyPSWNWJ"
        },
        {
          type: "image",
          id: "1j1PXhsh6vr72XrSFDcudS1Qh1KwsyfrO"
        },
        {
          type: "image",
          id: "1dbtq_MWQ4Xmgt7x4e_nM9HTh-FsGPh3c"
        },
        {
          type: "image",
          id: "1hfAlw4ffECSq53BEcktUnAuOathaxbpp"
        },

        /* VIDEOS */
        {
          type: "video",
          id: "1IKmOuyCaemAlA2AmaPygY_wx9Gdlc1Vs"
        },
        {
          type: "video",
          id: "1u1LG67UTN3Q9uTAiWbSQ7VE5uOveRmpQ"
        },
        {
          type: "video",
          id: "1oVfMyskS-gE0IK8uSK64bdV0hRPMOw9F"
        }
      ]
    },


    kwench: {
      title: "Kwench Juice Cafe",
      category: "Social Media • Creative • Marketing",
      description:
        "Social media and creative work for Kwench Juice Cafe, covering content creation, campaign visuals, digital marketing, graphics, and short-form video.",
      media: [

        {
          type: "image",
          id: "1BjQfodMYmvb8uyAbE-h_NIYZZCWP5w1o"
        },
        {
          type: "image",
          id: "1inkF8cQKoAc79BOoHSK4MVgOcdRaVnre"
        },
        {
          type: "image",
          id: "1M23yNIWc8i8Z8j5aQOGw7-hz0Zt4979s"
        },
        {
          type: "image",
          id: "1fdRw0VsewZRWg-pOrhmV4Yb-bG-IbUQE"
        },
        {
          type: "image",
          id: "13gvBEWV93TrGvWBrOxPxhM_YAjLQJw6r"
        },
        {
          type: "image",
          id: "1nP5A691jMtCMqvF1FuTRS4EoKqWcwkqz"
        },
        {
          type: "image",
          id: "1Y6-pI24HGdTKgkAY0ue8hT7gv282YlWz"
        },
        {
          type: "image",
          id: "1GhV_5bXTNpEwHdjiinHwi7KKexKVqYRV"
        },

        {
          type: "video",
          id: "1eMAD62knoG7Uyyn12QxxYjDNpz6bqlQJ"
        },
        {
          type: "video",
          id: "18x_ap_emNC5bQA-B0F56nhIITs2jnBcp"
        },
        {
          type: "video",
          id: "1ZpOjXO_hGEPe1upBEoiPiKHEgPTea8OJ"
        },
        {
          type: "video",
          id: "1ZwD3HOULtJy92z7tjiefWOgzyPnU2G_P"
        }
      ]
    },


    alta: {
      title: "Alta Anima",
      category: "Marketing • Creative",
      description:
        "Selected marketing and creative work developed for Alta Anima, including visual communication and brand-focused creative materials.",
      media: [

        {
          type: "image",
          id: "1lTUxkyFAPt8_gdKYJDNJF9SqVpzicRMa"
        },
        {
          type: "image",
          id: "1mrjuvoYDSzh-0-fvuvaqlavAADE9xu6h"
        },
        {
          type: "image",
          id: "1OMU-xiu4-uRwyEqNFH9-zqzctpI7l0H_"
        },
        {
          type: "image",
          id: "1-jnAnZVFrdvNkKn8MO4utQV8u73KCSee"
        },
        {
          type: "image",
          id: "1rHQdSaqwIqmyPnR69vwjR-b2omc70uWq"
        },
        {
          type: "image",
          id: "1tt_P_lT6mJczZd8VarHF8-sb4aUHCZ17"
        },
        {
          type: "image",
          id: "1f5uHDr4mUJpl9xVA24FW5NDm9OC-cYTC"
        }
      ]
    },


    solour: {
      title: "Solour",
      category: "Branding • Marketing • Research",
      description:
        "An academic marketing and branding project for Solour, a lip-care sun balm concept involving research, target audience development, positioning, visual identity, and marketing strategy.",
      media: [

        {
          type: "image",
          id: "1qoD8imjaSILu9wVi-46-ORnRPgOJGTKk"
        },
        {
          type: "image",
          id: "1IiTa4hUHAAWFIS6nu9PkrKaHjcW-Dzmt"
        },
        {
          type: "image",
          id: "1_2febscGC-VMWCeZ1L1A6tAda2nElI5_"
        },
        {
          type: "image",
          id: "1SGnr5zjLr45yFaUB9fmqFaOKws4NKS-j"
        },
        {
          type: "image",
          id: "12ysk-3g-gdaCZWat50s-9j2KhpyubcOR"
        },
        {
          type: "image",
          id: "1s3SJeJe0VquBI0Ye5GOBkDEQKpayrmF0"
        },
        {
          type: "image",
          id: "1LApEqZ4eHB7OMUGggOVemGjmJyxsSAET"
        }
      ]
    },


    sm: {
      title: "SM Supermalls",
      category: "Operations • Marketing • Events",
      description:
        "Operations internship experience under the MSME team, involving monitoring, reporting, mall coordination, documentation, presentations, partnerships, and event-related materials.",
      media: []
    },


    web3: {
      title: "Web3 & Community",
      category: "Community • Partnerships • Digital",
      description:
        "Professional experience across Web3 projects, working in community management, Discord moderation, partnerships, strategic initiatives, and community building.",
      media: []
    }

  };


  /* =======================================================
     GOOGLE DRIVE URL HELPERS
  ======================================================= */

  function driveImage(id) {

    /*
      Thumbnail endpoint is more reliable for portfolio
      images than the old uc?export=download method.
    */

    return `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w1600`;
  }


  function drivePreview(id) {

    return `https://drive.google.com/file/d/${encodeURIComponent(id)}/preview`;
  }


  /* =======================================================
     CREATE MODAL
  ======================================================= */

  let modal = document.querySelector(".project-modal");

  if (!modal) {

    modal = document.createElement("div");

    modal.className = "project-modal";

    modal.innerHTML = `
      <div class="modal-backdrop"></div>

      <div class="modal-container">

        <button
          class="modal-close"
          type="button"
          aria-label="Close project"
        >
          ×
        </button>

        <div class="modal-content"></div>

      </div>
    `;

    document.body.appendChild(modal);
  }


  const modalContent =
    modal.querySelector(".modal-content");

  const modalClose =
    modal.querySelector(".modal-close");

  const modalBackdrop =
    modal.querySelector(".modal-backdrop");


  /* =======================================================
     GALLERY STYLES
     
     Added here so the gallery stays consistent even if
     the main CSS changes.
  ======================================================= */

  if (!document.querySelector("#portfolio-gallery-styles")) {

    const style = document.createElement("style");

    style.id = "portfolio-gallery-styles";

    style.textContent = `

      .project-header {
        padding-bottom: 30px;
      }

      .project-header-category {
        display: block;

        margin-bottom: 10px;

        color: #315cff;

        font-size: 10px;
        font-weight: 800;

        text-transform: uppercase;

        letter-spacing: .12em;
      }

      .project-header h2 {
        margin: 0;

        color: #0a1020;

        font-family: "Manrope", sans-serif;

        font-size: clamp(38px, 5vw, 64px);

        line-height: 1.05;

        letter-spacing: -.055em;
      }

      .project-header p {
        max-width: 720px;

        margin-top: 18px;

        color: #626b7d;

        font-size: 15px;

        line-height: 1.75;
      }

      .project-gallery {
        display: grid;

        grid-template-columns:
          repeat(3, minmax(0, 1fr));

        gap: 12px;

        margin-top: 20px;
      }

      .project-media {
        position: relative;

        width: 100%;

        aspect-ratio: 1 / 1;

        overflow: hidden;

        border-radius: 12px;

        background: #e6e9ef;

        cursor: pointer;

        border: 1px solid rgba(10,16,32,.06);
      }

      .project-media img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        transition:
          transform .45s ease,
          opacity .25s ease;
      }

      .project-media:hover img {
        transform: scale(1.045);
      }

      .project-media-video {
        position: relative;

        width: 100%;
        height: 100%;

        display: flex;

        align-items: center;
        justify-content: center;

        overflow: hidden;

        background:
          linear-gradient(
            135deg,
            #0a1020,
            #17244a
          );
      }

      .project-media-video iframe {
        position: absolute;

        inset: 0;

        width: 100%;
        height: 100%;

        border: 0;

        pointer-events: none;
      }

      .project-video-label {
        position: absolute;

        bottom: 10px;
        left: 10px;

        z-index: 3;

        padding: 7px 10px;

        border-radius: 999px;

        background:
          rgba(10,16,32,.78);

        color: white;

        font-size: 9px;
        font-weight: 800;

        text-transform: uppercase;

        letter-spacing: .08em;

        backdrop-filter: blur(8px);
      }

      .project-media::after {
        content: "";

        position: absolute;

        inset: 0;

        border: 1px solid rgba(255,255,255,.06);

        border-radius: inherit;

        pointer-events: none;
      }

      .project-empty {
        padding: 60px 20px;

        text-align: center;

        border: 1px dashed #cbd1dc;

        border-radius: 16px;

        color: #737c8e;

        font-size: 14px;
      }


      /* LIGHTBOX */

      .portfolio-lightbox {
        position: fixed;

        inset: 0;

        z-index: 4000;

        display: none;

        align-items: center;

        justify-content: center;

        padding: 30px;

        background:
          rgba(3,6,13,.96);

        backdrop-filter: blur(14px);
      }

      .portfolio-lightbox.is-open {
        display: flex;
      }

      .portfolio-lightbox-inner {
        position: relative;

        width: min(1200px, 94vw);

        height: min(88vh, 850px);

        display: flex;

        align-items: center;

        justify-content: center;
      }

      .portfolio-lightbox img,
      .portfolio-lightbox iframe {
        max-width: 100%;

        max-height: 86vh;

        border: 0;

        border-radius: 10px;

        box-shadow:
          0 30px 100px rgba(0,0,0,.4);
      }

      .portfolio-lightbox iframe {
        width: min(1000px, 88vw);

        height: min(700px, 78vh);
      }

      .portfolio-lightbox-close {
        position: fixed;

        top: 20px;
        right: 25px;

        z-index: 10;

        width: 45px;
        height: 45px;

        display: grid;

        place-items: center;

        border-radius: 50%;

        background:
          rgba(255,255,255,.1);

        color: white;

        font-size: 26px;

        cursor: pointer;

        border: 1px solid rgba(255,255,255,.15);
      }

      .portfolio-lightbox-close:hover {
        background: #315cff;
      }

      .portfolio-lightbox-prev,
      .portfolio-lightbox-next {
        position: fixed;

        top: 50%;

        transform: translateY(-50%);

        z-index: 10;

        width: 48px;
        height: 48px;

        display: grid;

        place-items: center;

        border-radius: 50%;

        background:
          rgba(255,255,255,.1);

        color: white;

        font-size: 24px;

        cursor: pointer;

        border: 1px solid rgba(255,255,255,.15);
      }

      .portfolio-lightbox-prev {
        left: 20px;
      }

      .portfolio-lightbox-next {
        right: 20px;
      }

      .portfolio-lightbox-prev:hover,
      .portfolio-lightbox-next:hover {
        background: #315cff;
      }


      @media (max-width: 800px) {

        .project-gallery {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 9px;
        }

        .project-header h2 {
          font-size: 40px;
        }

        .portfolio-lightbox-prev {
          left: 8px;
        }

        .portfolio-lightbox-next {
          right: 8px;
        }

      }


      @media (max-width: 500px) {

        .project-gallery {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
        }

        .portfolio-lightbox {
          padding: 10px;
        }

        .portfolio-lightbox-prev,
        .portfolio-lightbox-next {
          width: 40px;
          height: 40px;

          font-size: 20px;
        }

      }

    `;

    document.head.appendChild(style);
  }


  /* =======================================================
     LIGHTBOX
  ======================================================= */

  let lightbox =
    document.querySelector(".portfolio-lightbox");

  if (!lightbox) {

    lightbox = document.createElement("div");

    lightbox.className = "portfolio-lightbox";

    lightbox.innerHTML = `
      <button
        class="portfolio-lightbox-close"
        type="button"
        aria-label="Close"
      >
        ×
      </button>

      <button
        class="portfolio-lightbox-prev"
        type="button"
        aria-label="Previous"
      >
        ‹
      </button>

      <div class="portfolio-lightbox-inner"></div>

      <button
        class="portfolio-lightbox-next"
        type="button"
        aria-label="Next"
      >
        ›
      </button>
    `;

    document.body.appendChild(lightbox);
  }


  const lightboxInner =
    lightbox.querySelector(".portfolio-lightbox-inner");

  const lightboxClose =
    lightbox.querySelector(".portfolio-lightbox-close");

  const lightboxPrev =
    lightbox.querySelector(".portfolio-lightbox-prev");

  const lightboxNext =
    lightbox.querySelector(".portfolio-lightbox-next");


  let currentProject = null;
  let currentMediaIndex = 0;


  /* =======================================================
     OPEN LIGHTBOX
  ======================================================= */

  function openLightbox(index) {

    if (!currentProject) return;

    const media =
      currentProject.media[index];

    if (!media) return;

    currentMediaIndex = index;

    lightboxInner.innerHTML = "";

    if (media.type === "image") {

      const img =
        document.createElement("img");

      img.src = driveImage(media.id);

      img.alt =
        `${currentProject.title} project image`;

      img.loading = "eager";

      lightboxInner.appendChild(img);

    }

    if (media.type === "video") {

      const iframe =
        document.createElement("iframe");

      iframe.src =
        drivePreview(media.id);

      iframe.allow =
        "autoplay; fullscreen";

      iframe.allowFullscreen = true;

      iframe.title =
        `${currentProject.title} project video`;

      lightboxInner.appendChild(iframe);
    }

    lightbox.classList.add("is-open");

    document.body.classList.add("modal-open");
  }


  function closeLightbox() {

    lightbox.classList.remove("is-open");

    lightboxInner.innerHTML = "";
  }


  function nextMedia() {

    if (!currentProject) return;

    const total =
      currentProject.media.length;

    if (!total) return;

    currentMediaIndex =
      (currentMediaIndex + 1) % total;

    openLightbox(currentMediaIndex);
  }


  function previousMedia() {

    if (!currentProject) return;

    const total =
      currentProject.media.length;

    if (!total) return;

    currentMediaIndex =
      (currentMediaIndex - 1 + total) % total;

    openLightbox(currentMediaIndex);
  }


  lightboxClose.addEventListener(
    "click",
    closeLightbox
  );

  lightboxNext.addEventListener(
    "click",
    nextMedia
  );

  lightboxPrev.addEventListener(
    "click",
    previousMedia
  );

  lightbox.addEventListener("click", (event) => {

    if (
      event.target === lightbox
    ) {
      closeLightbox();
    }

  });


  /* =======================================================
     BUILD PROJECT MODAL
  ======================================================= */

  function openProject(projectKey) {

    const project =
      projects[projectKey];

    if (!project) {

      console.error(
        "Project not found:",
        projectKey
      );

      return;
    }

    currentProject = project;

    modalContent.innerHTML = "";

    /* HEADER */

    const header =
      document.createElement("div");

    header.className =
      "project-header";

    header.innerHTML = `
      <span class="project-header-category">
        ${project.category}
      </span>

      <h2>
        ${project.title}
      </h2>

      <p>
        ${project.description}
      </p>
    `;

    modalContent.appendChild(header);


    /* GALLERY */

    if (!project.media.length) {

      const empty =
        document.createElement("div");

      empty.className =
        "project-empty";

      empty.textContent =
        "Selected project details coming soon.";

      modalContent.appendChild(empty);

    } else {

      const gallery =
        document.createElement("div");

      gallery.className =
        "project-gallery";


      project.media.forEach(
        (media, index) => {

          const item =
            document.createElement("div");

          item.className =
            "project-media";

          item.dataset.index =
            index;


          /* IMAGE */

          if (media.type === "image") {

            const img =
              document.createElement("img");

            img.src =
              driveImage(media.id);

            img.alt =
              `${project.title} project image ${index + 1}`;

            img.loading =
              index < 6
                ? "eager"
                : "lazy";


            /*
              If Drive refuses the thumbnail,
              try the export endpoint as fallback.
            */

            img.onerror = () => {

              if (
                !img.dataset.fallback
              ) {

                img.dataset.fallback = "true";

                img.src =
                  `https://drive.google.com/uc?export=view&id=${encodeURIComponent(media.id)}`;
              }

            };


            item.appendChild(img);

          }


          /* VIDEO */

          if (media.type === "video") {

            const videoBox =
              document.createElement("div");

            videoBox.className =
              "project-media-video";


            const iframe =
              document.createElement("iframe");

            iframe.src =
              drivePreview(media.id);

            iframe.loading =
              "lazy";

            iframe.allow =
              "autoplay; fullscreen";

            iframe.allowFullscreen =
              true;

            iframe.title =
              `${project.title} video`;


            const label =
              document.createElement("span");

            label.className =
              "project-video-label";

            label.textContent =
              "Video";


            videoBox.appendChild(
              iframe
            );

            videoBox.appendChild(
              label
            );

            item.appendChild(
              videoBox
            );
          }


          /* OPEN LIGHTBOX */

          item.addEventListener(
            "click",
            (event) => {

              event.preventDefault();

              event.stopPropagation();

              openLightbox(index);

            }
          );


          gallery.appendChild(item);

        }
      );


      modalContent.appendChild(
        gallery
      );
    }


    /* OPEN MODAL */

    modal.classList.add("is-open");

    document.body.classList.add(
      "modal-open"
    );

    modal.scrollTop = 0;

  }


  /* =======================================================
     CLOSE PROJECT
  ======================================================= */

  function closeProject() {

    modal.classList.remove(
      "is-open"
    );

    document.body.classList.remove(
      "modal-open"
    );

    currentProject = null;

    modalContent.innerHTML = "";
  }


  modalClose.addEventListener(
    "click",
    closeProject
  );

  modalBackdrop.addEventListener(
    "click",
    closeProject
  );


  /* =======================================================
     PROJECT CARD CLICK
     
     Uses EVENT DELEGATION so it works even if the cards
     are changed/re-rendered later.
  ======================================================= */

  document.addEventListener(
    "click",
    (event) => {

      const card =
        event.target.closest(
          ".work-card[data-project]"
        );

      if (!card) return;

      const projectKey =
        card.dataset.project;

      if (!projectKey) return;

      event.preventDefault();

      openProject(projectKey);

    }
  );


  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        if (
          lightbox.classList.contains(
            "is-open"
          )
        ) {

          closeLightbox();

          return;
        }

        if (
          modal.classList.contains(
            "is-open"
          )
        ) {

          closeProject();

        }

      }


      if (
        lightbox.classList.contains(
          "is-open"
        )
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


  /* =======================================================
     SMOOTH ANCHOR LINKS
  ======================================================= */

  document.querySelectorAll(
    'a[href^="#"]'
  ).forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) return;

        const target =
          document.querySelector(
            targetId
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


  /* =======================================================
     HEADER SCROLL EFFECT
  ======================================================= */

  const header =
    document.querySelector(
      ".site-header"
    );

  function updateHeader() {

    if (!header) return;

    if (window.scrollY > 20) {

      header.classList.add(
        "scrolled"
      );

    } else {

      header.classList.remove(
        "scrolled"
      );

    }

  }

  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );


  /* =======================================================
     REVEAL ANIMATION
  ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver"
    in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "is-visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      (element) => {

        observer.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "is-visible"
        );

      }
    );

  }


  /* =======================================================
     DEBUG
  ======================================================= */

  console.log(
    "Angelo Pacya Portfolio loaded successfully."
  );

  console.log(
    "Projects available:",
    Object.keys(projects)
  );

});
