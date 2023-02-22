import React, { useRef } from 'react';

function Ethan() {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    document.write('You entered:', inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Ethan ;