// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    function toggleNav() {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        closeBtn.classList.toggle('toggle');
        body.classList.toggle('no-scroll'); // Optional: Prevent scrolling when menu is open
    }

    // Toggle the nav menu on burger or close button click
    burger.addEventListener('click', toggleNav);
    closeBtn.addEventListener('click', toggleNav);

    // Close the menu if clicked outside
    document.addEventListener('click', function (e) {
        if (!navLinks.contains(e.target) && !burger.contains(e.target) && !closeBtn.contains(e.target)) {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
            closeBtn.classList.remove('toggle');
            body.classList.remove('no-scroll');
        }
    });
});
