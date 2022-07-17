const input = document.querySelector('#validation-input');

const onBlurValidation = function (event) {
  if (event.currentTarget.value.length < 6) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }

  if (event.currentTarget.value.length > 6) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
};

input.addEventListener('blur', onBlurValidation);
