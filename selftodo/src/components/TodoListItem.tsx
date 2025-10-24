import Button from "../html/Button";
import Checkbox from "../html/Checkbox";

export default function TodoListItem() {
  return (
    <li className="todo__item todo__item--complete">
      <Checkbox parentClassName="todo__checkbox--group" type="checkbox" className="todo__checkbox" checked>Eat Breakfast</Checkbox>
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