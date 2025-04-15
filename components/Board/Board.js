import { getCharacter } from "../../helper.js";
import "./Board.css";

export default Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => getCharacter(i));
  const getClassName = (i, j) => {
    console.log("get class name");
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile-brown" : " tile-beige";
    return c;
  };
  return (
    <div className="board">
      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div className={getClassName(i, j)}>
              {rank}
              {file}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
