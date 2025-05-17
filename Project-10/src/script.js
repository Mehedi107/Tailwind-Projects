'use strict';

// On page load or when changing themes
document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
);

const btnToggleTheme = document.querySelector('#theme-toggle');
const html = document.documentElement;

btnToggleTheme.addEventListener('click', function () {
  html.classList.toggle('dark');

  // Update `localStorage` based on the current theme
  if (html.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
});
