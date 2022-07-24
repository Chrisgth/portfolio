import LinkedIn from "../images/linkedin.png";
import Github from "../images/github-sign.png";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [emailSent, setEmailSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setEmailSent(false);

    emailjs
      .sendForm(
        "service_kristupasgmail",
        "template_sups13k",
        e.target,
        "JNmjOyojK4lfEPlqs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact me</h2>
      <button id="cv">Download my CV</button>
      <div className="contactLinks">
        <img
          src={LinkedIn}
          alt="linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/kristupas-jusas-4298a81b9/"
            )
          }
        />
        <img
          src={Github}
          alt="github"
          onClick={() => window.open("https://github.com/Chrisgth")}
        />
      </div>
      <form action="" className="contactForm" onSubmit={onSubmit}>
        {emailSent && (
          <h3>Message sent! I will reply to you as soon as I can.</h3>
        )}
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-Mail"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
