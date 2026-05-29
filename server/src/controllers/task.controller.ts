import { Response } from "express";

import { prisma } from "../lib/prisma.js";

import { AuthRequest } from "../types/express/index.js";

import { createTaskSchema } from "../validators/task.validator.js";

import { TaskStatus } from "@prisma/client";

export const createTask = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const validatedData =
      createTaskSchema.parse(req.body);

    const task = await prisma.task.create({
      data: {
        title: validatedData.title,
        description:
          validatedData.description,

        priority: validatedData.priority,

        dueDate: new Date(
          validatedData.dueDate
        ),

        createdById: req.user.userId,
      },
    });

    return res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getTasks = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const tasks = await prisma.task.findMany({
      where: {
        createdById: req.user.userId,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      tasks,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTaskStatus = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const id = req.params.id as string;

    const { status } = req.body;

    const validStatuses: TaskStatus[] = [
      "PENDING",
      "IN_PROGRESS",
      "REVIEW",
      "COMPLETED",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
      });
    }

    const task = await prisma.task.update({
      where: {
        id,
      },

      data: {
        status,

        completed:
          status === "COMPLETED",
      },
    });

    return res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteTask = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const id = req.params.id as string;

    await prisma.task.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTask = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const id = req.params.id as string;

    const validatedData =
      createTaskSchema.parse(req.body);

    const task = await prisma.task.update({
      where: {
        id,
      },

      data: {
        title: validatedData.title,

        description:
          validatedData.description,

        priority:
          validatedData.priority,

        dueDate: new Date(
          validatedData.dueDate
        ),
      },
    });

    return res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};