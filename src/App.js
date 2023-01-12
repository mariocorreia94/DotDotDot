import { useState } from "react";
import "./App.css";

function App() {
  const [clickedPositions, setClickedPositions] = useState([]);
  const [removedPositions, setRemovedPositions] = useState([]);

  function onClickPage(e) {
    setClickedPositions([
      ...clickedPositions,
      { posX: e.pageX, posY: e.pageY },
    ]);
  }

  function handleUndoClick() {
    if (clickedPositions.length == 0) {
      return;
    }

    const newCirclesArray = [...clickedPositions];
    const popped = newCirclesArray.pop();

    setClickedPositions(newCirclesArray);
    setRemovedPositions([...removedPositions, popped]);
  }

  function handleRedoClick() {
    if (true) {
      return;
    }
  }

  return (
    <>
      <button onClick={handleUndoClick}>Undo</button>
      <button onClick={handleRedoClick}>Redo</button>
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
