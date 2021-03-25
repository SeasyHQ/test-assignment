import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div>NotFound - setup scenes</div>
      <Link to="/marina-list">
        <div>go to marina list</div>
      </Link>
    </>
  );
}
