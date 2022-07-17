const catogoriesEl = document.querySelectorAll('h2');
const itemsEl = document.querySelectorAll('ul ul');

console.log('Number of categories: ', catogoriesEl.length);

for (let i = 0; i < catogoriesEl.length; i++) {
  console.log('Category: ', catogoriesEl[i].textContent);
  console.log('Elements: ', itemsEl[i].children.length);
}
