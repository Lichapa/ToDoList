/* eslint-disable no-restricted-syntax */
import './style.css';

(function todo() {
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
    toDoListItems += `<li class='task flex-end content completed'>
    <div> <input type='checkbox' class='check-box'> ${toDo.task}</div> 
    <i class="fas fa-ellipsis-v"></i> </li>`;
  }

  toDoList.innerHTML = toDoListItems;
}());