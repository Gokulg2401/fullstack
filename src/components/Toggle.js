import React, { useState } from 'react';

function Toggle() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div class='toggle'>
      <button onClick={toggleVisibility}style={{backgroundColor:'white',color:'black'}}>
        {visible ? 'Hide' : 'Show'}
      </button>

      {visible && <p>This is the text that gets toggled!</p>}
    </div>
  );
}

export default Toggle;
