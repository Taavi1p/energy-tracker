import React from "react";
import "./styles/hydro.css";
import EIADataChart from "../components/HydroChart";
import EnergyProducersList from "../components/EnergyProducersList";
import { fetchHydroData } from "../services/fetchHydroData";

const Hydro = () => {
  return (
    <div className="hydro-container">
      <h1 className="hydro-title">Hydro Power Generation</h1>
      <p className="hydro-description">
        Hourly electricity generation from hydro power plants in the United States. Time is in UTC.
      </p>
      <div className="hydro-chart">
        <EIADataChart width={1000} height={500} />
      </div>
      <div>
      <h1>Hydro Energy Producers</h1>
      <EnergyProducersList fetchDataFunction={fetchHydroData} energyType="WAT" />
    </div>
    </div>
  )
};

export default Hydro;