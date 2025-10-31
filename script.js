// Animación de scroll suave y efectos básicos
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10,10,30,0.95)';
  } else {
    header.style.background = 'rgba(10,10,30,0.8)';
  }
});
