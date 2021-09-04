import emailjs from "emailjs-com";
import React from "react";
// import { Element } from "react-scroll";

function ContactScreen(props) {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k1gfcie",
        "template_iigny2c",
        e.target,
        "user_3AhRHOaXXbpmHxUhvtucJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="contact">
        <div className="box">
          <form className="cf" className="contact-form" onSubmit={sendEmail}>
            <div className="half left cf">
              {/* <label>Name</label> */}
              <input
                placeholder="Your name..."
                id="input-name"
                type="text"
                name="name"
              />
              {/* <label>Email</label> */}
              <input
                placeholder="Your E-mail..."
                id="input-email"
                type="email"
                name="email"
              />
              {/* <label>Subject</label> */}
              <input
                placeholder="Subject..."
                type="text"
                id="input-subject"
                name="subject"
              />
            </div>

            {/* <label>Message</label> */}
            <textarea
              type="text"
              id="input-message"
              placeholder="Message"
              name="message"
            />
            <input id="input-submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
