import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Monitoring from "./pages/Monitoring";
import Controlling from "./pages/Controlling";
import Robot from "./pages/Robot";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/controlling" element={<Controlling />} />
          <Route path="/robot" element={<Robot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
