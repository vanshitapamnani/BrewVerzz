import "../styles/explore.css";
import origin from "../assets/origin.png";
import types from "../assets/types.png";
import region from "../assets/region.png";
import roast from "../assets/roast.png";
import grind from "../assets/grinding.png";
import choose from "../assets/choose.png";
import { useEffect, useState } from "react";

function About() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    document.body.style.overflow = info ? "hidden" : "auto";
  }, [info]);

  const aboutCoffee = [
    {
      id: 1,
      title: "Origin Of Bean",
      shortText: "How Coffee was Discovered",
      image: origin,
    },
    {
      id: 2,
      title: "Types of Bean",
      shortText: "Arabica , Robusta & more explained",
      image: types,
    },

    {
      id: 3,
      title: "Bean Growing Regions",
      shortText: "How Origin Influences Flavour",
      image: region,
    },
    {
      id: 4,
      title: "Roast Levels",
      shortText: "Light, Medium, and Dark Roasts",
      image: roast,
    },
    {
      id: 5,
      title: "Grind Size and Brewing Match",
      shortText: "Why Grind Size Matters",
      image: grind,
    },
    {
      id: 6,
      title: "How to choose the right Bean",
      shortText: "A Simple Guide for Beginners",
      image: choose,
    },
  ];

  return (
    <div className="card-bg" style={{ padding: "60px" }}>
      <div className="explore-page">
        <h1 className="explore-title"> All About Beans 🫘</h1>
        <div className="explore-cards">
          {aboutCoffee.map((about) => (
            <div className="explore-card" key={about.id}>
              <img src={about.image} alt={about.title} />
              <h3> {about.title}</h3>
              <p> {about.shortText}</p>
              <span className="read-more-btn" onClick={() => setInfo(about)}>
                Read More
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
