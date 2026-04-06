import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to <span className="text-blue-500">fin.Track</span>
      </h1>

      <p className="text-gray-400 text-lg mb-8 text-center max-w-xl">
        Track your income, control your expenses, and understand your finances
        like never before.
      </p>

      <button
        onClick={() => navigate("/app/dashboard")}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default Landing;
