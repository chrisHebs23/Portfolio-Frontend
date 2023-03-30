import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "../components/About";
import Hero from "../components/Hero";
import Places from "../components/Places";
import Spotify from "../components/Spotify";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={12} xlg={8} lg={6} fluid className="mb-3 ">
          <Hero />
        </Col>
        <Col md={12} xlg={4} lg={6} className="mb-3">
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
        <Col>
          <Spotify />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
