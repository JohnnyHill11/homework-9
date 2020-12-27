const input = document.querySelector('.input');
const button = document.querySelector('.button');
let list = document.querySelector('.list');

function createElements (text) {
  let newElement = document.createElement('li');
  newElement.className = 'list-item';
  newElement.textContent = text;
  list.appendChild(newElement);
}

button.addEventListener('click',onButtonClick);

function onButtonClick() {
  (input.value === 'Введите ваше дело...' || input.value === '') ? 
  alert("Введите ваше дело!") :
  createElements(input.value);
  input.value = 'Введите ваше дело...';  
}

input.addEventListener('focus', () => input.value = '');

input.addEventListener('blur', () => {
  if(input.value === '')
  input.value = 'Введите ваше дело...';
});