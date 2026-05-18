import "./Home.css";
import { useState } from "react";
import Clock from "../../componates/Clock/Clock";
import { quests as startingQuests } from "../../Utills/Quests";
import QuestCard from "../../componates/QuestCard/QeustCard";

function Home() {
  const [quests, setQuests] = useState(startingQuests);

  const uncompletedQuests = quests.filter((quest) => !quest.completed);

  const easyQuest = uncompletedQuests.find(
    (quest) => quest.dificulty === "easy",
  );
  const mediumQuest = uncompletedQuests.find(
    (quest) => quest.dificulty === "medium",
  );
  const hardQuest = uncompletedQuests.find(
    (quest) => quest.dificulty === "hard",
  );

  const homeQuests = [easyQuest, mediumQuest, hardQuest].filter(Boolean);

  function toggleQuest(id) {
    setQuests(
      quests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest,
      ),
    );
  }

  return (
    <div className="home__page">
      <h1>Home</h1>
      <div className="home__clock">
        <Clock />
      </div>
      <div className="home__questboard">
        {homeQuests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} toggleQuest={toggleQuest} />
        ))}
      </div>
    </div>
  );
}

export default Home;
