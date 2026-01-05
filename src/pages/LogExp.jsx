import { useState, useEffect } from "react";
import "../styles/log.css";
import "../styles/form.css";
import LogCard from "../components/LogCard";
import "../styles/logCard.css";

export default function LogExp() {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(null);
  const [logs, setLogs] = useState(() => {
    const savedLogs = localStorage.getItem("beanLogs");
    return savedLogs ? JSON.parse(savedLogs) : [];
  });

  // const [base64Image, setBase64Image] = useState("");
  const [formData, setFormData] = useState({
    coffeeName: "",
    cafe: "",
    taste: "",
    brewMethod: "",
    review: "",
    rating: "",
    image: null,
  });

  // useEffect(() => {
  //   const savedLogs = localStorage.getItem("beanLogs");
  //   if (savedLogs) {
  //     setLogs(JSON.parse(savedLogs));
  //   }
  // }, []);
  useEffect(() => {
    localStorage.setItem("beanLogs", JSON.stringify(logs));
  }, [logs]);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const finalImage = base64Image;
    if (edit !== null) {
      const updatedLogs = [...logs];
      updatedLogs[edit] = formData;
      setLogs(updatedLogs);
      setEdit(null);
    } else {
      setLogs([...logs, formData]);
    }
    // setLogs([...logs, formData]);
    setShowForm(false);
    setFormData({
      coffeeName: "",
      cafe: "",
      taste: "",
      brewMethod: "",
      review: "",
      rating: "",
      image: null,
    });
  };

  const handleDelete = (index) => {
    const updatedLogs = logs.filter((_, i) => i !== index);
    setLogs(updatedLogs);
  };

  const handleEdit = (index) => {
    setFormData(logs[index]);
    setEdit(index);
    setShowForm(true);
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
            <input
              type="text"
              value={formData.coffeeName}
              onChange={(e) =>
                setFormData({ ...formData, coffeeName: e.target.value })
              }
              required
            />
            <label>Tried at :</label>
            <input
              type="text"
              placeholder="Enter cafe name"
              value={formData.cafe}
              onChange={(e) =>
                setFormData({ ...formData, cafe: e.target.value })
              }
              required
            />
            <label>Taste note :</label>
            <select
              value={formData.taste}
              onChange={(e) =>
                setFormData({ ...formData, taste: e.target.value })
              }
              required>
              <option value="">Select</option>
              <option value="Floral">Floral</option>
              <option value="Fruity">Fruity</option>
              <option value="Sweet">Sweet</option>
              <option value="Spicy">Spicy</option>
              <option value="Nutty">Nutty</option>
              <option value="Chocolatey">Chocolatey</option>
            </select>

            <label>Brew Method used :</label>
            <input
              dropDown="text"
              value={formData.brewMethod}
              onChange={(e) =>
                setFormData({ ...formData, brewMethod: e.target.value })
              }
            />

            <label>Add Review :</label>
            <input
              type="text"
              value={formData.review}
              onChange={(e) =>
                setFormData({ ...formData, review: e.target.value })
              }
              required
            />
            {/* ADD STARS FOR RATING */}
            <label>Rate this place :</label>
            <input
              type="number"
              placeholder="1-5"
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: e.target.value })
              }
              required
            />
            <label>Add a Bean Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const base64 = await convertToBase64(file);
                  setFormData({ ...formData, image: base64 });
                }
              }}
            />

            <button className="submit-btn">
            
              {edit !== null
                ? "Update Bean Experience"
                : "Save Bean Experience"}
            </button>
            <button
              type="button"
              className="submit-btn"
              onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
      {!showForm && (
        <div className="log-cards">
          {logs.map((log, index) => (
            <LogCard
              key={index}
              coffeeName={log.coffeeName}
              rating={log.rating}
              image={log.image}
              cafe={log.cafe}
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

//After saving it should be added on the page , before add next bean place
