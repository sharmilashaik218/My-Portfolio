document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#changing-text", {
        strings: ["Software Developer", "Web Designer", "AI Enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});



// CV Viewer Toggle Functionality
document.getElementById('viewCvBtn').addEventListener('click', function() {
    document.getElementById('cvViewer').style.display = 'block';
});

// Close Button to Hide the CV Viewer
document.getElementById('closeCvBtn').addEventListener('click', function() {
    document.getElementById('cvViewer').style.display = 'none';
});

// Close the CV viewer if the background is clicked
document.getElementById('cvViewer').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('cvViewer').style.display = 'none';
    }
});



const projects = [
    {
        title: "Online Art Gallery",
        description: "A web application built using Python Full Stack for showcasing and promoting artworks.",
        tech: "Tech Stack: Django, HTML, CSS",
        link: "https://github.com/sharmilashaik218/online_art_gallery-python-django",
        image: "images/artgallery.png",
    },
    {
        title: "Health Ease",
        description: "HealthEase is a web platform that simplifies healthcare appointment booking and provides instant health advice through an AI-driven chatbot.",
        tech: "Tech Stack: Django, HTML, CSS",
        link: "https://github.com/sharmilashaik218/frt_Project",
        image: "images/healthease.png",
    }
];

const projectsList = document.getElementById("projects-list");




projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-img">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <p class="project-tech">${project.tech}</p>
            <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        </div>
    `;

    projectsList.appendChild(projectCard);

    
});
