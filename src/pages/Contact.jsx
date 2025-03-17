import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-area wrapper" id='contact'>
      <div className="contact-about">
        <div>
          <h4>Customer service</h4>
          <p>
            Diam id quis quam pulvinar sodales fermentum, elit risus tristique
            praesent sit dictumst vel amet.
          </p>
        </div>
        
      </div>
      <div className="contact-sec">
        <h2>We would love to hear from you.</h2>
        <form className="form-area wrapper">
          <label>Your Name</label>
          <input type="name" placeholder="Enter Your Name" required />
          <label>Your Email
          </label>
          <input type="email" placeholder="Enter Your Email" required />
          <textarea placeholder="Enter Your Message" rows="6" required />
          <button type="submit">Submit Now </button>
        </form>
      </div>
    </div>
  );
}

export default Contact
