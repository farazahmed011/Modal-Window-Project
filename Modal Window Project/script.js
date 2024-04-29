'use strict';

const hidden = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const modal = document.querySelectorAll('.show-modal');

// console.log(modal);

const openmodal = function () {
  //   console.log('Button Clicked');
  hidden.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closemodel = function () {
  hidden.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < modal.length; i++)
  modal[i].addEventListener('click', openmodal);

// function () {
//     console.log('Button Clicked!!!');
//     hidden.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
close.addEventListener('click', closemodel);
//  function () {
//   hidden.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

overlay.addEventListener('click', closemodel);
// function () {
//   hidden.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

document.addEventListener('keydown', function (e) {
  //     console.log('A Key is Pressed:!!');
  //   console.log(e.key);
  if (e.key === 'Escape' && !hidden.classList.contains('hidden')) {
    //   console.log('Escape Key is pressed!!!');
    closemodel();
  }
});
