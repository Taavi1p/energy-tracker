import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import Nuclear from "./pages/nuclear/nuclear";
import Solar from "./pages/solar/solar";
import Wind from "./pages/wind/wind";
import Hydro from "./pages/hydro/hydro";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuclear" element={<Nuclear />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/wind" element={<Wind />} />
          <Route path="/hydro" element={<Hydro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

