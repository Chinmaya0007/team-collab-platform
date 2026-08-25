import api from "./api";

export interface Project {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  organizationId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProjectPayload {
  organizationId: string;
  name: string;
  slug: string;
  description?: string;
}

export const getProjects = async (
  organizationId: string,
): Promise<Project[]> => {
  const response = await api.get("/api/v1/projects", {
    params: { organizationId },
  });

  return response.data.data;
};

export const createProject = async (
  data: CreateProjectPayload,
): Promise<Project> => {
  const response = await api.post(
    "/api/v1/projects",
    data,
  );

  return response.data.data;
};