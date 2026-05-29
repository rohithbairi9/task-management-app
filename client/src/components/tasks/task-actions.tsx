"use client";

import { useState } from "react";

import EditTaskModal from "./edit-task-modal";

import { toast } from "sonner";

import {
  deleteTask,
  updateTaskStatus,
} from "@/services/api/task-api";

import { Task } from "@/types/task";

interface Props {
  task: Task;

  onUpdate: () => void;
}

export default function TaskActions({
  task,
  onUpdate,
}: Props) {

    const [openEdit, setOpenEdit] =
    useState(false);

  const handleComplete = async () => {
    try {
      await updateTaskStatus(
        task.id,
        "COMPLETED"
      );

      toast.success("Task completed");

      onUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);

      toast.success("Task deleted");

      onUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-6 flex gap-3">
      {!task.completed && (
        <button
          onClick={handleComplete}
          className="rounded-xl bg-black px-4 py-2 text-sm text-white"
        >
          Complete
        </button>
      )}

      <button
        onClick={() =>
         setOpenEdit(true)
        }
         className="rounded-xl bg-blue-500 px-4 py-2 text-sm text-white"
      >
       Edit
      </button>

      <button
        onClick={handleDelete}
        className="rounded-xl bg-red-500 px-4 py-2 text-sm text-white"
      >
        Delete
      </button>

      <EditTaskModal
       open={openEdit}
       onClose={() =>
       setOpenEdit(false)
    }
  task={task}
  onSuccess={onUpdate}
  />
    </div>
  );
}