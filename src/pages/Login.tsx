import React, { useState } from "react";
import "../styles/login.css";
import { loginPostRequest } from "../api/loginClient";
import { sha256 } from "../util/sha256";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usernameEncrypt = await sha256(username);
    const passwordEncrypt = await sha256(password);

    loginPostRequest(usernameEncrypt, passwordEncrypt);
  };

  return (
    <div className="login-page flex-center align-center">
      <form autoComplete="off" onSubmit={(e) => handleLogin(e)}>
        <div className="login-container">
          <div className="input-container">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
          </div>
          <div className="flex-right">
            <button type="submit" className="login-button">
              login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
