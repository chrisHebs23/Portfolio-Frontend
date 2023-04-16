import MainBtn from "../../../common/main-btn";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import ProjectCard from "../../../common/ProjectCard";
import { Row } from "react-bootstrap";

const Projects = () => {
  const { response, error, isLoading } = useAxios({ params: "project" });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setProjects(response.projects.filter((i, index) => index < 3));
    }
  }, [response]);

  return (
    <>
      <Row className="projects d-flex flex-nowrap my-3 g-3  position-relative row-cols-md-3 mh-100%">
        {!isLoading ? (
          error ? (
            <div>{error}</div>
          ) : (
            projects.map((project) => <ProjectCard project={project} />)
          )
        ) : (
          <>Loading</>
        )}
      </Row>
      {!error && !isLoading && (
        <div className="d-flex w-100 justify-content-center">
          <Link to="/portfolio">
            <MainBtn text="See all" s />
          </Link>
        </div>
      )}
    </>
  );
};

export default Projects;
