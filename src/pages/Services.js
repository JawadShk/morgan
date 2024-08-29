import { Container, Row, Col } from "react-bootstrap"
import painting1 from '../assets/images/portrait-1.jpg'
import painting2 from '../assets/images/portrait-2.jpg'
import painting3 from '../assets/images/portrait-3.jpg'
import painting4 from '../assets/images/portrait-4.jpg'
import painting5 from '../assets/images/portrait-5.jpg'
import { Link } from "react-router-dom"
import Painting from "../components/Painting"

const Services = () => {
  return (
    <>
      <section className="jumbotron-banner bg-light text-center py-5">
        <Container>
          <Row>
            <Col>
              <h1>Services</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="service-description py-5">
        <Container fluid>
          <Row>
            <Col md={6}>
              <img src={painting1} className="img-fluid mb-md-0 mb-4" />
            </Col>
            <Col md={6}>
              <h2 className="heading-2">Service Description</h2>
              <p>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
              <Link className="button">Learn More</Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="service py-5">
        <Container fluid>
          <Row className="pb-5">
            <Col md={4}>
              <img src={painting2} className="img-fluid mb-md-0 mb-3" />
            </Col>
            <Col md={8}>
              <img src={painting3} className="img-fluid" />
              <div className="text-end pt-5">
                <h5 className="heading-5">Oil on Canvas of a Little Girl</h5>
                <p>This portrait was created in 2015 for my brother’s daughter, Emily Morgan.</p>
              </div>
            </Col>
          </Row>
          <Row className="py-5">
            <Col md={8}>
              <img src={painting4} className="img-fluid" />
              <div className="pt-5">
                <h5 className="heading-5">Watercolor Portrait</h5>
                <p>Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
              </div>
            </Col>
            <Col md={4}>
              <img src={painting5} className="img-fluid" />
            </Col>
          </Row>
        </Container>

      </section>

        <Painting/>
    </>
  )
}

export default Services