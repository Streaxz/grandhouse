import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {IProject} from "@/app/types/IProject";
import {PHOTO_TYPE} from "@/app/types/IPhoto";


export interface ICreatePhoto {
	type: PHOTO_TYPE;
	projectId: number;
	imageUrl: string;
	order?: number;
}
export const useProject = (projectId?: string) => {

	const apiUrl = process.env.NEXT_PUBLIC_API_URL;

	const [project, setProject] = useState<IProject | undefined>();
	const [projects, setProjects] = useState<IProject[] | undefined>();
	const [error, setError] = useState<any | undefined>(undefined);


	const getProject = async () => {
		try {
			const {data}: AxiosResponse = await axios.get(`${apiUrl}/api/project/${projectId}`);

			if (data) {
				setProject(data);
			} else {
				setError(data);
			}
		} catch (error) {
			setError(error);
		}
	}

	const getProjects = async () => {
		try {
			const {data}: AxiosResponse = await axios.get(`${apiUrl}/api/project`);

			if (data.length > 0) {
				setProjects(data);
			} else {
				setError(data);
			}
		} catch (error) {
			setError(error);
		}
	}

	const createProject = async (title: string) => {
		try {
			await axios.post(`${apiUrl}/api/project`, {
				title
			});
			await getProjects();
		} catch (error) {
			setError(error);
		}
	}

	const createPhoto = async (data: ICreatePhoto) => {
		try {
			await axios.post(`${apiUrl}/api/photo`, data);
			await getProjects();
		} catch (error) {
			setError(error);
		}
	}

	const updateProject = async (project: IProject) => {
		try {
			await axios.patch(`${apiUrl}/api/project/${project.id}`, project);
			await getProjects();
		} catch (error) {
			setError(error);
		}
	}

	const updateMaterials = async (projectId: number, materials: number[]) => {
		try {
			await axios.patch(`${apiUrl}/api/project/material/${projectId}`, {
				materials
			});
			await getProjects();
		} catch (error) {
			setError(error);
		}
	}

	const updatePrices = async (projectId: number, prices: number[]) => {
		try {
			await axios.patch(`${apiUrl}/api/project/prices/${projectId}`, {
				prices
			});
			await getProjects();
		} catch (error) {
			setError(error);
		}
	}

	const deleteProject = async (projectId: number) => {
		try {
			await axios.delete(`${apiUrl}/api/project/${projectId}`);
			await getProjects();
		} catch (error) {
			setError(error);
		}
	}

	const deletePhoto = async (photoId: number) => {
		try {
			await axios.delete(`${apiUrl}/api/photo/${photoId}`);
			await getProjects();
		} catch (error) {
			setError(error);
		}
	}


	useEffect(() => {
		if (projectId && !error && !project) {
			getProject();
		}
	}, [projectId, error, project]);

	return {
		project,
		projects,
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
		error
	}
}