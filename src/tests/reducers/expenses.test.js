import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('shoud add an expense', () => {
    const expense =  {
        id: '100',
        description: 'Train',
        note: 'Train ticket',
        amount: 240,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('shoud edit an expense', () => {
    const updates = {
        note: 'Chew gum'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: updates
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].note).toEqual('Chew gum');
});

test('shoud not edit an expense if expense not found', () => {
    const updates = {
        note: 'Chew gum'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: updates
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});