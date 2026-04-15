const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if ((current === '' || current === 'index.html') && href === 'index.html') link.classList.add('active');
  if (href === current) link.classList.add('active');
});

const yearSpan = document.querySelector('[data-year]');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const toTop = document.querySelector('.to-top');
if (toTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) toTop.classList.add('visible');
    else toTop.classList.remove('visible');
  });
}
