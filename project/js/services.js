// Services functionality
document.addEventListener('DOMContentLoaded', () => {
  const servicesGrid = document.querySelector('.services-grid');
  
  // Populate services
  servicesData.forEach((service, index) => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card', 'reveal');
    serviceCard.innerHTML = `
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
    `;
    servicesGrid.appendChild(serviceCard);
  });
});