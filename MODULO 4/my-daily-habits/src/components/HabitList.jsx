import { useEffect, useState, useRef } from "react";
import HabitCard from "./HabitCard";

function HabitList({ initialHabits, habits, setHabits }) {
  const removerHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // [name] é uma chave dinâmica — usa o valor de name como nome da propriedade
    if (name === "novoNome") {
      setNovoNome(value);
      if (value.length > 0 && value.length < 3) {
        setErroNome("O nome deve ter pelo menos 3 caracteres.");
      } else {
        setErroNome("");
      }
    }
    if (name === "novaDescricao") setNovaDescricao(value);
    if (name === "novaCategoria") setNovaCategoria(value);
  };

  const [novoNome, setNovoNome] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novaCategoria, setNovaCategoria] = useState("");
  const [erroNome, setErroNome] = useState("");

  const nomeInputRef = useRef(null);

  const adicionarHabit = (event) => {
    event.preventDefault();

    if (!novoNome.trim()) {
      alert("Informe um nome para o hábito.");
      return;
    }

    if (erroNome) {
      nomeInputRef.current?.focus();
      return;
    }

    const novoHabit = {
      id: Date.now(),
      nome: novoNome,
      descricao: novaDescricao,
      meta: 7, // padrão
      ativo: true, // padrão
      diasFeitos: 0, // padrão
      categoria: novaCategoria || "Geral",
    };

    setHabits([...habits, novoHabit]);

    // Limpar os campos após adicionar
    setNovoNome("");
    setNovaDescricao("");
    setNovaCategoria("");
    nomeInputRef.current?.focus();
  };

  // Passo 1 — montagem
  useEffect(() => {}, []);

  // Passo 3 — salvar no localStorage
  useEffect(() => {
    localStorage.setItem("my-daily-habits", JSON.stringify(habits));
  }, [habits]);

  const limparHistorico = () => {
    localStorage.removeItem("my-daily-habits");
    setHabits(initialHabits);
  };

  return (
    <section>
      <form onSubmit={adicionarHabit} className="habit-form">
        <div>
          <label>
            Nome do hábito *
            <input type="text" value={novoNome} name="novoNome" onChange={handleChange} ref={nomeInputRef} />
          </label>
          {erroNome && <p style={{ color: "red", fontSize: "0.8rem" }}>{erroNome}</p>}
        </div>
        <div>
          <label>
            Descrição
            <input type="text" value={novaDescricao} name="novaDescricao" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Categoria
            <input type="text" value={novaCategoria} name="novaCategoria" onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Adicionar hábito</button>
      </form>

      <ul>
        {habits.length === 0 && <p>Nenhum hábito cadastrado ainda.</p>}
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            nome={habit.nome}
            descricao={habit.descricao}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}
      </ul>
      <button onClick={limparHistorico}>Limpar histórico</button>
    </section>
  );
}

export default HabitList;
