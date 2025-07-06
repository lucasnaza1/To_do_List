// Importa a conexão com o banco de dados
const connection = require("./connection");

// Função que busca todas as tarefas no banco de dados
const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

// Função que adiciona uma nova tarefa no banco de dados
const addTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = "INSERT INTO tasks(title,status,created_at) VALUES(?,?,?)";

  const [addedTask] = await connection.execute(query, [
    title,
    "pendente",
    dateUTC,
  ]);

  return { insertId: addedTask.insertId };
};

// Função que remove uma tarefa pelo ID
const deleteTask = async (id) => {
  const deletedTask = await connection.execute(
    "DELETE from tasks WHERE id = ?",
    [id]
  );
  return deletedTask;
};

// Função que atualiza uma tarefa pelo ID
const updateTask = async (id, task) => {
  const { title, status } = task;

  const query = "UPDATE tasks SET title=?, status= ? WHERE id = ?";

  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

// Exporta as funções do model
module.exports = {
  getAll,
  addTask,
  deleteTask,
  updateTask,
};
