const tasksModel = require("../models/taskModel");

const getAll = async (_req, res) => {
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

const addTask = async (req, res) => {
  const addedTask = await tasksModel.addTask(req.body);
  return res.status(201).json(addedTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.deleteTask(id);
  return res.status(204).json();
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.updateTask(id, req.body);

  return res.status(204).json();
};

module.exports = {
  getAll,
  addTask,
  deleteTask,
  updateTask,
};
