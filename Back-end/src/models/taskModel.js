const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

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

module.exports = {
  getAll,
  addTask,
};
