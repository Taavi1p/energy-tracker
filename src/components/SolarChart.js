import React from "react";
import useEIAData from "../hooks/UseEIAData.js";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useAggregatedEnergyData from "./useAggregatedEnergyData.js";
import { fetchSolarData } from "../services/fetchSolarData.js";
import CustomAreaChart from "./CustomAreaChart";

const SolarChart = ({ width = 1000, height = 500 }) => {
  const { data, loading, error } = useEIAData(fetchSolarData);
  const aggregatedData = useAggregatedEnergyData(data);
  console.log("final solar data", aggregatedData);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to load data." />;

  return (
    <CustomAreaChart data={aggregatedData} width={width} height={height} />
  );
};

export default SolarChart;