import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import About from "../pages/AboutCoffee";
import Guide from "../pages/BrewGuide";
import Explore from "../pages/Explore";
import Log from "../pages/CoffeeLog";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Quiz from "../pages/Quiz";
import LogExp from "../pages/LogExp";
import LogBean from "../pages/LogBean";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/log" element={<Log />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/log/bean" element={<LogBean />} />
      <Route path="/log/experience" element={<LogExp />} />
    </Routes>
  );
}
export default AppRoutes;
