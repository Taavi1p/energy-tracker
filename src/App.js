import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Nuclear from "./pages/nuclear";
import Solar from "./pages/solar";
import Wind from "./pages/wind";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuclear" element={<Nuclear />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/wind" element={<Wind />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

