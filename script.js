const subscribe = document.querySelector('.subscribe');
const success = document.querySelector('.success-page');
const email = document.getElementById('email');
const btn = document.getElementById('dismissBtn');
const userEmail = document.getElementById('userEmail');
const subscribeBtn = document.getElementById('subscribeBtn');
const input = document.querySelector('.input');
const errorMsg = document.querySelector('.error-message');


function isValidEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

subscribeBtn.addEventListener('click', function() {
    const emailValue = email.value;
    if (isValidEmail(emailValue)) {
        input.classList.remove('error');
        userEmail.textContent = emailValue;
        subscribe.classList.add('hidden');
        success.classList.remove('hidden');
        errorMsg.style.display = 'none';

        console.log("Valid email");
    } else {
        input.classList.add('error');
        errorMsg.style.display = 'block';
        return;
    }
});

dismissBtn.addEventListener('click', function() {
    success.classList.add('hidden');
    subscribe.classList.remove('hidden');
    email.value = '';
    input.classList.remove('error');
});

email.addEventListener('input', function() {
    input.classList.remove('error');
    errorMsg.style.display = 'none';
});