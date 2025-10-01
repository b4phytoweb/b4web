
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');
if (toggle) toggle.addEventListener('click', () => menu.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => {
  const p = location.pathname.split('/').pop() || 'index.html';
  if (a.getAttribute('href') === p) a.setAttribute('aria-current','page');
});
const themeBtn = document.querySelector('.theme-toggle');
const stored = localStorage.getItem('theme');
if (stored) document.documentElement.setAttribute('data-theme', stored);
themeBtn && themeBtn.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
