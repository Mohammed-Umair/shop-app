import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  console.log("usr\er",user);
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log("res=>>>", res);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
