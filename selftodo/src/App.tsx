import './App.css'
import TodoEditor from './components/TodoEditor';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: new Date().getTime(),
        title,
        done: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) => 
      todos.map((todo) => 
        todo.id === id ? {...todo, done: !todo.done} : todo
    )
  );
};

const deleteTodo = (id: number) => {
  setTodos((todos) => todos.filter((todo) => todo.id !==  id));
};
  return (
    <div className='todo'>
      <TodoHeader/>
      <TodoEditor addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App
