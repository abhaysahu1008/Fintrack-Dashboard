import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../utils/transactionSlice";
import { spendingByCategory } from "../utils/constants";

const AddTransactionForm = ({ setModal }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: "",
    type: "income",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount || !formData.category) {
      alert("Fill all fields");
      return;
    }
    if (formData.amount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }
    const newTransaction = {
      id: "t" + Date.now(),
      date: new Date().toISOString().split("T")[0],
      description: formData.description,
      category: formData.category,
      amount:
        formData.type === "expense"
          ? -Math.abs(formData.amount)
          : Math.abs(formData.amount),
      type: formData.type,
    };
    dispatch(addTransaction(newTransaction));
    setFormData({ description: "", category: "", amount: "", type: "income" });
    setModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 text-white p-6 rounded-2xl w-full max-w-[380px] shadow-2xl border border-gray-700">
        <h2 className="text-xl font-semibold text-center mb-5">
          Add Transaction
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="description"
            type="text"
            placeholder="Description"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.amount}
            onChange={handleChange}
          />
          <select
            name="category"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {spendingByCategory.map((item) => (
              <option key={item.category} value={item.category.toLowerCase()}>
                {item.category}
              </option>
            ))}
            <option value="income">Income</option>
          </select>
          <select
            name="type"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 transition-all py-2.5 rounded-lg font-medium"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setModal(false)}
              className="flex-1 bg-gray-700 hover:bg-gray-600 transition-all py-2.5 rounded-lg font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionForm;
