import ExploreCard from "../components/ExploreCard";
import "../styles/explore.css";

// import Guide from "../pages/BrewGuide";

// import About from "../pages/AboutCoffee";
// import Log from "../pages/CoffeeLog";
import about from "../assets/about.png";
import guide from "../assets/guide.png";
import log from "../assets/log.png";
function Explore() {
  return (
    <div className="card-bg">
      <div className="explore-page">
        <h1 className="explore-title">Explore Brewuverzz</h1>
        <div className="explore-cards">
          <ExploreCard image={guide} title="Brew Guide" link="/guide" />
          <ExploreCard image={about} title="Brew Guide" link="/about" />
          <ExploreCard image={log} title="Brew Guide" link="/log" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
