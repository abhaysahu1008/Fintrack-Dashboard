import { useSelector } from "react-redux";
import SummaryCards from "../Components/SummaryCards";
import Transaction from "./Transaction";
import SimpleBarChart from "../Components/Charts/BarChart";
import PieWithGradient from "../Components/Charts/PieChart";
import Insights from "./Insights";

const Dashboard = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`min-h-screen p-4 flex flex-col gap-6
      ${theme === "dark" ? "bg-gray-950" : "bg-gray-100"}`}
    >
      {/* Summary */}
      <SummaryCards />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 bg-gray-900 shadow-md">
          <SimpleBarChart />
        </div>

        <div className="rounded-xl p-4 bg-gray-900 shadow-md">
          <PieWithGradient />
        </div>
      </div>

      <div className="rounded-xl bg-gray-900 shadow-md">
        <Transaction limit={10} />
      </div>

      <Insights />
    </div>
  );
};

export default Dashboard;
