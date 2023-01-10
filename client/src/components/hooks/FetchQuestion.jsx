import { useState, useEffect } from "react";
import data from "../../data/data.json";
import { useDispatch } from "react-redux";
import * as Action from "../../redux/questionReducer";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: true }));
          setGetData((prev) => ({ ...prev, apiData: question }));

          dispatch(Action.startExamAction(question));
        } else {
          throw new Error("Not Available");
        }
      } catch (e) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: e }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (e) {
    console.log(e);
  }
};

export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (e) {
    console.log(e);
  }
};
