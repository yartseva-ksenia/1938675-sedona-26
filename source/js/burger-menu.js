let burger = document.querySelector('.navigation__toggle');
let menu = document.querySelector('.navigation__list');

menu.classList.remove('navigation__list--nojs')

burger.onclick = function () {
  burger.classList.toggle('navigation__toggle--cross');
  menu.classList.toggle('navigation__list--open');
};
