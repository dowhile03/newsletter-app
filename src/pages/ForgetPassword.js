import React, { useState } from "react";
import classes from "./Signup.module.css";
import { auth } from "../Firebase";
import { Link, useHistory } from "react-router-dom";

const ForgetPassword = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    if (email) {
     auth.sendPasswordResetEmail(email).then( ()=>
        { alert(`Password reset link has been sent to your mail id - ${email}`);
        history.push("/newsletter/categories")}
     )
    }    
  };

  return (
    <div className={classes.mainL}>
      <div className={classes.container}>
        <h1>Password Reset</h1>
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
          <button type="submit">Reset Password</button> <br /> <br />
          <Link style={{ color: "white", textAlign: "center" }} to="/newsletter/categories">
            Login here!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default  ForgetPassword;
