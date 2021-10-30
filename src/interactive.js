export default function completed(e) {
  const item = e.target;

  if (item.checked) {
    const todo = item.parentElement;
    todo.classList.add('completed');
  } else {
    const todo = item.parentElement;
    todo.classList.remove('completed');
  }
}