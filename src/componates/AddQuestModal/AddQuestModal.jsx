import "./AddQuestModal.css";

function AddQuestModal({ closeModal }) {
    return (
        <div className="addQuestModal__backdrop">
        <div className="addQuestModal">
            <button className="addQuestModal__close" onClick={closeModal}>
                X
            </button>
            <h2 className="addQuestModal__title">Add New Quest</h2>
            <form className="addQuestModal__form">
                <label className="addQuestModal__label" htmlFor="questTitle">Quest Title</label>
                <input type="text" className="addQuestModal__input" placeholder="Quest Title" />
                <label className="addQuestModal__label" htmlFor="questDescription">Quest Description</label>
                <input type="text" className="addQuestModal__input" placeholder="Quest Description" />
                <p className="addQuestModal__difficulty">Difficulty: <select>
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