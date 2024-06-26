import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ICreateEmployee, IEmployee } from "@/app/utils/types/IEmployee";

export const useEmployee = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [employees, setEmployees] = useState<IEmployee[] | undefined>();
  const [error, setError] = useState<any | undefined>(undefined);

  const getEmployees = async () => {
    try {
      const { data }: AxiosResponse = await axios.get(`${apiUrl}/api/employee`);

      if (data.length > 0) {
        setEmployees(data);
      } else {
        setError(data);
      }
    } catch (error) {
      setError(error);
    }
  };

  const createEmployee = async (data: ICreateEmployee) => {
    try {
      await axios.post(`${apiUrl}/api/employee`, data);
      await getEmployees();
    } catch (error) {
      setError(error);
    }
  };

  const deleteEmployee = async (employeeId: number) => {
    try {
      await axios.delete(`${apiUrl}/api/employee/${employeeId}`);
      await getEmployees();
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    employees,
    getEmployees,
    createEmployee,
    deleteEmployee,
  };
};
