// Animate skill bars on scroll
document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".skill-fill");
  
  skillFills.forEach(fill => {
    const level = fill.dataset.level;
    fill.style.width = level;
  });
});
