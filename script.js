const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', () => {
  changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
  changeSlide(1);
});

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
}

// Initialize the first slide
slides[currentSlide].classList.add('active');
