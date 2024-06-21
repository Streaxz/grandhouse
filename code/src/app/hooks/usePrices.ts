import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { IPrice } from "@/app/types/IPrice";

export const usePrices = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [prices, setPrices] = useState<IPrice[] | undefined>();
  const [error, setError] = useState<any | undefined>(undefined);

  const getPrices = async () => {
    try {
      const { data }: AxiosResponse = await axios.get(`${apiUrl}/api/prices`);

      if (data.length > 0) {
        setPrices(data);
      } else {
        setError(data);
      }
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    getPrices,
    prices,
  };
};
