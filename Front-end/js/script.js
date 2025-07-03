const tBody = document.querySelector("tbody");

const fetchTasks = async () => {
  const response = await fetch("http://localhost:3333/tasks");
  const tasks = await response.json();
  return tasks;
};

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

const createSelect = () => {
  const options =
    "<option value='Pendente'>Pendente</option><option value='Em Progresso'>Em progresso</option><option value='Concluido'>Concluido</option>";

  const select = createElement("select", "", options);

  return select;
};

const task = {
  id: 1,
  title: "Estudar React",
  created_at: " 02 Julho de 2025 18:06",
  status: "pendente",
};

const createRow = (task) => {
  const { id, title, created_at, status } = task;

  const tr = createElement("tr");
  const tdTitle = createElement("td", title);
  const tdcreactedAt = createElement("td", created_at);
  const tdStatus = createElement("td");
  const tdActions = createElement("td");

  const select = createSelect();

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

  tBody.appendChild(tr);
};

createRow(task);
