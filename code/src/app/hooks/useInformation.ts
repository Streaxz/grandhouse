import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import {
  ICreateInformation,
  IInformation,
  IUpdateInformation,
} from "@/app/types/IInformation";

export const useInformation = (getProjects: () => void) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [informations, setInformations] = useState<
    IInformation[] | undefined
  >();
  const [error, setError] = useState<any | undefined>(undefined);

  const getItems = async () => {
    try {
      const { data }: AxiosResponse = await axios.get(
        `${apiUrl}/api/information`,
      );

      if (data.length > 0) {
        setInformations(data);
      } else {
        setError(data);
      }
    } catch (error) {
      setError(error);
    }
  };

  const createItem = async (data: ICreateInformation) => {
    try {
      await axios.post(`${apiUrl}/api/information`, data);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/api/information/${id}`);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const updateItem = async (data: IUpdateInformation) => {
    try {
      await axios.patch(`${apiUrl}/api/information/${data.id}`);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  return {
    updateItem,
    createItem,
    deleteItem,
  };
};
