import React from "react";
import { Card, Button } from "react-bootstrap";
import MainBtn from "../../../common/main-btn";
import hero_img from "../../../assets/images/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Card
      className="border-0 hero-card "
      style={{
        background: `url(${hero_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card.ImgOverlay className="h-100 d-flex flex-column justify-content-end card-padding ">
        <Card.Title className="fw-bolder hero-title">
          Hi, I am Chris Heberden, web developer, designer and dreamer
        </Card.Title>
        <Card.Text className="lh-base hero-card-text">
          Building engaging and functional websites for your business. Hire me
          today!
        </Card.Text>
        <div className="w-full ">
          <Link to="/hire">
            <MainBtn text="Hire me" />
          </Link>
          <Link to="/portfolio">
            <Button className="btn outline-primary ms-3">Portfolio</Button>
          </Link>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Hero;
