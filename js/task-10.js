function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elements = document.querySelectorAll('#controls *');
const input = elements[0];
const create = elements[1];
const destroy = elements[2];
const boxesEl = document.querySelector('#boxes');

const createBoxes = function () {
  const render = [];
  const boxesCount = input.value;
  let width = 27;
  let height = 27;

  for (let i = 0; i < boxesCount; i++) {
    width += Math.ceil(width * 0.1);
    height += Math.ceil(height * 0.1);
    const box = document.createElement('div');
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = getRandomHexColor();
    render.push(box);
  }

  boxesEl.append(...render);
};

const destroyBoxes = function () {
  boxesEl.innerHTML = '<div id="boxes"></div>';
};

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);
