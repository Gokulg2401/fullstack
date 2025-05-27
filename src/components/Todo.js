import React, { useState } from 'react';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (input.trim() === '') return;

    setTodos([...todos, input]); // Add new item to the array
    setInput(''); // Clear input field
  };

  return (
    <div class='todo'>
      <h2>To-Do List</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a task" 
      />
      <button onClick={handleAdd}style={{backgroundColor:'black',color:'red'}}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li> // Render each item
        ))}
      </ul>
    </div>
  );
}

export default Todo;
