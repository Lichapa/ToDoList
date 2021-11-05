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
    const todo = item.parentElement;
    removeLocalTodos(e);
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

function arrangeIndex(toDoObjects) {
  toDoObjects.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(toDoObjects));
}

function removeLocalTodos(e) {
  const task = e.target;
  let toDoObjects = getTaskLS();
  console.log(toDoObjects);

  // let todo;
  const todoIndex = task.parentElement.parentElement.parentElement.id;
  console.log(todoIndex);
  toDoObjects.forEach((element, x) => {
    if (element.index == todoIndex) {
      toDoObjects.splice(x, 1);
      localStorage.setItem('todos', JSON.stringify(toDoObjects));
    }
  });
  arrangeIndex(toDoObjects);
  loadTodo();
}




