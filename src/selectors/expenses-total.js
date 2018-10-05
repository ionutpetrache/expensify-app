const selectExpensesTotal = (expenses) => expenses
    .map(expense => expense.amount)
    .reduce((prev, curr) => prev + curr, 0);

export default selectExpensesTotal;