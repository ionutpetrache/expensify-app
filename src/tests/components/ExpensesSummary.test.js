import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummaru with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={100} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummaru with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2450} />);
    expect(wrapper).toMatchSnapshot();
});
