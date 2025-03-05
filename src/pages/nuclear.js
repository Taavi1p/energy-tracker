import React from "react";
import "./styles/nuclear.css";
import EIADataChart from "../components/EIAdatachart";

const Nuclear = () => {
  return (
    <div className="nuclear-container">
      <h1 className="nuclear-title">Nuclear Energy Information</h1>
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
