import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAxios from "../../../hooks/useAxios";
import ProjectCard from "../../../common/ProjectCard";

const ProjectCarousel = ({ id }) => {
  const { response, error, isLoading } = useAxios({ params: "project" });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setProjects(
        response.projects
          .filter((project) => project._id !== id)
          .filter((i, index) => index < 5)
      );
    }
  }, [response]);

  //   console.log(projects);

  return (
    <div className="w-100 h-100 my-5">
      <Row className="flex-nowrap w-100 similar-projects h-100 mb-3">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Row>
    </div>
  );
};

export default ProjectCarousel;
