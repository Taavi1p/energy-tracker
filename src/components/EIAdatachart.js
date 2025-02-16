import React from "react";
import useEIAData from "../hooks/UseEIAData.js";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const EIADataChart = () => {
  const { data, loading, error } = useEIAData();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to load data." />;

  return (
    <div>
      <h2>Hourly Energy Generation by Source</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="fueltype" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EIADataChart;
