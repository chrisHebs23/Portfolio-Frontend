import React from "react";
import { Container } from "react-bootstrap";
// import Animation from "./components/Animation";
import HireForm from "./components/HireForm";

const HireMe = () => {
  return (
    <Container className="animation-container p-0">
      <div className="background-blur"></div>
      <div className="form-box">
        <h2>Need a custom website built? I would love to help. </h2>
        <HireForm />
      </div>
    </Container>
  );
};

export default HireMe;
