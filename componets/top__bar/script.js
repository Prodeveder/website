
const mobileNavbar = document.querySelector('.mobile__wrapper');
const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.menu');

closeMenu.addEventListener('click', ()=> {
    mobileNavbar.style.display = 'none';
})

openMenu.addEventListener('click', ()=> {
    mobileNavbar.style.display = 'flex';
})

