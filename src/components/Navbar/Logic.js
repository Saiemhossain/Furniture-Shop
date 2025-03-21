export const handleNavToggle = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOpen = document.querySelector('.open');
  const menuClose = document.querySelector('.close');

  // Ensure proper initial display states
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';

  menuOpen.addEventListener('click', () => {
    mobileMenu.style.left = '0';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
  });

  menuClose.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
  });

  const navLinks = document.querySelectorAll('.mobile-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.left = '-100%';
      menuOpen.style.display = 'block';
      menuClose.style.display = 'none';
    });
  });
};
