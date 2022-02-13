import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { auth } from "../../Firebase";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Signup from '../Authentication/Signup';

const Login1 = (props) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignUp] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential;
        var uid = user.uid;
        var isVerified = user.emailVerified;
        if (isVerified) {
          history.push(`/newsletter/categories/${uid}`);
        } else {
          swal({
            title: "Notice!!",
            text: "Your Email is not verified, Please verify it to login your account.",
            icon: "warning",
            dangerMode: true,
          })
        }
      })
      .catch((error) => {
        swal({
          title: "Error!!",
          text: "Some Unknown Error occurred!",
          icon: "warning",
          dangerMode: true,
        })
      });
  };

  return (
    <div>
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
        </Form>

          <div className="container mt-3 mx-auto">
              <h5>Don't have an account yet?<button className="favBtn mx-2" onClick={() =>setSignUp(true)}>Signup</button>
</h5>
              <h5><Link to="/forgetpassword" style={{textDecoration: "none"}}>Forget Password</Link></h5>
            
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    <Signup show={signup} onHide={() => setSignUp(false)} />
    </div>
  );
};

export default Login1;
