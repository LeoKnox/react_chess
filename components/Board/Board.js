import { getCharacter } from "../../helper.js";
import "./Board.js";

export default Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => getCharacter(i));
  return (
    <div>
      {ranks.map((rank, i) =>
        files.map((file, j) => (
          <div className="board">
            {rank}
            {file}
          </div>
        ))
      )}
    </div>
  );
};
