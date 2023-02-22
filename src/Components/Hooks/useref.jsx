/*useRef: This hook allows you to create a mutable reference to a value or an element in your component. It takes an initial value as an argument, and returns a mutable ref object with a current property. You can assign a value to the current property, and it will persist between renders of the component.*/

import React, { useRef } from 'react';

function Elephas() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    document.write(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Elephas;
/*In this example, the useRef hook is used to create a reference to the input element. When the form is submitted, the handleSubmit function logs the value of the input element by accessing the current property of the ref object.*/