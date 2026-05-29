import { Task } from "@/types/task";

interface Props {
  tasks: Task[];
}

export default function TaskStats({
  tasks,
}: Props) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) *
            100
        );

  const stats = [
    {
      label: "Total Tasks",
      value: totalTasks,
    },
    {
      label: "Completed",
      value: completedTasks,
    },
    {
      label: "Pending",
      value: pendingTasks,
    },
    {
      label: "Productivity",
      value: `${productivity}%`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <h2 className="text-slate-500">
            {stat.label}
          </h2>

          <p className="mt-4 text-4xl font-bold">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}