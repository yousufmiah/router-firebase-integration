import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import "./Products.css";
// import useFirebase from "../../hooks/useFirebase";

const auth = getAuth(app);
const Products = () => {
  // const { user } = useFirebase();
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Products</h2>
      <h3>Current User is: {user ? user.displayName : "No body"}</h3>
    </div>
  );
};

export default Products;
