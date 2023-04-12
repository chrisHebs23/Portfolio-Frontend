import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { Container, Row } from "react-bootstrap";
import MainBtn from "../../common/main-btn";
import ProjectCarousel from "./components/ProjectCarousel";

const Project = () => {
  const { id } = useParams();
  const { response, error, isLoading } = useAxios({ params: `project/${id}` });

  const [project, setProjects] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setProjects(response.project);
    }
  }, [response]);

  return (
    <div>
      <Row>
        <h2>{project.title}</h2>
        <div>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-100 rounded"
          />
          <p className="my-3">{project.description}</p>
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="my-3"
          >
            <MainBtn text="Visit site" />
          </a>
        </div>
      </Row>
      <Row>
        <ProjectCarousel />
      </Row>
    </div>
  );
};

export default Project;
