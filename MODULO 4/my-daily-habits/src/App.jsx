import "./App.css";
import Footer from "./components/Footer";
import Cabecalho from "./components/Cabecalho";
import SecaoHabitos from "./components/SecaoHabitos";
import HabitList from "./components/HabitList";

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
  const habits = [];

  return (
    <div>
      <Cabecalho titulo="My Daily Habits" descricao="Construindo uma rotina melhor, um hábito por vez." />
      <BemVindo nomeUsuario="turma iteam" totalHabitos={habits.length} />
      <h1>My Daily Habits</h1>
      <p>Gerencie seus hábitos diários</p>
      <SecaoHabitos titulo="Meus Hábitos">
        <HabitList />
      </SecaoHabitos>
      <Footer />
    </div>
  );
}

export default App;
