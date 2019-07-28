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

const date = new Date().toISOString().slice(0, 10);

const list = document.querySelector('.list--js');

glassAdd.addEventListener('click', (e) => {
  if (number < 11) {
    number++;
    numberGlass.innerHTML = number;
    localStorage.setItem(date, numberGlass.innerHTML);
  }
  else {
    waterAlert.innerHTML = 'za dużo';
  }
}
);


glassRemove.addEventListener('click', (e) => {
  if (number > 0) {
    number--;
    numberGlass.innerHTML = number;
    localStorage.setItem(date, numberGlass.innerHTML);
  }
  else {
    waterAlert.innerHTML = 'mniej się nie da!';
  }
}
);

console.log(localStorage.getItem(date));

if (localStorage.getItem(date) == undefined) {
  numberGlass.innerHTML = 'brak';
}

if (localStorage.getItem(date).length > 0) {
  numberGlass.innerHTML = localStorage.getItem(date);
}

for (var i = 0; i < localStorage.length; i++) {

  // set iteration key name
  var key = localStorage.key(i);

  // use key name to retrieve the corresponding value
  var value = localStorage.getItem(key);

  // console.log the iteration key and value
  console.log('Key: ' + key + ', Value: ' + value);
  list.innerHTML += `<li class="list__item"> ${key}<br> liczba szklanek: ${value}</li>`;
}


