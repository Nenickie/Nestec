
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.menu-icon');
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle mobile menu on icon click
  if (menuIcon && mobileMenu) {
    menuIcon.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside the menu and icon
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuIcon.contains(e.target)) {
      mobileMenu.classList.remove('active');
    }
  });

  // Close menu when a nav link is clicked (for better UX)
  const navLinks = mobileMenu.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });

  // Optional: Reset menu visibility on larger screens
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      mobileMenu.classList.remove('active');
    }
  });
});
