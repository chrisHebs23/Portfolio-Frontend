import React from "react";
import { Card, Button } from "react-bootstrap";
import hero_img from "../../assets/images/hero.jpg";
import MainBtn from "../../common/main-btn";

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
      {/* <Card.Img src={hero_img} alt="Chris Heberden " /> */}
      <Card.ImgOverlay className="h-100 d-flex flex-column justify-content-end card-padding ">
        <Card.Title className="fw-bolder hero-title">
          Hi, I am Chris Heberden, Web developer, designer and dreamer
        </Card.Title>
        <Card.Text className="lh-base">
          Building Engaging and Functional Websites for Your Business. Hire Me
          Today!
        </Card.Text>
        <div className="w-full">
          <MainBtn />
          <Button className="btn outline-primary">Portfolio</Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Hero;
