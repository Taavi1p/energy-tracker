import React from "react";
import "./styles/home.css";
import EIADataChart from "../components/EIAdatachart";

const Home = () => {
  return (
    <div> 
      <div>Live energy statistics</div>
      <EIADataChart />
    </div>
  ) 
};

export default Home;