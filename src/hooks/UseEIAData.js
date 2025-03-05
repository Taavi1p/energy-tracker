import { useState, useEffect } from "react";
import { fetchEIAData } from "../services/api";

const useEIAData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetchEIAData();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data initially
    const interval = setInterval(fetchData, 30 * 60 * 1000); // Fetch data every 30 minutes

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return { data, loading, error };
};

export default useEIAData;
