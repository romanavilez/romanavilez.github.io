const current = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href").split("/").pop() === current) {
        link.classList.add("active");
    }
});