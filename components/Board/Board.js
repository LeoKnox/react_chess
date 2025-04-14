export default Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => String.fromCharCode(i+97));
  return (
    <div>
      {ranks.map((rank, i) =>
        files.map((file, j) => (
          <div>
            {rank}
            {file}
          </div>
        ))
      )}
    </div>
  );
};
