import _ from 'lodash';
import './style.css';

(function() {
  let toDoList = document.querySelector(".toDoList");

  const toDoObjects = [
    {
      task: "Clean the house", 
      complete: true,
    },
    {
      task: "sleep",
      complete: true,
    },
    {
      task: "Study",
      complete: true,
    },
  ];
  
  let toDoListItems = '';

  for (let toDo of toDoObjects) {
    toDoListItems += "<li class='task'>" +
    "<input type='checkbox'>" + " " + toDo.task + "</li>";
  }

  toDoList.innerHTML = toDoListItems;
  
}) ();

