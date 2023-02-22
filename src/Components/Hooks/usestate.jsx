/*useState: This hook allows you to add state to your functional components. It takes an initial value as an argument, and returns an array with the current value and a function to update the value. You can call this function to update the state, and React will re-render the component with the new state.*/

import React, { useState } from 'react';

function Fool() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Fool;
/*In this example, the useState hook is used to add a count state variable to the Example component. When the user clicks the button, the setCount function is called to update the state, and the component is re-rendered with the new state.*/