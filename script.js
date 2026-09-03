document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Project Filter Functionality ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 2. Contact Form Submission Handling ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Feedback response
    formStatus.style.color = '#22c55e';
    formStatus.textContent = 'Thank you! Your message has been sent successfully.';

    // Clear form
    contactForm.reset();

    // Clear status after 5 seconds
    setTimeout(() => {
      formStatus.textContent = '';
    }, 5000);
  });
});