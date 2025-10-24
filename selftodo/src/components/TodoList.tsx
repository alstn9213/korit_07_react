import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList() {
  return(
    <ul className="todo__list">
      <TodoListItemEmpty/>
      <TodoListItem/>
    </ul>
  )
}