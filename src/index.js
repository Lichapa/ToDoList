/* eslint-disable no-restricted-syntax */
import './style.css';
import {completed} from './interactive.js';

const checkBox = document.querySelector('.check-box');

toDoList.addEventListener('click', completed);

(function () {
  const toDoList = document.querySelector('.toDoList');

  const toDoObjects = [
    {
      task: 'Clean the house',
      complete: true,
    },
    {
      task: 'sleep',
      complete: true,
    },
    {
      task: 'Study',
      complete: true,
    },
  ];

  let toDoListItems = '';
  for (const toDo of toDoObjects) {
    toDoListItems += `<li class='task flex-end content'>
    <div> <input type='checkbox' class='check-box'> ${toDo.task}</div> <img class="icons" src="../img/threedots.png" alt="Circular arrow"> </li>`;
  }

  toDoList.innerHTML = toDoListItems;
}());