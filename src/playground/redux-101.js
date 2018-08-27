import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
);

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
});

const resetCount = ({count = 0} = {}) => ({
    type: 'RESET',
    count
});


const countReducer = (state = {count: 0}, action) => {

    switch(action.type) {
        case 'INCREMENT': 
         return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(resetCount())
store.dispatch(resetCount({count: 100}))

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 6}));

store.dispatch(setCount());