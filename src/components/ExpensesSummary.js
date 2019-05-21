import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpense from "../selectors/expenses";
import selectExpenseTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpenseTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpense = selectExpense(state.expenses, state.filters);
  return {
    expenseCount: visibleExpense.length,
    expensesTotal: selectExpenseTotal(visibleExpense)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
