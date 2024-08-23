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
            <p><span style={{color:"yellow"}}>Hey Folks </span>, I am Twinkle Prajapati, an enthusiastic Front-End Fresher with six months of hands-on experience in <span style={{color:"yellow"}}> HTML, CSS, JavaScript, and React.</span></p>
            <p> I am passionate about building visually appealing and highly functional web applications. My journey in tech is driven by a strong curiosity and a commitment to continuous learning. I enjoy taking on new challenges and finding creative solutions to complex problems. Collaborating with others to create impactful and user-friendly applications is what motivates me every day. I'm always eager to learn new technologies and improve my skills to deliver the best results.</p>
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

              <div className="details">During my internship, I gained proficiency in HTML, CSS, JavaScript, and ReactJS. Leveraging this knowledge, I successfully developed my personal portfolio. This experience not only enhanced my technical skills but also provided me with practical insights into frontend development.</div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
