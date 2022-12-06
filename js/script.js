const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});