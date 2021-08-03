import React, { useState } from "react";
import classes from "./Signup.module.css";
import { auth, db } from "../Firebase";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault()
    if(password != confirmPassword) {
      alert("Password do not match");
      setPassword("")
      setConfirmPassword("")
    }
  
else
    {auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (auth.currentUser != null) {
          auth.currentUser.updateProfile({
             displayName: username
         }).then(function () {
             console.log("Updated");  
         }, function (error) {
             console.log("Error happened");
         });
     }
        var user = userCredential.user;
        if (user) {
         
          db.collection("users-data").add({
              Email: email,
              username:username
          }).then(() => {
            auth.currentUser.sendEmailVerification().then(() => {
              // Email verification sent!
              alert("Verification Email has been Sent");
            history.push("/login");
            });
  
          })
          .catch(error => {

          })
          
        }
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
    setConfirmPassword("");
    setUsername("");
    setEmail("");
    setPassword("");}
  };

  return (
    <div className={classes.mainS}>
      <div className={classes.container}>
        <h1>Sign Up</h1>
        <form onSubmit={handleChange}>
          <label>Username</label>
          <br />
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <br />
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
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
          <br />
          <button type="submit">Create Account</button> <br /> <br />
          <Link style={{ color: "white", textAlign: "center" }} to="/login">
            Login here!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
