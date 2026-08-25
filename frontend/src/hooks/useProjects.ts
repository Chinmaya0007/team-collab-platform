import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createProject,
  getProjects,
} from "../services/project.service";

export const useProjects = (organizationId: string) => {
  return useQuery({
    queryKey: ["projects", organizationId],
    queryFn: () => getProjects(organizationId),
    enabled: Boolean(organizationId),
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["projects", variables.organizationId],
      });
    },
  });
};