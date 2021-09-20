import axios from "axios";
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

export const listInterview = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: INTERVIEW_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/interviewapi`,
      config
    );

    dispatch({
      type: INTERVIEW_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INTERVIEW_LIST_FAIL,
      payload: message,
    });
  }
};

export const createInterviewAction =
  (
    name,
    dob,
    gender,
    marital,
    mobile,
    email,
    sslc,
    puc,
    grad,
    postgrad,
    workone,
    worktwo,
    workthree,
    achone,
    achtwo,
    achthree,
    address
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: INTERVIEW_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/interviewapi/create`,
        {
          name,
          dob,
          gender,
          marital,
          mobile,
          email,
          sslc,
          puc,
          grad,
          postgrad,
          workone,
          worktwo,
          workthree,
          achone,
          achtwo,
          achthree,
          address,
        },
        config
      );

      dispatch({
        type: INTERVIEW_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: INTERVIEW_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateInterviewAction =
  (id, name, email) => async (dispatch, getState) => {
    try {
      dispatch({
        type: INTERVIEW_UPDATE_REQUEST,
      });

      const {
        adminLogin: { adminLogin },
      } = getState();

      const { data } = await axios.put(
        `http://localhost:5000/api/interviewapi/${id}`,
        { name, email }
      );

      dispatch({
        type: INTERVIEW_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: INTERVIEW_UPDATE_FAIL,
        payload: message,
      });
    }
  };
