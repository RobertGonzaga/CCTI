function BemVindo({ nomeUsuario, totalHabits }) {
  // Lógica antes do return
  const nomeFormatado = nomeUsuario.toUpperCase();
  const mensagem =
    totalHabits > 0
      ? `Você tem ${totalHabits} hábito(s) cadastrado(s).`
      : "Nenhum hábito cadastrado ainda. Que tal começar?";
  return (
    <div>
      <h2>Olá, {nomeFormatado}!</h2>
      <p>{mensagem}</p>
      <p>Média diária: {(totalHabits * 30).toFixed(0)} atividades por mês</p>
    </div>
  );
}

export default BemVindo;
