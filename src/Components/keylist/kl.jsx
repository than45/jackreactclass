/*import React from 'react';

function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
/*In this example, ItemList is a component that takes
 an array of items as a prop and renders an unordered
  list of items. The key prop is set to item.id, which
   is assumed to be a unique identifier for each item
    in the list.

In addition to the key prop, you can also use the 
list attribute to hint to the browser that the 
elements in the list should be treated as a list, 
which can improve performance for large lists.
 The list attribute should be set to a unique
  identifier for the list, such as the same value as
   the key prop.

Here's an example of using the list attribute:*/




/*function ItemList({ items }) {
  return (
    <ul list="items">
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}*/
/*In this example, the list attribute is set to "items",
 which is assumed to be a unique identifier for the 
 list of items. Note that the list attribute is an
  HTML attribute, not a React prop, and it is used 
  to improve browser performance rather than to
   optimize React rendering.*/
