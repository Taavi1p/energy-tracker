import React from "react";
import "./solar.css";
import EIADataChart from "../../components/SolarChart";
import EnergyProducersList from "../../components/EnergyProducersList";
import { fetchSolarData } from "../../services/fetchSolarData";

const Solar = () => {
  return (
    <div className="solar-container">
      <h1 className="solar-title">Solar Power Generation</h1>
      <p className="solar-description">
        Hourly electricity generation from solar power plants in the United States. Time is in UTC.
      </p>
      <div className="solar-chart">
        <EIADataChart width={1000} height={500} />
      </div>
      <div>
      <h1>Solar Energy Producers</h1>
      <EnergyProducersList fetchDataFunction={fetchSolarData} energyType="SUN" />
    </div>
    </div>
  )
};

export default Solar;
