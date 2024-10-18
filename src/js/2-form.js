const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const textInput = document.querySelector('textarea');

const localStorageText = 'user-message';
const localStorageEmail = 'user-email';

const inputEmail = form.elements.email;
const textArea = form.elements.message;

input.addEventListener('focus', () => {
  input.placeholder = 'Type area';
});
input.addEventListener('blur', () => {
  input.placeholder = '';
});

form.addEventListener('submit', submitBtn);

input.addEventListener('input', event => {
  localStorage.setItem(localStorageEmail, event.target.value);
});

textInput.addEventListener('input', event => {
  localStorage.setItem(localStorageText, event.target.value);
});
textArea.value = localStorage.getItem(localStorageText) ?? '';
inputEmail.value = localStorage.getItem(localStorageEmail) ?? '';

function submitBtn(event) {
  event.preventDefault();
  const submitForm = event.target;
  const email = submitForm.elements.email.value.trim();
  const message = submitForm.elements.message.value.trim();
  if (email === '' || message === '') {
    return alert('Email field must be filled in');
  }
  const userData = {
    email,
    message,
  };
  console.log(userData);
  localStorage.removeItem(localStorageEmail);
  localStorage.removeItem(localStorageText);
  form.reset();
}
