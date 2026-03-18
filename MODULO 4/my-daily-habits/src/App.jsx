import "./App.css";
import Footer from "./components/Footer";
import Cabecalho from "./components/Cabecalho";
import SecaoHabitos from "./components/SecaoHabitos";
import HabitList from "./components/HabitList";
import BemVindo from "./components/BemVindo";

function App() {
  return (
    <div>
      <Cabecalho titulo="My Daily Habits" />
      <BemVindo />
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
