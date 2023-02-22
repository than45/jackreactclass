//useCallback: This hook allows you to memoize a callback function in your component. It takes a function and an array of dependencies as arguments, and returns a memoized version of the function. The memoized function is only re-created when the dependencies change, which can be useful for optimizing performance in components that receive a lot of props.


import React, { useState, useCallback } from 'react';

function Apple({ onButtonClick }) {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
    onButtonClick(count + 1);
  }, [count, onButtonClick]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
export default Apple;
//In this example, the useCallback hook is used to memoize the handleClick function. The function is only re-created when either count or onButtonClick changes, which can help prevent unnecessary re-renders of the component.

//These are just a few more examples of the hooks available in React. There are many other hooks, such as useReducer, useLayoutEffect, and useImperativeHandle, that provide additional functionality for working with state and effects in your components.
