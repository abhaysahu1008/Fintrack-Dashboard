import React from "react";

const Buttons = () => {
  const buttons = ["All", "Income", "Expenses", "+Add"];

  return (
    <div className="flex gap-3">
      {buttons.map((but, index) => (
        <button key={index} className="px-3 py-1 bg-gray-300 rounded">
          {but}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
