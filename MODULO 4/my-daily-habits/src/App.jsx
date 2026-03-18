import "./App.css";
import Footer from "./components/Footer";
import Cabecalho from "./components/Cabecalho";
import SecaoHabitos from "./components/SecaoHabitos";
import HabitList from "./components/HabitList";
import BemVindo from "./components/BemVindo";
import { HabitsProvider } from "./contexts/HabitsContext";

function App() {
  return (
    <HabitsProvider>
      <div>
        <Cabecalho titulo="My Daily Habits" descricao="Construindo uma rotina melhor" />
        <BemVindo nomeUsuario="Turma iteam" />
        <h1>My Daily Habits</h1>
        <p>Gerencie seus hábitos diários</p>
        <SecaoHabitos titulo="Meus Hábitos">
          <HabitList />
        </SecaoHabitos>
        <Footer />
      </div>
    </HabitsProvider>
  );
}

export default App;
