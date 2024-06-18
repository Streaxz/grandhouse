import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ISeries } from "@/app/types/IProject";

export const useSeries = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [series, setSeries] = useState<ISeries[] | undefined>();
  const [error, setError] = useState<any | undefined>(undefined);

  const getSeries = async () => {
    try {
      const { data }: AxiosResponse = await axios.get(`${apiUrl}/api/series`);

      if (data.length > 0) {
        setSeries(data);
      } else {
        setError(data);
      }
    } catch (error) {
      setError(error);
    }
  };

  return {
    getSeries,
    series,
  };
};
