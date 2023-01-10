import React, { useEffect } from "react";
import "./Quiz.css";
import Question from "../Questions/Question";
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";

function Quiz() {
  // const trace = useSelector((state) => state.questions.trace);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace);
  });

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
    }
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  return (
    <div className="container">
      {/* {display data} */}
      <Question />
      <div className="btn-flex">
        <button className="btn-prv" onClick={onPrev}>
          Previous
        </button>
        <button className="btn-nxt" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
