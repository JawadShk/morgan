import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const paintingData = [
  {
    title: "Sea Storm",
    text: "This painting is one of my latest works on sea and ocean topics.",
    image: require("../assets/images/painting-1.png"),
  },
  {
    title: "Ruins of Ancient Fortress",
    text: "When I’ve been to Scotland, I made this painting just in a day.",
    image: require("../assets/images/painting-2.png"),
  },
  {
    title: "Two Lovers",
    text: "This work was finished in two days for my customers from San Diego, CA, who needed something special.",
    image: require("../assets/images/painting-3.png"),
  },
  {
    title: "Watercolor Portrait",
    text: "Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.",
    image: require("../assets/images/painting-4.png"),
  },
  {
    title: "Birches in Autumn",
    text: "I love painting autumn trees and this work is a perfect example.",
    image: require("../assets/images/painting-5.png"),
  },
  {
    title: "Green Landscape",
    text: "Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.",
    image: require("../assets/images/painting-6.png"),
  },
];

const Painting = () => {
  return (
    <>
      <section className="painting-gallery bg-light pt-5">
        <Container>
          <Row>
            <Col xs={12} className="text-center"><h2 className="heading-2 mb-5">My Paintings</h2></Col>
            {paintingData.map((painting, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="shadow border-0 mb-5">
                  <Card.Img variant="top" src={painting.image} style={{height: "400px"}}/>
                  <Card.Body>
                    <Card.Title>{painting.title}</Card.Title>
                    <Card.Text>{painting.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Painting;
