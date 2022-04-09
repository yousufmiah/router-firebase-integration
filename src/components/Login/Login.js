import React from "react";

import { getAuth } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./Login.css";
import app from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const Navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      Navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      </div>
      <br />
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
