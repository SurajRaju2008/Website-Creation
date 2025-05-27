// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  // Error message elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const messageError = document.getElementById('messageError');
  
  // Form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  
  // Validation functions
  function validateName(name) {
    if (name.trim() === '') {
      nameError.textContent = 'Name is required';
      return false;
    }
    nameError.textContent = '';
    return true;
  }
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      emailError.textContent = 'Please enter a valid email address';
      return false;
    }
    emailError.textContent = '';
    return true;
  }
  
  function validatePhone(phone) {
    if (phone.trim() !== '') {
      const regex = /^[\d\s\-\(\)]+$/;
      if (!regex.test(phone)) {
        phoneError.textContent = 'Please enter a valid phone number';
        return false;
      }
    }
    phoneError.textContent = '';
    return true;
  }
  
  function validateMessage(message) {
    if (message.trim() === '') {
      messageError.textContent = 'Message is required';
      return false;
    }
    messageError.textContent = '';
    return true;
  }
  
  // Input event listeners for real-time validation
  nameInput.addEventListener('input', () => {
    validateName(nameInput.value);
  });
  
  emailInput.addEventListener('input', () => {
    validateEmail(emailInput.value);
  });
  
  phoneInput.addEventListener('input', () => {
    validatePhone(phoneInput.value);
  });
  
  messageInput.addEventListener('input', () => {
    validateMessage(messageInput.value);
  });
  
  // Form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameValid = validateName(nameInput.value);
    const emailValid = validateEmail(emailInput.value);
    const phoneValid = validatePhone(phoneInput.value);
    const messageValid = validateMessage(messageInput.value);
    
    if (nameValid && emailValid && phoneValid && messageValid) {
      // Simulate form submission
      const submitButton = contactForm.querySelector('.btn-submit');
      submitButton.innerHTML = `
        <span>Sending...</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-2"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
      `;
      submitButton.disabled = true;
      
      setTimeout(() => {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Reset form after 5 seconds
        setTimeout(() => {
          contactForm.reset();
          contactForm.style.display = 'flex';
          formSuccess.style.display = 'none';
          submitButton.innerHTML = `
            <span>Send Message</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
          `;
          submitButton.disabled = false;
        }, 5000);
      }, 1500);
    }
  });
});