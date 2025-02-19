import { useEffect, useState } from "react";

const useAggregatedEnergyData = (apiData) => {
  const [aggregatedData, setAggregatedData] = useState([]);
  console.log("data in the algo", apiData)
  useEffect(() => {
    const aggregateData = (data) => {
      const result = {};
      
      data.forEach(({ period, value }) => {
        console.log("enters loop", period, value)
        if (result[period]) {
          result[period] += parseInt(value, 10);
        } else {
          result[period] = parseInt(value, 10);
        }
      });
      
      return Object.entries(result).map(([hour, totalValue]) => ({ hour, totalValue }));
    };

    if (Array.isArray(apiData)) {
      setAggregatedData(aggregateData(apiData));
    }
  }, [apiData]);

  console.log("exported by the algo", aggregatedData)
  return aggregatedData;
};

export default useAggregatedEnergyData;

