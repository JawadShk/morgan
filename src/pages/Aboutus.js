import { Container, Row, Col } from "react-bootstrap";
import aboutusImg from '../assets/images/AboutUs.jpg'
import {Link} from 'react-router-dom'
import Painting from "../components/Painting";

const Aboutus = () => {
  return (
    <div>
      <section className="jumbotron-banner bg-light text-center py-5">
        <Container>
          <Row>
            <Col>
              <h1>About</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="few-words py-5">
        <Container>
          <Row>
            <Col lg={6}  className="mb-lg-0 mb-5">
              <h2 className="heading-2">Few Words About us</h2>
              <p>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it’s created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.</p>
              <Link to='/about' className='button'>Learn More</Link>
            </Col>
            <Col lg={{span: 5, offset: 1}}>
              <img src={aboutusImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <Painting/>

    </div>
  );
};

export default Aboutus;
