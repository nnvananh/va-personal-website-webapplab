document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Highlight active tab based on the current page URL
    function setActiveNav() {
        const currentPage = window.location.pathname.split("/").pop(); // Get current filename

        navLinks.forEach((link) => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    setActiveNav();
});
