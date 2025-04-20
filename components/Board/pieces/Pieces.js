import "./Pieces.css";

const Pieces = () => {
  const position = Array(8)
    .fill(null)
    .map(() => Array(8).fill(""));
  position[0][0] = "wr";
  console.log(position);
};

export default Pieces;
