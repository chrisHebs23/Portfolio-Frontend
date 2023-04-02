import React from "react";
import { Card, Carousel } from "react-bootstrap";
import place_1 from "../../assets/images/place_1.jpg";
import place_2 from "../../assets/images/place_2.jpg";
import place_3 from "../../assets/images/place_3.jpg";

const Places = () => {
  const places = [
    { name: "South Africa", text: "Where I was born", img: place_1 },
    { name: "Mauritius", text: "Where I lived", img: place_2 },
    { name: "Lake Tahoe", text: "Where I love to visit", img: place_3 },
  ];

  return (
    <Card className="p-0">
      <Carousel>
        {places.map((place) => (
          <Carousel.Item
            key={place.name}
            className="card-height card-carousel w-100"
          >
            <div
              className="card-height card-carousel rounded-5 "
              style={{
                backgroundImage: `url(${place.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              alt="First slide"
            >
              <div className=" w-100 h-100 image-gradient">
                <Carousel.Caption className="text-start ">
                  <h3>{place.name}</h3>
                  <p>{place.text}</p>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default Places;
