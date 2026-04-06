import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTransactionForm from "./AddTransactionForm";
import { filterTransaction } from "../utils/transactionSlice";

const Buttons = () => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("All"); // ✅ FIXED

  const dispatch = useDispatch();
  const role = useSelector((store) => store.role.role);

  const allTransactions = useSelector(
    (store) => store.transactions.transactions,
  );

  const buttons = [
    { label: "All", type: "All" },
    { label: "Income", type: "income" },
    { label: "Expense", type: "expense" },
  ];

  if (role === "Admin") {
    buttons.push({ label: "+ Add", type: "Add" });
  }

  const handleClick = (type) => {
    if (type === "Add") {
      setModal(true);
      return;
    }

    setSelected(type); // ✅ FIXED (update active button)

    if (type === "All") {
      dispatch(filterTransaction(allTransactions));
      return;
    }

    const filtered = allTransactions.filter((t) => t.type === type);
    dispatch(filterTransaction(filtered));
  };

  return (
    <>
      <div className="flex gap-3">
        {buttons.map((but) => (
          <button
            key={but.type}
            onClick={() => handleClick(but.type)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200
              ${
                selected === but.type
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            {but.label}
          </button>
        ))}
      </div>

      {modal && <AddTransactionForm setModal={setModal} />}
    </>
  );
};

export default Buttons;
