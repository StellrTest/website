const button = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar-menu');

button.addEventListener('click', () => {
  navbar.classList.toggle('navbar-menu-active');
  button.classList.toggle('hamburger-menu-active');
});
