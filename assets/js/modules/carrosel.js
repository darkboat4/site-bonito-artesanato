const carrossel = document.querySelector('.carrossel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  currentSlide--;
  
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide();
}
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}
setInterval(() => {
  prevSlide();
}, 3000)

prevButton.addEventListener('click', () => {
    clearInterval();
    nextSlide()
    }
);

    nextButton.addEventListener('click',  () => {
      clearInterval();
      prevSlide()
    }
);

showSlide();