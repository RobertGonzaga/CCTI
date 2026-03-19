import { Link } from "react-router-dom";

function HabitCard({
  id,
  nome,
  descricao = "",
  categoria = "Geral",
  meta,
  ativo = true,
  diasFeitos = 0,
  onRemover,
}) {
  const metaAtingida = diasFeitos >= meta;
  const mensagemMeta = metaAtingida
    ? "🏆 Meta da semana atingida!"
    : `${diasFeitos} de ${meta} dias concluídos`;

  return (
    <div className="habit-card">
      <h3>{nome}</h3>
      {descricao && <p>{descricao}</p>}
      <small>Categoria: {categoria}</small>
      <p>{mensagemMeta}</p>
      <span>{ativo ? "✅ Ativo" : "⏸️ Pausado"}</span>
      {metaAtingida && <p>⭐ Parabéns! Meta da semana atingida!</p>}
      <div className="habit-card-acoes">
        {/* Link para a página de detalhes — usa o id do hábito na URL */}
        <Link to={`/habito/${id}`} className="btn-detalhes">
          Ver detalhes
        </Link>
        {onRemover && (
          <button type="button" onClick={onRemover}>
            Remover
          </button>
        )}
      </div>
    </div>
  );
}

export default HabitCard;
