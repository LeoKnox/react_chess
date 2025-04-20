import "./Pieces.css";

export default Pieces = () => {
  const position = Array(8)
    .fill(null)
    .map(() => Array(8).fill(""));
  position[0][0] = "wr";
  console.log(position);
  return (
    <div>
      {position.map((r, rank) =>
        r.map((f, file) => (position[rank][file] ? position[rank][file] : null))
      )}
    </div>
  );
};
