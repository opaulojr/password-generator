import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayHelpTextEl = document.getElementById('help-text');
const displayPasswordEl = document.getElementById('password');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayHelpTextEl.style.display = 'flex';
  displayPasswordEl.innerHTML = randomPassword;
  displayPasswordEl.style.display = 'flex';
});

displayPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  displayHelpTextEl.innerHTML = 'copied';
  displayHelpTextEl.style.color = '#8ff0a4';
  setTimeout(() => {
    displayHelpTextEl.innerHTML = 'click to copy';
    displayHelpTextEl.style.color = '#fff';
  }, 2000);
});
