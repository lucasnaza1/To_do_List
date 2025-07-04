const express = require("express");

const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksMiddleware.validateBody, tasksController.addTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put(
  "/tasks/:id",
  tasksMiddleware.validateBody,
  tasksMiddleware.validateStatus,
  tasksController.updateTask
);

module.exports = router;
