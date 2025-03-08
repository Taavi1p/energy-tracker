import React from "react";
import "./styles/home.css";
import NuclearChart from "../components/NuclearChart";
import SolarChart from "../components/SolarChart";
import WindChart from "../components/WindChart";
import HydroChart from "../components/HydroChart";

const Home = () => {
  return (
    <div className="home-container"> 
      <h1 className="home-title">Live energy graphs</h1>  
      <div className="charts-container">
        <div className="chart">
          <h2 className="chart-title">Electricity From Nuclear</h2>
          <NuclearChart width={600} height={300} />
        </div>
        <div className="chart">
          <h2 className="chart-title">Electricity From Solar</h2>
          <SolarChart width={600} height={300}/>
        </div>
        <div className="chart">
          <h2 className="chart-title">Electricity From Wind</h2>
          <WindChart width={600} height={300}/>
        </div>
        <div className="chart">
          <h2 className="chart-title">Electricity From Hydro Power</h2>
          <HydroChart width={600} height={300}/>
        </div>
      </div>
    </div>
  ) 
};

export default Home;