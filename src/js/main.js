"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const numberGlass = document.querySelector('.glass__number--js');
const glassAdd = document.querySelector('.button-glass--add--js');
const glassRemove = document.querySelector('.button-glass--remove--js');
const waterAlert = document.querySelector('.button-wrap__alert--js');
let number = 0;

glassAdd.addEventListener('click', (e) => {
  if (number < 11) {
    numberGlass.innerHTML = number++;
  }
  else {
    waterAlert.innerHTML = 'za dużo';
  }
}
);


glassRemove.addEventListener('click', (e) => {
  if (number > 0) {
    numberGlass.innerHTML = number--;
  }
  else {
    waterAlert.innerHTML = 'mniej się nie da!';
  }
}
);



