const btn_menu_mobile = document.querySelector('.btn_menu_mobile');
const btn_close_menu = document.querySelector('.btn_close_menu');
const nav_menu = document.querySelector('nav.menu');

btn_menu_mobile.addEventListener('click', () => {
    nav_menu.classList.add('open_menu')
})

btn_close_menu.addEventListener('click', () => {
    nav_menu.classList.remove('open_menu')
})