# 📝 To-do List

**To-do List** is a simple front-end application built with HTML, CSS, and JavaScript. It allows users to add, mark as complete, and delete tasks —  
Uma **To-do List** é um aplicativo simples desenvolvido com HTML, CSS e JavaScript que permite adicionar, concluir e excluir tarefas.

---

## ✅ Funcionalidades

- [x] Adicionar tarefas  
- [x] Marcar tarefas como concluídas  
- [x] Editar tarefas  
- [x] Excluir tarefas  

---

## 🚀 Tecnologias Utilizadas

- [HTML5](w)
- [CSS3](w)
- [JavaScript (ES6+)](w)
- [Node.js](w)
- [Docker](w)
- [MySQL](w)

---

## ⚙️ Configuração do Projeto (Back-end com Node.js)

```bash
# Inicia o projeto com um package.json padrão
npm init -y

# Instala dependências principais
npm install express
npm install mysql2
npm install dotenv
npm install cors

# Instala dependências de desenvolvimento
npm install nodemon -D
npm install eslint -D

## 📦 Instalação e Uso

### 1. Instale as dependências

```bash
npm install
```

---

### 2. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis (ajuste conforme seu banco de dados):

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=3000
```

---

### 3. Inicie o servidor

#### Para rodar em modo desenvolvimento:

```bash
npm run dev
```

#### Para rodar em modo produção:

```bash
npm start
```

O servidor estará disponível em:  
📍 `http://localhost:3000`

---

## 📜 Scripts Disponíveis

```bash
npm run dev   # inicia o servidor com nodemon (desenvolvimento)
npm start     # inicia o servidor com Node.js (produção)
npm test      # comando padrão de teste (pode ser personalizado)
```

---

## 🧪 Testes

Este projeto ainda **não possui testes automatizados**. Contribuições são bem-vindas!

---

## 🧹 Padronização de Código

Este projeto utiliza **ESLint** com as seguintes dependências de desenvolvimento:

```json
"devDependencies": {
  "@eslint/js": "^9.30.0",
  "eslint": "^9.30.0",
  "globals": "^16.2.0"
}
```

Para verificar problemas de estilo no código:

```bash
npx eslint src/
```
