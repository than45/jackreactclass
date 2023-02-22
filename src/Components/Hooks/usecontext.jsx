import React, { useContext } from 'react';

// Create a context
const MyContext = React.createContext('default');

// Define a component that consumes the context
function MyComponent() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}

// Render the component with the context provider
function Ball() {
  return (
    <MyContext.Provider value="Hello world!">
      <MyComponent />
    </MyContext.Provider>
  );
}

export default Ball;
