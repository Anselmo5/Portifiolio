const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

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
  
  // Verifica se existe um próximo slide
  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
  }

  // Desativa o botão "próximo" se for o último slide
  if (!nextSlide.nextElementSibling) {
    nextButton.disabled = true;
  }

  // Reativa o botão "anterior" se houver slides anteriores
  prevButton.disabled = false;
});

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  
  // Verifica se existe um slide anterior
  if (prevSlide) {
    moveToSlide(track, currentSlide, prevSlide);
  }

  // Desativa o botão "anterior" se for o primeiro slide
  if (!prevSlide.previousElementSibling) {
    prevButton.disabled = true;
  }

  // Reativa o botão "próximo" se houver slides seguintes
  nextButton.disabled = false;
});



//  smook transition
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Evita o comportamento padrão do link
      const targetId = this.getAttribute('href'); // Obtém o ID de destino do href
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' }); // Rola suavemente
  });
});


  document.getElementById('irsobre').addEventListener('click', function() {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('irsobre2').addEventListener('click', function() {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
  });


  // Menu
  const toggleButton = document.getElementById("toggleSidebar");
  const closeButton = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("sidebar");
  
  toggleButton.addEventListener("click", function () {
      sidebar.classList.add("open"); // Abre o sidebar
  });
  
  closeButton.addEventListener("click", function () {
      sidebar.classList.remove("open"); // Fecha o sidebar
  });
  