import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(count + 1)
  }

  const onDecrement = () => {
    if(count >0){
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button id='increment' onClick={onIncrement}>Increment</button>
      <button id='decrement' onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Counter;