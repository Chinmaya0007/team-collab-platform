import api from "./api";

export interface Organization {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  ownerId: string;
  memberships?: unknown[];
  createdAt?: string;
  updatedAt?: string;
}
export interface CreateOrganizationPayload {
  name: string;
  slug: string;
  description?: string;
}

export const getMyOrganizations = async (): Promise<Organization[]> => {
  const response = await api.get("/api/v1/organizations");

  return response.data.data;
};

export const getOrganization = async (
  organizationId: string,
): Promise<Organization> => {
  const response = await api.get(
    `/api/v1/organizations/${organizationId}`,
  );

  return response.data.data;
};

export const createOrganization = async (
  payload: CreateOrganizationPayload,
): Promise<Organization> => {
  const response = await api.post(
    "/api/v1/organizations",
    payload,
  );

  return response.data.data;
};