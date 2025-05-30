// About section functionality
document.addEventListener('DOMContentLoaded', () => {
  const aboutFeaturesList = document.querySelector('.about-features');
  
  // Populate features
  aboutFeatures.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.classList.add('about-feature');
    featureItem.innerHTML = `
      <span class="feature-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </span>
      <span>${feature}</span>
    `;
    aboutFeaturesList.appendChild(featureItem);
  });
});