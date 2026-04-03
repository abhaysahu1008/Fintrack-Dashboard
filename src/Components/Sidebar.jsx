import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "◈" },
    { name: "Transactions", icon: "↕" },
    { name: "Analytics", icon: "◉" },
  ];

  return (
    <div className="h-screen w-[250px] bg-gray-900 border-r border-gray-700 flex flex-col p-4">
      <h1 className="text-2xl font-bold text-white mb-8 tracking-wide">
        fin<span className="text-blue-500">.track</span>
      </h1>

      <div className="flex flex-col gap-3">
        <h3 className="text-gray-400 text-sm uppercase tracking-wider">
          Overview
        </h3>

        <div className="flex flex-col gap-2 mt-2">
          {menuItems.map((item, index) => (
            <NavLink
              to={"/transactions"}
              key={index}
              className="flex items-center gap-3 px-3 py-2 rounded-lg
              text-gray-300 cursor-pointer
              hover:bg-gray-800 hover:text-white
              transition"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="mt-auto text-xs text-gray-500">© 2026 fin.track</div>
    </div>
  );
};

export default Sidebar;
