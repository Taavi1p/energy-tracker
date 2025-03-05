import React from "react";
import "./styles/home.css";
import EIADataChart from "../components/EIAdatachart";

const Home = () => {
  return (
    <div className="home-container"> 
      <h1 className="home-title">Live energy graphs</h1>  
      <div className="charts-container">
        <div className="chart">
          <h2 className="chart-title">electricity from nuclear</h2>
          <EIADataChart width={600} height={300} />
        </div>
        <div className="chart">
          <h2 className="chart-title">electricity from solar</h2>
          <EIADataChart width={600} height={300}/>
        </div>
        <div className="chart">
          <h2 className="chart-title">electricity from wind</h2>
          <EIADataChart width={600} height={300}/>
        </div>
        <div className="chart">
          <h2 className="chart-title">electricity from natural gas</h2>
          <EIADataChart width={600} height={300}/>
        </div>
      </div>
    </div>
  ) 
};

export default Home;