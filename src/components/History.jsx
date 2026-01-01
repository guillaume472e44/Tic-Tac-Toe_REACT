import { useState } from "react";

export default function History({ history, setCurrentMove, locationHistory }) {
  const [inverseHistory, setInverseHistory] = useState(false);

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_squares, move) => {
    let description;
    if (move === 0) {
      description = (
        <button className="historyBtns" onClick={() => jumpTo(move)}>
          {`Go to game start`}
        </button>
      );
    } else if (move < history.length - 1) {
      description = (
        <button className="historyBtns" onClick={() => jumpTo(move)}>
          {`Go to move #${move}`}
        </button>
      );
    } else if (move === history.length - 1) {
      description = <p className="historySpan">{`Current move #${move}`}</p>;
    }
    return (
      <li key={move}>
        {move + 1}. {description}
        {move > 0 &&
          `(${locationHistory[move - 1]?.row}, ${
            locationHistory[move - 1]?.col
          })`}
      </li>
    );
  });

  return (
    <>
      {moves.length > 1 && (
        <button
          onClick={() => setInverseHistory(!inverseHistory)}
          className="reverseHistory"
        >
          Click to reverse history
        </button>
      )}

      {inverseHistory ? moves.reverse() : moves}
    </>
  );
}
