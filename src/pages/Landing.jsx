import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="front">
        <h1>BREWUVERZZ</h1>
        <p>A Place Where Every Cups Tells The Story.</p>

        <div className="action">
          <button onClick={() => navigate("/explore")}>Let's Explore</button>
          <button onClick={() => navigate("/quiz")}>Quiz</button>
        </div>
      </div>
    </>
  );
}

export default Landing;
