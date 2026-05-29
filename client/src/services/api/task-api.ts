import { api } from "./api-client";

export interface CreateTaskData {
  title: string;

  description: string;

  priority: "LOW" | "MEDIUM" | "HIGH";

  dueDate: string;
}

export const createTask = async (
  data: CreateTaskData
) => {
  const response = await api.post(
    "/tasks",
    data
  );

  return response.data;
};

export const getTasks = async () => {
  const response = await api.get("/tasks");

  return response.data;
};

export const updateTaskStatus = async (
  id: string,
  status:
    | "PENDING"
    | "IN_PROGRESS"
    | "REVIEW"
    | "COMPLETED"
) => {
  const response = await api.patch(
    `/tasks/${id}/status`,
    {
      status,
    }
  );

  return response.data;
};

export const deleteTask = async (
  id: string
) => {
  const response = await api.delete(
    `/tasks/${id}`
  );

  return response.data;
};

export const updateTask = async (
  id: string,
  data: {
    title: string;
    description: string;
    priority:
      | "LOW"
      | "MEDIUM"
      | "HIGH";
    dueDate: string;
  }
) => {
  const response = await api.patch(
    `/tasks/${id}`,
    data
  );

  return response.data;
};