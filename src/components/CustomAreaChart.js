import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const CustomAreaChart = ({ data, width, height }) => {
  const formatYAxis = (tickItem) => {
    return `${Math.round(tickItem / 1000)}k`;
  };

  const formatXAxis = (tickItem) => {
    const [datePart, hourPart] = tickItem.split('T');
    //const date = new Date(datePart);
    //const month = date.getUTCMonth() + 1; // getUTCMonth() returns month from 0-11, so add 1
    //const day = date.getUTCDate();
    const hours = hourPart;
    //return `${month}-${day} ${hours}:00`;
    return `${hours}:00`;
  };

  return (
    <AreaChart width={width} height={height} data={data} 
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
      <XAxis 
        dataKey="hour" 
        label={{ value: 'Time in UTC', angle: 0, position: 'bottom', fill: '#ffffff' }} 
        tick={{ fill: '#ffffff' }} 
        tickFormatter={formatXAxis}
      />
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

export default CustomAreaChart;