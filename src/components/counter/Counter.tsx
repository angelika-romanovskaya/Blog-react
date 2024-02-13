import React from 'react';

const  Counter = ({increment, decrement, count}) =>{
  console.log(count)
  return(
    <div>
    <h1>Counter</h1>
    <h3>{count.count}</h3>
    <button style={{cursor: "pointer", padding: '5px 10px', backgroundColor: "green", color: "white", border: 'none', borderRadius: 10, marginRight: 10}} onClick={increment}>increment</button>
    <button style={{cursor: "pointer", padding: '5px 10px', backgroundColor: "green", color: "white", border: 'none', borderRadius: 10}}  onClick={decrement}>decrement</button>
    </div>
  )
};

export default Counter;
