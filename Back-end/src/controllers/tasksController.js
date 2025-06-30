const tasksModel = require("../models/taskModel");

const getAll = async (_req, res) => {
  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks);
};

const addTask = async (req, res) => {
  const addedTask = await tasksModel.addTask(req.body);
  return res.status(201).json(addedTask);
};

module.exports = {
  getAll,
  addTask,
};
