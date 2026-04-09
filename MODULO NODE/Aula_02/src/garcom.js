const fs = require("fs"); // Nosso "garçom" que fala com a cozinha (SO) [cite: 144]
const path = require("path");
const colors = require("colors");

// Configurando o caminho da "Mesa" (arquivo data.txt)
const caminhoMesa = path.join(__dirname, "..", "data.txt");

console.log('1. [GARÇOM]: "Boa noite! Anotei seu pedido e já mandei para a cozinha."'.yellow);

// Iniciando a gravação assíncrona (O garçom entrega o pedido e sai)
const pedido = "Prato Principal: Node.js com Tempero de Assincronia";

fs.writeFile(caminhoMesa, pedido, "utf8", (err) => {
  // Este bloco é o "Sino da Cozinha" (Callback)
  if (err) {
    console.log('X. [COZINHA]: "Tivemos um problema com o fogão!"'.red.bold);
    return;
  }

  console.log('3. [SINO TOCA]: "O pedido da mesa está pronto! Vou entregar agora."'.green.bold);
});

// A Prova da Assincronia: O garçom não fica parado esperando! [cite: 71, 87]
console.log('2. [GARÇOM]: "Enquanto a comida não sai, vou atender a Mesa 02 e servir as bebidas."'.cyan);

let somaRapida = 10 + 20;
console.log(`[AÇÃO RÁPIDA]: Servindo café (Soma: ${somaRapida})`.magenta);
