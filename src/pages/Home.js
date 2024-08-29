import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import frontBanner from '../assets/images/banner_front.png'
import aboutImage from '../assets/images/about-me.jpg'
import Painting from '../components/Painting'
import { FaUser, FaPagelines, FaApple, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="banner d-flex justify-content-center align-items-center text-center">
        <Container fluid>
          <Row>
            <Col>
              <img src={frontBanner} alt="banner" className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-me my-5">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className='heading-2'>A Few Words About Me</h2>
              <p className='pt-5'>My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.</p>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <img src={aboutImage} alt="about me" className='img-fluid' />
             </Col>
             <Col className='mt-3'>
              <Link to='/about' className='button'>Learn More</Link>
             </Col>
          </Row>
        </Container>
      </section>

      <Painting/>

      <section className="services text-center py-5">
        <Container>
          <Row className='justify-content-center'>
            <Col lg={10}>
              <h2 className="heading-2">Services</h2>
              <p>If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life.</p>
            </Col>
          </Row>
          <Row className='my-lg-5 my-3'>
            <Col lg={3} md={6}>
              <div className="service-box mb-4">
                <FaUser /> 
                <h4>Potrait</h4>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="service-box mb-4">
                <FaPagelines />
                <h4>Landscape</h4>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="service-box mb-4">
                <FaApple />
                <h4>Still Life</h4>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="service-box mb-4">
                <FaHome/>
                <h4>Urban</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link className='button' to='/services'>View All Services</Link>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  )
}

export default Home