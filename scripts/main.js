const navMenu = document.querySelector(".nav__menu");
const navigation = document.querySelector(".nav");
const menuText = document.querySelector(".nav__menu-text");
const nav = document.querySelector(".navigation");

const handleNav = () => {
  navMenu.classList.toggle("menu--active");
  nav.classList.toggle("navigation__active");
};

const clickOutsideNav = (e) => {
  if (e.target.parentElement.classList.contains("detect-nav")) return;
  closeNav();
};

const closeNav = () => {
  navMenu.classList.remove("menu--active");
  nav.classList.remove("navigation__active");
};

window.onscroll = function () {
  const bgImage = document.querySelector(".shadow-bg");
  let currentScrollPos = window.pageYOffset;
  const mediaQuery = window.matchMedia("(max-width: 767px)");
  if (currentScrollPos > 100 && mediaQuery.matches) {
    navigation.classList.add("menu--scroll");
    menuText.classList.add("show");
    bgImage.style.backgroundPositionY = `${currentScrollPos - 300}px`;
  } else {
    navigation.classList.remove("menu--scroll");
    menuText.classList.remove("show");
    bgImage.style.backgroundPositionY = "initial";
  }
};

navMenu.addEventListener("click", handleNav);
window.addEventListener("click", clickOutsideNav);
