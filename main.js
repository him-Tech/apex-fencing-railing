import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// SWIPER
new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2.4,
      slidesPerGroup: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// HEADER SEARCH BAR
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");
const crossIcon = document.getElementById("crossIcon");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("hidden");
  searchIcon.classList.add("hidden");
  crossIcon.classList.remove("hidden");
  if (!searchInput.classList.contains("hidden")) {
    searchInput.focus();
  }
});

crossIcon.addEventListener("click", () => {
  searchInput.classList.toggle("hidden");
  searchIcon.classList.remove("hidden");
  crossIcon.classList.add("hidden");
  if (!searchInput.classList.contains("hidden")) {
    searchInput.focus();
  }
});

// SIDEBAR
const toggleSidebarButton = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
toggleSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("translate-x-full");
});
