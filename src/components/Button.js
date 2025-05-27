import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleClick = () => {
    setCount(count +13);
  };

  return (
    <div class='Button'>
      <h2>Your Count value: {count}</h2>
      <button onClick={handleClick}style={{backgroundColor:'blue',color:'white'}}>Add</button>
    </div>
  );
}

export default Counter;
