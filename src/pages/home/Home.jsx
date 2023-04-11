import React from "react";
import { Col, Row } from "react-bootstrap";
import About from "./components/About";
import Hero from "./components/Hero";
import Places from "./components/Places";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col xl={7} lg={6} md={7} sm={12}>
          <Hero />
        </Col>
        <Col xl={5} lg={6} md={5} sm={12} className="">
          <Row className="info-row mb-3">
            <Col className="mb-3">
              <About />
            </Col>
            <Col className=" w-100 ">
              <Places />
            </Col>
          </Row>
        </Col>

        {/* <Col className="transition">
          <Skills />
        </Col> */}
      </Row>
      <Row className="mb-3">
        <Col md={12} sm={12} className="mb-3">
          {/* <Links /> */}
          <Skills />
        </Col>
        {/* <Col md={5} sm={12}>
          <Hobbies />
        </Col> */}
      </Row>

      {/* <Col className="transition">
          <Skills />
        </Col> */}

      <div className="my-5">
        <h2 className="card-title">Recent Projects</h2>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
