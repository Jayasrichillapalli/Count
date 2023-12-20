import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);

    if (!userExists) {
      const newUser = {
        email,
        password,
      };

      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
      navigate("/login");
    } else {
      setErrorMessage("User with this email already exists");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={handleSignup}>
        <h2>Signup</h2>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Signup</button>


        {errorMessage}
      </form>
    
      <p className="login-para">
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
}

export default Signup;
