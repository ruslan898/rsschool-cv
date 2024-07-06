document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});


const menuList = document.querySelector('.menu-list');
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
    menuList.classList.toggle('menu-list-active');
    hamburger.classList.toggle('hamburger-active');
})

menuLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuList.classList.toggle('menu-list-active');
        hamburger.classList.toggle('hamburger-active');
    })
})