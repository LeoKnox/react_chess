import { getCharacter } from "../../helper.js";
import "./Board.css";
import Files from "./bits/Files";
import Ranks from "./bits/Ranks";
import Pieces from "./pieces/Pieces";
import { white_pawn } from "../assets/pawn.js";

export default Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => i);
  const getClassName = (i, j) => {
    console.log("get class name");
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile-brown" : " tile-sandybrown";
    return c;
  };
  return (
    <div className="board">
      <Ranks ranks={ranks} />
      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div key={file + "-" + rank} className={getClassName(9 - i, j)}>
              {rank}
              {file}
            </div>
          ))
        )}
      </div>
      <Pieces />
      <Files files={files} />
    </div>
  );
};
