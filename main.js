// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

// Fade-in animation on scroll (extended for logo + tagline)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
        }
    });
});

// Observe hero animations
document.querySelectorAll(
    ".animate-logo, .animate-tagline, .animate-btn, section, .training-box, .gallery-grid img"
).forEach(el => {
    observer.observe(el);
});


document.querySelectorAll("section, .training-box, .gallery-grid img").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

function revealWhatsApp() {
    const encoded = "aHR0cHM6Ly9jaGF0LndoYXRzYXBwLmNvbS9IaU9ZWFRCbzFIQUwxT0ZOaEF5bFNV";
    const link = atob(encoded);

    document.getElementById("whatsapp-container").innerHTML = `
        <span class="icon whatsapp-icon animated"></span>
        <a href="${link}" target="_blank">Join the WhatsApp Group</a>
    `;
}

function setLanguage(lang) {
    // Save choice
    localStorage.setItem("lang", lang);

    // Hide all
    document.querySelectorAll(".lang").forEach(el => {
        el.classList.remove("active");
    });

    // Show selected
    document.querySelectorAll(".lang-" + lang).forEach(el => {
        el.classList.add("active");
    });
}

function setLanguage(lang) {
    const allLangBlocks = document.querySelectorAll(".lang");

    // Hide all languages with fade-out
    allLangBlocks.forEach(el => {
        el.classList.remove("active");
    });

    // Small delay to allow fade-out before fade-in
    setTimeout(() => {
        document.querySelectorAll(".lang-" + lang).forEach(el => {
            el.classList.add("active");
        });
    }, 150);

    // Save selection
    localStorage.setItem("lang", lang);
}

// Load saved language (default EN)
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);



