// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(navLinks.classList.contains('active')) navLinks.classList.remove('active');
  });
});
