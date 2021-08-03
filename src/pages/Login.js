import React, { useState } from "react";
import classes from "./Signup.module.css";
import { auth } from "../Firebase";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleChange = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        var uid = user.uid;
        var displayName = user.displayName;
        var isVerified = user.emailVerified;
        if (isVerified) {
          history.push(`/${displayName}/${uid}`);
        } else {
          alert("Your Email is not verified");
        }
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className={classes.mainL}>
      <div className={classes.container}>
        <h1>Log In</h1>
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
          <Link
            style={{ color: "white", textAlign: "center" }}
            to="/forgetpassword"
          >
            Forget Password
          </Link>
          <br />
          <Link style={{ color: "white", textAlign: "center" }} to="/signup">
            Signup here!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
