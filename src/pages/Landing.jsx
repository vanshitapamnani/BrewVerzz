import "../styles/landing.css";
import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";
// import bgImage from "../assets/bgImage.png";

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      {/* <img src={bgImage} className="bg-image" alt="" />
      <div className="logo">
        <img src={logo} alt="brewverzz logo" />
      </div> */}

      <div className="btn">
        <button> Login </button>
        <span>/</span>
        <button> Sign Up</button>
      </div>

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
