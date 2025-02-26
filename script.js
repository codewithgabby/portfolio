// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  // Toggle the "open" class on the nav links menu
  navLinks.classList.toggle('open');
  // Swap the hamburger icon with an "X" (close icon)
  if (navLinks.classList.contains('open')) {
    navToggle.innerHTML = '&times;';  // X symbol
  } else {
    navToggle.innerHTML = '&#9776;';  // Hamburger menu symbol
  }
});

// (Optional) Close the mobile menu when a link is clicked (for better UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.innerHTML = '&#9776;';
    }
  });
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-theme');
}

// Dark Mode Toggle Function
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Save theme preference to localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
