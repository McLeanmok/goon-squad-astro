const links = document.querySelector('#nav');
const navLinks = links.querySelectorAll("a"); 
const currentURL = window.location.href;
navLinks.forEach((link) => {
    if (link.href === currentURL) {
  link.classList.add("active");
}
});