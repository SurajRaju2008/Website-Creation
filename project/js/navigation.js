// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Create mobile nav element
  const mobileNav = document.createElement('div');
  mobileNav.classList.add('mobile-nav');
  document.body.appendChild(mobileNav);
  
  // Clone nav list for mobile
  const navList = document.querySelector('.nav-list');
  const mobileNavList = navList.cloneNode(true);
  mobileNavList.classList.add('mobile-nav-list');
  mobileNavList.querySelectorAll('.nav-link').forEach(link => {
    link.classList.add('mobile-nav-link');
  });
  mobileNav.appendChild(mobileNavList);
  
  // Handle scroll behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});