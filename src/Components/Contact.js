import React from 'react'
import { Container } from 'react-bootstrap'
import '../Styles/Contact.css'

export default function Contact() {
  return (
    <Container fluid id='contact' className='container-one'>
      <Container>
      <h2 className="contact-form-title main-title">CONTACT</h2>
      <div className="contact-form-container">

      <form className="contact-form">

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type Your Message Here"></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
      </Container>

    </Container>
  )
}
