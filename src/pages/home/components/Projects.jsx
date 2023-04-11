import MainBtn from "../../../common/main-btn";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectBtns from "../../../common/project-buttons";
import useAxios from "../../../hooks/useAxios";

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
      <div id="projects">
        {!isLoading ? (
          error ? (
            <div>{error}</div>
          ) : (
            projects.map((project) => (
              <div
                className="project"
                style={{
                  background: `url(${project.imageUrl})`,
                }}
              >
                <div className="project-sub">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ProjectBtns url={project.websiteUrl} id={project._id} />
                </div>
              </div>
            ))
          )
        ) : (
          <>Loading</>
        )}
      </div>
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
