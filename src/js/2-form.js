const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.form-email');
const textareaMessage = document.querySelector('.form-message');

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  inputEmail.value = savedData.email;
  textareaMessage.value = savedData.message;

  formData.email = savedData.email
  formData.message = savedData.message
}

form.addEventListener('input', () => {
  formData.email = inputEmail.value.trim();
  formData.message = textareaMessage.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!(inputEmail.value.trim() && textareaMessage.value.trim())) {
    alert('Fill please all fields');
    return;
  }

  console.log({
    email: inputEmail.value.trim(),
    message: textareaMessage.value.trim(),
  });
  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
});
