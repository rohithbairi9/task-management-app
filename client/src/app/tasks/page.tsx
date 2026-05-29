"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/components/layout/protected-route";

import DashboardLayout from "@/components/layout/dashboard-layout";

import PageContainer from "@/components/layout/page-container";

import TaskGrid from "@/components/tasks/task-grid";

import TaskForm from "@/components/tasks/task-form";

import { getTasks } from "@/services/api/task-api";

import { Task } from "@/types/task";

import TaskSearch from "@/components/tasks/task-search";

import TaskFilter from "@/components/tasks/task-filter";

import TaskStats from "@/components/tasks/task-stats";

export default function TasksPage() {
  const [tasks, setTasks] = useState<
    Task[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [priorityFilter, setPriorityFilter] =
    useState("ALL");

  const fetchTasks = async () => {
    try {
      const data = await getTasks();

      setTasks(data.tasks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(
   (task) => {
    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      task.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesPriority =
      priorityFilter === "ALL"
        ? true
        : task.priority ===
          priorityFilter;

    return (
      matchesSearch &&
      matchesPriority
    );
   }
  );

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <PageContainer>
          <div className="space-y-8">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
  <div>
    <h1 className="text-4xl font-bold">
      Tasks
    </h1>

    <p className="mt-2 text-slate-500">
      Manage your tasks
    </p>
  </div>

  <div className="flex flex-col gap-4 lg:flex-row">
    <TaskSearch
      value={search}
      onChange={setSearch}
    />

    <TaskFilter
      value={priorityFilter}
      onChange={setPriorityFilter}
    />
  </div>
</div>

   <TaskStats tasks={tasks} />

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">
                Create Task
              </h2>

              <TaskForm
                onSuccess={fetchTasks}
              />
            </div>

            {loading ? (
              <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
                Loading tasks...
              </div>
            ) : (
              <TaskGrid
                tasks={filteredTasks}
                onUpdate={fetchTasks}
                />
            )}
          </div>
        </PageContainer>
      </DashboardLayout>
    </ProtectedRoute>
  );
}