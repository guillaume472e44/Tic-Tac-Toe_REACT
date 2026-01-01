import { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [locationHistory, setLocationHistory] = useState([]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares, locationSquare) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    const nextLocation = [
      ...locationHistory.slice(0, currentMove),
      locationSquare,
    ];
    setLocationHistory(nextLocation);
    setCurrentMove(nextHistory.length - 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          nbrMove={history.length}
        />
      </div>
      <div className="game-info">
        <ol>
          <History
            history={history}
            setCurrentMove={setCurrentMove}
            locationHistory={locationHistory}
          />
        </ol>
      </div>
    </div>
  );
}
