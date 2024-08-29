import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='footer bg-dark py-4'>
      <Container>
        <Row>
          <Col><p className="mb-0">©Copyright ©All rights reserved</p></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer