const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/soma", (req, res) => {
  const num1 = 10;
  const num2 = 20;
  res.send(`A soma de ${num1} + ${num2} é = ${num1 + num2}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
