// Intersection Observer for fade-in
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.2 });
faders.forEach(fader => observer.observe(fader));

// Projects Filter Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.project-card');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.target;
    projectCards.forEach(card => {
      card.style.display = (target === 'all' || card.dataset.type === target) ? 'block' : 'none';
    });
  });
});

// Theme Toggle
const toggleBtn = document.querySelector('.theme-toggle');
toggleBtn.addEventListener('click', () => document.body.classList.toggle('dark-mode'));
