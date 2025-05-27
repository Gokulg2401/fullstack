import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      // Start the timer
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    // Cleanup when component unmounts or when isRunning becomes false
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div class='timer'>
      <h2>Timer: {seconds} seconds</h2>
      <button onClick={toggleTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default Timer;
