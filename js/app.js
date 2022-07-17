const input = document.querySelector('input');

const email = /^([a-z\d\.-]+)@([a-z-]+)\.([a-z]{2,8})$/;

function validate(field, regex) {
    const error = document.querySelector('.error');
    const errorIcon = document.querySelector('.danger');
    if (regex.test(field.value)) {
        error.textContent = 'Email is valid'
        error.classList.add('valid')
        errorIcon.classList.add('hidden')
    } else {
        error.textContent = 'Please provide a valid email'
        errorIcon.classList.remove('hidden')
    }
}

input.addEventListener('input', (e) => {
    validate(e.target, email);
})