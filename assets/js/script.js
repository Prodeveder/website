const mobileNavbar = document.querySelector(".mobile__navbar__wrapper");
const OpenMenu = document.querySelector(".menu");
const CloseMenu = document.querySelector(".close");

OpenMenu.addEventListener("click", () => {
  mobileNavbar.style.display = "flex";
});

CloseMenu.addEventListener("click", () => {
  mobileNavbar.style.display = "none";
});


const toggleHeaders = document.querySelectorAll(".toggle__header");
const toggleMinus = document.querySelectorAll(".toggle__header .icon .minus");
const togglePlus = document.querySelectorAll(".toggle__header .icon .plus");
const togglePanels = document.querySelectorAll(".toggle__panel");

togglePanels[0].style.display = "flex";
toggleMinus[0].style.display = "block";
togglePlus[0].style.display = "none";

toggleHeaders.forEach((toggleHeader) => {
  toggleHeader.addEventListener("click", function () {
    let i = toggleHeader.classList[1];
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
      toggleMinus[i].style.display = "none";
      togglePlus[i].style.display = "block";
    } else {
      panel.style.display = "flex";
      toggleMinus[i].style.display = "block";
      togglePlus[i].style.display = "none";
    }
  });
});