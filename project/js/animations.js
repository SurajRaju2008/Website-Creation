// Animation functionality
document.addEventListener('DOMContentLoaded', () => {
  // Initialize reveal animations
  initRevealAnimations();
  
  // Set body overflow back to auto after the hero section loads
  setTimeout(() => {
    document.body.style.overflow = 'auto';
  }, 1000);
});

function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
  
  // Add stagger children class to grid containers
  document.querySelectorAll('.services-grid, .portfolio-grid, .about-features').forEach(grid => {
    grid.classList.add('stagger-children');
  });
}