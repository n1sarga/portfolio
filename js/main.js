// Mobile Navbar Toggle
const toggleButton = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Animate skill bars on scroll
const skills = document.querySelectorAll('.skill-fill');

function animateSkills() {
  const triggerBottom = window.innerHeight * 0.85;
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if (skillTop < triggerBottom) {
      skill.style.width = skill.getAttribute('data-level');
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
