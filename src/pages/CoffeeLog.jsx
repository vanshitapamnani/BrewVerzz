import "../styles/log.css";

function Log() {
  return (
    <>
      <div className="background">
        <div className="log-heading">
          <h2>Your Coffee Journal ☕</h2>
          <p>Track, Rate, and Remember Every Cup.</p>
          <p>No brews logged yet.</p>
          <p id="para">Start your journey with your first cup.</p>

          <div className="btn-wrapper">
            <button className="log-btn">To Log Bean Experience</button>
            <button className="log-btn"> To Log Next Bean Place</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Log;

//1. create page for log beans and experience , 2. navigate - set routes and set here 3. prop drilling from App.jsx
