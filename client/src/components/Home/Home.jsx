import React, { useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Home() {
  const inputRef = useRef(null);
  return (
    <div>
      <Navbar />

      <div className="body-home">
        <div className="hero-part">
          <img
            className="hero-img"
            src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg"
            alt="hero"
          />
          <h1>IQ Test for kids from 7 to 16 year old</h1>

          <div className="form-flex">
            <form id="form">
              <input
                type="text"
                className="userId"
                ref={inputRef}
                placeholder="UserName*"
                required
              />
            </form>
            <Link className="btn" to={"quiz"}>
              Start Test
            </Link>
          </div>
          <p>
            Most IQ tests are not suitable for children, as they are originally
            developed for the adult population. However, if you want to know the
            IQ of a child between the ages of 7 and 16, there are several tests
            that can help you. There is an IQ test for children, developed by
            us, which, unlike similar ones, can also determine the IQ level of
            children at the age of 6 years.The child will be shown a series of
            three pictures arranged with some regularity. Children will need to
            choose pictures that are suitable for an empty cell. The first four
            questions should be answered together with the child so that he/she
            understands the essence of the task - these questions are not taken
            into account in the calculation of the child’s IQ. Let's get
            started!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
