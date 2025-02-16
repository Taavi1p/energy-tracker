import React from "react";
import "./styles/home.css";
import EIAData from "../components/EIAdata";
import EIADataChart from "../components/EIAdatachart";

const Home = () => {
  return (
    <div> 
      <div>Live energy statistics</div>
      <EIADataChart />
      <EIAData />
    </div>
  ) 
};

export default Home;