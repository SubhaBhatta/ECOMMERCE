import React from "react";
import "../../assets/css/contact.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="message" rows="5" placeholder="Your Message" required/>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
