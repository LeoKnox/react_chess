import { getCharacter } from "../../helper.js";
import "./Board.css";

export default Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => getCharacter(i));
  return (
    <div className="board">
        <div className="tiles">
      {ranks.map((rank, i) =>
        files.map((file, j) => (
          <div>
            {rank}
            {file}
          </div>
        ))
      )}
      </div>
    </div>
  );
};
