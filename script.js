// Animación de scroll suave y efectos básicos
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10,10,30,0.95)';
  } else {
    header.style.background = 'rgba(10,10,30,0.8)';
  }
});

// Animación de secciones al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  function checkSections() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkSections);
  checkSections(); // Para mostrar las secciones que ya están visibles al cargar
});
