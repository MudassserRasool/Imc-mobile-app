import { useEffect, useState } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (fetchOptions) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, fetchOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok', response.statusText);
      }
      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(options);
  }, []);

  const refetch = () => {
    fetchData(options);
  };

  return { data, isLoading, error, refetch };
}

export default useFetch;
