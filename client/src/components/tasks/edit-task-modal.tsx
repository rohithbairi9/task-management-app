"use client";

import { useState } from "react";

import Modal from "@/components/ui/modal";

import { updateTask } from "@/services/api/task-api";

import { Task } from "@/types/task";

import { toast } from "sonner";

interface Props {
  open: boolean;

  onClose: () => void;

  task: Task;

  onSuccess: () => void;
}

export default function EditTaskModal({
  open,
  onClose,
  task,
  onSuccess,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate.slice(0, 10),
    });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateTask(task.id, formData);

      toast.success(
        "Task updated successfully"
      );

      onSuccess();

      onClose();
    } catch (error) {
      toast.error("Failed to update task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Edit Task"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
          className="w-full rounded-xl border p-3"
        />

        <textarea
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description:
                e.target.value,
            })
          }
          className="w-full rounded-xl border p-3"
        />

        <select
          value={formData.priority}
          onChange={(e) =>
            setFormData({
              ...formData,
              priority: e.target
                .value as
                | "LOW"
                | "MEDIUM"
                | "HIGH",
            })
          }
          className="w-full rounded-xl border p-3"
        >
          <option value="LOW">LOW</option>

          <option value="MEDIUM">
            MEDIUM
          </option>

          <option value="HIGH">HIGH</option>
        </select>

        <input
          type="date"
          value={formData.dueDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              dueDate: e.target.value,
            })
          }
          className="w-full rounded-xl border p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-black p-3 text-white"
        >
          {loading
            ? "Updating..."
            : "Update Task"}
        </button>
      </form>
    </Modal>
  );
}