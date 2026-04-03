import { useState } from "react";
import DashboardHeader from "../Components/Navbar";
import Buttons from "../Components/Transaction-Fliter-Buttons";
import { transactions } from "../utils/constants";
import Login from "./Login";

const Transaction = () => {
  const [searchText, setSearchText] = useState("");

  const query = searchText.toLowerCase();

  const filteredTransactions = transactions.filter(
    (t) =>
      t.description.toLowerCase().includes(query) ||
      t.category.toLowerCase().includes(query) ||
      t.type.toLowerCase().includes(query),
  );

  return (
    <div className="flex-1 p-4 overflow-hidden">
      <div className="h-full bg-gray-900 rounded-xl shadow-lg flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border-b border-gray-700">
          <h4 className="font-semibold text-blue-300 text-lg">
            Recent Transactions
          </h4>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <input
              type="text"
              placeholder="Search transactions..."
              onChange={(e) => setSearchText(e.target.value)}
              className="px-4 py-2 w-full sm:w-64 bg-gray-800 text-white
                border border-gray-600 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Buttons />
          </div>
        </div>

        <div className="hidden md:flex px-4 py-3 text-sm font-semibold text-gray-300 border-b border-gray-700">
          <p className="flex-1">Description</p>
          <p className="flex-1 text-center">Date</p>
          <p className="flex-1 text-center">Category</p>
          <p className="flex-1 text-center">Type</p>
          <p className="flex-1 text-right">Amount</p>
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          {filteredTransactions.map((t) => (
            <div
              key={t.id}
              className="flex flex-col md:flex-row md:items-center
                py-3 border-b border-gray-800 text-gray-400 text-sm"
            >
              <p className="flex-1 font-medium">{t.description}</p>

              <p className="flex-1 md:text-center text-gray-500">{t.date}</p>

              <p className="flex-1 md:text-center">{t.category}</p>

              <p
                className={`flex-1 md:text-center ${
                  t.type === "income" ? "text-green-500" : "text-red-500"
                }`}
              >
                {t.type}
              </p>

              <p
                className={`flex-1 md:text-right font-semibold ${
                  t.amount > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {t.amount > 0 ? `+₹${t.amount}` : `-₹${Math.abs(t.amount)}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
