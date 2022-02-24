import React from "react";
import { Link } from "react-router-dom";

import "./notFound.css";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404 - Not Found!</h1>
      <Link to="/" className="link">
        Go Home
      </Link>
    </div>
  );
}
