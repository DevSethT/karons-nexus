import "./QuestPage.css";
import { quests as startingQuests } from "../../Utills/Quests";
import QuestCard from "../../componates/QuestCard/QeustCard";
import { useState } from "react";

function QuestPage() {
  const [quests, setQuests] = useState(startingQuests);

  function toggleQuest(id) {
    setQuests(
      quests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest,
      ),
    );
  }
  return (
    <>
      <h1>Quest Board</h1>
      <div className="questboard">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} toggleQuest={toggleQuest} />
        ))}
      </div>
    </>
  );
}

export default QuestPage;
