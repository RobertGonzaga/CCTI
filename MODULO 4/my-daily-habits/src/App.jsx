import "./App.css";
import Footer from "./components/Footer";
import Cabecalho from "./components/Cabecalho";
import SecaoHabitos from "./components/SecaoHabitos";
import HabitList from "./components/HabitList";
import BemVindo from "./components/BemVindo";
import { useState } from "react";

const INITIAL_HABITS = [
  { id: 1, nome: "Exercício", descricao: "Treino de força", meta: 5, ativo: true, diasFeitos: 5 },
  { id: 2, nome: "Leitura", descricao: "Livro ou artigo", meta: 7, ativo: true, diasFeitos: 3 },
  { id: 3, nome: "Meditação", descricao: "Respiração e foco", meta: 7, ativo: false, diasFeitos: 0 },
  { id: 4, nome: "Hidratação", descricao: "Beber 2L de água", meta: 7, ativo: true, diasFeitos: 6 },
];

function App() {
  const [habits, setHabits] = useState(() => {
    // Esta função executa UMA VEZ — na montagem
    const stored = localStorage.getItem("my-daily-habits");

    // Se não há nada salvo — usa o array inicial
    if (!stored) return INITIAL_HABITS;

    // Se há dados salvos — tenta fazer o parse
    try {
      return JSON.parse(stored);
    } catch {
      // Se o JSON estiver corrompido — volta pro array inicial
      return [];
    }
  });
  return (
    <div>
      <Cabecalho titulo="My Daily Habits" />
      <BemVindo nomeUsuario="Turma iteam" totalHabits={habits.length} />
      <h1>My Daily Habits</h1>
      <p>Gerencie seus hábitos diários</p>
      <SecaoHabitos titulo="Meus Hábitos">
        <HabitList initialHabits={INITIAL_HABITS} habits={habits} setHabits={setHabits} />
      </SecaoHabitos>
      <Footer />
    </div>
  );
}

export default App;
