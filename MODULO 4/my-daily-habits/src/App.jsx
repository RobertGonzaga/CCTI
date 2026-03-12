import "./App.css";
import Footer from "./components/Footer";
import Cabecalho from "./components/Cabecalho";
import SecaoHabitos from "./components/SecaoHabitos";

const BemVindo = ({ nomeUsuario, totalHabitos }) => {
  // Lógica antes do return
  const nomeFormatado = nomeUsuario.toUpperCase();
  const mensagem =
    totalHabitos > 0
      ? `Você tem ${totalHabitos} hábito(s) cadastrado(s).`
      : "Nenhum hábito cadastrado ainda. Que tal começar?";

  return (
    <div>
      <h2>Olá, {nomeFormatado}!</h2>
      <p>{mensagem}</p>
      <p>Média diária: {(totalHabitos * 30).toFixed(0)} atividades por mês</p>
    </div>
  );
};

function App() {
  const habits = [
    { id: 1, titulo: "Exercício", meta: 5, ativo: true, diasFeitos: 5 },
    { id: 2, titulo: "Leitura", meta: 7, ativo: true, diasFeitos: 3 },
    { id: 3, titulo: "Meditação", meta: 7, ativo: true, diasFeitos: 0 },
    { id: 4, titulo: "Hidratação", meta: 7, ativo: true, diasFeitos: 6 },
  ];

  return (
    <>
      <div>
        <Cabecalho titulo="My Daily Habits" descricao="Construindo uma rotina melhor, um hábito por vez." />
        <BemVindo nomeUsuario="turma iteam" totalHabitos={habits.length} />
        <h1>My Daily Habits</h1>
        <p>Gerencie seus hábitos diários</p>
        <Footer />
      </div>
    </>
  );
}

export default App;
