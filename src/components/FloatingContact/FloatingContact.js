import React from "react";
import "./FloatingContact.css";

const FloatingContact = () => {
  return (
    <div className="form-parent">
      <form name="contact-form" className="cc-float-form">
        <a rel="noreferrer" target="_blank" href="mailto:dowhile03@gmail.com">
          <div>
            <img
              style={{ borderRadius: "50%" }}
              src="https://www.apkmirror.com/wp-content/uploads/2021/11/71/61946cc2b44bf-384x384.png"
              alt="Email"
              width="25%"
            />
          </div>
        </a>

        <br />
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/company/69856246/"
        >
          <div>
            <img
              style={{ borderRadius: "50%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
              alt="Linkedin"
              width="25%"
            />
          </div>
        </a>
        <br />
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://twitter.com/spam_folder2"
        >
          <div>
            <img
              style={{ borderRadius: "50%" }}
              src="https://i.pinimg.com/736x/8e/69/a9/8e69a98a12be6b3a84fa9904fa273664.jpg"
              alt="Email"
              width="25%"
            />
          </div>
        </a>
        <br />
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://www.buymeacoffee.com/spamfolder"
        >
          <div>
            <img
              style={{ borderRadius: "" }}
              src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-2.svg"
              alt="Email"
              width="50%"
            />
          </div>
        </a>
      </form>
    </div>
  );
};

export default FloatingContact;
