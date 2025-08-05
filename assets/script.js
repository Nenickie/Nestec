document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.menu-icon');
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle mobile menu on icon click
  if (menuIcon && mobileMenu) {
    menuIcon.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnIcon = menuIcon.contains(e.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
      mobileMenu.classList.remove('active');
    }
  });

  // Optional: Ensure correct visibility state on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      mobileMenu.classList.remove('active');
    }
  });
});
