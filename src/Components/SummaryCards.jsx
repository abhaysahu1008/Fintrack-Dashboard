import { useSelector } from "react-redux";
import { summary } from "../utils/constants";

const SummaryCards = () => {
  const theme = useSelector((state) => state.theme.mode);

  const { totalBalance, totalIncome, totalExpenses, savingsRate } = summary;

  const cardBase = `p-5 rounded-2xl transition-all duration-300 shadow-sm`;

  const themeStyle =
    theme === "dark"
      ? "bg-gray-900 text-white border border-gray-700"
      : "bg-white text-gray-900 border border-gray-200";

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Balance */}
      <div className={`${cardBase} ${themeStyle}`}>
        <p className="text-sm opacity-70">Total Balance</p>
        <h2 className="text-2xl font-bold mt-1">₹{totalBalance}</h2>
      </div>

      {/* Income */}
      <div className={`${cardBase} ${themeStyle}`}>
        <p className="text-sm opacity-70">Income</p>
        <h2 className="text-2xl font-bold mt-1 text-green-500">
          + ₹{totalIncome}
        </h2>
      </div>

      {/* Expense */}
      <div className={`${cardBase} ${themeStyle}`}>
        <p className="text-sm opacity-70">Expenses</p>
        <h2 className="text-2xl font-bold mt-1 text-red-500">
          - ₹{totalExpenses}
        </h2>
      </div>

      {/* Savings */}
      <div className={`${cardBase} ${themeStyle}`}>
        <p className="text-sm opacity-70">Savings Rate</p>
        <h2 className="text-2xl font-bold mt-1">{savingsRate}%</h2>
      </div>
    </div>
  );
};

export default SummaryCards;
