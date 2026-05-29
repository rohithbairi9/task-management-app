import { Task } from "@/types/task";

import TaskCard from "./task-card";

interface Props {
  tasks: Task[];

  onUpdate: () => void;
}

export default function TaskGrid({
  tasks,
  onUpdate,
}: Props) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
        <h2 className="text-2xl font-bold">
          No tasks found
        </h2>

        <p className="mt-2 text-slate-500">
          Create your first task
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
        key={task.id}
        task={task}
        onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}