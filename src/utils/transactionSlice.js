import { createSlice } from "@reduxjs/toolkit";

const loadTransactions = () => {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
};

const saveTransactions = (data) => {
  localStorage.setItem("transactions", JSON.stringify(data));
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: loadTransactions(),
    filteredTransactions: loadTransactions(),
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      state.filteredTransactions = state.transactions;
      saveTransactions(state.transactions);
    },
    filterTransaction: (state, action) => {
      state.filteredTransactions = action.payload;
    },
  },
});

export const { addTransaction, filterTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
