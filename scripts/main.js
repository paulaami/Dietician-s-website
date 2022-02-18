const navMenu = document.querySelector('.nav__menu')
const navigation = document.querySelector('.nav')
const menuText = document.querySelector('.nav__menu-text')

const handleNav = () => {
 const nav = document.querySelector('.navigation')
 navMenu.classList.toggle('menu--active')
 nav.classList.toggle('navigation__active')
}

window.onscroll = function () {
 const bgImage = document.querySelector('.shadow-bg')
 let currentScrollPos = window.pageYOffset;
 const mediaQuery = window.matchMedia('(max-width: 767px)')
 if(currentScrollPos > 100 && mediaQuery.matches) {
  navigation.classList.add('menu--scroll')
  menuText.classList.add('show')
  bgImage.style.backgroundPositionY = `${currentScrollPos-300}px`
 } else {
  navigation.classList.remove('menu--scroll')
  menuText.classList.remove('show')
  bgImage.style.backgroundPositionY = 'initial'
 }
}

navMenu.addEventListener('click', handleNav)