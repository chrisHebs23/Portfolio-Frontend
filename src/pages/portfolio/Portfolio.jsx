import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import ProjectCard from "../../common/ProjectCard";
import PortfolioNav from "./components/PortfolioNav";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filterProject, setFilterProject] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const load = useRef(true);
  const types = [
    { name: "All", type: "all" },
    { name: "Apps", type: "app" },
    { name: "Designs", type: "design" },
    { name: "Websites", type: "website" },
  ];
  const projType = useRef("all");

  const getProjects = async () => {
    setIsLoading(true);
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/project`,
    })
      .then((response) => {
        setProjects(response.data.projects);
        setFilterProject(response.data.projects);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  // eslint-disable-next-line
  const handleFilter = (t) => {
    projType.current = t;
    if (t !== "all") {
      return setFilterProject(
        projects.filter((project) => project.category === t)
      );
    }
    return setFilterProject(projects);
  };

  useEffect(() => {
    if (load.current) {
      getProjects();
      load.current = false;
    }
    // if (
    //   Object.keys(projects).length > 0 &&
    //   Object.keys(projects).length === 0
    // ) {
    //   handleFilter(projType.current);
    // }
  }, [handleFilter, projects]);

  return (
    <div className="w-100 h-100 position-relative overflow-hidden">
      <h2>Projects</h2>
      <PortfolioNav
        types={types}
        projType={projType}
        handleFilter={handleFilter}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filterProject.length === 0 ? (
        <p>Coming Soon</p>
      ) : (
        <Row className="d-flex  w-100 similar-projects overflow-md-hidden overflow-x-sm-scroll my-3 flex-wrap g-3  position-relative row-cols-md-3  mh-100%">
          {filterProject.map((project) => (
            <ProjectCard project={project} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default Portfolio;
