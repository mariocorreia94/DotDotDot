import { useState } from "react";
import "./App.css";

function App() {
  const [clickedPositions, setClickedPositions] = useState([]);
  const [removedPositions, setRemovedPositions] = useState([]);

  function onClickPage(e) {
    setClickedPositions([
      ...clickedPositions,
      { posX: e.pageX - 3, posY: e.pageY - 2 },
    ]);
  }

  function handleUndoClick() {
    if (clickedPositions.length === 0) {
      return;
    }

    const newCirclesArray = [...clickedPositions];
    const popped = newCirclesArray.pop();

    setClickedPositions(newCirclesArray);
    setRemovedPositions([...removedPositions, popped]);
  }

  function handleRedoClick() {
    if (removedPositions.length === 0) {
      return;
    }
    const newRemovedPositions = [...removedPositions];
    const redoPosition = newRemovedPositions.pop();

    setRemovedPositions(newRemovedPositions);
    setClickedPositions([...clickedPositions, redoPosition]);
  }

  return (
    <>
      <div className="actions">
        <button
          disabled={clickedPositions.length === 0}
          onClick={handleUndoClick}
        >
          Undo
        </button>
        <button
          disabled={removedPositions.length === 0}
          onClick={handleRedoClick}
        >
          Redo
        </button>
      </div>
      <div className="App" onClick={onClickPage}>
        {clickedPositions.map((clickedPosition, idx) => (
          <div
            key={idx}
            className="circle"
            style={{ left: clickedPosition.posX, top: clickedPosition.posY }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
