import React from "react";
import { MDBContainer, MDBFooter,MDBBtn } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
      <MDBBtn color="primary">Primary</MDBBtn>
        </MDBContainer>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:Teamdowhile
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;