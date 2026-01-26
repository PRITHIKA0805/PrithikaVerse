const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.style.background = "linear-gradient(135deg, #ff4ecd, #6a11cb)";
        link.style.boxShadow = "0 0 15px rgba(255,78,205,0.8)";
    }
});
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.style.transform = "scale(1.02)";
        section.style.transition = "0.3s ease";
    });

    section.addEventListener("mouseleave", () => {
        section.style.transform = "scale(1)";
    });
});
const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.boxShadow = "0 0 30px rgba(255,78,205,0.9)";
        img.style.transition = "0.3s";
    });

    img.addEventListener("mouseleave", () => {
        img.style.boxShadow = "none";
    });
});
document.addEventListener("click", () => {
    console.log("User interaction detected");
});
const footer = document.querySelector("footer p");
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Prithika J. All Rights Reserved.`;
}

