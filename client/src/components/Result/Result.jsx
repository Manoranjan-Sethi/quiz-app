import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Result.css";
import { Link } from "react-router-dom";

function Result() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="result">
        <h2>Your Result: </h2>
        <p>In this test you have {} correct answers out of 5</p>
      </div>
    </div>
  );
}

export default Result;
