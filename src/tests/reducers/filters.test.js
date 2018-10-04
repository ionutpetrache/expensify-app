import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import { filter } from 'rsvp';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT'
    });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text: 'testing'
    });
    expect(state.text).toBe('testing');
});

test('should set start date filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        date: startDate
    });
    expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        date: endDate
    });
    expect(state.endDate).toBe(endDate);
});