import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Body from "./Components/Body";
import Transaction from "./Pages/Transaction";
import Analytics from "./Pages/Analytics";
import Landing from "./Pages/Landing";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/app",
      element: <Body />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "transactions",
          element: <Transaction />,
        },
        {
          path: "analytics",
          element: <Analytics />,
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
