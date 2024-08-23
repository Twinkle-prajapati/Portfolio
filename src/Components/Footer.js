import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col xs={12} md={6} lg={4} className="footer-contact">
            <div className="contact-item">
              <LocationOnIcon className="contact-icon" />
              <span>Ahmedabad, India</span>
            </div>
            <div className="contact-item">
              <a href="tel:+919328950167" className="contact-link">
                <PhoneIcon className="contact-icon" />
                <span>+91 9328950167</span>
              </a>
            </div>
            <div className="contact-item">
              <a href="mailto:twinkleprajapati288@gmail.com" className="contact-link">
                <EmailIcon className="contact-icon" />
                <span>twinkleprajapati288@gmail.com</span>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="footer-social">
            <p>&copy; 2024 | Twinkle Prajapati</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/twinkle-prajapati-657466268/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="social-icon" style={{ fontSize: 34 }}  />
              </a>
              <a href="https://github.com/Twinkle-prajapati" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="social-icon" style={{ fontSize: 32 }}  />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
