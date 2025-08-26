// Smooth scroll offset (for sticky navbar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 70; // navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  });
});

// Animate skill bars
const skillFills = document.querySelectorAll('.skill-fill');
window.addEventListener('scroll', () => {
  skillFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      fill.style.width = fill.getAttribute('data-level');
    }
  });
});
