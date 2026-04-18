/* ----------------------------------
   Smooth Navigation Scroll
------------------------------------- */

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        const href = e.target.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        }
    });
});


/* ----------------------------------
   Fade-in Animation on Scroll
------------------------------------- */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
        }
    });
});

document.querySelectorAll(
    ".animate-logo, .animate-tagline, .animate-btn, section, .training-box, .gallery-grid img"
).forEach(el => observer.observe(el));


/* ----------------------------------
   Lightbox (Instagram-style Zoom)
------------------------------------- */

let lightboxOpen = false;

function createLightbox() {
    const lb = document.createElement("div");
    lb.id = "lightbox";
    lb.innerHTML = `
        <div id="lightbox-bg"></div>
        <div id="lightbox-content">
            <img id="lightbox-img" src="" alt="">
            <button id="lightbox-close">×</button>
        </div>
    `;
    document.body.appendChild(lb);

    // Close behavior
    document.getElementById("lightbox-bg").onclick =
    document.getElementById("lightbox-img").onclick =
    document.getElementById("lightbox-close").onclick = closeLightbox;

    // ESC closes
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && lightboxOpen) closeLightbox();
    });
}

function openLightbox(src) {
    const img = document.getElementById("lightbox-img");
    img.src = src;

    const lb = document.getElementById("lightbox");
    lb.classList.add("active");
    lightboxOpen = true;
}

function closeLightbox() {
    const lb = document.getElementById("lightbox");
    lb.classList.remove("active");
    lightboxOpen = false;
}

// Create lightbox container
createLightbox();

// Attach to gallery images
document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => openLightbox(img.src));
});


/* ----------------------------------
   WhatsApp Reveal
------------------------------------- */

function revealWhatsApp() {
    const encoded = "aHR0cHM6Ly9jaGF0LndoYXRzYXBwLmNvbS9IaU9ZWFRCbzFIQUwxT0ZOaEF5bFNV";
    const link = atob(encoded);

    document.getElementById("whatsapp-container").innerHTML = `
        <span class="icon whatsapp-icon animated"></span>
        <a href="${link}" target="_blank">Join the WhatsApp Group</a>
    `;
}


/* ----------------------------------
   Bilingual PT/EN Fade System
------------------------------------- */

function setLanguage(lang) {
    const allLangBlocks = document.querySelectorAll(".lang");

    // Fade-out first
    allLangBlocks.forEach(el => el.classList.remove("active"));

    // Fade-in second
    setTimeout(() => {
        document.querySelectorAll(".lang-" + lang).forEach(el => {
            el.classList.add("active");
        });
    }, 150);

    localStorage.setItem("lang", lang);
}

setLanguage(localStorage.getItem("lang") || "en");
