/*useMemo: This hook allows you to memoize the result of a computation in your component. It takes a function and an array of dependencies as arguments, and returns the memoized result of the function. The function is only called when the dependencies change, and the result is cached for subsequent renders of the component.*/

import React, { useState, useMemo } from 'react';

function Dog() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  const result = useMemo(() => {
    console.log('Computing result');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 1)}>Increment B</button>
    </div>
  );
}
export default Dog;
/*In this example, the useMemo hook is used to memoize the sum of a and b. The function is only called when either a or b changes, and the result is cached for subsequent renders of the component.*/
