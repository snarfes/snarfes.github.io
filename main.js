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

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
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

