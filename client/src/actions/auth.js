import * as api from "../api/index";

export const singUp = (FormData = async (dispatch) => {
  try {
    const { data } = await api.SignUp(FormData);
    console.log(data);
    dispatch({ type: "Auth", data });
  } catch (error) {
    console.log("Actions ==> ", error);
  }
});
