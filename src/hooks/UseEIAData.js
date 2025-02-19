import { useState, useEffect } from "react";
import { fetchEIAData } from "../services/api";

const useEIAData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchEIAData();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  console.log("from the hook", data)
  return { data, loading, error };
};

export default useEIAData;
