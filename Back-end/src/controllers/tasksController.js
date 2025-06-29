const tasksModel = require("../models/taskModel");

const getAll = async (req, res) => {
  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks);
};

module.exports = {
  getAll,
};
