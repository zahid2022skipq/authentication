import axios from "axios";

const api = axios.create({ baseURL: "https://localhost:5000/" });

export const SignUp = (formData) => {
  return api.post("/user/signup", formData, {
    headers: {
      Access: "application/json",
      "Content-Type": "application/json",
    },
  });
};
