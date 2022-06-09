// intro history swiper
var swiper = new Swiper('.his_swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.his_nav_next',
        prevEl: '.his_nav_prev',
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        989: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

// 스크롤 애니메이션

const tarnsStartMg = 100;
const transList = document.querySelectorAll('.int_transition');

const animation = function () {
    for (const element of transList) {
        if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top) {
                element.classList.add('show');
            }
        }
    }
};

window.addEventListener('load', animation);
window.addEventListener('scroll', animation);
