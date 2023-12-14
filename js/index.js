let dots = document.querySelectorAll('.dots-item'),
    dotsArea = document.querySelectorAll('.dots')[0],
    slides = document.querySelectorAll('.slides-item'),
    prevBtn = document.getElementById('left-button'),
    nextBtn = document.getElementById('right-button'),
    btn = document.getElementById('btn'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1){
         slideIndex = 1;
    } else if (n > slides.length){
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove('is-active');
    }
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
    for (let i = 0; i<dots.length +1; i++) {
        if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
    checkSlides();
}

function checkSlides() {
    let allSlidesClicked = true;
    slides.forEach(slidet => {
        if (!slidet.classList.contains('checked')) {
            allSlidesClicked = false;
        }
    });
    if (allSlidesClicked) {
        btn.disabled = false;
    }
}