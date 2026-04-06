import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { spendingByCategory } from "../../utils/constants";

const PieWithGradient = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          data={spendingByCategory}
          dataKey="amount"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={140}
          innerRadius={70}
          paddingAngle={2}
        >
          {spendingByCategory.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieWithGradient;
