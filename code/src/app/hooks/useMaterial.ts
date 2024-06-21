import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ICreateMaterial, IMaterial } from "@/app/types/IMaterial";

export const useMaterial = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [materials, setMaterials] = useState<IMaterial[] | undefined>();
  const [error, setError] = useState<any | undefined>(undefined);

  const getMaterials = async () => {
    try {
      const { data }: AxiosResponse = await axios.get(`${apiUrl}/api/material`);

      if (data.length > 0) {
        setMaterials(data);
      } else {
        setError(data);
      }
    } catch (error) {
      setError(error);
    }
  };

  const createMaterial = async (data: ICreateMaterial) => {
    try {
      await axios.post(`${apiUrl}/api/material`, data);
      await getMaterials();
    } catch (error) {
      setError(error);
    }
  };

  const deleteMaterial = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/api/material/${id}`);
      await getMaterials();
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    materials,
    getMaterials,
    createMaterial,
    deleteMaterial,
  };
};
