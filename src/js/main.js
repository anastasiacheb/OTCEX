AOS.init();

let burger = document.querySelector('.js-burger');
let nav = document.querySelector('.js-nav');
let nav2 = document.querySelector('.js-nav2');
let navClose = document.querySelector('.js-nav-close');
let navOpen = document.querySelector('.js-nav-open');
let navLinks = document.querySelectorAll('.js-nav-link');

function isMobile() {
  return window.innerWidth <= 768;
}

burger.addEventListener('click', () => {
  if (nav.classList.contains('left-0')) {
    nav.classList.remove('left-0');
    nav.classList.add('-left-full');
    nav2.classList.remove('bg-light');
    navClose.classList.add('hidden');
    navOpen.classList.remove('hidden');
    if (isMobile()) {
      document.body.style.overflow = '';
    }
  } else {
    nav.classList.add('left-0');
    nav.classList.remove('-left-full');
    nav2.classList.add('bg-light');
    navClose.classList.remove('hidden');
    navOpen.classList.add('hidden');
    document.body.style.overflow = 'hidden';
    if (isMobile()) {
      document.body.style.overflow = 'hidden';
    }
  }
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    nav.classList.remove('left-0');
    nav.classList.add('-left-full');
    nav2.classList.remove('bg-light');
    navClose.classList.add('hidden');
    navOpen.classList.remove('hidden');
    if (isMobile()) {
      document.body.style.overflow = '';
    }
  });
}

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

  if (isMobile()) {
    document.body.style.overflow = 'hidden';
  }
});

selectClose.addEventListener('click', () => {
  selectContainer.classList.add('hidden');
  selectOverlay.classList.add('hidden');

  if (isMobile()) {
    document.body.style.overflow = '';
  }
});

for (let i = 0; i < selectVariants.length; i++) {
  selectVariants[i].addEventListener('click', () => {
    selectContainer.classList.add('hidden');
    selectOverlay.classList.add('hidden');
    selectText.textContent = selectVariants[i].textContent;
  });
}

let modalClose = document.querySelectorAll('.js-modal-close');
let modalContent = document.querySelector('.js-modal-cont');
let modalOpen = document.querySelector('.js-modal-open');
let modalForm = document.querySelector('.js-modal-form');

modalForm.addEventListener('submit', (e) => {
  modalContent.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', () => {
    modalContent.classList.add('hidden');
    document.body.style.overflow = '';
  });
}

let cityContent = document.querySelector('.js-city-cont');
let cityGradient = document.querySelector('.js-city-grad');
let cityButton = document.querySelector('.js-city-btn');

let expanded = false;

cityButton.addEventListener('click', () => {
  if (!expanded) {
    cityContent.style.maxHeight = cityContent.scrollHeight + 'px';
    cityGradient.classList.add('hidden');
    cityButton.textContent = 'Скрыть';
  } else {
    cityContent.style.maxHeight = '360px';
    cityGradient.classList.remove('hidden');
    cityButton.textContent = 'Смотреть все города';
  }
  expanded = !expanded;
});

let accordionButton = document.querySelectorAll('.js-acc-btn');
let accordionContent = document.querySelectorAll('.js-acc-cont');
let accordionIcon = document.querySelectorAll('.js-acc-icon');

for (let i = 0; i < accordionButton.length; i++) {
  accordionButton[i].addEventListener('click', () => {
    for (let j = 0; j < accordionButton.length; j++) {
      if (i === j) {
        if (accordionContent[j].style.maxHeight) {
          accordionContent[j].style.maxHeight = null;
          accordionIcon[j].classList.remove('rotate-180');
        } else {
          accordionContent[j].style.maxHeight = accordionContent[j].scrollHeight + 'px';
          accordionIcon[j].classList.add('rotate-180');
        }
      } else {
        accordionContent[j].style.maxHeight = null;
        accordionIcon[j].classList.remove('rotate-180');
      }
    }
  });
}

const mapContainer = document.getElementById('map-container');

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      mapContainer.innerHTML = `<iframe
        class="w-full h-full border-0"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad284bbff5b8ebbe9d7affc31b3649a3f3530e5f7238b0760b74e14009429322a&source=constructor"
        title="карта"
        loading="lazy"
      ></iframe>`;
      observer.disconnect();
    }
  },
  { threshold: 0.1 }
);

observer.observe(mapContainer);

let infoBnt = document.querySelectorAll('.js-info-btn');
let infoOverlay = document.querySelectorAll('.js-info-overlay');
let infoCnt = document.querySelectorAll('.js-info-cnt');
let infoClose = document.querySelectorAll('.js-info-close');

for (let i = 0; i < infoBnt.length; i++) {
  infoBnt[i].addEventListener('click', () => {
    infoOverlay[i].classList.remove('hidden');
    infoCnt[i].classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
}

for (let i = 0; i < infoClose.length; i++) {
  infoClose[i].addEventListener('click', () => {
    infoOverlay[i].classList.add('hidden');
    infoCnt[i].classList.add('hidden');
    document.body.style.overflow = '';
  });
}
