const form = document.getElementsByClassName('contact-form')[0];
const ourEmail = document.getElementsByClassName('at')[0];
const errorMessage = document.getElementsByClassName('error-message')[0];

form.addEventListener('click', (e) => {
  e.preventDefault();
  if (ourEmail.value === ourEmail.value.toLowerCase()) {
    form.submit();
  } else {
    ourEmail.focus();
    errorMessage.innerHTML = 'Email Can not contain Uppercase Letter!';
    ourEmail.value = ourEmail.value.toLowerCase();
    errorMessage.style.height = '10px';
  }
});
