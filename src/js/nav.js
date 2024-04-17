const navLinks = document.querySelector("a");

navLinks.array.forEach(element => {
    if(navLinks.getAttribute("href") === window.location.pathname) {
        navLinks.setAttribute("aria current", "page")
    }
});