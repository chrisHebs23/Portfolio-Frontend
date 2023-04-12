import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ProjectBtns from "./project-buttons";

const ProjectCard = ({ project, lg = 4, md = 6, sm = 12 }) => {
  const [visible, setVisible] = useState({});

  const handleClick = (id) => {
    setVisible({ ...visible, [id]: !visible[id] });
  };
  return (
    <Col
      lg={lg}
      md={md}
      sm={sm}
      className="proj-hove mb-5 "
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
        className="min-h-project proj-hove h-100 position-relative rounded"
      >
        <div
          className={`info bg-proj w-100 d-flex flex-column justify-content-end align-items-start h-100 overflow-hidden ${
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
