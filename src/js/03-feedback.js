import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};

onFormDataRestoring();
form.addEventListener('input', throttle(onFormSent, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormSent(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormDataRestoring() {
  const savedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  try {
    if (savedFormData) {
      formData = savedFormData;
      email.value = formData.email || '';
      message.value = formData.message || '';
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
