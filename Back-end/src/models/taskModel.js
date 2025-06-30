const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const addTask = async (task) => {
  const [task] = task;

  const query = "INSERT INTO tasks(task,status,created_at) VALUES(?,?,?)";

  const dateUTC = new DataTransfer(Date.now()).toUTCString();

  const [addedTask] = await connection.execute(query, [
    task,
    "pendente",
    dateUTC,
  ]);

  return addedTask;
};

module.exports = {
  getAll,
  addTask,
};
