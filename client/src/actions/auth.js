import * as api from "../api/index";

export const singUp = (formData) => async (dispatch) => {
  try {
    const { data } = await api.SignUp(formData);
    console.log(data);
    dispatch({ type: "Auth", data: data });
  } catch (error) {
    console.log("Actions ==> ", error);
  }
};
