import "../styles/login.css";

const Login = () => {
  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("WIP Login");

    // TODO: Add login system
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
