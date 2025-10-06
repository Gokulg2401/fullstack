import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Todo List</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a todo..."
          style={{ padding: '8px', marginRight: '8px', width: '250px' }}
        />
        <button onClick={addTodo} style={{ padding: '8px 16px' }}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '8px',
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '8px' }}
            />
            <span style={{ flex: 1 }}>{todo.text}</span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: '8px', padding: '4px 8px', background: '#ff4444', color: 'white', border: 'none' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;