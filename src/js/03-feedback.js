import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
// console.log(form);
// console.log(name);
// console.log(message);

form.addEventListener('input', event => {
  console.log(event.currentTarget);
  // localStorage.setItem(LOCALSTORAGE_KEY, event.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});
