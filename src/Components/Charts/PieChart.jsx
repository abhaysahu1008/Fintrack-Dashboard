import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";

const COLORS = [
  "#4F46E5",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#06B6D4",
  "#A855F7",
];

const PieWithGradient = () => {
  // FIX: adjust based on your slice structure
  const transactions = useSelector((state) => state.transactions.transactions);
  // GROUP DATA
  const categoryData = Object.values(
    transactions.reduce((acc, curr) => {
      if (curr.type === "expense") {
        if (!acc[curr.category]) {
          acc[curr.category] = {
            category: curr.category,
            amount: 0,
          };
        }
        acc[curr.category].amount += Math.abs(curr.amount);
      }
      return acc;
    }, {}),
  );

  // FIX: total calculation
  const total = categoryData.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="w-full h-[350px] flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={3}
            >
              {categoryData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]} // FIX: color logic
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value) => `₹${value}`}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-gray-400 text-sm">Total</p>
          <h2 className="text-white text-xl font-semibold">₹{total}</h2>
        </div>
      </div>

      {/* CUSTOM LEGEND */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
        {categoryData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: COLORS[index % COLORS.length],
              }}
            ></span>
            <span className="text-gray-300">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieWithGradient;
