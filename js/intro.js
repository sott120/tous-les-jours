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

//인트로 페이지 스크롤시 애니메이션 실행

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

// 클릭시 페이지 스크롤링
// document.querySelector('.scrollnav_wrap').addEventListener('click', (e) => {
//     console.log('클릭');
//     if (e.target.nodeName === 'LI') {
//         let id_value = e.target.dataset.link;
//         console.log(id_value);
//         document.querySelector(id_value).scrollIntoView({ behavior: 'smooth' });
//     }
// });

// if (window.scrollY > 500) {
//     //스크롤 위치 500 높을시
//     //상단 이동 버튼 생성(토마토색)
//     document.querySelector('.arrow-up').classList.add('visible');
//     //하단 이동 버튼 삭제(초록색)
//     document.querySelector('.arrow-down').classList.remove('visible');
// } else {
//     //스크롤 위치 500 아래일시
//     //상단 이동 버튼 삭제(토마토색)
//     document.querySelector('.arrow-up').classList.remove('visible');
//     //하단 이동 버튼 생성(초록색)
//     document.querySelector('.arrow-down').classList.add('visible');
// }

// //오렌지색 버튼 클릭시, 최상단 태그로 이동
// document.querySelector('.arrow-up').addEventListener('click', (e) => {
//     document.querySelector('.container').scrollIntoView({
//         behavior: 'smooth',
//     });
// });
// //초록색 버튼 클릭시, 최하단 태그로 이동
// document.querySelector('.arrow-down').addEventListener('click', (e) => {
//     document.querySelector('.container2').scrollIntoView({
//         behavior: 'smooth',
//     });
// });

let scrollList = document.querySelectorAll('.scrollnav_circle');

function navChange() {
    console.log(window.scrollY);
    if (window.scrollY > 700) {
        scrollList[0].style.backgroundColor = '#999';
    }
}

window.addEventListener('scroll', navChange);
