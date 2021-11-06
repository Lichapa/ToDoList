// import { formatters } from "stylelint";
import completed, { getTaskLS } from './interactive.js';

export function myList(task, completed = false, index, list) {
  const todo = { task, completed, index };
  list.push(todo);
  return list;
}

export default function addtodoItem(e) {
  e.preventDefault();
  const todoInput = document.getElementById('addlist').value;
  const toDoObjects = getTaskLS();
  if (todoInput === '') {
    return;
  }
  myList(todoInput, false, toDoObjects.length, toDoObjects);
  localStorage.setItem('todos', JSON.stringify(toDoObjects));

  window.location.reload();
  document.getElementById('addlist').value = '';
}

function arrangeIndex(toDoObjects) {
  toDoObjects.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(toDoObjects));
}

function removeLocalTodos(e) {
  const task = e.target;
  const toDoObjects = getTaskLS();

  let todoIndex = task.parentElement.parentElement.parentElement.id;
  todoIndex = +todoIndex; // Converting to number
  toDoObjects.forEach((element, x) => {
    if (element.index === todoIndex) {
      toDoObjects.splice(x, 1);
      localStorage.setItem('todos', JSON.stringify(toDoObjects));
    }
  });
  arrangeIndex(toDoObjects);
  window.location.reload();
}

export function clearCompleted(e) {
  e.preventDefault();
  let toDoObjects = getTaskLS();
  toDoObjects = toDoObjects.filter((task) => task.completed === false);
  localStorage.setItem('todos', JSON.stringify(toDoObjects));
  arrangeIndex(toDoObjects);
  window.location.reload();
}

function saveTask(e) {
  const newTask = e.target.value;
  let taskID = e.target.parentElement.parentElement.parentElement.id;
  taskID = +taskID; // converting to number.

  if (e.key === 'Enter') {
    const toDoObjects = getTaskLS();
    toDoObjects.forEach((element) => {
      if (element.index === taskID) {
        element.task = newTask;
      }
    });
    localStorage.setItem('todos', JSON.stringify(toDoObjects));
    window.location.reload();
  }
}

export function editTask(e) {
  let item = e.target;
  const p = item.parentElement.parentElement.parentElement.children[0].children[1];
  item = item.parentElement.parentElement.parentElement.children[0].children[1].textContent;
  item = item.trim('');
  const itemInput = document.createElement('input');
  itemInput.type = 'text';
  itemInput.value = item;
  itemInput.classList.add('edit');
  itemInput.addEventListener('keypress', saveTask);
  itemInput.addEventListener('click', saveTask);
  p.appendChild(itemInput);
  p.children[0].remove();
}

export function manipulate(e) {
  const item = e.target;

  if (item.classList[0] === 'trashBtn') {
    const todo = item.parentElement;
    removeLocalTodos(e);
    todo.remove();
  }

  if (item.classList[0] === 'editBtn') {
    editTask(e);
  }

  if (item.classList[0] === 'check-box') {
    completed(e);
  }
}