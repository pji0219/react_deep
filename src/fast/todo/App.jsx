import React, { useState } from 'react';
import TodoList from './fast/todo/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '호롤롤로로',
    },
    {
      id: 2,
      text: '호롤롤로',
    },
    {
      id: 3,
      text: '호롤로',
    },
  ]);

  const onUpdate = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
    <>
      <TodoList todos={todos} onUpdate={onUpdate} />
    </>
  );
}

export default App;
