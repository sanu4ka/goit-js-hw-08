import throttle from 'lodash.throttle';
let form = document.querySelector('.feedback-form');
let name = document.querySelector('input');
let message = document.querySelector('textarea');

// console.log(form);
// console.log(name);
// console.log(message);

form.addEventListener('click', event => {
  event.preventDefault();
});

name.addEventListener('click', event => {
  console.log(event.target.value);
});
