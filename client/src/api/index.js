import axios from "axios";

const api = axios.create({ baseURL: "https://localhost:5000" });

export const SignUp = (formData) => {
  api.post("user/signup", formData);
};
