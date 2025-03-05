import React from "react";
import useEIAData from "../hooks/UseEIAData.js";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, defs, linearGradient, stop } from "recharts";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useAggregatedEnergyData from "./useAggregatedEnergyData.js";

const EIADataChart = ({ width = 1000, height = 500 }) => {
  const { data, loading, error } = useEIAData();
  const aggregatedData = useAggregatedEnergyData(data);
  console.log("final data", aggregatedData)

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to load data." />;

  const formatYAxis = (tickItem) => {
    return `${Math.round(tickItem / 1000)}k`;
  };

  return (
    <AreaChart width={width} height={height} data={aggregatedData} 
    margin={{
      top: 20, right: 40, bottom: 40, left: 40,
    }}>
      <defs>
        <linearGradient id="colorWhite" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#ffffff" stopOpacity={0.1}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" label={{ value: 'Time in UTC', angle: 0, position: 'bottom', fill: '#ffffff' }} tick={{ fill: '#ffffff' }} />
      <YAxis 
        label={{ value: 'Energy in Mega Watt Hours', angle: -90, position: 'insideLeft', fill: '#ffffff', dy: 100 }}
        tick={{ fill: '#ffffff' }}
        domain={[dataMin => dataMin - 1000, dataMax => dataMax + 1000]}
        tickFormatter={formatYAxis}
      />
      <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#333' }} itemStyle={{ color: '#ffffff' }} />
      <Area type="monotone" dataKey="totalValue" stroke="#ffffff" fill="url(#colorWhite)" />
    </AreaChart>
  );
};

export default EIADataChart;
