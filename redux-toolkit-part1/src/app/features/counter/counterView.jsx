import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByValue } from './counterSlice'

const counterView = () => {

    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => {dispatch(increment())}}>Increment</button>
        <button onClick={() => {dispatch(decrement())}} disabled={count === 0}>Decrement</button>
        <button onClick={() => {dispatch(reset())}} disabled={count === 0}>Reset</button>
        <button onClick={() => {dispatch(incrementByValue(5))}}>Increase By 5</button>
    </div>
  )
}

export default counterView