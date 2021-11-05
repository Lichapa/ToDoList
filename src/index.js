/* eslint-disable no-restricted-syntax */
import './style.css';
import { getTaskLS } from './interactive.js';
import addtodoItem, { manipulate, clearCompleted } from './addRemove.js';

const toDoList = document.querySelector('.toDoList');
const toDoBtn = document.querySelector('.btnToDo');
const clearBtn = document.querySelector('.btn-clear');

toDoList.addEventListener('click', manipulate);
toDoBtn.addEventListener('click', addtodoItem);
clearBtn.addEventListener('click', clearCompleted);

function loadTodo() {
  const toDoObjects = getTaskLS();
  let toDoListItems = '';
  for (const toDo of toDoObjects) {
    if (toDo.completed === true) {
      toDoListItems += `<li class='task flex-end' id='${toDo.index}'>
    <div class='content completed flex-end' > 
    <input type='checkbox' class='check-box' checked><p> ${toDo.task}</p></div>
    <div class='icons'>
    <button class='editBtn iconBtn '>
    <i class="editBtn fas fa-pen btn  "></i>
    </button>
    <button class='trashBtn iconBtn ' >
    <i class="trashBtn fas fa-trash btn"></i> 
    </button>
    </div></li>`;
    } else {
      toDoListItems += `<li class='task flex-end' id='${toDo.index}'>
    <div class='content flex-end ' > 
    <input type='checkbox' class='check-box'><p> ${toDo.task}</p></div>
    <div class='icons'>
    <button class='editBtn iconBtn ' >
    <i class="editBtn fas fa-pen btn"></i>
    </button>
    <button class='iconBtn trashBtn' >
    <i class="trashBtn fas fa-trash btn"></i> 
    </button>
    </div>
    </li>`;
    }
  }
  toDoList.innerHTML = toDoListItems;
}

document.addEventListener('DOMContentLoaded', loadTodo);