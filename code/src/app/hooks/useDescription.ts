import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import {
  ICreateInformationCard,
  IInformationCard,
  IUpdateInformationCard,
} from "@/app/utils/types/IInformationCard";

export const useDescription = (getProjects: () => void) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [descriptions, setDescriptions] = useState<
    IInformationCard[] | undefined
  >();
  const [error, setError] = useState<any | undefined>(undefined);

  const getDescriptions = async () => {
    try {
      const { data }: AxiosResponse = await axios.get(
        `${apiUrl}/api/information-card`,
      );

      if (data.length > 0) {
        setDescriptions(data);
      } else {
        setError(data);
      }
    } catch (error) {
      setError(error);
    }
  };

  const createDescription = async (data: ICreateInformationCard) => {
    try {
      await axios.post(`${apiUrl}/api/information-card`, data);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const deleteDescription = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/api/information-card/${id}`);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const updateDescription = async (data: IUpdateInformationCard) => {
    try {
      await axios.patch(`${apiUrl}/api/information-card/${data.id}`);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    descriptions,
    getDescriptions,
    updateDescription,
    createDescription,
    deleteDescription,
  };
};
