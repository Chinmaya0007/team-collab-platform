import api from "./api";

export type TaskStatus =
  | "TODO"
  | "IN_PROGRESS"
  | "IN_REVIEW"
  | "DONE";

export type TaskPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "URGENT";

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTaskPayload {
  projectId: string;
  title: string;
  description?: string;
  priority?: TaskPriority;
  assigneeId?: string;
}

export interface UpdateTaskPayload {
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  assigneeId?: string | null;
}

export const getTasksByProject = async (
  projectId: string,
): Promise<Task[]> => {
  const response = await api.get(
    `/api/v1/tasks/project/${projectId}`,
  );

  return response.data.data;
};

export const getTaskById = async (
  taskId: string,
): Promise<Task> => {
  const response = await api.get(
    `/api/v1/tasks/${taskId}`,
  );

  return response.data.data;
};

export const createTask = async (
  data: CreateTaskPayload,
): Promise<Task> => {
  const response = await api.post(
    "/api/v1/tasks",
    data,
  );

  return response.data.data;
};

export const updateTask = async (
  taskId: string,
  data: UpdateTaskPayload,
): Promise<Task> => {
  const response = await api.patch(
    `/api/v1/tasks/${taskId}`,
    data,
  );

  return response.data.data;
};

export const deleteTask = async (
  taskId: string,
): Promise<void> => {
  await api.delete(`/api/v1/tasks/${taskId}`);
};