import React from 'react';
import '../Styles/Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <div className="contact-item">
            <i className="fas fa-home"><LocationOnIcon/></i>
            <span>Ahmedabad, India</span>
          </div>
          <div className="contact-item">
          <a href="tel:+919328950167" className="contact-link">
              <PhoneIcon/>
              <span className='ms-2'>+91 9328950167</span>
            </a>
          </div>
          <div className="contact-item">
          <a href="mailto:twinkleprajapati288@gmail.com" className="contact-link">
              <EmailIcon />
              <span className='ms-2'>twinkleprajapati288@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="footer-social">
          <p>&copy; 2024 | Twinkle Prajapati</p>
          <div className="social-icons">
          <a href="https://www.linkedin.com/in/twinkle-prajapati-657466268/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className='fs-2' />
            </a>
            <a href="https://github.com/Twinkle-prajapati" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className='fs-2' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


