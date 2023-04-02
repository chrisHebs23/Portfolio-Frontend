import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "../components/About";
import Hero from "../components/Hero";
import Places from "../components/Places";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col xl={7} lg={6} md={12} className="mb-3">
          <Hero />
        </Col>
        <Col xl={5} lg={6} md={12} className="mb-3 col-4 col-md-6">
          <Container className="m-0 p-0">
            <Row className="d-flex flex-column">
              <Col className="mb-3">
                <About />
              </Col>
              <Col className="mb-3">
                <Places />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Home;
