import uuid from "uuid";
import database from "../firebase/firebase";

// Befeore tweak
// step 1. component calls action generator.
// step 2. action generator returns object.
// step 3. component dispatches object.
// step 4. redux store chagnes.

// After tweak
// step 1. component calls action generator.
// step 2. action generator returns function.
// step 3. component dispatches function (?).
// step 4. function runs (has the ability to dipatch other actions and do whatever it wants)

export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {
  return dispatch => {
    return database
      .ref("expenses")
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};
