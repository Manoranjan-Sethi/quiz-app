import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Question from "../Questions/Question";
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResults";
import { Navigate } from "react-router-dom";

function Quiz() {
  const [imgClick, setImgClick] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(state);
  });

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
    }
    dispatch(PushAnswer(imgClick));
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function clickOn(clicked) {
    console.log(clicked);
    setImgClick(clicked);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }

  return (
    <div className="container">
      {/* {display data} */}
      <Question clickOn={clickOn} />
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
