import "./AddQuestModal.css";
import { useState } from "react";

function AddQuestModal({ closeModal, addQuest }) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [difficulty, setDifficulty] = useState("easy");

    function handleSubmit(e) {
        e.preventDefault();
        const newQuest = {
            id: Date.now(),
            name,
            description,
            difficulty,
            completed: false,
        };


        addQuest(newQuest);
        closeModal();

        setName("");
        setDescription("");
        setDifficulty("easy");
    }

    return (
        <div className="addQuestModal__backdrop">
        <div className="addQuestModal">
            <button className="addQuestModal__close" onClick={closeModal}>
                X
            </button>
            <h2 className="addQuestModal__title">Add New Quest</h2>
            <form className="addQuestModal__form" onSubmit={handleSubmit}>
                <label className="addQuestModal__label" htmlFor="questTitle">Quest Title</label>
                <input
                    type="text"
                    className="addQuestModal__input"
                    placeholder="Quest Title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={20}
                    minLength={3}
                />
                <label className="addQuestModal__label" htmlFor="questDescription">Quest Description</label>
                <input
                    type="text"
                    className="addQuestModal__input"
                    placeholder="Quest Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    maxLength={100}
                    minLength={5}
                />
                <p className="addQuestModal__difficulty">Difficulty: 
                    <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="addQuestModal__select"
                    required
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select></p>
                <button className="addQuestModal__submit" type="submit">Add Quest</button>
            </form>
        </div>
        </div>
    );
}

export default AddQuestModal;