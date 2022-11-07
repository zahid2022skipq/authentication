import React, { useState } from "react";
import "./auth.css";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = () => {};
  return (
    <div className="auth__container">
      <h1>{!isSignup ? "Sign up" : "Sign In"}</h1>
      <form onSubmit={handleSubmit}>
        {!isSignup && (
          <div>
            <input type="text" placeholder="Name" label="Name" />
          </div>
        )}
        <div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => {
            setIsSignup(!isSignup);
          }}
        >
          {!isSignup ? "Already a user Signin" : "New User SignUp"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
