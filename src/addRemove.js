// import { formatters } from "stylelint";
import { loadTodo } from ".";
import completed, { getTaskLS } from "./interactive";


export function myList(task, completed = false, index, list) {
  const todo = { task, completed, index };
  list.push(todo);
  return list;
}

export default function addtodoItem(e) {
 e.preventDefault();
  let todoInput = document.getElementById('addlist').value;
  let toDoObjects = getTaskLS();
    if (todoInput === '') {
      return;
    } else {
      myList(todoInput, false, toDoObjects.length, toDoObjects);
      localStorage.setItem('todos', JSON.stringify(toDoObjects));     
    }
    loadTodo();
    document.getElementById('addlist').value = '';
}

export function manipulate(e) {
  const item = e.target;
  //Delete todo
  if (item.classList[0] === "trashBtn") {
    const todo = item.parentElement.parentElement;
    removeLocalTodos(todo)
    todo.remove();
  }

  // Check task complete
  if (item.classList[0] === "editBtn") {
    // const todo = item.parentElement;
    let a = 110;
    console.log(a);    
  }

  if (item.classList[0] === "check-box") {
    completed(e);
  }
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  loadTodo();
}


