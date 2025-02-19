import React from "react";
import useEIAData from "../hooks/UseEIAData.js";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useAggregatedEnergyData from "./useAggregatedEnergyData.js";

const EIADataChart = () => {
  const { data, loading, error } = useEIAData();
  const aggregatedData = useAggregatedEnergyData(data);
  console.log("final data", aggregatedData)


  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to load data." />;

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="totalValue" stroke="#8884d8" />
    </LineChart>
  );
};

export default EIADataChart;
