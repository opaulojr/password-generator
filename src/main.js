import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('p');
const message = document.querySelector('h3');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  message.style.display = 'none';
  displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  message.style.display = 'block';
  setTimeout(() => {
    message.style.display = 'none';
  }, 3000);
});
