import React from 'react';
import Todo from './Todo';

function TodoList({ todos, onUpdate }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo todo={todo} onUpdate={onUpdate} />
      ))}
    </ul>
  );
}

export default TodoList;
