import "../styles/landing.css";

import logo from "../assets/logo.png";

function Landing() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="brewverzz logo" />
      </div>

      <div className="btn">
        <button> Login </button>

        <span>/</span>
        <button> Sign in</button>
      </div>
    </>
  );
}

export default Landing;
