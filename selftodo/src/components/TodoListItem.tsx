import Button from "../html/Button";
import Checkbox from "../html/Checkbox";

export default function TodoListItem({
  todo, toggleTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
}) {
  return (
    <li className={`todo__item ${todo.done && 'todo__item--complete'}`}>
      <Checkbox parentClassName="todo__checkbox--group" type="checkbox" className="todo__checkbox" 
      checked={todo.done} onChange={() => toggleTodo(todo.id)}>{todo.title}</Checkbox>
      <div className="todo__button-group">
        <Button className="todo__action-button">
          버튼
        </Button>
        <Button className="todo__action-button">
          버튼2
        </Button>
      </div>
    </li>
  );
}