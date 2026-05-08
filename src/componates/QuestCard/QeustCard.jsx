import "./QuestCard.css";

function QuestCard() {
  return (
    <div className="questcard">
      <h3 className="questcard__tittle">Finish Site Setup</h3>
      <p className="questcard__dificulty">C Rank</p>
      <input type="checkbox" className="questcard__checkbox" />
    </div>
  );
}

export default QuestCard;
