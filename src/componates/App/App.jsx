import { useState } from "react";
import "./App.css";
import Clock from "../Clock/Clock";
import QuestCard from "../QuestCard/QeustCard";

function App() {
  return (
    <div className="home">
      <Clock />

      <QuestCard />
      <QuestCard />
    </div>
  );
}

export default App;
