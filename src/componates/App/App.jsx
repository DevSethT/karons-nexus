import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Home from "../../Pages/Home/Home";
import QuestPage from "../../Pages/QuestsPage/QuestPage";
import StatsPage from "../../Pages/StatsPage/StatsPage";
import DevLogs from "../../Pages/DevLogs/DevLogs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quests" element={<QuestPage />} />
        <Route path="/Stats" element={<StatsPage />} />
        <Route path="/DevLogs" element={<DevLogs />} />
      </Routes>
    </>
  );
}

export default App;
