import { HashRouter } from "react-router-dom";
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
  ]);

  return (
    <HashRouter>
      <RouterProvider router={appRouter} />
    </HashRouter>
  );
}

export default App;
