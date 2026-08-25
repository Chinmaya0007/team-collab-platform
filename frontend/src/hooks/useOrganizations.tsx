import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  createOrganization,
  getMyOrganizations,
  getOrganization,
} from "../services/organization.service";

export const useOrganizations = () => {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: getMyOrganizations,
  });
};

export const useCreateOrganization = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrganization,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["organizations"],
      });
    },
  });
};

export const useOrganization = (organizationId: string) => {
  return useQuery({
    queryKey: ["organization", organizationId],
    queryFn: () => getOrganization(organizationId),
    enabled: Boolean(organizationId),
  });
};