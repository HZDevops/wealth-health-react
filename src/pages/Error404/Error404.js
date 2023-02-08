import "./Error.css";

function Error404() {
  return (
    <div className="error">
      <h1 className="error-title">404</h1>
      <span className="error-description">
        La page que vous demandez n'existe pas.
      </span>
    </div>
  );
}

export default Error404;
