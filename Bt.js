// Smooth scrolling to anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 50;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  
  // Add functionality to hide and show the navigation menu on small screens
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');
  
  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
  });
  
