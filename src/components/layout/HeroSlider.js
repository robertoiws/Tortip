import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSlider = ({ imageSrc, title, text }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0 position-relative">
          <img
            src={imageSrc}
            alt="Hero Image"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6 d-flex align-items-center position-absolute top-50 start-50 translate-middle">
          <div className="hero-content text-center">
            <h1 className="banner-text">{title}</h1>
            <p className="banner-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
