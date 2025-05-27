// Portfolio functionality
document.addEventListener('DOMContentLoaded', () => {
  const portfolioFilter = document.querySelector('.portfolio-filter');
  const portfolioGrid = document.querySelector('.portfolio-grid');
  
  // Get unique categories
  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];
  
  // Populate filter buttons
  categories.forEach(category => {
    const button = document.createElement('button');
    button.classList.add('filter-btn');
    if (category === 'All') button.classList.add('active');
    button.textContent = category;
    button.dataset.category = category;
    portfolioFilter.appendChild(button);
  });
  
  // Populate portfolio items
  function renderPortfolioItems(items) {
    portfolioGrid.innerHTML = '';
    
    items.forEach((item, index) => {
      const portfolioItem = document.createElement('div');
      portfolioItem.classList.add('portfolio-item', 'reveal');
      portfolioItem.dataset.category = item.category;
      
      portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="portfolio-image">
        <div class="portfolio-overlay">
          <h3 class="portfolio-title">${item.title}</h3>
          <p class="portfolio-category">${item.category}</p>
          <a href="#" class="portfolio-link">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
          </a>
        </div>
      `;
      
      portfolioGrid.appendChild(portfolioItem);
    });
    
    // Re-initialize reveal animations
    initRevealAnimations();
  }
  
  // Initial render
  renderPortfolioItems(portfolioData);
  
  // Filter functionality
  portfolioFilter.addEventListener('click', e => {
    if (e.target.classList.contains('filter-btn')) {
      const category = e.target.dataset.category;
      
      // Update active button
      portfolioFilter.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      
      // Filter items
      const filteredItems = category === 'All' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === category);
      
      renderPortfolioItems(filteredItems);
    }
  });
});