import "./Pieces.css";
import { Piece } from "./Piece.js";

const Pieces = () => {
  const position = Array(8)
    .fill(null)
    .map(() => Array(8).fill(""));
  position[0][0] = "wr";
  console.log(position);
  return (
    <div className="pieces">
      {position.map((r, rank) =>
        r.map((f, file) =>
          position[rank][file] ? (
            <Piece
              key={rank + ":" + file}
              rank={rank}
              file={file}
              piece={position[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;
