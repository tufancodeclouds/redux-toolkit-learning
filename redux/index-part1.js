// 1. state
// 2. dispatch action
// 3. reducer
// 4. store - getState(), dispatch(), subscribe()

import { applyMiddleware, combineReducers, createStore } from 'redux';
import pkg from 'redux-logger';

// create logger
const { createLogger } = pkg;
const logger = createLogger();

// define constant
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// state
const initialProductState = {
    products: [],
    numberOfProducts: 0
};

const initialCartState = {
    cart: [],
    numberOfCartItems: 0
};

// action - get product
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

// action - add product
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

const getCartItems = () => {
    return {
        type: GET_CART_ITEMS
    }
}

const addCartItem = (item) => {
    return {
        type: ADD_CART_ITEM,
        payload: item
    }
}

// create reducer for product
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: [...state.products],
                numberOfProducts: state.products.length
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}

// create reducer for cart
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
                cart: [...state.cart],
                numberOfCartItems: state.cart.length
            }
        case ADD_CART_ITEM:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                numberOfCartItems: state.numberOfCartItems + 1
            }
        default:
            return state;
    }
}

// combine reducers
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// create store for product
const store = createStore(rootReducer, applyMiddleware(logger));

// subscribe to store
store.subscribe(() => {
    console.log("products:", store.getState().productR.products);
    console.log("numberOfProducts:", store.getState().productR.numberOfProducts);

    console.log("cart:", store.getState().cartR.cart);
    console.log("numberOfCartItems:", store.getState().cartR.numberOfCartItems);
})

// dispatch action
store.dispatch(getProducts());
store.dispatch(addProduct("Apple"));

store.dispatch(getCartItems());
store.dispatch(addCartItem("Banana"));










/*
// defining constant
const ADD_USER = 'ADD_USER';

// state
const initialUserState = {
    users: [],
    count: 0
}

// action - object-type, payload
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// create reducer for user
const userReducer = (state = initialUserState, action ) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            return state;
    }
}

// create store for user
const store = createStore(userReducer);

// subscribe to store
store.subscribe(() => {
    console.log("users:", store.getState().users);
    console.log("count:", store.getState().count);
})

// dispatch action
store.dispatch(addUser("Tufan"));
store.dispatch(addUser("Ghosh"));
*/









/*
// defining constants
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// state
const initialCounterState = { count: 0 };

// action - object-type, payload
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

const reset = () => {
    return {
        type: RESET
    }
}

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
}

// create store for counter
const store = createStore(counterReducer);

// subscribe to store
store.subscribe(() => {
    console.log(store.getState().count);
});

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounterByValue(5));
store.dispatch(decrementCounter());
store.dispatch(reset());
*/