let burger = document.querySelector('.js-burger');
let nav = document.querySelector('.js-nav');
let nav2 = document.querySelector('.js-nav2');
let navClose = document.querySelector('.js-nav-close');
let navOpen = document.querySelector('.js-nav-open');

burger.addEventListener('click', () => {
  if (nav.classList.contains('left-0')) {
    nav.classList.remove('left-0');
    nav.classList.add('-left-full');
    nav2.classList.remove('bg-light');
    navClose.classList.add('hidden');
    navOpen.classList.remove('hidden');
  } else {
    nav.classList.add('left-0');
    nav.classList.remove('-left-full');
    nav2.classList.add('bg-light');
    navClose.classList.remove('hidden');
    navOpen.classList.add('hidden');
  }
});
