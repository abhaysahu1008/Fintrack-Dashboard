import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { transactions } from "../../utils/constants";

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

const monthlyData = getMonthlyStats(transactions);
// console.log("Monthly Data:", monthlyData);

// #endregion
const SimpleBarChart = () => {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "50vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={monthlyData}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="income"
        fill="#8884d8"
        activeBar={{ fill: "pink", stroke: "blue" }}
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="expenses"
        fill="#82ca9d"
        activeBar={{ fill: "gold", stroke: "purple" }}
        radius={[10, 10, 0, 0]}
      />
      <RechartsDevtools />
    </BarChart>
  );
};

export default SimpleBarChart;
