import { useEffect, useState } from "react";

const useAggregatedEnergyData = (apiData) => {
  console.log(apiData)
  const [aggregatedData, setAggregatedData] = useState([]);

  useEffect(() => {
    const aggregateEnergyByHour = (data) => {
      const result = {};
      
      data.forEach(({ period, value }) => {
        if (result[period]) {
          result[period] += parseInt(value, 10);
        } else {
          result[period] = parseInt(value, 10);
        }
      });
      
      return Object.entries(result).map(([hour, totalValue]) => ({
        hour,
        totalValue
      }));
    };

    if (apiData?.data) {
      setAggregatedData(aggregateEnergyByHour(apiData.data));
    }
  }, [apiData]);

  console.log(aggregatedData)
  return aggregatedData;
};

export default useAggregatedEnergyData;
