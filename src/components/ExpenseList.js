import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.lenght === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map(exp => (
                    <ExpenseListItem 
                        key={exp.id}
                        {...exp}
                    />))
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);