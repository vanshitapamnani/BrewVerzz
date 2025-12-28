import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";
import Header from "./components/Header";

import bgImage from "./assets/bgImage.png";

function App() {
  return (
    <>
      <img src={bgImage} className="bg-image" alt="" />

      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
