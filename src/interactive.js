export function completed(e) {
  const item = e.target;

  if (item.classList[0] === "check-box"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};