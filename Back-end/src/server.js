// Importa a aplicação Express configurada
const app = require("./app");
// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Define a porta da aplicação (usa a variável de ambiente ou 3333 como padrão)
const PORT = process.env.PORT || 3333;

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
