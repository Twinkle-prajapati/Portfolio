import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../Styles/About.css';
import image from '../images/img3.avif'
import { Link } from 'react-scroll';



export default function About() {
  return (
    <div id='about'>
      <Container>
        <Row>
          <Col className='about1' lg={7}>
            <h1>Who Am I ?</h1>
            <p>Hey Folks, I am Twinkle Prajapati, an enthusiastic Software Developer driven by a year-long journey of continuous learning and growth in the digital domain. </p>
            <p>With a toolbox packed with JavaScript, ReactJs, NextJs, Node.js, MongoDB are just a few of the tools in my arsenal. I enjoy tackling the frontend's allure and the backend's robustness in web applications. But my commitment to excellence and collaborative spirit go beyond mere lines of code, shaping every project I undertake.</p>
          <Link to='contact'><button className='text-uppercase'>Contact Me</button></Link>  </Col>
          <Col className='about2 text-center' lg={4}>
            <img src={image} alt='about' />
          </Col>
        </Row>


        <Row className='row2'>
          <Col lg={12}>
            <h3 className='main-title text-uppercase'>Experience</h3>
          </Col>
          <Col lg={12} className='main'>
            <Card className='card2'>
              <div className="info">
                <div className="role">Frontend Developer (Internship) | Spectrics Solution</div>
                <div className="time">Aug'23 - Jan'24</div>
              </div>

              <div className="details">During my internship, I gained proficiency in HTML, CSS, JavaScript, and the basics of ReactJS. Leveraging this knowledge, I successfully developed my personal portfolio. This experience not only enhanced my technical skills but also provided me with practical insights into frontend development.</div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
