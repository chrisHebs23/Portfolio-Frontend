import React, { useRef, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../../common/ProjectCard";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const load = useRef(true);

  const getProjects = async () => {
    setIsLoading(true);
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/project`,
    })
      .then((response) => {
        setProjects(response.data.projects);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useState(() => {
    if (load.current) {
      getProjects();
      load.current = false;
    }
  }, [getProjects]);

  return (
    <>
      <h2>Projects</h2>
      <Row className="d-flex overflow-hidden my-3 flex-wrap g-3  position-relative row-cols-3 mh-100%">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Row>
    </>
  );
};

export default Portfolio;
