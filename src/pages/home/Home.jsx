import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "../components/About";
import Hero from "../components/Hero";
import Places from "../components/Places";

const Home = () => {
  return (
    <div>
      <Row>
        <Col xl={7} lg={6} md={7} sm={12} className="mb-3">
          <Hero />
        </Col>
        <Col xl={5} lg={6} md={5} sm={12} className="mb-3 ">
          <Container className="m-0 p-0 w-100">
            <Row className="info-row w-100">
              <Col className="mb-3 w-100">
                <About />
              </Col>
              <Col className="mb-3 w-100">
                <Places />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Home;
