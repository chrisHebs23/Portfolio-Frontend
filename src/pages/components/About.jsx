import React from "react";
import { Card } from "react-bootstrap";
import MainBtn from "../../common/main-btn";

const About = () => {
  return (
    <Card className="card-padding card-height">
      <Card.Title>About Me</Card.Title>
      <Card.Text>
        I am South African living in America. I am on a journey to build and
        create things that help people and look great at the same time. If you
        have the same goal in mind do not hesitate to message me and we can help
        each other out.
      </Card.Text>
      <MainBtn />
    </Card>
  );
};

export default About;
