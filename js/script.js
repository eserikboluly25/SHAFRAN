// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after a link is tapped
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Subtle header background shift on scroll
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 8
      ? '0 8px 24px rgba(0,0,0,0.25)'
      : 'none';
  };
  document.addEventListener('scroll', onScroll, { passive: true });
}