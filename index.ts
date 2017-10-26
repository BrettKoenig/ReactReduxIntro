//Reducer - specifies how next state is calculated 
//based on current state and action being dispatched
const counter = (state = 0, action) => {
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

const { createStore } = Redux;
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
        />
        document.getElementById('root')
    );
};
//subscribe to redux store so render function runs any time state changes so counter gets current state
store.subscribe(render);
render();