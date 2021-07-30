import React, { useState,useContext } from "react";
import classes from "./Signup.module.css";
import { auth } from "../Firebase";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Admin = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleChange = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        history.push("/adminsection");
       
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className={classes.mainL}>
      <div className={classes.container}>
        <h1>Admin</h1>
        <form onSubmit={handleChange}>
          <label>Email Address</label>
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <br />
          <button type="submit">Log In</button> <br /> <br />
        
        </form>
      </div>
    </div>
  );
};

export default Admin;
