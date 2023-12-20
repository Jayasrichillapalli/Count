import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";


function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      emailRef.current.value = "";
      passwordRef.current.value = "";
      setErrorMessage("");
      navigate("/");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="signup-container">
      <form className="login-box">
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input type="text" ref={emailRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
      <p className="login-para">
        Don't have an account? <Link to="/signup">Signup here</Link>.
      </p>
    </div>
  );
}

export default Login;
