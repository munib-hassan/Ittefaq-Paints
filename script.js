// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {

  menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

  });


  // Close menu after clicking a navigation link

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menuBtn.setAttribute("aria-expanded", "false");

      menuBtn.setAttribute("aria-label", "Open menu");

    });

  });

}


// ================= CURRENT YEAR =================

const yearElement = document.querySelector(".footer-bottom");

if (yearElement) {

  yearElement.innerHTML =
    `© ${new Date().getFullYear()} ITTEFAQ PAINT. All Rights Reserved.`;

}
