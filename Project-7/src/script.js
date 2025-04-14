'use strict';
const btnMenu = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', function () {
  btnMenu.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});
