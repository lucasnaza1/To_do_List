const tBody = document.querySelector("tbody");
const addForm = document.querySelector(".add-form");
const inputTask = document.querySelector(".input-task");
// Função de busca das tasks
const fetchTasks = async () => {
  const response = await fetch("http://localhost:3333/tasks");
  const tasks = await response.json();
  return tasks;
};
// Função adicionar task
const addTask = async (event) => {
  event.preventDefault();

  const task = { title: inputTask.value };

  await fetch("http://localhost:3333/tasks", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  loadTasks();
  inputTask.value = "";
};
// Função para formatar a data
const formatDate = (dateUTC) => {
  const options = { dateStyle: "long", timeStyle: "short" };
  const date = new Date(dateUTC).toLocaleString("pt-br", options);

  return date;
};
// Função que cria elementos HTML
const createElement = (tag, innerText = "", innerHTML = "") => {
  const elemento = document.createElement(tag);
  if (innerText) {
    elemento.innerText = innerText;
  }
  if (innerHTML) {
    elemento.innerHTML = innerHTML;
  }

  return elemento;
};
// Função que gera botões de edit e delete
const createSelect = () => {
  const options =
    "<option value='Pendente'>Pendente</option><option value='Em Progresso'>Em progresso</option><option value='Concluido'>Concluido</option>";

  const select = createElement("select", "", options);

  return select;
};
// Task de teste
const task = {
  id: 1,
  title: "Estudar React",
  created_at: " 02 Julho de 2025 18:06",
  status: "pendente",
};
// Função que cria a linha da tabela
const createRow = (task) => {
  const { id, title, created_at, status } = task;

  const tr = createElement("tr");
  const tdTitle = createElement("td", title);
  const tdcreactedAt = createElement("td", formatDate(created_at));
  const tdStatus = createElement("td");
  const tdActions = createElement("td");

  const select = createSelect(status);

  const editButton = createElement(
    "button",
    "",
    "<span class='material-symbols-outlined'> edit </span>"
  );
  const deleteButton = createElement(
    "button",
    "",
    "<span class='material-symbols-outlined'> delete </span>"
  );

  editButton.classList.add("btn-action");
  deleteButton.classList.add("btn-action");

  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  tdStatus.appendChild(select);

  tr.appendChild(tdTitle);
  tr.appendChild(tdcreactedAt);
  tr.appendChild(tdStatus);
  tr.appendChild(tdActions);

  return tr;
};
// Função que irá buscar as tasks no banco de dados e carregar na tela
const loadTasks = async () => {
  const tasks = await fetchTasks();

  tBody.innerHTML = "";

  tasks.forEach((task) => {
    const tr = createRow(task);
    tBody.appendChild(tr);
  });
};

addForm.addEventListener("submit", addTask);
loadTasks();
