import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="cs19b040@iittp.ac.in">
        <Button>Contact: cs19b040@iittp.ac.in</Button>
      </a>
    </div>
  );
};

export default Contact;
