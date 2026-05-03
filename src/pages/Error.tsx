import "../styles/error.css";

const Error = () => {
  return (
    <div className="flex-center flex-column align-center">
      <h1 className="header">404</h1>
      <h2 className="sub-header">page not found</h2>
      <p>
        return to the{" "}
        <a href="/" className="link">
          homepage
        </a>
      </p>
    </div>
  );
};

export default Error;
