import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Body from "./Components/Body";
import Transaction from "./Pages/Transaction";
import Analytics from "./Pages/Analytics";
import Landing from "./Pages/Landing";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Body />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
