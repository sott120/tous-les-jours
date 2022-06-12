/*********************************소개페이지********************************/
// intro history swiper
let swiper = new Swiper('.his_swiper', {
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

//인트로 스크롤 애니메이션

const transList = document.querySelectorAll('.int_transition');

const animation = function () {
    for (element of transList) {
        if (window.innerWidth > 767) {
            if (!element.classList.contains('show')) {
                if (window.innerHeight > element.getBoundingClientRect().top + 100) {
                    element.classList.add('show');
                }
            }
        } else {
            element.classList.remove('int_transition_up');
            element.classList.remove('int_transition_right');
            element.classList.remove('int_transition');
        }
    }
};

window.addEventListener('scroll', animation);