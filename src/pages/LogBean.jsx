import { useState } from "react";
import "../styles/log.css";
import "../styles/logForms.css";

export default function LogBean() {
  const [viewForm, setViewForm] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setViewForm(false);
  };
  return (
    //CONDITIONAL RENDERING WITH TERNIANY OPERATOR
    <div className="background">
      {viewForm ? (
        <div className="form">
          <form onSubmit={handleAdd}>
            <label> Coffee Name:</label>
            <input type="text" />
            <label>Place Name:</label>
            <input type="text" placeholder="Enter cafe name" />
            <label>Location:</label>
            <input type="text" placeholder="📍" />
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
        // <div className="background">
        <div>
          <h2> Beans Worth Traveling For 🛣️ </h2>

          <button
            className="log-btn"
            style={{ marginTop: "50px" }}
            onClick={() => setViewForm(true)}>
            Add your next bean place
          </button>
        </div>
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
