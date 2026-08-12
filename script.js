document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");

    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("open");
    });

    const links = document.querySelectorAll(".nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
        });
    });

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
