import express from "express";
import {
  createTask,
  getAllTasks,
  getTask,
  editTask,
  deleteTask,
} from "../controllers/taskController.js";
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(editTask).delete(deleteTask);

export default router;
