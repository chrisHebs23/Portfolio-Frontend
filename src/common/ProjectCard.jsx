import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ProjectBtns from "./project-buttons";

const ProjectCard = ({ project }) => {
  const [visible, setVisible] = useState({});

  const handleClick = (id) => {
    setVisible({ ...visible, [id]: !visible[id] });
  };
  return (
    <Col
      lg={4}
      md={6}
      sm={12}
      className=" mb-3 "
      onClick={() => handleClick(project._id)}
      key={project._id}
    >
      <div
        style={{
          background: `url(${project.imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
        }}
        className="proj-hove min-h-project h-100 position-relative rounded"
      >
        <div
          className={`info bg-proj w-100 d-flex flex-column justify-content-end align-items-start h-100  ${
            visible[project._id] && "visible-info"
          } `}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ProjectBtns url={project.websiteUrl} id={project._id} />
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
