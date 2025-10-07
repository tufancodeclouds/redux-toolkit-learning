import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "../services/actions/counterAction";

const Counter = () => {
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter());
    }

    const handleDecrement = () => {
        dispatch(decrementCounter());
    }

    const handleReset = () => {
        dispatch(resetCounter());
    }

  return (
    <div>
        <h2>Counter App</h2>
        <p>{ count }</p>
        <button onClick={handleIncrement} disabled={count === 10}>Increment</button>
        <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
        <button onClick={handleReset} disabled={count === 0}>Reset</button>
    </div>
  )
}

export default Counter

// state - count: 0
// action - increment, decrement, reset
// reducers - increment -> count + 1, decrement -> count - 1, reset -> count = 0
// store - created using createStore()
// providing store to the app using Provider
// useSelector - used to select a piece of state from the store
// useDispatch - used to dispatch an action to the store
