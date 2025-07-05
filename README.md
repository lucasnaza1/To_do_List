# 📝 To-do List

**To-do List** é uma aplicação simples que permite gerenciar tarefas, criada com HTML, CSS e JavaScript no front-end, e um back-end em Node.js com banco MySQL.  
Permite adicionar, editar, concluir e excluir tarefas de forma prática e eficiente.

---

## ✅ Funcionalidades

- [x] Adicionar tarefas  
- [x] Marcar tarefas como concluídas  
- [x] Editar tarefas  
- [x] Excluir tarefas  

---

## 🚀 Tecnologias Utilizadas
- 🌐 [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)  
- 🎨 [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)  
- 💻 [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
- 🟢 [Node.js](https://nodejs.org/en/)  
- 🚂 [Express](https://expressjs.com/)  
- 🐬 [MySQL](https://www.mysql.com/)  
- 🐳 [Docker (opcional)](https://www.docker.com/)  
- 🔍 [ESLint](https://eslint.org/)  
- 🔐 [dotenv](https://github.com/motdotla/dotenv)  
- 🌐 [CORS](https://github.com/expressjs/cors)  

## ⚙️ Configuração do Projeto (Back-end)

### 1. Clone o repositório e instale dependências

git clone https://github.com/lucasnaza1/To_do_List.git
cd To_do_List
npm install

### 2. Configure o arquivo .env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=3000

### 3. Crie a tabela tasks no banco MySQL

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  status ENUM('pendente', 'em progresso', 'concluido') DEFAULT 'pendente',
  created_at DATETIME NOT NULL
);

### 4. Executando a aplicação
npm run dev
npm start
