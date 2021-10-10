import React, { useState,useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { auth } from "../Firebase";
import { Link, useHistory } from "react-router-dom";
const Login1 = (props) => {
  const history = useHistory();
  const [verified,setVerified] = useState(false);
  const passwordRef = useRef();
  const emailRef = useRef();

  const [uid,setUid] = useState(0)

  const handleChange = async (e) => {
    e.preventDefault();
   await auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then(async (userCredential) => {
        var uid = await userCredential.uid;
        var isVerified = await userCredential.emailVerified;
        if (isVerified == true) {
          setVerified(true)
          setUid(uid)
        } else {
          alert("Your Email is not verified");
          alert(isVerified)
          console.log(auth.currentUser);
        }
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  useEffect(() => {
    if(verified) {
      history.push(`/newsletter/categories/${uid}`)
    }
    else {
      history.push('/')
    }

  }, [verified])
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
              ref={emailRef}
              style={{background:"transparent",color:"white",border:"none",borderBottom:"1px solid white",outlineWidth:"0"}}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
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
