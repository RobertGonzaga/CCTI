const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let tarefas = [
  { id: 1, descricao: "Estudar Node.js", concluida: true },
  { id: 2, descricao: "Fazer projetos pessoais", concluida: false },
];

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Bem vindo a API de Tarefas");
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});
