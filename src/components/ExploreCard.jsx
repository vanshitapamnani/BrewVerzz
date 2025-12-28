import { useNavigate } from "react-router-dom";

function ExploreCard({ image, title, link }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <>
      <div className="explore-card">
        <img src={image} alt={title} />

        <h3>{title}</h3>
        <button className="read-more-btn" onClick={handleClick}>
          Read More
        </button>
      </div>
    </>
  );
}
export default ExploreCard;
