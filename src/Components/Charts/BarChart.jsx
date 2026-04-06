import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const getMonthlyStats = (transactions) => {
  const results = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const month = date.toLocaleString("en-US", { month: "short" });

    if (!results[month]) {
      results[month] = {
        month,
        income: 0,
        expenses: 0,
      };
    }

    if (t.type === "income") {
      results[month].income += t.amount;
    } else {
      results[month].expenses += Math.abs(t.amount);
    }
  });

  return Object.values(results);
};

const SimpleBarChart = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const monthlyData = getMonthlyStats(transactions);

  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer>
        <BarChart
          data={monthlyData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar
            dataKey="income"
            fill="#22c55e" // green
            radius={[10, 10, 0, 0]}
          />

          <Bar dataKey="expenses" fill="#ef4444" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
