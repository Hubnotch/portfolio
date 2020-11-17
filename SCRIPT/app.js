
// Select the DOM Elements to add interactivity to

let menuIcon = document.getElementById('menu-icon');
let navList = document.querySelector('.nav-list')
let navLinks = document.querySelectorAll('li .nav-link')
// Add an event Listener to them
menuIcon.addEventListener('click', menuIconToggle)

function menuIconToggle() {
    menuIcon.classList.toggle("change");
    navList.classList.toggle("nav-active"); 
    // To animate the individual links
// Run a forEach function to the individual links

navLinks.forEach((link, index) => {
    link.style.animation = `navLinksFade 0.5s ease-out forwards ${index / 9 + 2}s`;
//     console.log(index/5)
})

}
