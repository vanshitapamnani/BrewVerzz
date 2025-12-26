import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import About from "../pages/AboutCoffee";
import Guide from "../pages/BrewGuide";
import Explore from "../pages/Explore";
import Log from "../pages/CoffeeLog";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Quiz from "../pages/Quiz";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/log" element={<Log />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}
export default AppRoutes;
