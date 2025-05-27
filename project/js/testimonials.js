// Testimonials functionality
document.addEventListener('DOMContentLoaded', () => {
  const testimonialContainer = document.querySelector('.testimonial-container');
  const testimonialDots = document.querySelector('.testimonial-dots');
  const prevButton = document.querySelector('.testimonial-prev');
  const nextButton = document.querySelector('.testimonial-next');
  
  let activeIndex = 0;
  
  // Add quote icon
  const quoteIcon = document.createElement('div');
  quoteIcon.classList.add('testimonial-quote');
  quoteIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
  `;
  testimonialContainer.appendChild(quoteIcon);
  
  // Populate testimonials
  testimonialData.forEach((testimonial, index) => {
    // Create testimonial element
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');
    if (index === 0) testimonialElement.classList.add('active');
    
    testimonialElement.innerHTML = `
      <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
      <div class="testimonial-content">
        <p class="testimonial-text">"${testimonial.quote}"</p>
        <div class="testimonial-info">
          <h4 class="testimonial-author">${testimonial.name}</h4>
          <p class="testimonial-company">${testimonial.business}</p>
        </div>
      </div>
    `;
    
    testimonialContainer.appendChild(testimonialElement);
    
    // Create dot
    const dot = document.createElement('button');
    dot.classList.add('testimonial-dot');
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
    testimonialDots.appendChild(dot);
  });
  
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.testimonial-dot');
  
  // Function to show testimonial at index
  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    // Update dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show active testimonial
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    
    activeIndex = index;
  }
  
  // Next testimonial
  function nextTestimonial() {
    const newIndex = (activeIndex + 1) % testimonials.length;
    showTestimonial(newIndex);
  }
  
  // Previous testimonial
  function prevTestimonial() {
    const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(newIndex);
  }
  
  // Event listeners
  nextButton.addEventListener('click', nextTestimonial);
  prevButton.addEventListener('click', prevTestimonial);
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showTestimonial(index);
    });
  });
  
  // Auto-rotate testimonials
  let testimonialInterval = setInterval(nextTestimonial, 6000);
  
  // Pause auto-rotate on hover
  testimonialContainer.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
  });
  
  // Resume auto-rotate on mouse leave
  testimonialContainer.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 6000);
  });
});