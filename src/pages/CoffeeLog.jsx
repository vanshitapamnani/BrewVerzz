import "../styles/log.css";
import { useNavigate } from "react-router-dom";

function Log() {
  const navigate = useNavigate();
  return (
    <>
      <div className="background">
        <div className="log-heading">
          <h2>Your Coffee Journal ☕</h2>
          <p>Track, Rate, and Remember Every Cup.</p>
          <p>No brews logged yet.</p>
          <p id="para">Start your journey with your first cup.</p>

          <div className="btn-wrapper">
            <button
              className="log-btn"
              onClick={() => navigate("/log/experience")}>
              To Log Bean Experience
            </button>
            <button className="log-btn" onClick={() => navigate("/log/bean")}>
              To Log Next Bean Place
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Log;

//1. create page for log beans and experience , 2. navigate - set routes and set here 3. prop drilling from App.jsx
