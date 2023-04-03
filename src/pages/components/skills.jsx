import React from "react";
import { Card } from "react-bootstrap";
import { svg_assets } from "../../components/svg-name";

const Skills = () => {
  return (
    <Card className="card-padding">
      <Card.Title>Skills</Card.Title>
      <div className="d-flex  justify-content-between overflow-scroll skill-box ">
        {svg_assets.map((svg) => (
          <div className="me-5 d-flex flex-column justify-content-center ">
            <img className="h-50" src={svg.svg} alt={svg.name} />
            <p className="text-center">{svg.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Skills;
