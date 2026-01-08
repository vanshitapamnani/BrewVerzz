import { useEffect, useState } from "react";
import "../styles/log.css";
import "../styles/form.css";
// import LogCard from "../components/LogCard";

export default function LogBean() {
  const [viewForm, setViewForm] = useState(false);
  const [beanPlace, setBeanPlace] = useState(() => {
    const saved = localStorage.getItem("beanPlace");
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    coffeeName: "",
    placeName: "",
    location: "",
    visited: false,
  });

  useEffect(() => {
    localStorage.setItem("beanPlace", JSON.stringify(beanPlace));
  }, [beanPlace]);

  const handleAdd = (e) => {
    e.preventDefault();
    setBeanPlace([...beanPlace, formData]);
    setFormData({
      coffeeName: "",
      placeName: "",
      location: "",
      visited: false,
    });

    setViewForm(false);
  };

  return (
    //CONDITIONAL RENDERING WITH TERNIANY OPERATOR
    <div className="background">
      {viewForm ? (
        <div className="form">
          <form onSubmit={handleAdd}>
            <label> Coffee Name:</label>
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, coffeeName: e.target.value })
              }
              required
            />
            <label>Place Name:</label>
            <input
              type="text"
              placeholder="Enter cafe name"
              onChange={(e) =>
                setFormData({ ...formData, placeName: e.target.value })
              }
              required
            />
            <label>Location:</label>
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="📍"
            />
            <button className="submit-btn"> Save Bean Place</button>
            <button
              type="button"
              className="submit-btn"
              onClick={() => setViewForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <>
          {/* /* start from here learning */}
          <div>
            <h2> Beans Worth Traveling For 🛣️ </h2>
            <div className="center-wrapper">
              <button
                className="log-btn"
                style={{ marginTop: "50px" }}
                onClick={() => setViewForm(true)}>
                Add your next bean place
              </button>
            </div>
          </div>
          {beanPlace.length === 0 && (
            <p className="empty-text">No Places Added Yet ☕️</p>
          )}
          <div className="check-list">
            {beanPlace.map((item, index) => (
              <div key={index} className="check-item">
                <input
                  type="checkbox"
                  checked={item.visited}
                  onChange={() => {
                    const updated = [...beanPlace];
                    updated[index].visited = !updated[index].visited;
                    setBeanPlace(updated);
                  }}
                />
                <div>
                  <p
                    style={{
                      textDecoration: item.visited ? "line-through" : "none",
                    }}>
                    {item.placeName} , {item.location} , {item.coffeeName}
                  </p>
                  <div className="">
                    <button>Delete</button>
                    <button>Edit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  //CODE WITH && OPERATOR

  //   <div className="background">
  //     <h2> Beans Worth Traveling For 🛣️ </h2>
  //     {!viewForm && (
  //       <button
  //         className="log-btn"
  //         style={{ marginTop: "50px" }}
  //         onClick={() => setViewForm(true)}>
  //         Add your next bean place
  //       </button>
  //     )}

  //     {viewForm && (
  //       <div className="form">
  //         <form onSubmit={handleAdd}>
  //           <label> Coffee Name:</label>
  //           <input type="text" />
  //           <label>Place Name:</label>
  //           <input type="text" placeholder="Enter cafe name" />
  //           <label>Location:</label>
  //           <input type="text" placeholder="📍" />
  //           <button className="submit-btn"> Save Bean Place</button>
  //           <button
  //             type="button"
  //             className="submit-btn"
  //             onClick={() => setViewForm(false)}>
  //             Cancel
  //           </button>
  //         </form>
  //       </div>
  //     )}
  //   </div>
  // );
}
