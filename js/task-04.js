const counterValue = document.querySelector('#value');
const decr = document.querySelector('#counter :first-child');
const incr = document.querySelector('#counter :last-child');

let value = 0;

const add = function () {
  value += 1;
  counterValue.textContent = value;
};

const min = function () {
  value -= 1;
  counterValue.textContent = value;
};

decr.addEventListener('click', min);
incr.addEventListener('click', add);
