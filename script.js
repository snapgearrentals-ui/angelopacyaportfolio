const projectButtons = document.querySelectorAll(".work-link");

const projectData = {
    footlab: {
        title: "FOOTLAB",
        category: "Marketing • Social Media • Brand",
        description:
            "Marketing and creative work for FOOTLAB, covering social media management, content strategy, SEO, campaigns, partnerships, events, creative production, and analytics.",
        media: [
            {
                type: "folder",
                url: "https://drive.google.com/drive/folders/1oR4bAVAK-lnsKGfwnqPuNT9Cux4rY49o?usp=drive_link"
            },
            {
                type: "folder",
                url: "https://drive.google.com/drive/folders/14itmiYirmGSYR-I-J3mJ35gxfdvC8Fph?usp=drive_link"
            },
            {
                type: "folder",
                url: "https://drive.google.com/drive/folders/15TCJRjeXFjloDutFg3hU2XORanykk-Z_?usp=drive_link"
            },
            {
                type: "folder",
                url: "https://drive.google.com/drive/folders/1AJj1NgxCuw7qiGkwmIidj2q0jRg7S_PD?usp=drive_link"
            },
            {
                type: "folder",
                url: "https://drive.google.com/drive/folders/15Z1xvDh53dbu4q1oJREdF9wn8FqMvjNf?usp=drive_link"
            },
            {
                type: "file",
                url: "https://drive.google.com/file/d/1IKmOuyCaemAlA2AmaPygY_wx9Gdlc1Vs/view?usp=drive_link"
            },
            {
                type: "file",
                url: "https://drive.google.com/file/d/1u1LG67UTN3Q9uTAiWbSQ7VE5uOveRmpQ/view?usp=drive_link"
            },
            {
                type: "file",
                url: "https://drive.google.com/file/d/1oVfMyskS-gE0IK8uSK64bdV0hRPMOw9F/view?usp=drive_link"
            }
        ]
    },

    kwench: {
        title: "Kwench Juice Cafe",
        category: "Social Media • Creative",
        description:
            "Social media and creative work for Kwench Juice Cafe, including graphics, short-form video content, digital campaigns, and brand communication.",
        media: [
            {
                type: "folder",
                url: "https://drive.google.com/drive/folders/196GASxBgdfFsDP10z0sThC9UxDDhQITD?usp=drive_link"
            },
            {
                type: "folder",
                url: "https://drive.google.com/drive/folders/1rXqjOsVieWL6XoH_fVwctgEJmmX8ezRk?usp=drive_link"
            }
        ]
    },

    alta: {
        title: "Alta Anima",
        category: "Marketing • Graphic Design",
        description:
            "Selected marketing and graphic design work created for Alta Anima, focused on visual communication and brand presentation.",
        media: [
            {
                type: "folder",
                url: "https://drive.google.com/drive/folders/1-cW3nBCsx8gQB3Kio6OJd-rVuRchIBGc?usp=drive_link"
            }
        ]
    },

    solour: {
        title: "Solour",
        category: "Brand Strategy • Marketing",
        description:
            "Academic marketing and branding project developed for Solour, covering research, positioning, target audience, visual communication, and campaign strategy.",
        media: [
            {
                type: "folder",
                url: "https://drive.google.com/drive/folders/1ITqinpdpqE001FhQWiHDQWzKRKZVbBrt?usp=drive_link"
            }
        ]
    },

    sm: {
        title: "SM Supermalls",
        category: "Operations • Marketing • Events",
        description:
            "Operations and marketing support during my internship with the MSME team at SM Supermalls, including monitoring, reporting, presentations, documentation, mall coordination, events, and partnership materials.",
        media: []
    },

    web3: {
        title: "Web3 & Cryptocurrency",
        category: "Community • Partnerships • Digital",
        description:
            "Professional experience across Web3 and cryptocurrency projects, including community management, Discord moderation, community building, partnerships, strategic management, and digital communication.",
        media: []
    }
};


/* ========================================
   CREATE PROJECT MODAL
======================================== */

const modal = document.createElement("div");

modal.className = "project-modal";

modal.innerHTML = `
    <div class="project-modal-overlay"></div>

    <div class="project-modal-content">

        <button
            class="project-modal-close"
            aria-label="Close project"
        >
            ×
        </button>

        <div class="project-modal-category"></div>

        <h2 class="project-modal-title"></h2>

        <p class="project-modal-description"></p>

        <div class="project-modal-content-area"></div>

    </div>
`;

document.body.appendChild(modal);


/* ========================================
   GET DRIVE EMBED URL
======================================== */

function getDriveEmbedUrl(item) {

    if (item.type === "folder") {

        const match = item.url.match(/folders\/([a-zA-Z0-9_-]+)/);

        if (!match) {
            return null;
        }

        const folderId = match[1];

        return `https://drive.google.com/embeddedfolderview?id=${folderId}#list`;
    }


    if (item.type === "file") {

        const match = item.url.match(/\/d\/([a-zA-Z0-9_-]+)/);

        if (!match) {
            return null;
        }

        const fileId = match[1];

        return `https://drive.google.com/file/d/${fileId}/preview`;
    }


    return null;
}


/* ========================================
   RENDER PROJECT MEDIA
======================================== */

function renderProjectMedia(project) {

    const contentArea = modal.querySelector(
        ".project-modal-content-area"
    );

    contentArea.innerHTML = "";


    if (!project.media || project.media.length === 0) {

        contentArea.innerHTML = `
            <div class="project-empty-state">
                <p>Project materials will be added here soon.</p>
            </div>
        `;

        return;
    }


    const mediaGrid = document.createElement("div");

    mediaGrid.className = "project-media-grid";


    project.media.forEach((item) => {

        const embedUrl = getDriveEmbedUrl(item);

        if (!embedUrl) {
            return;
        }


        const mediaCard = document.createElement("div");

        mediaCard.className =
            item.type === "file"
                ? "project-media-card project-media-video"
                : "project-media-card project-media-folder";


        const iframe = document.createElement("iframe");

        iframe.src = embedUrl;

        iframe.loading = "lazy";

        iframe.allow =
            "autoplay; encrypted-media; fullscreen";

        iframe.setAttribute(
            "allowfullscreen",
            ""
        );


        mediaCard.appendChild(iframe);

        mediaGrid.appendChild(mediaCard);

    });


    contentArea.appendChild(mediaGrid);
}


/* ========================================
   OPEN PROJECT
======================================== */

function openProject(projectKey) {

    const project = projectData[projectKey];

    if (!project) {
        return;
    }


    modal.querySelector(
        ".project-modal-category"
    ).textContent = project.category;


    modal.querySelector(
        ".project-modal-title"
    ).textContent = project.title;


    modal.querySelector(
        ".project-modal-description"
    ).textContent = project.description;


    renderProjectMedia(project);


    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* ========================================
   CLOSE PROJECT
======================================== */

function closeProject() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* ========================================
   PROJECT BUTTONS
======================================== */

const projectKeys = [
    "footlab",
    "kwench",
    "alta",
    "solour",
    "sm",
    "web3"
];


projectButtons.forEach((button, index) => {

    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            openProject(
                projectKeys[index]
            );

        }
    );

});


/* ========================================
   CLOSE BUTTON
======================================== */

modal
    .querySelector(".project-modal-close")
    .addEventListener(
        "click",
        closeProject
    );


/* ========================================
   CLICK OUTSIDE MODAL
======================================== */

modal
    .querySelector(".project-modal-overlay")
    .addEventListener(
        "click",
        closeProject
    );


/* ========================================
   ESC KEY
======================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);
