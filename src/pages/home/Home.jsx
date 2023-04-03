import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "../components/About";
import Hero from "../components/Hero";
import Places from "../components/Places";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="mb-5">
      <Row className="mb-3">
        <Col xl={7} lg={6} md={7} sm={12} className="mb-3">
          <Hero />
        </Col>
        <Col xl={5} lg={6} md={5} sm={12} className="mb-3 ">
          <div>
            <Row className="info-row ">
              <Col className="mb-3">
                <About />
              </Col>
              <Col className="mb-3 w-100">
                <Places />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Skills />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
