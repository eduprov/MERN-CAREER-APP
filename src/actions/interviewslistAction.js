import axios from "axios";
import {
  INTERVIEWS_LIST_FAIL,
  INTERVIEWS_LIST_REQUEST,
  INTERVIEWS_LIST_SUCCESS,
} from "../constants/interviewlistConstants";

export const listInterviews = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: INTERVIEWS_LIST_REQUEST,
    });

    const {
      adminLogin: { adminLogin },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminLogin}`,
      },
    };

    const data = await axios.get(
      `https://career-app-api-url.herokuapp.com/api/interviewapi/getall`,
      config
    );

    dispatch({
      type: INTERVIEWS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: INTERVIEWS_LIST_FAIL,
      payload: message,
    });
  }
};
