import express from "express";

import {
  createTask,
  deleteTask,
  getTasks,
  updateTaskStatus,
  updateTask,
} from "../controllers/task.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createTask);

router.get("/", protect, getTasks);

router.patch(
  "/:id",
  protect,
  updateTask
);

router.patch(
  "/:id/status",
  protect,
  updateTaskStatus
);

router.delete(
  "/:id",
  protect,
  deleteTask
);

export default router;