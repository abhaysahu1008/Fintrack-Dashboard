import React from "react";
import { insights } from "../utils/constants";

const Insights = () => {
  const allInsights = insights;

  return (
    <div className="flex flex-col gap-4 p-3">
      <h1 className="font-semibold text-lg text-white">Insights</h1>

      <div className="flex gap-6 flex-wrap">
        {insights.map((ins, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] bg-gray-800 rounded-xl p-4 shadow-md
        hover:shadow-xl hover:scale-[1.02] transition duration-200"
          >
            <p className="text-xs text-blue-400 font-medium mb-1 uppercase tracking-wide">
              {ins.type}
            </p>

            <h3 className="text-sm text-gray-400 mb-2">{ins.title}</h3>

            <h2
              className={`text-xl font-bold mb-2 ${
                ins.value >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {ins.value}
            </h2>

            <p className="text-xs text-gray-500">{ins.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
