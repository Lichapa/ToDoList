/* eslint-disable no-restricted-syntax */
import './style.css';
import completed, { saveTasks } from './interactive.js';

const toDoList = document.querySelector('.toDoList');

toDoList.addEventListener('change', completed);

function loadTodo() {
  let toDoObjects;

  if (localStorage.getItem('todos') === null) {
    toDoObjects = [];
  } else {
    toDoObjects = JSON.parse(localStorage.getItem('todos'));
  }

  let toDoListItems = '';
  for (const toDo of toDoObjects) {
    if (toDo.completed === true) {
      toDoListItems += `<li class='task flex-end'>
    <div class='content completed flex-end' id='${toDo.index}'> <input type='checkbox' class='check-box' checked><p> ${toDo.task}</p></div><i class="fas fa-ellipsis-v"></i>  </li>`;
    } else {
      toDoListItems += `<li class='task flex-end '>
    <div class='content flex-end ' id='${toDo.index}'> <input type='checkbox' class='check-box'><p> ${toDo.task}</p></div> <i class="fas fa-ellipsis-v"></i> </li>`;
    }
  }
  toDoList.innerHTML = toDoListItems;
}

function todo() {
  const toDoObjects = [
    {
      task: 'Clean the house',
      completed: false,
      index: 0,
    },
    {
      task: 'sleep',
      completed: true,
      index: 1,
    },
    {
      task: 'Study',
      completed: false,
      index: 2,
    },
  ];

  if (localStorage.getItem('todos') === null) {
    let toDoListItems = '';
    for (const toDo of toDoObjects) {
      if (toDo.completed === true) {
        toDoListItems += `<li class='task flex-end'>
        <div class='content completed flex-end' id='${toDo.index}'> <input type='checkbox' class='check-box' checked>
        <p> ${toDo.task}</p></div><i class="fas fa-ellipsis-v"></i></li>`;
      } else {
        toDoListItems += `<li class='task flex-end '>
        <div class='content flex-end' id='${toDo.index}'> <input type='checkbox' class='check-box'><p> ${toDo.task} </p>
        </div><i class="fas fa-ellipsis-v"></i></li>`;
      }
      saveTasks(toDo);
    }
    toDoList.innerHTML = toDoListItems;
  } else {
    loadTodo();
  }
}

document.addEventListener('DOMContentLoaded', todo);