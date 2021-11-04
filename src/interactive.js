export function getTaskLS() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
}

export default function completed(e) {
  const task = e.target;
  const myList = getTaskLS();
  let todo;
  let newTask;
  if (task.checked === true) {
    todo = task.parentElement;
    todo.classList.add('completed');
    newTask = todo.children[1].textContent;
    newTask = newTask.trim();
    myList.forEach((element) => {
      if (element.task === newTask) {
        element.completed = true;
      }
    });
  } else {
    todo = task.parentElement;
    todo.classList.remove('completed');
    newTask = todo.children[1].textContent;
    newTask = newTask.trim();
    myList.forEach((element) => {
      if (element.task === newTask) {
        element.completed = false;
      }
    });
  }
  localStorage.setItem('todos', JSON.stringify(myList));
}

export function saveTasks(toDo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(toDo);
  localStorage.setItem('todos', JSON.stringify(todos));
}
