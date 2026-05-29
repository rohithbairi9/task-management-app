export interface Task {
  id: string;

  title: string;

  description: string;

  priority: "LOW" | "MEDIUM" | "HIGH";

  status:
    | "PENDING"
    | "IN_PROGRESS"
    | "REVIEW"
    | "COMPLETED";

  completed: boolean;

  dueDate: string;

  createdAt: string;
}