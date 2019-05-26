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

    database
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

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
