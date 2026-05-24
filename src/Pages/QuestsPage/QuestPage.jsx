import "./QuestPage.css";
import { quests as startingQuests } from "../../Utills/Quests";
import QuestCard from "../../componates/QuestCard/QeustCard";
import { useState } from "react";
import AddQuestModal from "../../componates/AddQuestModal/AddQuestModal";

function QuestPage() {
  const [quests, setQuests] = useState(startingQuests);
  const [isOpen, setOpen] = useState(false);

  // const uncompletedQuests = quests.filter((quest) => !quest.completed);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function toggleQuest(id) {
    setQuests(
      quests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest,
      ),
    );
  }
  return (
    <div className="questpage">
      <div className="questpage__header">
      <h1>Quest Board</h1>
      <button onClick={openModal} className="questpage__add-quest">Add Quest</button>
      </div>
      <div className="questboard">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} toggleQuest={toggleQuest} />
        ))}
      </div>
      {isOpen && (
        <AddQuestModal closeModal={closeModal} />
      )}
    </div>
  );
}

export default QuestPage;
