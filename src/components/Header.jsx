import "../styles/header.css";
import logo from "../assets/logo.png";
import userr from "../assets/userr.png";
import bean from "../assets/bean.png";

import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="btn">
        <button onClick={() => navigate("/login")}> Login </button>
        <span>/</span>
        <button onClick={() => navigate("/signUp")}> Sign Up</button>
      </div>

      <div className="logo">
        <img src={logo} alt="brewverzz logo" onClick={() => navigate("/")} />
      </div>

      <div className="icons">
        <img src={bean} alt="streaks" />
        <img src={userr} alt="profile icon" />
      </div>
    </header>
  );
}

export default Header;

// code when conditional rending
// function Header({ isLoggedIn = true }) {
//   const navigate = useNavigate();

//   return (
//     <header className="header">
//       {/* Logo */}
//       <div className="logo">
//         <img
//           src={logo}
//           alt="Brewuverzz logo"
//           onClick={() => navigate("/")}
//         />
//       </div>

//       {/* Right side icons */}
//       {isLoggedIn && (
//         <div className="header-icons">
//           <img
//             src={user}
//             alt="Profile"
//             className="profile-icon"
//             onClick={() => navigate("/profile")}
//           />
//         </div>
//       )}
//     </header>
//   );
// }
