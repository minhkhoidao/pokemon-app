import React, { useEffect, useState } from 'react';
import axiosInstance from '../config/axios';

interface Results {
  name: string;
  url: string;
}

interface Props {
  count: number;
  next: string;
  previous: string;
  results: Results[];
}

const useQuery = (url: string) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(url);
      setData(response);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [data, loading, error];
};

export default useQuery;
