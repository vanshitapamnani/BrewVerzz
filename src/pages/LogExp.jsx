import { useState } from "react";
import "../styles/log.css";
import "../styles/logForms.css";
export default function LogExp() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };
  return (
    <div className="background">
      <h2> Log your Bean Experience ⭐️ </h2>
      {!showForm && (
        <button
          className="log-btn"
          style={{ marginTop: "50px" }}
          onClick={() => setShowForm(true)}>
          Add Bean Experience
        </button>
      )}
      {showForm && (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label> Coffee Name : </label>
            <input type="text" required />
            <label>Tried at :</label>
            <input type="text" placeholder="Enter cafe name" required />
            <label>Taste note :</label>
            <input dropDown="text" required />
            <label>Brew Method used :</label>
            <select required>
              <option value="Select">Select</option>
              <option value="Floral">Floral</option>
              <option value="Fruity">Fruity</option>
              <option value="Sweet">Sweet</option>
              <option value="Spicy">Spicy</option>
              <option value="Nutty">Nutty</option>
              <option value="Chocolatey">Chocolatey</option>
            </select>
            <label>Add Review :</label>
            <input type="text" required />

            {/* ADD STARS FOR RATING */}
            <label>Rate this place :</label>
            <input type="number" placeholder="1-5" required />
            <label>Add a Bean Image</label>
            <input type="file" />

            <button className="submit-btn"> Save Bean Experience</button>
            <button
              type="button"
              className="submit-btn"
              onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

//After saving it should be added on the page , before add next bean place
