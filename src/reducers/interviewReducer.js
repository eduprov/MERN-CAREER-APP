import {
  INTERVIEW_CREATE_FAIL,
  INTERVIEW_CREATE_REQUEST,
  INTERVIEW_CREATE_SUCCESS,
  INTERVIEW_LIST_FAIL,
  INTERVIEW_LIST_REQUEST,
  INTERVIEW_LIST_SUCCESS,
  INTERVIEW_UPDATE_FAIL,
  INTERVIEW_UPDATE_REQUEST,
  INTERVIEW_UPDATE_SUCCESS,
} from "../constants/InterviewConstants";

export const interviewListReducer = (state = { interviews: [] }, action) => {
  switch (action.type) {
    case INTERVIEW_LIST_REQUEST:
      return { loading: true };
    case INTERVIEW_LIST_SUCCESS:
      return { loading: false, interviews: action.payload };
    case INTERVIEW_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state
  }
};

export const interviewCreateReducer = (state = {}, action) =>{
  switch (action.type) {
    case INTERVIEW_CREATE_REQUEST:
      return {loading: true}
    case INTERVIEW_CREATE_SUCCESS:
      return {loading: false, success: true};
    case INTERVIEW_CREATE_FAIL:
      return {loading: false, error: action.payload}    
    default:
      return state;
  }

}

export const interviewupdateReducer = (state = {}, action) =>{
  switch (action.type) {
    case INTERVIEW_UPDATE_REQUEST:
      return {loading: true}
    case INTERVIEW_UPDATE_SUCCESS:
      return {loading: false, success:true}
    case INTERVIEW_UPDATE_FAIL:
      return {loading: false, error: action.payload, success: false}
    default:
      return state;
  }
}
