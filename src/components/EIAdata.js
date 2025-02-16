import React from "react";
import useEIAData from "../hooks/UseEIAData";

const EIAData = () => {
  const { data, loading, error } = useEIAData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Ensure `data` is an array before mapping
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return <p>No data available</p>;
  }

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          {item.respondent_name} - {item.fueltype}: {item.value} MW
        </li>
      ))}
    </ul>
  );
};

export default EIAData;

