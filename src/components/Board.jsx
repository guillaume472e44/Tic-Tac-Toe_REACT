import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";
import { location } from "../utils/location";

export default function Board({ xIsNext, squares, onPlay, nbrMove }) {
  const winner = calculateWinner(squares)?.winner;
  let status;
  winner
    ? (status = `Winner: ${winner} !`)
    : (status = `Next player: ${xIsNext ? "X" : "0"}`);

  if (nbrMove === 10 && !winner) status = "It's a draw !";

  const winningLines = calculateWinner(squares)?.lines;

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquare = [...squares];
    nextSquare[i] = xIsNext ? "X" : "0";
    onPlay(nextSquare, location[i]);
  }

  let board = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <Square
          key={i * 3 + j}
          value={squares[i * 3 + j]}
          onSquareClick={() => handleClick(i * 3 + j)}
          squareIndex={i * 3 + j}
          winningLines={winningLines}
        />
      );
    }
    board.push(
      <div className="board-row" key={`boardRow-${i}`}>
        {row}
      </div>
    );
  }

  return (
    <>
      <div className="status"> {status} </div>
      {board}
    </>
  );
}
