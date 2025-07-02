const tBody = document.querySelector("tbody");

const fetchTasks = async () => {
  const response = await fetch("http://localhost:3333/tasks");
  const tasks = await response.json();
  return tasks;
};
// Função criar elemento que será chamada na hora de criar as tags da tabela
const createElement = (tag, innerText = "") => {
  const elemento = document.createElement(tag);
  elemento.innerText = innerText;

  return elemento;
};
// Teste
const task = {
  id: 1,
  title: "Estudar JavaScript",
  created_at: " 02 Julho de 2025 18:06",
  status: "pendente",
};

const createRow = (task) => {
  const { id, title, created_at, status } = task;

  const tr = createElement("tr");
  const tdTitle = createElement("td", title);

  tr.appendChild(tdTitle);

  tBody.appendChild(tr);
};

createRow(task);
