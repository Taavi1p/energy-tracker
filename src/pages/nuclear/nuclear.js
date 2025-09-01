import React from "react";
import "./nuclear.css";
import EIADataChart from "../../components/NuclearChart";
import EnergyProducersList from "../../components/EnergyProducersList";
import { fetchEIAData } from "../../services/api";

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
      <div>
      <h1>Nuclear Energy Producers</h1>
      <EnergyProducersList fetchDataFunction={fetchEIAData} energyType="NUC" />
    </div>
    </div>
  )
};

export default Nuclear;
