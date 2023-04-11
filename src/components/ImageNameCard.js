import React from "react";
import { Card, Tooltip, OverlayTrigger } from "react-bootstrap";

const ImageNameCard = ({ title, arr }) => {
  const renderTooltip = (name) => (
    <Tooltip id="button-tooltip-2">{name}</Tooltip>
  );

  return (
    <Card className="card-padding image-card ">
      <Card.Title>{title}</Card.Title>
      <div className="d-flex justify-content-between overflow-auto skills">
        {arr.map((svg) => (
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 150, hide: 400 }}
            overlay={renderTooltip(svg.name)}
          >
            <div className="icon-box d-flex justify-content-between flex-column align-items-center w-50">
              <img className="icons p-2" src={svg.svg} alt={svg.name} />
              <p className="d-lg-none">{svg.name}</p>
            </div>
          </OverlayTrigger>
        ))}
      </div>
    </Card>
  );
};

export default ImageNameCard;
