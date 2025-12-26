import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";
import logo from "./assets/logo.png";
import bgImage from "./assets/bgImage.png";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <img src={bgImage} className="bg-image" alt="" />
      <div className="logo">
        <img src={logo} alt="brewverzz logo" onClick={() => navigate("/")} />
      </div>
      <AppRoutes />
    </>
  );
}

export default App;
