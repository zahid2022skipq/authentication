import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./auth.css";
import { singUp } from "../../actions/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(singUp(formData));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth__container">
      <h1>{!isSignup ? "Sign up" : "Sign In"}</h1>
      <form onSubmit={handleSubmit}>
        {!isSignup && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              label="Name"
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => {
            setIsSignup(!isSignup);
          }}
        >
          {!isSignup ? "Already user Signin" : "New User SignUp"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
