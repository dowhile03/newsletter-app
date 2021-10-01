import React, { useState } from "react";
import { auth, db } from "../Firebase";
import { useHistory } from "react-router-dom";
import { Modal,Button, Form } from "react-bootstrap";
const Signup1 = (props) => {
    let history = useHistory();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
            alert("Password do not match");
            setPassword("")
            setConfirmPassword("")
            return -2;
          }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (auth.currentUser != null) {
          auth.currentUser.updateProfile({
             displayName: username
         }).then(function () {
             console.log("Updated");
         })
         .catch(err => {console.log(err)});
     }
        var user = userCredential.user;
        if (user) {
         
          db.collection("architect-user-details").add({
              Email: email,
              username:username
          }).then(() => {
            auth.currentUser.sendEmailVerification().then(() => {
              // Email verification sent!
              alert("Verification Email has been Sent");
            history.push("/");
            });
  
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
    setPassword("");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{backdropFilter: "blur(5px)",color:"white"}}
    >
      <Modal.Header closeButton style={{color:"black"}}>
        <Modal.Title id="contained-modal-title-vcenter">Signup🙄</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{background:"black"}}>
        <Form onSubmit={handleChange}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              style={{background:"transparent",color:"white",border:"none",borderBottom:"1px solid white",outlineWidth:"0"}}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{background:"transparent",color:"white",border:"none",borderBottom:"1px solid white",outlineWidth:"0"}}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{background:"transparent",color:"white",border:"none",borderBottom:"1px solid white",outlineWidth:"0"}}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              style={{background:"transparent",color:"white",border:"none",borderBottom:"1px solid white",outlineWidth:"0"}}
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
         
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Signup1;
