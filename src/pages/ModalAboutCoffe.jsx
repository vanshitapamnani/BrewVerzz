import "../styles/brewGuide.css";
import history from "../assets/history.png";
import variety from "../assets/variety.png";
import growing from "../assets/growing.png";
// import levels from "../assets/levels.png";
import levels from "../assets/levels.png";
import size from "../assets/sizes.png";
import rightBean from "../assets/rightBean.png";

const content = [
  {
    // history
    id: 1,
    image: history,
    title: "Origin of Coffee",
    section: [
      {
        heading: "The Ethiopian Legend",
        points: [
          "Coffee is believed to have originated in Ethiopia",
          "A goat herder named Kaldi noticed his goats became energetic after eating coffee cherries",
          "Local monks used the beans to stay awake during prayers",
        ],
      },
      {
        subTitle: "Coffee in the Arab World",
        subSection: [
          {
            heading: "Spreading in Arabia",
            points: [
              "Coffee cultivation began in Yemen in the 15th century",
              "Known as ‘Qahwa’, meaning ‘that which prevents sleep’",
              "Coffee houses became centers of social interaction",
            ],
          },

          {
            heading: "Coffee Houses",
            points: [
              "Called ‘Qahveh Khaneh’",
              "Places for conversation, music, and storytelling",
              "Often referred to as ‘Schools of the Wise’",
            ],
          },
        ],
      },
      {
        subTitle: "Coffee Reaches Europe",
        subSection: [
          {
            heading: "Inital Resistence",
            points: [
              "Coffee was initially called the ‘bitter invention of Satan’",
              "Pope Clement VIII approved coffee after tasting it",
            ],
          },
          {
            heading: "Rise of Coffee Houses",
            points: [
              "Coffee houses spread across England, France, and Italy",
              "Became hubs for writers, merchants, and philosophers",
              "Nicknamed ‘Penny Universities’ in England",
            ],
          },
        ],
      },
      {
        subTitle: "Global Expansion",
        subSection: [
          {
            heading: "Colonial Expansion",
            points: [
              "European colonizers spread coffee cultivation worldwide",
              "Coffee plantations established in Asia, Africa, and Latin America",
              "Brazil later became the world’s largest coffee producer",
            ],
          },
          {
            heading: "Economic Impact",
            points: [
              "Coffee became one of the most traded commodities",
              "Millions of livelihoods depend on coffee farming today",
            ],
          },
        ],
      },
      {
        subTitle: "Modern Coffee Culture",
        subSection: [
          {
            heading: "Industrial Era",
            points: [
              "Instant coffee introduced for convenience",
              "Coffee became a household staple worldwide",
            ],
          },

          {
            heading: "Third Wave Coffee",
            points: [
              "Focus on bean origin, roasting, and brewing techniques",
              "Rise of specialty cafés and manual brewing methods",
              "Coffee seen as an artisanal experience",
            ],
          },
        ],
      },
    ],
  },
  {
    // types of beans
    id: 2,
    image: variety,
    section: [
      {
        heading: "Arabica",
        points: [
          "Smooth, sweet, and slightly acidic flavor",
          "Lower caffeine compared to Robusta",
          "Often has fruity, floral, or chocolate notes",
          "Best for pour-over, French press, and black coffee",
        ],
      },
      {
        heading: "Robusta",
        points: [
          "Strong, bitter, and earthy flavor",
          "Higher caffeine content",
          "Produces thicker crema in espresso",
          "Commonly used in espresso blends and instant coffee",
        ],
      },
      {
        heading: "Liberica",
        points: [
          "Bold and smoky taste",
          "Woody and floral aroma",
          "Rare and less commonly available",
          "Loved by adventurous coffee drinkers",
        ],
      },
      {
        heading: "Excelsa",
        points: [
          "Tart and complex flavor profile",
          "Fruity with dark, mysterious undertones",
          "Often used to add depth to blends",
        ],
      },
    ],
  },

  {
    // region
    id: 3,
    image: growing,
    section: [
      {
        heading: "Africa",
        points: [
          "Bright acidity and complex flavors",
          "Notes of citrus, berries, and floral aromas",
          "Popular origins include Ethiopia and Kenya",
        ],
      },
      {
        heading: "Latin America",
        points: [
          "Balanced and clean flavor profile",
          "Nutty, chocolatey, and caramel notes",
          "Popular origins include Brazil and Colombia",
        ],
      },
      {
        heading: "Asia",
        points: [
          "Bold, earthy, and full-bodied taste",
          "Low acidity with spicy or smoky notes",
          "Popular origins include India and Indonesia",
        ],
      },
    ],
  },

  {
    // roast
    id: 4,
    image: levels,
    section: [
      {
        heading: "Light Roast",
        points: [
          "Light brown color",
          "High acidity and original bean flavors",
          "More complex and fruity notes",
          "Best for pour-over and AeroPress",
        ],
      },
      {
        heading: "Medium Roast",
        points: [
          "Balanced flavor, aroma, and acidity",
          "Slight sweetness with mild bitterness",
          "Most popular roast level",
          "Best for drip coffee and French press",
        ],
      },
      {
        heading: "Dark Roast",
        points: [
          "Dark brown to almost black color",
          "Bold, smoky, and bitter taste",
          "Lower acidity",
          "Best for espresso and milk-based drinks",
        ],
      },
    ],
  },

  {
    // grind
    id: 5,
    image: size,
    section: [
      {
        heading: "Grind Size Guide",
        points: [
          "Coarse grind – French press, Cold brew",
          "Medium grind – Pour over, Filter coffee",
          "Fine grind – Espresso, Moka pot",
          "Extra-fine grind – Turkish coffee",
        ],
      },
      {
        heading: "Why It Matters",
        points: [
          "Too fine grind can cause bitterness",
          "Too coarse grind can cause weak coffee",
          "Correct grind ensures proper extraction",
        ],
      },
    ],
  },

  {
    // choose your coffee type
    id: 6,
    image: rightBean,
    section: [
      {
        heading: "Ask Yourself",
        points: [
          "Do I prefer strong or smooth coffee?",
          "Do I drink coffee black or with milk?",
          "Which brewing method do I use most?",
        ],
      },
      {
        heading: "Quick Recommendations",
        points: [
          "Milk-based coffee → Medium or Dark roast",
          "Black coffee → Light or Medium roast",
          "Espresso lovers → Arabica + Robusta blend",
          "Low acidity preference → Dark roast or Cold brew",
        ],
      },
    ],
  },
];

function DetailedInfo({ info, setInfo }) {
  const selectedContent = content.find((item) => item.id === info);
  if (!selectedContent) return null;
  return (
    <div className="brew-modal-overlay" onClick={() => setInfo(null)}>
      <div className="brew-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setInfo(null)}>
          −
        </button>
        <img src={selectedContent.image} alt={selectedContent.title} />
        <h2>{selectedContent.title}</h2>

        {selectedContent.section.map((item, index) => (
          <div key={index} className="modal-section">
            {item.heading && <h3>{item.heading}</h3>}
            {item.points && (
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            {item.subTitle && <h3>{item.subTitle}</h3>}
            {item.subSection &&
              item.subSection.map((sub, subIndex) => (
                <div key={subIndex} className="modal-subsection">
                  <h4>{sub.heading}</h4>
                  <ul>
                    {sub.points.map((p, pi) => (
                      <li key={pi}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default DetailedInfo;
