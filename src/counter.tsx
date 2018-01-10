import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';

//Reducer - specifies how next state is calculated 
//based on current state and action being dispatched
const counter = (state = 0, action: any) => {
    switch (action.type){
        case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
        default:
        return state;
    }
}

//Counter component - dumb component, does not contain business logic - 
//only specifies how current state transforms into renderable output 
//and how callbacks are bound to event handlers
const Counter = ({
    value, 
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const store = createStore(counter);

const render = () => {
	    ReactDOM.render(
        //when we render a counter we specify values should be taken from Redux current state, 
        //when user clicks button we dispatch corresponding action
        <Counter value={store.getState()}
        onIncrement={() =>
            store.dispatch({
                type:'INCREMENT'
            })
        }
        onDecrement={() =>
            store.dispatch({
                type:'DECREMENT'
            })
        }
        />, 
        document.getElementById('counterRoot')
    );
};

store.subscribe(render);
render();