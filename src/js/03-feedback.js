import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const textareaInput = document.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
const saveInput = {};

populateInput();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener(
  'input',
  throttle(evt => {
    saveInput[evt.target.name] = evt.target.value;
    console.log(saveInput);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveInput));
  }, 500)
);

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  console.log(evt.currentTarget);

  localStorage.removeItem(STORAGE_KEY);
}

function populateInput() {
  const savedInput = localStorage.getItem(STORAGE_KEY);

  if (savedInput) {
    const parseInput = JSON.parse(savedInput);

    emailInput.value = parseInput.email || '';
    textareaInput.value = parseInput.message || '';
  }
}
