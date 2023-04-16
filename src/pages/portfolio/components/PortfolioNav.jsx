import React from "react";
import { Button } from "react-bootstrap";

const PortfolioNav = ({ types, projType, handleFilter }) => {
  return (
    <div className="">
      <ul className="portfolio-nav d-flex justify-space-between">
        {types.map((type) => (
          <p
            key={type.name}
            className={`${
              projType.current === type.type
                ? "project-type-active "
                : "project-type-not-active"
            } portfolio-button`}
            onClick={() => handleFilter(type.type)}
          >
            {type.name}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioNav;
