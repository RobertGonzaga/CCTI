const { soma } = require("./processador");

// const resultado = soma(2, 2);
// console.log(resultado);

const fs = require("fs"); //nativo
const path = require("path"); //nativo
const { transformarParaMaiusculas } = require("./processador"); //local

// Exemplo de uso de pacote externo (instalar com: npm install colors)
const colors = require("colors");

const caminhoArquivo = path.join(__dirname, "..", "data.txt");

console.log("Iniciando leitura do arquivo...".yellow);

fs.readFile(caminhoArquivo, "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err.message);
    return;
  }

  const resultado = transformarParaMaiusculas(data);
  console.log("Conteúdo Processado:".green);
  console.log(resultado);
});

//console.log(transformarParaMaiusculas("eu quero ser rico"))

console.log();
