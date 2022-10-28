const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const textareaInput = document.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
const STORAGE_VALUE = {};

populateInput();

formEl.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', onEmailInput);
textareaInput.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {
  evt.preventDefault();
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

    emailInput.value = parseInput.email;
    textareaInput.value = parseInput.message;
  }
}
