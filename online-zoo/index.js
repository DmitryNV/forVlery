const navbarMenu = document.querySelector('.navbar-menu'),
    openMenu = document.querySelector('.burger-menu'),
    closeMenu = document.querySelector('.navbar-menu-close');

openMenu.addEventListener('click', () => {
    navbarMenu.classList.add('menu-active');
});
closeMenu.addEventListener('click', (e) => {
    navbarMenu.classList.remove('menu-active');
});