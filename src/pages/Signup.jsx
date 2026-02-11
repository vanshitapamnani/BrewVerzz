import { useState } from "react";
import "../styles/signUp.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    console.log(userData);
  };
  return (
    <div className="sign-up-bg">
      <div className="sign-up">
        <h1>CREATE AN ACCOUNT</h1>
        <div className="form-bg">
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              value={name}
              type="text"
              placeholder="Enter your Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>CREATE ACCOUNT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

//Step-1 create a layout with HTML only
//Step-2  IMPORT CSS file
//Step-3 TO CREATE STATE TO SET FORM VALUES IN IT.
