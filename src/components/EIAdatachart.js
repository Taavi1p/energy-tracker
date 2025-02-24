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
    <LineChart width={1000} height={500} data={aggregatedData} 
    margin={{
      top: 20, right: 20, bottom: 20, left: 20,
    }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" label={{ value: 'Time in UTC', angle: 0, position: 'bottom', fill: '#ffffff' }} tick={{ fill: '#ffffff' }} />
      <YAxis 
        label={{ value: 'Energy in Mega Watt Hours', angle: -90, position: 'left', fill: '#ffffff' }}
        tick={{ fill: '#ffffff' }}
        domain={[dataMin => dataMin - 1000, dataMax => dataMax + 1000]}/>
      <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#333' }} itemStyle={{ color: '#ffffff' }} />
      <Line type="monotone" dataKey="totalValue" stroke="#ffffff" />
    </LineChart>
  );
};

export default EIADataChart;
