
const form = document.getElementsByClassName('contact-form')[0];
const ourEmail = document.getElementsByClassName('at')[0];
const errorMessage = document.getElementsByClassName('error-message')[0];


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (ourEmail.value === ourEmail.value.toLowerCase()) {
    form.submit();
  } else {
    ourEmail.focus();
    errorMessage.innerHTML =
      "The form in not sent, Please enter lowercase email look likes above!";
    ourEmail.value = ourEmail.value.toLowerCase();
  }
});

