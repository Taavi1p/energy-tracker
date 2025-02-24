import React from "react";
import "./styles/nuclear.css";
import EIADataChart from "../components/EIAdatachart";

const Nuclear = () => {
  return (
    <div className="nuclear-container">
      <h1 className="nuclear-title">Nuclear Energy Information</h1>
      <p className="nuclear-description">
        This graph provides hourly updates on energy generation from nuclear sources in the United States.
      </p>
      <div className="nuclear-chart">
        <EIADataChart />
      </div>
    </div>
  )
};

export default Nuclear;
