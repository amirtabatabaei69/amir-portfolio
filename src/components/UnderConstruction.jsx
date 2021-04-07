import React from "react";
import "./UnderConstruction.styles.scss";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <h3>
          Under <br />
          Construction
        </h3>
        <p>Website nearly ready...</p>

        <Link to="/" className="btn">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
