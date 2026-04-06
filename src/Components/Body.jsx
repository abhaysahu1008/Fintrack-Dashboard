import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-1 overflow-y-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
