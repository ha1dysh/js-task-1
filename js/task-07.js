const radio = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
radio.value = 16


const onRadioChange = function () {
  let value = radio.value;
  text.style.fontSize = value + 'px';
};

radio.addEventListener('input', onRadioChange);
