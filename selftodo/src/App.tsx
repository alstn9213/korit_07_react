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
  return (
    <div className='todo'>
      <TodoHeader/>
      <TodoEditor/>
      <TodoList/>
    </div>
  );
}

export default App
