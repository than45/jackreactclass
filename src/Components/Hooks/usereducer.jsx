/*usereducer explain
useReducer is a hook in React that allows you to manage more complex state in your components. It's an alternative to using useState, which can become cumbersome when dealing with state that has multiple fields or requires more complex updates.

The useReducer hook takes two arguments: a reducer function and an initial state. The reducer function is responsible for updating the state based on actions that are dispatched to it. The initial state is the starting value for the state.

Here's an example that uses useReducer to manage a counter:*/


import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counte() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Counte;
//In this example, the reducer function takes the current state and an action object, and returns the updated state. The Counter component uses useReducer to create a state object with a count property and a dispatch function to dispatch actions to the reducer. When the + or - button is clicked, the dispatch function is called with an action object that has a type property indicating the type of action to be performed.

//When an action is dispatched, the reducer function is called with the current state and the action object, and returns the updated state. The state object is then updated with the new value, and the component is re-rendered with the updated value.

//The useReducer hook can be useful for managing more complex state in your components, such as objects or arrays with multiple fields. It can also be used to manage state that requires more complex updates, such as updating an array with a specific index or merging objects with new properties.

