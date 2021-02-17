import { createAction } from ".";
import { userService } from "../../services";
import { FETCH_CREDENTIALS } from "../constants/user.constant";

export const register = (data) => {
  return (dispatch) => {
    userService
      .signUp(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const login = (user) => {
  
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(FETCH_CREDENTIALS, res.data));
        localStorage.setItem("credentials", JSON.stringify(res.data))
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
