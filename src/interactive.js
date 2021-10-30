export default function completed(e) {
  const item = e.target;
  let todo;

  if (item.checked) {
    todo = item.parentElement;
    todo.classList.add('completed');
  } else {
    todo = item.parentElement;
    todo.classList.remove('completed');
  }
}