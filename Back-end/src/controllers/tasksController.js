// Importa o model de tarefas
const tasksModel = require("../models/taskModel");

// Função que retorna todas as tarefas
const getAll = async (_req, res) => {
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

// Função que adiciona uma nova tarefa
const addTask = async (req, res) => {
  const addedTask = await tasksModel.addTask(req.body);
  return res.status(201).json(addedTask);
};

// Função que deleta uma tarefa pelo ID
const deleteTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.deleteTask(id);
  return res.status(204).json();
};

// Função que atualiza uma tarefa pelo ID
const updateTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.updateTask(id, req.body);

  return res.status(204).json();
};

// Exporta as funções do controller
module.exports = {
  getAll,
  addTask,
  deleteTask,
  updateTask,
};
