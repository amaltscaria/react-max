const GameBoard = ({ onSelectSquare, board }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   const handleSelectSquare = (row, col) => {
  //     setGameBoard((prev) => {
  //       // Dont do like this - because of state immutability
  //       // prev[row][col] = "X";
  //       // return prev;
  //       const updatedArray = [...prev.map((row) => [...row])];
  //       updatedArray[row][col] = activePlayerSymbol;
  //       return updatedArray;
  //     });
  //     onSelectSquare();
  //   };
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
