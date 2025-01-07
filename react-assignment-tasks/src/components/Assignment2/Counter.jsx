import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="counter-container">
      <h2 className="count-display">{count}</h2>
      <div className="button-group">
        <button onClick={decrement} className="counter-button decrease">
          Decrease
        </button>
        <button onClick={increment} className="counter-button increase">
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;