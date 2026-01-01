export default function Square({
  value,
  onSquareClick,
  squareIndex,
  winningLines,
}) {
  return (
    <button
      className={
        winningLines && winningLines.includes(squareIndex) ? "square-win" : ""
      }
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
