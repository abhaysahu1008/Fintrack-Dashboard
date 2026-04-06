import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const theme = useSelector((store) => store.theme.mode);

  const menuItems = [
    { name: "Dashboard", icon: "◈" },
    { name: "Transactions", icon: "↕" },
    { name: "Analytics", icon: "◉" },
  ];

  return (
    <div
      className={`h-screen w-[250px] border-r flex flex-col p-4 transition-all duration-300
        ${
          theme === "dark"
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        }
      `}
    >
      <Link to={"/"}>
        <h1
          className={`text-2xl font-bold text-center mb-8 tracking-wide
        ${theme === "dark" ? "text-white" : "text-gray-800"}
      `}
        >
          fin<span className="text-blue-500">.track</span>
        </h1>
      </Link>

      {/* Menu */}
      <div className="flex flex-col gap-3">
        <h3
          className={`text-sm uppercase tracking-wider
          ${theme === "dark" ? "text-gray-400" : "text-gray-500"}
        `}
        >
          Overview
        </h3>

        <div className="flex flex-col gap-2 mt-2">
          {menuItems.map((item, index) => (
            <NavLink
              to={`/app/${item.name.toLowerCase()}`}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? theme === "dark"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-600"
                    : theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className={`mt-auto text-xs text-center
        ${theme === "dark" ? "text-gray-500" : "text-gray-400"}
      `}
      >
        © 2026 fin.track
      </div>
    </div>
  );
};

export default Sidebar;
