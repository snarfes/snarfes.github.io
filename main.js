/* ----------------------------------
   Smooth Navigation Scroll
------------------------------------- */

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        const href = e.target.getAttribute("href");

        // Only intercept anchors (#about, #training, etc)
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

// Observe all animated targets
document.querySelectorAll(
    ".animate-logo, .animate-tagline, .animate-btn, section, .training-box, .gallery-grid img"
).forEach(el => {
    observer.observe(el);
});


/* ----------------------------------
   WhatsApp Reveal Button
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
   Bilingual Fade Switcher (PT <-> EN)
------------------------------------- */

function setLanguage(lang) {
    const allLangBlocks = document.querySelectorAll(".lang");

    // Fade out all languages
    allLangBlocks.forEach(el => {
        el.classList.remove("active");
    });

    // Fade in selected language
    setTimeout(() => {
        document.querySelectorAll(".lang-" + lang).forEach(el => {
            el.classList.add("active");
        });
    }, 150);

    // Save user choice
    localStorage.setItem("lang", lang);
}

// Load saved language (default EN)
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);
