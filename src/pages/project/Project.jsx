import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { Row } from "react-bootstrap";
import MainBtn from "../../common/main-btn";
import ProjectCarousel from "./components/ProjectCarousel";

const Project = () => {
  const { id } = useParams();

  const { response, error, isLoading } = useAxios({
    params: `project/${id}`,
  });

  const [project, setProjects] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setProjects(response.project);
    }
    if (document.referrer !== window.location.href) {
      window.location.reload();
    }
  }, [response, id, project._id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <div>
      <Row>
        <h2>{project.title}</h2>
        <div>
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: "cover",
            }}
          ></div>
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
        <ProjectCarousel id={id} />
      </Row>
    </div>
  );
};

export default Project;
