const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const render = ingredients.map((el) => {
  const ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.textContent = el;

  return ingredient;
});
console.log('render: ', ...render)

ingredientsEl.append(...render);
