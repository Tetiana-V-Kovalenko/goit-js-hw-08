import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const textareaInput = document.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

let STORAGE_VALUE = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// if (localStorage.getItem(STORAGE_KEY)) {
//   STORAGE_VALUE = JSON.parse(localStorage.getItem(STORAGE_KEY));
// }
populateInput();

formEl.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', throttle(onEmailInput, 500));
textareaInput.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(STORAGE_VALUE);
  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}
function onEmailInput() {
  const savedEmail = emailInput.value;
  STORAGE_VALUE.email = savedEmail;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STORAGE_VALUE));
}
function onTextareaInput() {
  const savedMessage = textareaInput.value;
  STORAGE_VALUE.message = savedMessage;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STORAGE_VALUE));
}

function populateInput() {
  const savedInput = localStorage.getItem(STORAGE_KEY);

  if (savedInput) {
    const parseInput = JSON.parse(savedInput);

    emailInput.value = parseInput.email || '';
    textareaInput.value = parseInput.message || '';
  }
}
