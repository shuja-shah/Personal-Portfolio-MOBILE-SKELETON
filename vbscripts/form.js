
const form = document.getElementsByClassName('contact-form')[0];
const email = document.getElementsByClassName('at')[0];
const errorMessage = document.getElementsByClassName('error-message')[0];


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    if (email.value == email.toLowerCase()) {
        e.preventDefault();
        form.submit();
    } else {
        errorMessage.innerHTML = 'The for is not sent! Please make the email lowercase!';
        email.focus();
    }
})
