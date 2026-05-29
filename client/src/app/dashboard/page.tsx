"use client";

import ProtectedRoute from "@/components/layout/protected-route";

import DashboardLayout from "@/components/layout/dashboard-layout";

import PageContainer from "@/components/layout/page-container";

import { useAuthStore } from "@/store/auth-store";

import { useEffect, useState } from "react";

import { getTasks } from "@/services/api/task-api";

import TaskStats from "@/components/tasks/task-stats";

import { Task } from "@/types/task";

export default function DashboardPage() {
  const user = useAuthStore(
    (state) => state.user
  );

  const [tasks, setTasks] = useState<Task[]>(
  []
);

const fetchTasks = async () => {
  try {
    const data = await getTasks();

    setTasks(data.tasks);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchTasks();
}, []);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <PageContainer>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">
                Dashboard
              </h1>

              <p className="mt-2 text-slate-500">
                Welcome back, {user?.name}
              </p>
            </div>
            <TaskStats tasks={tasks} />
          </div>
        </PageContainer>
      </DashboardLayout>
    </ProtectedRoute>
  );
}