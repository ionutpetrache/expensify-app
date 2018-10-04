import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

describe('ExpenseListItem', () => {
    test('should render correctly a ExpenseListItem', () => {
        const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});