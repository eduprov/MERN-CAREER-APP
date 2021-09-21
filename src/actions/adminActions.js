import axios from "axios";
import {
  ADMIN_lOGIN_FAIL,
  ADMIN_lOGIN_REQUEST,
  ADMIN_lOGIN_SUCCESS,
  ADMIN_lOGOUT,
} from "../constants/adminConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_lOGIN_REQUEST });

    const { data } = await axios.post(
      "https://career-app-api-url.herokuapp.com/api/admin/login",
      {
        email,
        password,
      }
    );

    dispatch({
      type: ADMIN_lOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_lOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) =>{
    localStorage.removeItem("adminInfo")
    dispatch({type: ADMIN_lOGOUT})
}
