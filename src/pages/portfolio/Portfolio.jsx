import React, { useRef, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import ProjectBtns from "../../common/project-buttons";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const load = useRef(true);
  const [visible, setVisible] = useState({});

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

  const handleClick = (id) => {
    setVisible({ ...visible, [id]: !visible[id] });
  };

  return (
    <>
      <h2>Projects</h2>
      <Row className="d-flex overflow-hidden my-3 flex-wrap g-3  position-relative row-cols-3 mh-100%">
        {projects.map((project) => (
          <Col
            lg={4}
            md={6}
            sm={12}
            className="proj-hove"
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
              className="min-h-project proj-hove h-100 position-relative"
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
        ))}
      </Row>
    </>
  );
};

export default Portfolio;
