export default Ranks = ({ ranks }) => {
  return (
    <div className="ranks">
      {ranks.map((rank) => (
        <label>{rank}</label>
      ))}
    </div>
  );
};
