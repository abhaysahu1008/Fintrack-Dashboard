import { createSlice } from "@reduxjs/toolkit";

// LOAD from localStorage
const loadTransactions = () => {
  try {
    const data = localStorage.getItem("transactions");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load transactions:", error);
    return [];
  }
};

// SAVE to localStorage
const saveTransactions = (data) => {
  try {
    localStorage.setItem("transactions", JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save transactions:", error);
  }
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: loadTransactions(),
    filteredTransactions: loadTransactions(),
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload);

      state.transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

      state.filteredTransactions = [...state.transactions];

      saveTransactions(state.transactions);
    },

    filterTransaction: (state, action) => {
      state.filteredTransactions = action.payload;
    },
  },
});

export const { addTransaction, filterTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
