import { INCREMENT, DECREMENT, RESET } from "../constants/counterConstant"

const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

const resetCounter = () => {
    return {
        type: RESET
    }
}

export { incrementCounter, decrementCounter, resetCounter }
