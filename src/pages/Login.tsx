import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-page flex-center align-center">
      <form autoComplete="off">
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
        </div>
      </form>
    </div>
  );
};

export default Login;
