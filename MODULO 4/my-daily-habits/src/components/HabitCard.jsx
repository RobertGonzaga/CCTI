function HabitCard({ titulo, meta, ativo = true, diasFeitos = 0, categoria = "Geral" }) {
  const metaAtingida = diasFeitos >= meta;

  const mensagemMeta = metaAtingida ? "Meta da semana atingida!" : `${diasFeitos} de ${meta} dias concluídos`;

  return (
    <div className="habits-card">
      <h3>{titulo}</h3>
      <p>{mensagemMeta}</p>
      <small>Categria: {categoria}</small>
      <span>{ativo ? "Ativo" : "Pausado"} </span>
      {metaAtingida && "Parabéns, você manteve a sequencia essa semana!"}
    </div>
  );
}

export default HabitCard;
