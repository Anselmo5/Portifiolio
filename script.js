const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slideWidth = slides[0].getBoundingClientRect().width; // 300px

// Atualize para mover por três slides de uma vez
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Ajuste o posicionamento para suportar três slides
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  
  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
  }
});

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  
  if (prevSlide) {
    moveToSlide(track, currentSlide, prevSlide);
  }
});




// Email contato


