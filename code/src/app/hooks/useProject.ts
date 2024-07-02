import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { IProject } from "@/app/utils/types/IProject";
import { PHOTO_TYPE } from "@/app/utils/types/IPhoto";
import { IFilters } from "@/app/catalog/page";

export interface ICreatePhoto {
  type: PHOTO_TYPE;
  projectId: number;
  imageUrl: string;
  order?: number;
}

//TODO: сделать пагинацию для getProjects.
export const useProject = (projectId?: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [loading, setLoading] = useState<boolean>(false);
  const [project, setProject] = useState<IProject | undefined>();
  const [projects, setProjects] = useState<IProject[] | undefined>();
  const [error, setError] = useState<any | undefined>(undefined);

  const getProject = async () => {
    try {
      const { data }: AxiosResponse = await axios.get(
        `${apiUrl}/api/project/${projectId}`,
      );

      if (data) {
        setProject(data);
      } else {
        setError(data);
      }
    } catch (error) {
      setError(error);
    }
  };

  const getProjects = async (filters?: IFilters) => {
    try {
      setLoading(true);
      let params: string = "";
      if (filters) {
        params = `?${new URLSearchParams(filters as any).toString()}`;
      }

      const { data }: AxiosResponse = await axios.get(
        `${apiUrl}/api/project${params}`,
      );

      if (data) {
        setProjects(data);
      } else {
        setError(data);
      }

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const createProject = async (title: string) => {
    try {
      await axios.post(`${apiUrl}/api/project`, {
        title,
      });
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const createPhoto = async (data: ICreatePhoto) => {
    try {
      await axios.post(`${apiUrl}/api/photo`, data);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const updateProject = async (project: IProject) => {
    try {
      await axios.patch(`${apiUrl}/api/project/${project.id}`, project);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const updateMaterials = async (projectId: number, materials: number[]) => {
    try {
      await axios.patch(`${apiUrl}/api/project/material/${projectId}`, {
        materials,
      });
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const updatePrices = async (projectId: number, prices: number[]) => {
    try {
      await axios.patch(`${apiUrl}/api/project/prices/${projectId}`, {
        prices,
      });
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const deleteProject = async (projectId: number) => {
    try {
      await axios.delete(`${apiUrl}/api/project/${projectId}`);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  const deletePhoto = async (photoId: number) => {
    try {
      await axios.delete(`${apiUrl}/api/photo/${photoId}`);
      await getProjects();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (projectId && !error && !project) {
      getProject();
    }
  }, [projectId, error, project]);

  return {
    project,
    projects,
    loading,
    setProject,
    getProject,
    getProjects,
    createProject,
    updateProject,
    deleteProject,
    createPhoto,
    deletePhoto,
    updateMaterials,
    updatePrices,
    error,
  };
};
