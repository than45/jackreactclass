/*useEffect: This hook allows you to perform side effects in your components, such as fetching data from an API or updating the document title. It takes a function as an argument, which is called after every render of the component. You can also provide a dependency array as a second argument to control when the effect is run.*/

import React, { useState, useEffect } from 'react';

function Cat() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Cat;
/*In this example, the useEffect hook is used to update the document title with the current count value. The hook is passed an array with count as a dependency, which means the effect will only be run when the count changes.*/