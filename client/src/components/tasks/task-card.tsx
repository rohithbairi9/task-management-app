import { Task } from "@/types/task";

import PriorityBadge from "./priority-badge";
import TaskActions from "./task-actions";

interface Props {
  task: Task;

  onUpdate: () => void;
}

export default function TaskCard({
  task,
  onUpdate,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">
            {task.title}
          </h2>

          <p className="mt-2 text-slate-500">
            {task.description}
          </p>
        </div>

        <PriorityBadge
          priority={task.priority}
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Due Date
          </p>

          <p className="font-medium">
            {new Date(
              task.dueDate
            ).toLocaleDateString()}
          </p>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
          {task.status}
        </span>
      </div>
      <TaskActions
        task={task}
        onUpdate={onUpdate}
/>
    </div>
  );
}