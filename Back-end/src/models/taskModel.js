const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const addTask = async (task) => {
  const [title] = task;

  const query = "INSERT INTO tasks(title,status,created_at) VALUES(?,?,?)";

  const dateUTC = new DataTransfer(Date.now()).toUTCString();

  const [addedTask] = await connection.execute(query, [
    title,
    "pendente",
    dateUTC,
  ]);

  return addedTask;
};

module.exports = {
  getAll,
  addTask,
};
