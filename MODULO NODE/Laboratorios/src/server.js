// src/server.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware para o Express entender JSON no corpo das requisições
app.use(express.json());

// Um array para simular nosso "banco de dados" em memória
let tasks = [
  { id: 1, descricao: "Estudar Node.js", concluida: true },
  { id: 2, descricao: "Criar API com Express", concluida: false },
];

// Rota principal
app.get("/", (req, res) => {
  res.send("Bem-vindo à API de tasks!");
});

// GET /tasks - Retorna todas as tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST /tasks - Cria uma nova tarefa
app.post("/tasks", (req, res) => {
  const novaTarefa = {
    id: tasks.length + 1, // Simples geração de ID
    descricao: req.body.descricao,
    concluida: false,
  };
  tasks.push(novaTarefa);
  res.status(201).json(novaTarefa); // 201 significa "Created"
});

// PUT /tasks/:id - Atualiza uma tarefa existente
app.put("/tasks/:id", (req, res) => {
  const idTarefa = parseInt(req.params.id);
  const tarefa = tasks.find((t) => t.id === idTarefa);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" }); // 404 Not Found
  }

  tarefa.descricao = req.body.descricao || tarefa.descricao;
  tarefa.concluida = req.body.concluida === undefined ? tarefa.concluida : req.body.concluida;

  res.json(tarefa);
});

// DELETE /tasks/:id - Deleta uma tarefa
app.delete("/tasks/:id", (req, res) => {
  const idTarefa = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === idTarefa);

  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  tasks.splice(index, 1);
  res.status(204).send(); // 204 No Content
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
