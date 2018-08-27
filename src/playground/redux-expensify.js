import {createStore, combineReducers} from 'redux';












store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 21000}));
const expTwo = store.dispatch(addExpense({description: 'Caffe', amount: 10, createdAt: -1000}));
// store.dispatch(removeExpense({id: expOne.expense.id}));
// store.dispatch(editExpense(expTwo.expense.id, {amount: 50}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-10000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(250));

const demoState = {
    expenses: [{
        id: 'bla',
        description: 'Jan Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};