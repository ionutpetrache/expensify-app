import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({description: 'Water bill', amount: 25, createdAt: 21000}));
store.dispatch(addExpense({description: 'Electricity bill', amount: 39, createdAt: 22000}));
store.dispatch(addExpense({description: 'Rent', amount: 1250, createdAt: 23000}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
