import {
  INTERVIEWS_LIST_FAIL,
  INTERVIEWS_LIST_REQUEST,
  INTERVIEWS_LIST_SUCCESS,
} from "../constants/interviewlistConstants";

export const interviewsListReducer = (state = { interview: [] }, action) => {
  switch (action.type) {
    case INTERVIEWS_LIST_REQUEST:
      return { loading: true };
    case INTERVIEWS_LIST_SUCCESS:
      return { loading: false, interviews: action.payload };
    case INTERVIEWS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
