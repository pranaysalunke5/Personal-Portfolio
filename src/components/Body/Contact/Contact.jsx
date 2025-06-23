import React from 'react';
import './Contact.css'; // Import the updated CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
    <form
  action="https://formspree.io/f/mkgbqjad"
  method="POST"
>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
