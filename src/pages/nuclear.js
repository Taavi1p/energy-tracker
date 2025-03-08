import React from "react";
import "./styles/nuclear.css";
import EIADataChart from "../components/NuclearChart";

const Nuclear = () => {
  return (
    <div className="nuclear-container">
      <h1 className="nuclear-title">Nuclear Power Generation</h1>
      <p className="nuclear-description">
        Hourly electricity generation from nuclear power plants in the United States. Time is in UTC.
      </p>
      <div className="nuclear-chart">
        <EIADataChart width={1000} height={500} />
      </div>
    </div>
  )
};

export default Nuclear;
