import React from 'react'
import Card1 from './Card1'
import { Container,Row,Col } from 'react-bootstrap';
import image1 from '../images/p1.png'
import image2 from '../images/p2.png'
import image3 from '../images/p3.png'
import image4 from '../images/p4.png'
import image5 from '../images/p5.png'
import image6 from '../images/p6.png'


export default function Projects() {
  return (
    <Container id='projects' fluid className='Portfolio-container'>
      <Container>
        <Row>
          <Col lg={12}>
          <h3 className='title-projects'>PROJECTS</h3>
          </Col>
        </Row>
        <Row className='row-projects'>
          <Col lg={4} md={6} sm={12} xs={12}>
          <Card1 image={image1} view='https://react-calculator-twinkles-projects-416cf758.vercel.app/' source='https://github.com/Twinkle-prajapati/React_Calculator' title='Calculator Using React' desc='Developed a calculator application using React.js that provides basic arithmetic operations. The app features a clean and intuitive user interface, built with React Bootstrap.'/>

          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
          <Card1 image={image2} view='https://todo-list-using-hooks-twinkles-projects-416cf758.vercel.app/' source='https://github.com/Twinkle-prajapati/Todo_list_using_hooks' title='Todo List Using Hooks' desc='Built a To-Do List application using React.js and React Hooks, enabling users to add, edit, and manage tasks. The app features state management for a responsive and efficient experience.'/>

          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
          <Card1 image={image3} view='https://weather-app-twinkles-projects-416cf758.vercel.app/' source='https://github.com/Twinkle-prajapati/Weather-app' title='Weather App' desc='Developed using React.js, provides users with a convenient way to check current weather conditions in various cities worldwide. Users can input the name of a city, and the application fetches and displays real-time weather data'/>

          </Col>
        </Row>

        <Row className='mt-4'>
          <Col lg={4} md={6} sm={12} xs={12}>
          <Card1 image={image4} view='https://snapshot-twinkles-projects-416cf758.vercel.app/' source='https://github.com/Twinkle-prajapati/Snapshot' title='Snapshot Application' desc='React.js application that integrates with the Unsplash API to provide a seamless image search experience. Users can search for images using various keywords and browse through the results'/>

          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
          <Card1 image={image5} view='https://note-keeper-twinkles-projects-416cf758.vercel.app/' source='https://github.com/Twinkle-prajapati/Note_Keeper' title='Note Keeper App' desc='Developed a Note Keeper application using React.js with a user interface built using Bootstrap. The app allows users to create, edit, and manage notes efficiently, featuring a clean and responsive design'/>

          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
          <Card1 image={image6} view='https://fruit-store-twinkles-projects-416cf758.vercel.app/' source='https://github.com/Twinkle-prajapati/Fruit_Store' title='Fruit Store App' desc='Fruit store application is built using React and Redux, offering a smooth and responsive shopping experience. It allows users to add, remove, and manage items in their cart with real-time updates.'/>

          </Col>
        </Row>

    </Container>
    </Container>
  )
}
