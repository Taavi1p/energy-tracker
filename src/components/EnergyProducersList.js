import React, { useEffect, useState } from "react";
import "./styles/EnergyProducersList.css"; // Import a CSS file for custom styling

const EnergyProducersList = ({ fetchDataFunction, energyType }) => {
  const [producers, setProducers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchDataFunction();
        const latestHour = data[0]?.period; // Assuming the data is sorted by period in descending order
        const filteredData = data
          .filter((item) => item.period === latestHour && item.fueltype === energyType)
          .sort((a, b) => b.value - a.value); // Sort by energy produced in descending order
        setProducers(filteredData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchDataFunction, energyType]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="producers-container">
      <h2>Producers in decreasing order (Latest Hour)</h2>
      <div className="producers-list">
        {producers.map((producer, index) => (
          <div key={index} className="producer-item">
            <span className="producer-name">{producer["respondent-name"] || "Unknown Producer"}</span>
            <span className="producer-value">{producer.value} MWh</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyProducersList;