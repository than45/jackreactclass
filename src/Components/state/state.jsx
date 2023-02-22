import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <p>Message from parent: {props.message}</p>
    </div>
  );
}

export default Counter;