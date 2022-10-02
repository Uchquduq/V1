const menu = document.querySelector('.menu')
const burger = document.querySelector('.menu-button')

burger.addEventListener('click', () => {
  menu.classList.toggle('menu_active')
  burger.classList.toggle('menu-button_active')
})
