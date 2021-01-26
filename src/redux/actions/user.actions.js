import { userService } from "../../services/index";

export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
