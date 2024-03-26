import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../layout/Loader";
import "./slider.css";

const SliderCursos = ({ loading }) => {
  if (loading) return <Loader />;

  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 2 tarjetas a la vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Cambiar a 1 tarjeta en pantallas más pequeñas
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="col-sm-12 col-md-12 my-3">
          <div className="h-100 card-cursso">
            <img
              className="card-img-top mx-auto c-tera img-fluid"
              src="./images/Mark-1.png"
            />
            <div className="card-body d-flex flex-column text center">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">
                  <a href="">Wallace Watkins</a>
                </h5>
              </div>
              <p className="card-text">Professor in Architecture</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="col-sm-12 col-md-12 my-3">
          <div className="h-100 card-cursso">
            <img
              className="card-img-top mx-auto c-tera img-fluid"
              src="./images/Mark-2.png"
            />
            <div className="card-body d-flex flex-column text center">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">
                  <a href="#">Bradley Lowe</a>
                </h5>
              </div>
              <p className="card-text text center ">
                Instructor in Architecture
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="col-sm-12 col-md-12 my-3">
          <div className="h-100 card-cursso">
            <img
              className="card-img-top mx-auto c-tera img-fluid"
              src="./images/Mark-3.png"
            />
            <div className="card-body d-flex flex-column text center">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">
                  <a href="">Maria Harrison</a>
                </h5>
              </div>
              <p className="card-text">Instructor in Architecture </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="col-sm-12 col-md-12 my-3">
          <div className="h-100 card-cursso">
            <img
              className="card-img-top mx-auto c-tera img-fluid"
              src="./images/Mark-1.png"
            />
            <div className="card-body d-flex flex-column text center">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">
                  <a href="">Wallace Watkins</a>
                </h5>
              </div>
              <p className="card-text">Professor in Architecture</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="col-sm-12 col-md-12 my-3">
          <div className="h-100 card-cursso">
            <img
              className="card-img-top mx-auto c-tera img-fluid"
              src="./images/Mark-2.png"
            />
            <div className="card-body d-flex flex-column text center">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">
                  <a href="#">Bradley Lowe</a>
                </h5>
              </div>
              <p className="card-text text center ">
                Instructor in Architecture
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="col-sm-12 col-md-12 my-3">
          <div className="h-100 card-cursso">
            <img
              className="card-img-top mx-auto c-tera img-fluid"
              src="./images/Mark-3.png"
            />
            <div className="card-body d-flex flex-column text center">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">
                  <a href="">Maria Harrison</a>
                </h5>
              </div>
              <p className="card-text">Instructor in Architecture </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SliderCursos;
