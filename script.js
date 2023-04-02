const hamburgerMenu = document.querySelector(".hamburger-menu");
const navClose = document.querySelector(".nav-close");
const navContainer = document.querySelector(".nav-container");
const overlay = document.querySelector(".overlay");

const featuresToggle = document.getElementById("features-toggle");
const featuresDropdown = document.getElementById("features-dropdown");
const companyToggle = document.getElementById("company-toggle");
const companyDropdown = document.getElementById("company-dropdown");

function closeMenu() {
  navContainer.classList.toggle("close");
  overlay.classList.toggle("close");
}

addEventListener("click", (event) => {
  if (
    event.target == hamburgerMenu ||
    event.target == navClose ||
    event.target == overlay
  ) {
    closeMenu();
  }
});

let dropdownFeaturesToggle = document.querySelector(
  "#features-toggle .dropdown-toggle"
);

let dropdownCompanyToggle = document.querySelector(
  "#company-toggle .dropdown-toggle"
);

featuresToggle.addEventListener("click", () => {
  featuresDropdown.classList.toggle("close");
  if (featuresDropdown.classList.contains("close")) {
    dropdownFeaturesToggle.src = "./images/icon-arrow-down.svg";
  } else {
    dropdownFeaturesToggle.src = "./images/icon-arrow-up.svg";
  }
});

companyToggle.addEventListener("click", () => {
  companyDropdown.classList.toggle("close");
  if (companyDropdown.classList.contains("close")) {
    dropdownCompanyToggle.src = "./images/icon-arrow-down.svg";
  } else {
    dropdownCompanyToggle.src = "./images/icon-arrow-up.svg";
  }
});
