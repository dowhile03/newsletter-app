import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { auth } from "../Firebase";
import { Link, useHistory } from "react-router-dom";
const Login1 = (props) => {
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
        var isVerified = user.emailVerified;
        if (isVerified) {
          history.push(`/newsletter/categories/${uid}`);
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{backdropFilter: "blur(5px)",color:"white"}}
    >
      <Modal.Header closeButton style={{color:"black"}}>
        <Modal.Title id="contained-modal-title-vcenter">Login🙄</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{background:"black"}}>
        <Form onSubmit={handleChange}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
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
          <Button variant="warning" type="submit">
            Submit
          </Button>
          <div className="container mt-3 mx-auto">
              <h5><Link to="/forgetpassword" style={{textDecoration: "none"}}>Forget Password</Link></h5>
            
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login1;
