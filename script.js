/* =========================================================
   ANGELO R. PACYA
   PORTFOLIO INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     PROJECT DATA
  ======================================================= */

  const projects = {

    footlab: {
      category: "Healthcare • Marketing • Brand Development",

      title: "FOOTLAB",

      description:
        "Marketing work across digital content, social media, SEO, campaigns, partnerships, events, analytics, and physical marketing for a custom orthotics brand.",

      media: [

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1HLJB4XqchXSQvDGCxOOdJySWNg17w2f6&sz=w2000",
          alt: "FOOTLAB campaign content"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1OaM732spQtU9wMFfn7Kn0tkZLJobtpi2&sz=w2000",
          alt: "FOOTLAB social media content"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1_nwetHwOkZEZJyfEn8FE38BRAIcsU6Ox&sz=w2000",
          alt: "FOOTLAB marketing creative"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1x_aTEzidyCU-5I0D6gRdlVDCaKbLjzDv&sz=w2000",
          alt: "FOOTLAB campaign"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=19--9sx60VpOEDs1nDhTFQPNJ-wkktfQ0&sz=w2000",
          alt: "FOOTLAB content"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1axbRYiS-pHxghEPdoWwC3gZjIpuZS6ON&sz=w2000",
          alt: "FOOTLAB event content"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1Q7BcKjfB6NjxOCQuFDyTprGpEuxmc0EZ&sz=w2000",
          alt: "FOOTLAB social media"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1aWISvTciZ8Ptlfv_QeEgx5URpBNd_x5N&sz=w2000",
          alt: "FOOTLAB campaign content"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1J2PfnMeRqi7lNCK04ELez0KYlkqdtxET&sz=w2000",
          alt: "FOOTLAB event marketing"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=15hOLxhFsXBAJU8j2YTK00-pk0a9uHSLt&sz=w2000",
          alt: "FOOTLAB event creative"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1QhkCwEO2bUWJXDTGPGCt6uVZluTR-PLi&sz=w2000",
          alt: "FOOTLAB marketing material"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=17W3x-3b2rGylh_NFW16TEmwyFtCwjjYp&sz=w2000",
          alt: "FOOTLAB campaign"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=10bmlvX6h72FEIm4UT4-6DFfSKyPSWNWJ&sz=w2000",
          alt: "FOOTLAB content"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1j1PXhsh6vr72XrSFDcudS1Qh1KwsyfrO&sz=w2000",
          alt: "FOOTLAB marketing creative"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1dbtq_MWQ4Xmgt7x4e_nM9HTh-FsGPh3c&sz=w2000",
          alt: "FOOTLAB event content"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1hfAlw4ffECSq53BEcktUnAuOathaxbpp&sz=w2000",
          alt: "FOOTLAB campaign content"
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1IKmOuyCaemAlA2AmaPygY_wx9Gdlc1Vs/preview",
          title: "FOOTLAB Video Content"
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1u1LG67UTN3Q9uTAiWbSQ7VE5uOveRmpQ/preview",
          title: "FOOTLAB Campaign Video"
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1oVfMyskS-gE0IK8uSK64bdV0hRPMOw9F/preview",
          title: "FOOTLAB Social Media Video"
        }

      ]
    },


    kwench: {
      category: "Food & Beverage • Social Media • Creative",

      title: "Kwench Juice Cafe",

      description:
        "Social media and creative work for a food and beverage brand, covering content creation, digital marketing, visual communication, and brand storytelling.",

      media: [

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1BjQfodMYmvb8uyAbE-h_NIYZZCWP5w1o&sz=w2000",
          alt: "Kwench Juice Cafe creative"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1inkF8cQKoAc79BOoHSK4MVgOcdRaVnre&sz=w2000",
          alt: "Kwench Juice Cafe content"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1M23yNIWc8i8Z8j5aQOGw7-hz0Zt4979s&sz=w2000",
          alt: "Kwench Juice Cafe marketing"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1fdRw0VsewZRWg-pOrhmV4Yb-bG-IbUQE&sz=w2000",
          alt: "Kwench Juice Cafe social media"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=13gvBEWV93TrGvWBrOxPxhM_YAjLQJw6r&sz=w2000",
          alt: "Kwench Juice Cafe campaign"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1nP5A691jMtCMqvF1FuTRS4EoKqWcwkqz&sz=w2000",
          alt: "Kwench Juice Cafe content"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1Y6-pI24HGdTKgkAY0ue8hT7gv282YlWz&sz=w2000",
          alt: "Kwench Juice Cafe creative"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1GhV_5bXTNpEwHdjiinHwi7KKexKVqYRV&sz=w2000",
          alt: "Kwench Juice Cafe marketing"
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1eMAD62knoG7Uyyn12QxxYjDNpz6bqlQJ/preview",
          title: "Kwench Social Media Video"
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/18x_ap_emNC5bQA-B0F56nhIITs2jnBcp/preview",
          title: "Kwench Creative Video"
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1ZpOjXO_hGEPe1upBEoiPiKHEgPTea8OJ/preview",
          title: "Kwench Campaign Video"
        },

        {
          type: "video",
          src: "https://drive.google.com/file/d/1ZwD3HOULtJy92z7tjiefWOgzyPnU2G_P/preview",
          title: "Kwench Social Content"
        }

      ]
    },


    alta: {
      category: "Marketing • Creative",

      title: "Alta Anima",

      description:
        "Selected marketing and creative work supporting brand communication, visual content, and campaign materials.",

      media: [

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1lTUxkyFAPt8_gdKYJDNJF9SqVpzicRMa&sz=w2000",
          alt: "Alta Anima creative"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1mrjuvoYDSzh-0-fvuvaqlavAADE9xu6h&sz=w2000",
          alt: "Alta Anima marketing"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1OMU-xiu4-uRwyEqNFH9-zqzctpI7l0H_&sz=w2000",
          alt: "Alta Anima creative work"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1-jnAnZVFrdvNkKn8MO4utQV8u73KCSee&sz=w2000",
          alt: "Alta Anima visual"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1rHQdSaqwIqmyPnR69vwjR-b2omc70uWq&sz=w2000",
          alt: "Alta Anima campaign"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1tt_P_lT6mJczZd8VarHF8-sb4aUHCZ17&sz=w2000",
          alt: "Alta Anima marketing material"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1f5uHDr4mUJpl9xVA24FW5NDm9OC-cYTC&sz=w2000",
          alt: "Alta Anima creative content"
        }

      ]
    },


    solour: {
      category: "Brand Strategy • Research • Creative",

      title: "Solour",

      description:
        "A thesis-driven marketing project for a lip-care sunbalm. The project explored brand positioning, target audience research, visual identity, creative direction, and marketing strategy.",

      media: [

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1qoD8imjaSILu9wVi-46-ORnRPgOJGTKk&sz=w2000",
          alt: "Solour branding"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1IiTa4hUHAAWFIS6nu9PkrKaHjcW-Dzmt&sz=w2000",
          alt: "Solour brand creative"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1_2febscGC-VMWCeZ1L1A6tAda2nElI5_&sz=w2000",
          alt: "Solour marketing"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1SGnr5zjLr45yFaUB9fmqFaOKws4NKS-j&sz=w2000",
          alt: "Solour brand cover"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=12ysk-3g-gdaCZWat50s-9j2KhpyubcOR&sz=w2000",
          alt: "Solour campaign cover"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1s3SJeJe0VquBI0Ye5GOBkDEQKpayrmF0&sz=w2000",
          alt: "Solour product mockup"
        },

        {
          type: "image",
          src: "https://drive.google.com/thumbnail?id=1LApEqZ4eHB7OMUGggOVemGjmJyxsSAET&sz=w2000",
          alt: "Solour product presentation"
        }

      ]
    },


    sm: {
      category: "Retail • Operations • Partnerships",

      title: "SM Supermalls",

      description:
        "Operations internship experience under the MSME team, working across monitoring, reporting, documentation, presentations, mall coordination, partnership materials, events, and business initiatives.",

      media: []
    },


    web3: {
      category: "Community • Partnerships • Digital",

      title: "Web3 & Cryptocurrency",

      description:
        "Early professional experience in Web3, working across community management, Discord moderation, community building, partnerships, strategic communication, and digital communities.",

      media: []
    }

  };


  /* =======================================================
     CREATE MODAL
  ======================================================= */

  const modalHTML = `
    <div class="project-modal" id="projectModal">

      <div class="project-modal-overlay"></div>

      <div class="project-modal-content">

        <button
          class="project-modal-close"
          type="button"
          aria-label="Close project"
        >
          ×
        </button>

        <div class="project-modal-category"></div>

        <h2 class="project-modal-title"></h2>

        <p class="project-modal-description"></p>

        <div class="project-modal-content-area"></div>

      </div>

    </div>


    <div class="image-lightbox" id="imageLightbox">

      <div class="image-lightbox-overlay"></div>

      <button
        class="image-lightbox-close"
        type="button"
        aria-label="Close image"
      >
        ×
      </button>

      <img
        class="image-lightbox-image"
        src=""
        alt=""
      >

    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);


  /* =======================================================
     ELEMENTS
  ======================================================= */

  const modal = document.getElementById("projectModal");
  const modalOverlay = modal.querySelector(".project-modal-overlay");
  const modalClose = modal.querySelector(".project-modal-close");

  const modalCategory =
    modal.querySelector(".project-modal-category");

  const modalTitle =
    modal.querySelector(".project-modal-title");

  const modalDescription =
    modal.querySelector(".project-modal-description");

  const modalContent =
    modal.querySelector(".project-modal-content-area");


  const lightbox =
    document.getElementById("imageLightbox");

  const lightboxOverlay =
    lightbox.querySelector(".image-lightbox-overlay");

  const lightboxClose =
    lightbox.querySelector(".image-lightbox-close");

  const lightboxImage =
    lightbox.querySelector(".image-lightbox-image");


  /* =======================================================
     OPEN PROJECT
  ======================================================= */

  function openProject(projectID) {

    const project = projects[projectID];

    if (!project) {
      return;
    }

    modalCategory.textContent = project.category;

    modalTitle.textContent = project.title;

    modalDescription.textContent = project.description;

    modalContent.innerHTML = "";


    /* -----------------------------------------------
       NO MEDIA
    ------------------------------------------------ */

    if (!project.media || project.media.length === 0) {

      const emptyState = document.createElement("div");

      emptyState.className = "project-empty-state";

      emptyState.innerHTML = `
        <p>
          This project focuses on professional experience,
          strategy, coordination, and execution.
        </p>
      `;

      modalContent.appendChild(emptyState);

    }


    /* -----------------------------------------------
       MEDIA
    ------------------------------------------------ */

    else {

      const section = document.createElement("div");

      section.className = "project-media-section";

      const grid = document.createElement("div");

      grid.className = "project-media-grid";


      project.media.forEach((media) => {

        const card = document.createElement("div");

        card.className = "project-media-card";


        /* IMAGE */

        if (media.type === "image") {

          card.classList.add("project-image-card");

          const image = document.createElement("img");

          image.src = media.src;

          image.alt = media.alt || project.title;

          image.loading = "lazy";

          card.appendChild(image);


          card.addEventListener("click", () => {

            openLightbox(
              media.src,
              media.alt || project.title
            );

          });

        }


        /* VIDEO */

        if (media.type === "video") {

          card.classList.add("project-video-card");

          card.innerHTML = `
            <iframe
              src="${media.src}"
              title="${media.title || project.title}"
              loading="lazy"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          `;

        }


        grid.appendChild(card);

      });


      section.appendChild(grid);

      modalContent.appendChild(section);

    }


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

  }


  /* =======================================================
     CLOSE PROJECT
  ======================================================= */

  function closeProject() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

  }


  /* =======================================================
     LIGHTBOX
  ======================================================= */

  function openLightbox(src, alt) {

    lightboxImage.src = src;

    lightboxImage.alt = alt || "";

    lightbox.classList.add("active");

  }


  function closeLightbox() {

    lightbox.classList.remove("active");

    lightboxImage.src = "";

  }


  /* =======================================================
     PROJECT BUTTONS
  ======================================================= */

  document.querySelectorAll(".work-link").forEach((button) => {

    button.addEventListener("click", () => {

      const projectID =
        button.getAttribute("data-project");

      openProject(projectID);

    });

  });


  /* =======================================================
     CLOSE EVENTS
  ======================================================= */

  modalClose.addEventListener("click", closeProject);

  modalOverlay.addEventListener("click", closeProject);

  lightboxClose.addEventListener(
    "click",
    closeLightbox
  );

  lightboxOverlay.addEventListener(
    "click",
    closeLightbox
  );


  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {
      return;
    }

    if (lightbox.classList.contains("active")) {

      closeLightbox();

      return;

    }

    if (modal.classList.contains("active")) {

      closeProject();

    }

  });


  /* =======================================================
     SMOOTH ANCHOR SCROLL
  ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetID =
        link.getAttribute("href");

      const target =
        document.querySelector(targetID);

      if (!target) {
        return;
      }

      event.preventDefault();

      const headerOffset = 85;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


  /* =======================================================
     REVEAL ANIMATION
  ======================================================= */

  const revealElements = document.querySelectorAll(
    ".work-project, .capability, .experience-item, .stat, .tools-grid span"
  );


  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

          });

        },
        {
          threshold: 0.08
        }
      );


    revealElements.forEach((element) => {

      element.classList.add("reveal");

      revealObserver.observe(element);

    });

  }


  /* =======================================================
     HEADER SCROLL STATE
  ======================================================= */

  const header =
    document.querySelector(".site-header");


  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 30) {

        header.classList.add("scrolled");

      } else {

        header.classList.remove("scrolled");

      }

    },
    {
      passive: true
    }
  );


  /* =======================================================
     IMAGE ERROR HANDLING
  ======================================================= */

  document.querySelectorAll("img").forEach((image) => {

    image.addEventListener("error", () => {

      image.style.display = "none";

      const parent = image.parentElement;

      if (parent) {
        parent.classList.add("image-error");
      }

    });

  });

});
