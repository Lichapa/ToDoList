/* eslint-disable no-restricted-syntax */
import './style.css';
import completed  from './interactive.js';

const toDoList = document.querySelector('.toDoList');
const checkBox = document.querySelector('.check-box');

toDoList.addEventListener('change', completed);

function saveTasks(toDo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(toDo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function todo() {
  const toDoObjects = [
    {
      task: 'Clean the house',
      completed: false,
    },
    {
      task: 'sleep',
      completed: false,
    },
    {
      task: 'Study',
      completed: false,
    },
  ];

  if (localStorage.getItem('todos') === null) {  
  let toDoListItems = '';
  for (const toDo of toDoObjects) {
      if (toDo.completed === true) {
      toDoListItems += `<li class='task flex-end content completed'>
    <div> <input type='checkbox' class='check-box' checked> ${toDo.task}</div> <img class="icons" src="../img/threedots.png" alt="Circular arrow"> </li>`;
    } else {
      toDoListItems += `<li class='task flex-end content'>
    <div> <input type='checkbox' class='check-box'> ${toDo.task}</div> <img class="icons" src="../img/threedots.png" alt="Circular arrow"> </li>`;
    }
    saveTasks(toDo);
  }
  toDoList.innerHTML = toDoListItems;
  } else {
    loadTodo();
  }  
}

function loadTodo() {
  let toDoObjects;
  
  // Check if we have items in local storage
  if (localStorage.getItem('todos') === null) {
    toDoObjects = [];
  } else {
    toDoObjects = JSON.parse(localStorage.getItem('todos'));
  }

  let toDoListItems = '';
  for (const toDo of toDoObjects) {
    if (toDo.completed === true) {
      toDoListItems += `<li class='task flex-end content completed'>
    <div> <input type='checkbox' class='check-box' checked> ${toDo.task}</div> <img class="icons" src="../img/threedots.png" alt="Circular arrow"> </li>`;
    } else {
      toDoListItems += `<li class='task flex-end content'>
    <div> <input type='checkbox' class='check-box'> ${toDo.task}</div> <img class="icons" src="../img/threedots.png" alt="Circular arrow"> </li>`;
    }
    
  }
  toDoList.innerHTML = toDoListItems;
}

document.addEventListener('DOMContentLoaded', todo);