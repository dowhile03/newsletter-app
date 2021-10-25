import React, { useState } from "react";
import { auth, db } from "../Firebase";
import { useHistory } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
const Signup1 = (props) => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      setPassword("");
      setConfirmPassword("");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          if(userCredential!= null) {
            userCredential.sendEmailVerification();
            alert("Verification email sent");
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
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ backdropFilter: "blur(5px)", color: "white" }}
    >
      <Modal.Header closeButton style={{ color: "black" }}>
        <Modal.Title id="contained-modal-title-vcenter">Signup🙄</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "black" }}>
        <Form onSubmit={handleChange}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                borderBottom: "1px solid white",
                outlineWidth: "0",
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                borderBottom: "1px solid white",
                outlineWidth: "0",
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                borderBottom: "1px solid white",
                outlineWidth: "0",
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                borderBottom: "1px solid white",
                outlineWidth: "0",
              }}
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Signup1;







// if (auth.currentUser != null) {
//   auth.currentUser
//     .updateProfile({
//       displayName: username,
//     })
//     .then(
//       function () {
//         // alert("we are in this");
//         console.log("Updated");
//       },
//       function (error) {
//         alert(error);
//         console.log("Error happened");
//       }
//     );
// }
// console.log(userCredential);

// if (userCredential) {
//   alert("hey we are here");
//   db.collection("users-data")
//     .doc(`${auth.currentUser.uid}`)
//     .set({
//       Email: email,
//       username: username,
//     })
//     .then(() => {
//       auth.currentUser.sendEmailVerification().then(() => {
//         // Email verification sent!
//         alert("Verification Email has been Sent");
//       });
//     })
//     .catch((error) => {
//       alert(error);
//     });
// }