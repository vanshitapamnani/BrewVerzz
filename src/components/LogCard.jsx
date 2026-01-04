function LogCard({ image, coffeeName, rating, cafe, onDelete, onEdit }) {
  return (
    <div className="log-cards">
      <div className="log-card">
        <img src={image} alt={coffeeName} />
        <h2>Coffee Name :{coffeeName}</h2>
        <h3>Tried at :{cafe}</h3>
        <p>Rating given : {rating}</p>
        <div className="buttons">
          <button onClick={onDelete} className="delete-btn">
            🗑️
          </button>
          <button onClick={onEdit} className="edit-btn">
            ✏️
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogCard;
