import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Monitoring from "./pages/Monitoring";
import Controlling from "./pages/Controlling";
import Robot from "./pages/Robot";
import Testpage from "./pages/TestPage";
//import { Offline, Online } from "react-detect-offline";
//import NetworkStatus from "./components/NetworkStatus";

function App() {
  return (
    <div>
      {/*
        <Offline>
          <NetworkStatus />
        </Offline>
  */}

      <Router>
        <div style={{ display: "flex" }}>
          <div style={{ opacity: "100%" }}>
            <Drawer />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/controlling" element={<Controlling />} />
            <Route path="/robot" element={<Robot />} />

            <Route path="/test" element={<Testpage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
