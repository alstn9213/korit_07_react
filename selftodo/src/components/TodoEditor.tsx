import { useState } from "react";
import Button from "../html/Button";
import Input from "../html/Input";

export default function TodoEditor() {
  const [text, setText] = useState('');
  return(
    <form className="todo__form">
      <div className="todo__editor">
        <Input type="text" className="todo__input" placeholder="Enter Todo List" value={text} onChange={(e)=> setText(e.target.value)}/>

        <Button className='todo__button' type="submit">Add</Button>
      </div>
    </form>
  );
}