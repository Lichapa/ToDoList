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

  const todoIndex = task.parentElement.parentElement.parentElement.id;
  console.log(todoIndex);
  toDoObjects.forEach((element, x) => {
    if (element.index == todoIndex) {
      toDoObjects.splice(x, 1);
      localStorage.setItem('todos', JSON.stringify(toDoObjects));
    }
  });
  arrangeIndex(toDoObjects);
  window.location.reload();
}

export function manipulate(e) {
  const item = e.target;

  // Delete todo
  if (item.classList[0] === 'trashBtn') {
    const todo = item.parentElement;
    removeLocalTodos(e);
    todo.remove();
  }

  if (item.classList[0] === 'editBtn') {
    const a = 110;
    console.log(a);
  }

  if (item.classList[0] === 'check-box') {
    completed(e);
  }
}

export function clearCompleted(e){
  e.preventDefault();
  let toDoObjects = getTaskLS();
  toDoObjects = toDoObjects.filter((task) => task.completed === false);
  localStorage.setItem('todos', JSON.stringify(toDoObjects));
  arrangeIndex(toDoObjects);
  window.location.reload();
}
