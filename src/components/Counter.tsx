import React from 'react';

function  Counter({increment, decrement, count}) {
  console.log(count)
  return(
    <div>
    <h1>Counter</h1>
    <h3>{count.count}</h3>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </div>
  )
};

export default Counter;
