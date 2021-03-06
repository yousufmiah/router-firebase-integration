import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
// import useFirebase from "../../hooks/useFirebase";
import "./Home.css";

const auth = getAuth(app);

const Home = () => {
  // const { user } = useFirebase();
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Home page</h2>
      <h3>Current User is: {user ? user.displayName : "No body"}</h3>
    </div>
  );
};

export default Home;
