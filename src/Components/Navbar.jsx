import { users } from "../utils/constants";

const Navbar = () => {
  const user = users[0];

  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-full bg-gray-900 border-b h-[75px] border-gray-700 px-6 py-4 flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-white">
          Wassup, <span className="text-blue-400">{user.name}</span> ✦
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Welcome back — here’s your dashboard
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-md">
          {formattedDate}
        </div>

        <select
          className="bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md
          border border-gray-600
          focus:outline-none focus:ring-2 focus:ring-blue-500
          hover:border-gray-400 transition"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          {user.name.charAt(0)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
