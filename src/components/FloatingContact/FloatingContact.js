import React from 'react';
import './FloatingContact.css'

const FloatingContact = () => {
  return <div className='form-parent'>
  <form name="contact-form" className="cc-float-form">
  <p></p>
  Name:<br />
  <input className="contact-form-area" id="ContactForm1_contact-form-name" name="name" size="30" value="" type="text" />
  <p></p>
  Email:
  <span style={{color:"red"}}>*</span><br />
  <input className="contact-form-area" id="ContactForm1_contact-form-email" name="email" size="30" value="" type="text" />
  <p></p>
  Message: <span style={{color:"red"}}>*</span><br />
  <textarea className="contact-form-area"  id="ContactForm1_contact-form-email-message" name="email-message" cols="25" rows="5"></textarea>
  <p></p>
  <input className="contact-form-button contact-form-button-submit" id="ContactForm1_contact-form-submit" value="Send" type="button" />
  <p></p>
  <div style={{textAlign: "center",maxWidth: "222px", width: "100%"}}>
  <p className="contact-form-error-message" id="ContactForm1_contact-form-error-message"></p>
  <p className="contact-form-success-message" id="ContactForm1_contact-form-success-message"></p>
  </div>
  </form>
  </div>
};

export default FloatingContact;
