document
  .querySelector(".mobile-menu-icon")
  .addEventListener("click", function () {
    document
      .querySelector(".header-navigation")
      .classList.toggle("mobile-menu-open");
  });

// Add this to your existing mobile-menu.js script

const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const mobileMenuBars = document.querySelectorAll(".bar");
const headerNavigation = document.querySelector(".header-navigation");

mobileMenuIcon.addEventListener("click", () => {
  headerNavigation.classList.toggle("mobile-menu-open");
});

// Close the mobile menu when a menu item is clicked
const headerLinks = document.querySelectorAll(".header-link");
headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerNavigation.classList.remove("mobile-menu-open");
  });
});
