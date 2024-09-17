const logo = document.querySelector('.header__logo-img');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

function logoFunc() {
    let w = window.innerWidth;
    if (w < 1199) {
        logo.src = 'img/logo-mini.svg';
    } else {
        logo.src = 'img/logo.svg';
    }
}

function menu() {
    burger.classList.toggle('burger--active');
    nav.classList.toggle('header__nav--active');
}

burger.addEventListener('click', function() { menu() });
window.addEventListener('DOMContentLoaded', function() { logoFunc(); });
window.addEventListener('resize', function() { logoFunc(); });


import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Autoplay]);

const swiperFirst = new Swiper('.swiper-first', {  
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 'auto',
});

const swiperSecond = new Swiper('.swiper-second', {  
    direction: 'horizontal',
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
});

const swiperThrid = new Swiper('.swiper-thrid', {  
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 'auto',
});


const lists = document.querySelectorAll('.footer__list-drop');

function footerList(item) {
    let list = item.querySelector('.footer__list-body');
    item.addEventListener('click', function() {
        
        list.classList.toggle('footer__list-body--visible');
    });
}

lists.forEach(footerList);