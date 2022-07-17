const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const onSpanChange = function (event) {
  span.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    span.textContent = 'Anonymous';
  }
};

input.addEventListener('input', onSpanChange);
