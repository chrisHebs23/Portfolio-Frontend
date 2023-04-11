import React from "react";
import { Button } from "react-bootstrap";
import MainBtn from "./main-btn";
import { Link } from "react-router-dom";

const ProjectBtns = ({ url, id }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <MainBtn text="Visit site" />
      </a>
      <Link to={`/project/${id}`}>
        <Button className="btn outline-primary">More info</Button>
      </Link>
    </div>
  );
};

export default ProjectBtns;
