import { useEffect, useState } from "react";
import "../styles/explore.css";
import "../styles/brewGuide.css";
import frenchPress from "../assets/frenchPress.png";
import pourOver from "../assets/pourOver.png";
import espresso from "../assets/espresso.png";
import coldBrew from "../assets/coldBrew.png";
import aeroPress from "../assets/aeroPress.png";
import mokaPot from "../assets/mokaPot.png";
import filterCoffee from "../assets/filterCoffee.png";
import turkishCoffee from "../assets/turkishCoffee.png";

function Guide() {
  const [selectedBrew, setSelectedBrew] = useState(null);
  useEffect(() => {
    document.body.style.overflow = selectedBrew ? "hidden" : "auto";
  }, [selectedBrew]);

  const brewMethods = [
    {
      id: 1,
      title: "French Press",
      subtitle: "Bold • Full-bodied",
      image: frenchPress,
      description:
        "French Press uses immersion brewing, resulting in a rich and intense cup of coffee.",
      bestFor: "Strong coffee lovers",
      steps: [
        "Use coarse ground coffee",
        "Add hot water",
        "Steep for 4 minutes",
        "Press slowly and serve",
      ],
    },
    {
      id: 2,
      title: "Pour Over",
      subtitle: "Clean • Balanced",
      image: pourOver,
      description:
        "Pour over allows precise control over extraction, highlighting delicate flavors.",
      bestFor: "Flavor clarity & aroma",
      steps: [
        "Use medium-fine grind",
        "Bloom coffee for 30 seconds",
        "Pour slowly in circles",
      ],
    },
    {
      id: 3,
      title: "Espresso",
      subtitle: "Strong • Concentrated",
      image: espresso,
      description:
        "Espresso is brewed by forcing hot water through finely ground coffee under high pressure, resulting in a bold and intense shot.",
      bestFor: "Quick caffeine boost & milk-based coffees",
      steps: [
        "Use fine ground coffee",
        "Tamp the coffee evenly",
        "Extract for 25–30 seconds",
        "Serve immediately",
      ],
    },
    {
      id: 4,
      title: "Cold Brew",
      subtitle: "Smooth • Low Acidity",
      image: coldBrew,
      description:
        "Cold brew is made by steeping coffee grounds in cold water for several hours, producing a smooth and naturally sweet coffee.",
      bestFor: "Iced coffee lovers & sensitive stomachs",
      steps: [
        "Use coarse ground coffee",
        "Add cold water",
        "Steep for 12–16 hours",
        "Strain and serve cold",
      ],
    },
    {
      id: 5,
      title: "AeroPress",
      subtitle: "Smooth • Versatile",
      image: aeroPress,
      description:
        "AeroPress uses air pressure to brew coffee quickly, allowing flexibility in strength and flavor.",
      bestFor: "Experimenters & travel brewing",
      steps: [
        "Use medium-fine ground coffee",
        "Add hot water",
        "Stir and steep briefly",
        "Press gently into cup",
      ],
    },
    {
      id: 6,
      title: "Moka Pot",
      subtitle: "Rich • Intense",
      image: mokaPot,
      description:
        "Moka Pot brews coffee using steam pressure, producing a strong, espresso-like coffee on the stovetop.",
      bestFor: "Bold coffee without a machine",
      steps: [
        "Fill bottom chamber with water",
        "Add medium-fine coffee to filter",
        "Heat on stovetop",
        "Serve once bubbling stops",
      ],
    },
    {
      id: 7,
      title: "South Indian Filter Coffee",
      subtitle: "Strong • Traditional",
      image: filterCoffee,
      description:
        "South Indian filter coffee is brewed slowly using a metal filter, often mixed with hot milk for a rich taste.",
      bestFor: "Traditional coffee lovers",
      steps: [
        "Add coffee to filter chamber",
        "Pour hot water",
        "Allow decoction to drip",
        "Mix with hot milk and serve",
      ],
    },
    {
      id: 8,
      title: "Turkish Coffee",
      subtitle: "Thick • Unfiltered",
      image: turkishCoffee,
      description:
        "Turkish coffee is made by boiling finely ground coffee with water, creating a thick and intense brew.",
      bestFor: "Traditional & ceremonial coffee",
      steps: [
        "Use extra-fine coffee powder",
        "Add water (and sugar if needed)",
        "Heat slowly without stirring",
        "Serve with foam on top",
      ],
    },
  ];

  return (
    <>
      <div className="card-bg" style={{ padding: "60px" }}>
        <div className="explore-page">
          <h1 className="explore-title"> Brew Guide</h1>
          <div className="explore-cards">
            {brewMethods.map((brew) => (
              <div key={brew.id} className="explore-card">
                <img src={brew.image} alt={brew.title} />
                <h3>{brew.title}</h3>
                <p>{brew.subtitle}</p>
                <span
                  className="read-more-btn"
                  onClick={() => setSelectedBrew(brew)}>
                  Read More
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedBrew && (
        <div
          className="brew-modal-overlay"
          onClick={() => setSelectedBrew(null)}>
          <div className="brew-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedBrew(null)}>
              −
            </button>
            <img src={selectedBrew.image} alt={selectedBrew.title} />
            <h2> {selectedBrew.title}</h2>
            <p>{selectedBrew.subtitle}</p>
            <p>{selectedBrew.description}</p>

            <h4>How to Brew</h4>

            <ul>
              {selectedBrew.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>

            <p>
              <strong> Best for:</strong> {selectedBrew.bestFor}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Guide;
