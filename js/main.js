!function(n){var c={};function e(r){if(c[r])return c[r].exports;var t=c[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,e),t.l=!0,t.exports}e.m=n,e.c=c,e.d=function(n,c,r){e.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,c){if(1&c&&(n=e(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var t in n)e.d(r,t,function(c){return n[c]}.bind(null,t));return r},e.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(c,"a",c),c},e.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst numberGlass = document.querySelector('.glass__number--js');\r\nconst glassAdd = document.querySelector('.button-glass--add--js');\r\nconst glassRemove = document.querySelector('.button-glass--remove--js');\r\nconst waterAlert = document.querySelector('.button-wrap__alert--js');\r\nlet number = 0;\r\n\r\nglassAdd.addEventListener('click', (e) => {\r\n  if (number < 11) {\r\n    numberGlass.innerHTML = number++;\r\n  }\r\n  else {\r\n    waterAlert.innerHTML = 'za dużo';\r\n  }\r\n}\r\n);\r\n\r\n\r\nglassRemove.addEventListener('click', (e) => {\r\n  if (number > 0) {\r\n    numberGlass.innerHTML = number--;\r\n  }\r\n  else {\r\n    waterAlert.innerHTML = 'mniej się nie da!';\r\n  }\r\n}\r\n);\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5cclxuY29uc3QgbnVtYmVyR2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xhc3NfX251bWJlci0tanMnKTtcclxuY29uc3QgZ2xhc3NBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWdsYXNzLS1hZGQtLWpzJyk7XHJcbmNvbnN0IGdsYXNzUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1nbGFzcy0tcmVtb3ZlLS1qcycpO1xyXG5jb25zdCB3YXRlckFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi13cmFwX19hbGVydC0tanMnKTtcclxubGV0IG51bWJlciA9IDA7XHJcblxyXG5nbGFzc0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKG51bWJlciA8IDExKSB7XHJcbiAgICBudW1iZXJHbGFzcy5pbm5lckhUTUwgPSBudW1iZXIrKztcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB3YXRlckFsZXJ0LmlubmVySFRNTCA9ICd6YSBkdcW8byc7XHJcbiAgfVxyXG59XHJcbik7XHJcblxyXG5cclxuZ2xhc3NSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChudW1iZXIgPiAwKSB7XHJcbiAgICBudW1iZXJHbGFzcy5pbm5lckhUTUwgPSBudW1iZXItLTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB3YXRlckFsZXJ0LmlubmVySFRNTCA9ICdtbmllaiBzacSZIG5pZSBkYSEnO1xyXG4gIH1cclxufVxyXG4pO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);