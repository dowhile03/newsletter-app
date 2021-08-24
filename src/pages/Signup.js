import React, { useState } from "react";
import classes from "./Signup.module.css";
import { auth, db } from "../Firebase";
import { Link, useHistory } from "react-router-dom";
import { Modal,Button, Form } from "react-bootstrap";
const Signup1 = (props) => {
    let history = useHistory();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleChange = (e) => {
      e.preventDefault()
      if(password !== confirmPassword) {
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
           
            db.collection("users-data").doc(`${auth.currentUser.uid}`).set({
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleChange}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="container mt-3 mx-auto">
              <h5><Link to="/Login"  style={{textDecoration: "none"}}>Login</Link></h5>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Signup1;
