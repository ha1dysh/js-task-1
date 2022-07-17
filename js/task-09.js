function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

const onColorChangeBtn = function () {
  let pickColor = getRandomHexColor()
  document.body.style.backgroundColor = `${pickColor}`
  span.textContent = `${pickColor}`
}

btn.addEventListener('click', onColorChangeBtn)
