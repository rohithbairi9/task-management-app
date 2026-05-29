"use client";

import { useState } from "react";

import { createTask } from "@/services/api/task-api";

interface Props {
  onSuccess: () => void;
}

export default function TaskForm({
  onSuccess,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      priority: "MEDIUM" as
        | "LOW"
        | "MEDIUM"
        | "HIGH",
      dueDate: "",
    });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createTask(formData);

      setFormData({
        title: "",
        description: "",
        priority: "MEDIUM",
        dueDate: "",
      });

      onSuccess();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Task title"
        className="w-full rounded-xl border p-3"
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Description"
        className="w-full rounded-xl border p-3"
        rows={4}
        value={formData.description}
        onChange={(e) =>
          setFormData({
            ...formData,
            description: e.target.value,
          })
        }
      />

      <select
        className="w-full rounded-xl border p-3"
        value={formData.priority}
        onChange={(e) =>
          setFormData({
            ...formData,
            priority: e.target.value as
              | "LOW"
              | "MEDIUM"
              | "HIGH",
          })
        }
      >
        <option value="LOW">LOW</option>

        <option value="MEDIUM">
          MEDIUM
        </option>

        <option value="HIGH">HIGH</option>
      </select>

      <input
        type="date"
        className="w-full rounded-xl border p-3"
        value={formData.dueDate}
        onChange={(e) =>
          setFormData({
            ...formData,
            dueDate: e.target.value,
          })
        }
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-black p-3 text-white"
      >
        {loading
          ? "Creating..."
          : "Create Task"}
      </button>
    </form>
  );
}