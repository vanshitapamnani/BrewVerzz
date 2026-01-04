function LogCard({ image, coffeeName, rating }) {
  return (
    <div className="log-cards">
      <div className="log-card">
        <img src={image} alt={coffeeName} />
        <h4>{coffeeName}</h4>
        <p>{rating}</p>
      </div>
    </div>
  );
}

export default LogCard;
