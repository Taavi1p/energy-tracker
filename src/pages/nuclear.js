import React from "react";
import "./styles/nuclear.css";
import EIADataChart from "../components/EIAdatachart";

const Nuclear = () => {
  return (
    <div>
      <h1 className="nuclear-title">Nuclear Energy Information</h1>
      <div className="nuclear-chart">
        <EIADataChart />
      </div>
    </div>
  )
};

export default Nuclear;
