import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";
import { users } from "../utils/constants";
import { setRole } from "../utils/roleSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role.role);
  const theme = useSelector((state) => state.theme.mode);

  const user = users.find((u) => u.role === role);

  return (
    <div
      className={`w-full px-6 py-4 flex justify-between items-center border-b
      ${
        theme === "dark"
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-gray-100 border-gray-300 text-black"
      }`}
    >
      <h1 className="text-xl font-semibold">
        Wassup, <span className="text-blue-500">{user.name}</span>
      </h1>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <select
          value={role}
          onChange={(e) => dispatch(setRole(e.target.value))}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
    ${
      theme === "dark"
        ? "bg-gray-800 text-white border border-gray-600 hover:border-gray-400 focus:ring-2 focus:ring-blue-500"
        : "bg-white text-gray-800 border border-gray-300 hover:border-gray-500 focus:ring-2 focus:ring-blue-400"
    }
    focus:outline-none shadow-sm cursor-pointer
  `}
        >
          <option value="Admin">Admin</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
