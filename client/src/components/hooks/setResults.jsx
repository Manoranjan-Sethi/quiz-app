import * as Action from "../../redux/resultReducer";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultActions(result));
  } catch (error) {
    console.log(error);
  }
};
