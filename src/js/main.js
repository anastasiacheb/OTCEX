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

let selectButton = document.querySelector('.js-select-btn');
let selectContainer = document.querySelector('.js-select-cnt');
let selectOverlay = document.querySelector('.js-select-overlay');
let selectClose = document.querySelector('.js-select-close');
let selectVariants = document.querySelectorAll('.js-select-variant');
let selectText = document.querySelector('.js-select-text');

selectButton.addEventListener('click', () => {
  selectContainer.classList.toggle('hidden');
  selectOverlay.classList.toggle('hidden');

  nav.classList.remove('left-0');
  nav.classList.add('-left-full');
  nav2.classList.remove('bg-light');
  navClose.classList.add('hidden');
  navOpen.classList.remove('hidden');
});

selectClose.addEventListener('click', () => {
  selectContainer.classList.add('hidden');
  selectOverlay.classList.add('hidden');
});

for (let i = 0; i < selectVariants.length; i++) {
  selectVariants[i].addEventListener('click', () => {
    selectContainer.classList.add('hidden');
    selectOverlay.classList.add('hidden');
    selectText.textContent = selectVariants[i].textContent;
  });
}

let infoBnt = document.querySelectorAll('.js-info-btn');
let infoOverlay = document.querySelectorAll('.js-info-overlay');
let infoCnt = document.querySelectorAll('.js-info-cnt');
let infoClose = document.querySelectorAll('.js-info-close');

for (let i = 0; i < infoBnt.length; i++) {
  infoBnt[i].addEventListener('click', () => {
    infoOverlay[i].classList.remove('hidden');
    infoCnt[i].classList.remove('hidden');
  });
}

for (let i = 0; i < infoClose.length; i++) {
  infoClose[i].addEventListener('click', () => {
    infoOverlay[i].classList.add('hidden');
    infoCnt[i].classList.add('hidden');
  });
}
