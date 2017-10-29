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

const store = createStore(counter);

const render = () => {
	document.body.innerText = String(store.getState());
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
	store.dispatch({type: 'INCREMENT' });
});