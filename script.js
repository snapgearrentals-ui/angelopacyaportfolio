// ========================================
// PROJECT VIEWER
// ========================================

const projectButtons = document.querySelectorAll(".work-link");

const projectData = {
    footlab: {
        title: "FOOTLAB",
        category: "Marketing • Social Media • Brand",
        description:
            "Marketing and creative work for a custom orthotic clinic, covering social media management, content strategy, SEO, campaigns, partnerships, events, creative production, and analytics."
    },

    kwench: {
        title: "Kwench Juice Cafe",
        category: "Social Media • Creative",
        description:
            "Social media and creative work including content creation, graphic design, digital marketing, and short-form video production."
    },

    alta: {
        title: "Alta Anima",
        category: "Marketing • Graphic Design",
        description:
            "Selected marketing and graphic design work developed for brand communication and digital content."
    },

    solour: {
        title: "Solour",
        category: "Research • Branding • Marketing",
        description:
            "An academic marketing and branding project for Solour, a lip-care sunbalm, combining research, audience strategy, positioning, and creative outputs."
    },

    sm: {
        title: "SM Supermalls",
        category: "Operations • Marketing • Events",
        description:
            "Internship experience supporting MSME operations, reporting, presentations, documentation, events, coordination, and physical marketing initiatives."
    },

    web3: {
        title: "Web3 & Cryptocurrency",
        category: "Web3 • Community • Partnerships",
        description:
            "Early professional experience across community management, Discord moderation, community building, partnerships, and strategic initiatives for multiple Web3 brands and projects."
    }
};


// ========================================
// CREATE MODAL
// ========================================

const modal = document.createElement("div");

modal.className = "project-modal";

modal.innerHTML = `
    <div class="project-modal-overlay"></div>

    <div class="project-modal-content">

        <button class="project-modal-close" aria-label="Close">
            ×
        </button>

        <div class="project-modal-category"></div>

        <h2 class="project-modal-title"></h2>

        <p class="project-modal-description"></p>

        <div class="project-modal-content-area">
            <p>Project content coming soon.</p>
        </div>

    </div>
`;

document.body.appendChild(modal);


// ========================================
// OPEN MODAL
// ========================================

function openProject(projectKey) {

    const project = projectData[projectKey];

    if (!project) {
        return;
    }

    modal.querySelector(".project-modal-category").textContent =
        project.category;

    modal.querySelector(".project-modal-title").textContent =
        project.title;

    modal.querySelector(".project-modal-description").textContent =
        project.description;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ========================================
// CLOSE MODAL
// ========================================

function closeProject() {

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


// ========================================
// PROJECT BUTTON EVENTS
// ========================================

projectButtons.forEach((button, index) => {

    const projectKeys = [
        "footlab",
        "kwench",
        "alta",
        "solour",
        "sm",
        "web3"
    ];

    button.addEventListener("click", function(event) {

        event.preventDefault();

        openProject(projectKeys[index]);

    });

});


// ========================================
// CLOSE BUTTON
// ========================================

modal
    .querySelector(".project-modal-close")
    .addEventListener("click", closeProject);


// ========================================
// CLOSE WHEN CLICKING OUTSIDE
// ========================================

modal
    .querySelector(".project-modal-overlay")
    .addEventListener("click", closeProject);


// ========================================
// ESC KEY
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProject();
    }

});
