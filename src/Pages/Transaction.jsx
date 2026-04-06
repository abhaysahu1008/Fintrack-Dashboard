import { useState } from "react";
import { useSelector } from "react-redux";
import Buttons from "../Components/Transaction-Fliter-Buttons";

const Transaction = () => {
  const [searchText, setSearchText] = useState("");

  const theme = useSelector((state) => state.theme.mode);

  const transactions = useSelector(
    (store) => store.transactions.filteredTransactions,
  );

  const query = searchText.toLowerCase();

  const filteredTransactions = transactions.filter(
    (t) =>
      t.description.toLowerCase().includes(query) ||
      t.category.toLowerCase().includes(query) ||
      t.type.toLowerCase().includes(query),
  );

  return (
    <div
      className={`flex-1 p-4 ${
        theme === "dark" ? "bg-gray-950" : "bg-gray-900"
      }`}
    >
      <div
        className={`h-full rounded-xl shadow-lg flex flex-col ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border-b ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <h4 className="font-semibold text-blue-400 text-lg">
            Recent Transactions
          </h4>

          <div className="flex gap-3">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search transactions..."
                onChange={(e) => setSearchText(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm transition-all duration-200
      ${
        theme === "dark"
          ? "bg-gray-800 text-white border border-gray-600 focus:border-blue-500"
          : "bg-white text-gray-800 border border-gray-300 focus:border-blue-400"
      }
      focus:outline-none focus:ring-2 ${
        theme === "dark" ? "focus:ring-blue-500/30" : "focus:ring-blue-400/30"
      }
    `}
              />

              {/* Search Icon */}
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                🔍
              </span>
            </div>
            <Buttons />
          </div>
        </div>

        {/* Table Header */}
        <div
          className={`grid grid-cols-5 px-4 py-2 text-sm border-b font-semibold ${
            theme === "dark"
              ? "text-gray-400 border-gray-700"
              : "text-gray-600 border-gray-300"
          }`}
        >
          <p>Date</p>
          <p>Description</p>
          <p>Category</p>
          <p>Type</p>
          <p className="text-right">Amount</p>
        </div>

        {/* Data */}
        <div className="flex-1 overflow-y-auto px-4">
          {filteredTransactions.map((t) => (
            <div
              key={t.id}
              className={`grid grid-cols-5 py-3 border-b items-center ${
                theme === "dark"
                  ? "border-gray-800 text-gray-300"
                  : "border-gray-200 text-gray-700"
              }`}
            >
              <p>{t.date}</p>
              <p className="font-medium">{t.description}</p>
              <p>{t.category}</p>

              <p
                className={
                  t.type === "income"
                    ? "text-green-500 font-semibold"
                    : "text-red-500 font-semibold"
                }
              >
                {t.type}
              </p>

              <p
                className={`text-right font-semibold ${
                  t.type === "income" ? "text-green-500" : "text-red-500"
                }`}
              >
                {t.type === "income" ? "+" : "-"}₹{Math.abs(t.amount)}
              </p>
            </div>
          ))}

          {filteredTransactions.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              No transactions found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
