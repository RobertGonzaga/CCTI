// import { useEffect } from "react";
import HabitCard from "./HabitCard";

function HabitList({ habits }) {
  // useEffect(() => {
  //   document.title = `My Daily Habits — ${habits.length} hábito(s)`;
  //   console.log("useEffect rodou");
  // }, []);

  if (!habits) return null;

  if (habits.lenght === 0) {
    return <p>Nenhum hábito cadastrado ainda, que tal comecar?</p>;
  }

  return (
    <ul>
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          titulo={habit.titulo}
          meta={habit.meta}
          ativo={habit.ativo}
          diasFeitos={habit.diasFeitos}
        />
      ))}
    </ul>
  );
}

export default HabitList;
