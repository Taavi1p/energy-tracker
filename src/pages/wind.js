import React from "react";
import "./styles/wind.css";
import EIADataChart from "../components/WindChart";

const Wind = () => {
  return (
    <div className="wind-container">
      <h1 className="wind-title">Wind Power Generation</h1>
      <p className="wind-description">
        Hourly electricity generation from wind power plants in the United States. Time is in UTC.
      </p>
      <div className="wind-chart">
        <EIADataChart width={1000} height={500} />
      </div>
    </div>
  )
};

export default Wind;
