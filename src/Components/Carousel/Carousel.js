import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Carouse() {
  return (
    <div style={{ display: "block", padding: 0 }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "30vw" }}
            src="https://wallpaperaccess.com/full/1123787.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "30vw" }}
            src="https://images3.alphacoders.com/124/thumb-1920-1241167.png"
            alt="Image Two"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "30vw" }}
            src="https://wallpaperaccess.com/full/4430476.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
