import { useSelector } from "react-redux";

const Analytics = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const expenses = transactions.filter((t) => t.type === "expense");
  const income = transactions.filter((t) => t.type === "income");

  const totalExpense = expenses.reduce((acc, t) => acc + Math.abs(t.amount), 0);
  const totalIncome = income.reduce((acc, t) => acc + t.amount, 0);

  const topExpenses = [...expenses]
    .sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount))
    .slice(0, 5);

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-semibold mb-4">Analytics</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>Total Income: ₹{totalIncome}</div>
        <div>Total Expense: ₹{totalExpense}</div>
        <div>Total Transactions: {transactions.length}</div>
        <div>Savings: ₹{totalIncome - totalExpense}</div>
      </div>

      {/* Top Expenses */}
      <div>
        <h2 className="mb-2">Top Expenses</h2>
        {topExpenses.map((t) => (
          <div key={t.id} className="flex justify-between border-b py-2">
            <span>{t.description}</span>
            <span className="text-red-500">-₹{Math.abs(t.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
