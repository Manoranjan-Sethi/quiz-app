import React, { useState, useEffect } from "react";
import "./Question.css";
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { useSelector } from "react-redux";

function Question() {
  const [click, setClick] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  useEffect(() => {
    // console.log(questions);
  });

  //   function onSelect() {
  //     setClick(true);
  //   }
  return (
    <div className="ques" key={questions?.id}>
      <img className="qimg" src={questions?.questionImg} alt="QuestionImg" />
      <h1>{questions?.question}</h1>
      <div className="opt">
        {questions?.options.map((ele, i) => (
          <div className="flex-img" key={i}>
            <img className="aimg" src={ele} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
