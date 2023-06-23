const navModal = document.querySelector('.nav__mobile-container');
const navBtn = document.querySelector('.nav__mobile');
const navBtnLines = document.querySelector('.nav__mobile-line');
const htmlElement = document.documentElement;
const navListBtn = document.querySelectorAll('.nav__list--item-link');
console.log(navListBtn);
navBtn.addEventListener('click', function () {
  navBtn.classList.toggle('active');
  if (htmlElement.style.overflow === 'hidden') {
    htmlElement.style.overflow = 'auto';
  } else {
    htmlElement.style.overflow = 'hidden';
  }
});

navListBtn.forEach((element) => {
  console.log(element);
  element.addEventListener('click', function () {
    console.log('test');
    navBtn.classList.toggle('active');
    if (htmlElement.style.overflow === 'hidden') {
      htmlElement.style.overflow = 'auto';
    } else {
      htmlElement.style.overflow = 'hidden';
    }
  });
});
