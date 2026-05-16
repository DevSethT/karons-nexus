import "./QuestCard.css";

function QuestCard({ quest, toggleQuest }) {
  return (
    <div className="questcard">
      <div className="questcard__header">
        <h3 className="questcard__name">{quest.name}</h3>
        <p className="questcard__dificulty">{quest.dificulty}</p>
      </div>
      <div className="questcard__info">
        <p className="questcard__description">{quest.description}</p>
        <input
          type="checkbox"
          className="questcard__checkbox"
          checked={quest.completed}
          onChange={() => toggleQuest(quest.id)}
        />
      </div>
    </div>
  );
}

export default QuestCard;
