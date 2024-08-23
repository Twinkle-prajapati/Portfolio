import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img from '../images/image1.jpg';
import '../Styles/Home.css';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <>
    <div className="hero-container">
      <div
        className="hero-background"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${img})` }}
      >
        <Navbar expand="lg" variant="light" className="custom-navbar">
          <Container>
            <h2 className="navbar-brand-custom">My Portfolio</h2>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-custom pt-2">
                <Nav.Link className="nav-link-custom" href='#home'>Home</Nav.Link>
                <Nav.Link className="nav-link-custom" href='#projects'>Projects</Nav.Link>
                <Nav.Link className="nav-link-custom" href='#skills'>Skills</Nav.Link>
                <Nav.Link className="nav-link-custom" href='#about'>About Me</Nav.Link>
                <Nav.Link className="nav-link-custom" href='#contact'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>

    <div id='home' className="bio-section text-center">
      <h1>I'm Twinkle Prajapati</h1>
      <p className='text-uppercase'>Front-end developer</p>
      <div className="bio-btn text-center mt-3">

      <Link to="projects"><button className='text-uppercase mx-2 btn-one'>Projects</button></Link>
      <Link to="contact"> <button className='text-uppercase mx-2 btn-two' href='#contact'>Contact</button></Link>
      </div>

    </div>
    </>
  );
};

export default Home;
