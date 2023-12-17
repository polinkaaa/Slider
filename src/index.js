import 'normalize.css';
import './styles/main.scss';

const dots = document.querySelectorAll('.dots-item'),
    dotsArea = document.querySelector('.dots'),
    slides = document.querySelectorAll('.slides-item'),
    prevBtn = document.getElementById('left-button'),
    nextBtn = document.getElementById('right-button'),
    btn = document.getElementById('btn');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1){
         slideIndex = 1;
    } else if (n > slides.length){
        slideIndex = slides.length;
    }

    slides.forEach(function (item) {
        item.style.display = 'none';
    })

    dots.forEach(function (item) {
        item.classList.remove('is-active');
    })

    slides[slideIndex-1].style.display = 'block';
    slides[slideIndex-1].classList.add('checked');
    dots[slideIndex-1].classList.add('is-active');
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}

prevBtn.onclick = function () {
    plusSlides(-1);
    checkSlides();
}

nextBtn.onclick = function () {
    plusSlides(1);
    checkSlides();
}

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
    checkSlides();
}

function checkSlides() {
    let allSlidesClicked = true;
    slides.forEach(function (item) {
        if (!item.classList.contains('checked')) {
            allSlidesClicked = false;
        }
    });
    if (allSlidesClicked) {
        btn.disabled = false;
    }
}