/*********************************소개페이지********************************/
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

//인트로 스크롤 애니메이션

const tarnsStartMg = 100;
const transList = document.querySelectorAll('.int_transition');

const animation = function () {
    for (const element of transList) {
        if (window.innerWidth > 767) {
            if (!element.classList.contains('show')) {
                if (window.innerHeight > element.getBoundingClientRect().top) {
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

window.addEventListener('load', animation);
window.addEventListener('scroll', animation);

/*********************************회원가입********************************/

//유효성검사
var id = document.querySelector('#userId');
var pw = document.querySelector('#userPw');
var pwChk = document.querySelector('#userPwChk');
var userNm = document.querySelector('#userNm');
var gender = document.querySelector('#userGender');
var bthYear = document.querySelector('#birthYear');
var bthMnth = document.querySelector('#birthMnth');
var bthDay = document.querySelector('#birthDay');
var phone = document.querySelector('#phone');
var email = document.querySelector('#email');
var error = document.querySelectorAll('.input_warn_txt');

id.addEventListener('input', chkId);
pw.addEventListener('input', chkPw);
pwChk.addEventListener('input', comparePw);
userNm.addEventListener('input', chkName);
// bthYear.addEventListener('focusout', isBirthCompleted);
// bthMnth.addEventListener('focusout', isBirthCompleted);
// bthDay.addEventListener('focusout', isBirthCompleted);
// gender.addEventListener('focusout', chkgender);
phone.addEventListener('input', checkPhoneNum);
email.addEventListener('input', isEmailCorrect);

var turnRed = function (inputName) {
    inputName.classList.remove('input_pass');
    inputName.classList.add('input_warn');
};

var turnGreen = function (inputName) {
    inputName.classList.remove('input_warn');
    inputName.classList.add('input_pass');
};

function chkId() {
    var idPattern = /[a-zA-Z0-9_-]{5,20}/;
    if (id.value === '') {
        error[0].innerHTML = '필수 정보입니다.';
        error[0].style.display = 'block';
        turnRed(id);
    } else if (!idPattern.test(id.value)) {
        error[0].innerHTML = '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.';
        error[0].style.display = 'block';
        turnRed(id);
    } else {
        error[0].style.display = 'none';
        id.classList.remove('input_warn');
        turnGreen(id);
    }
}

function chkPw() {
    var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    if (pw.value === '') {
        error[1].innerHTML = '필수 정보입니다.';
        error[1].style.display = 'block';
        turnRed(pw);
    } else if (!pwPattern.test(pw.value)) {
        error[1].innerHTML = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
        error[1].style.display = 'block';
        turnRed(pw);
    } else {
        error[1].style.display = 'none';
        turnGreen(pw);
    }
}

function comparePw() {
    if (pw.value === pwChk.value && pwChk.value != '') {
        error[2].style.display = 'none';
        turnGreen(pwChk);
    } else if (pw.value !== pwChk.value) {
        error[2].innerHTML = '비밀번호가 일치하지 않습니다.';
        error[2].style.display = 'block';
        turnRed(pwChk);
    }
}

function chkName() {
    var namePattern = /[a-zA-Z가-힣]/;
    if (userNm.value === '') {
        error[3].innerHTML = '필수 정보입니다.';
        error[3].style.display = 'block';
        turnRed(userNm);
    } else if (!namePattern.test(userNm.value) || userNm.value.indexOf(' ') > -1) {
        error[3].innerHTML = '한글과 영문 대 소문자를 사용하세요.';
        error[3].style.display = 'block';
        turnRed(userNm);
    } else {
        error[3].style.display = 'none';
        turnGreen(userNm);
    }
}

function checkPhoneNum() {
    // phone.value.replace(/[^0-9]$/);
    phone.value = phone.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}

function isEmailCorrect() {
    var emailPattern = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;

    if (email.value === '') {
        error[4].style.display = 'none';
    } else if (!emailPattern.test(email.value)) {
        error[4].innerHTML = '올바른 형식이 아닙니다.';
        error[4].style.display = 'block';
        turnRed(email);
    } else {
        error[4].style.display = 'none';
        turnGreen(email);
    }
}

/*********라디오버튼 클릭*********/
