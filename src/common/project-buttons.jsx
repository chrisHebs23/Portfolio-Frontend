import React from "react";
import { Button } from "react-bootstrap";
import MainBtn from "./main-btn";
import { useNavigate } from "react-router-dom";

const ProjectBtns = ({ url, id }) => {
  let navigate = useNavigate();

  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <MainBtn text="Visit site" />
      </a>

      <Button
        className="btn outline-primary"
        onClick={() => navigate(`/project/${id}`)}
      >
        More info
      </Button>
    </div>
  );
};

export default ProjectBtns;
