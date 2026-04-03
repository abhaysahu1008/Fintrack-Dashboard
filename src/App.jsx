import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Body from "./Components/Body";
import Transaction from "./Pages/Transaction";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />, // layout
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "transactions",
          element: <Transaction />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
