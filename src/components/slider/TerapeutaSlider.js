import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../layout/Loader";
import "./slider.css";

const TerapeutaSlider = ({ loading }) => {
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
        <div className="card p-3 rounded h-100">
          <img
            className="card-img-top mx-auto c-tera img-fluid"
            src="./images/tera.png"
          />
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">
                <a href="">Luis Lopez</a>
              </h5>
              <div className="especialidades-box">
                <p>Especialidades</p>
              </div>
            </div>

            <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>

            <p className="card-text">
              Aquí va el contenido del párrafo. Este párrafo ocupará todo el
              ancho de la card.
            </p>

            <div className="d-flex justify-content-between mt-auto">
              <a href="#" className="btn btn-primary">
                <i className="bi bi-calendar-check-fill"></i>
              </a>
              <a href="/perfilClientes" className="btn btn-secondary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="card p-3 rounded">
          <img
            className="card-img-top mx-auto c-tera img-fluid"
            src="./images/terap.png"
          />
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">
                <a href="">Rian Garcia</a>
              </h5>
              <div className="especialidades-box">
                <p>Especialidades</p>
              </div>
            </div>

            <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>

            <p className="card-text">
              Aquí va el contenido del párrafo. Este párrafo ocupará todo el
              ancho de la card.
            </p>

            <div className="d-flex justify-content-between mt-auto">
              <a href="#" className="btn btn-primary">
                <i className="bi bi-calendar-check-fill"></i>
              </a>
              <a href="/perfilClientes1" className="btn btn-secondary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="card p-3 rounded">
          <img
            className="card-img-top mx-auto c-tera img-fluid"
            src="./images/tera.png"
          />
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">
                <a href="">Ivan Chavez</a>
              </h5>
              <div className="especialidades-box">
                <p>Especialidades</p>
              </div>
            </div>

            <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>

            <p className="card-text">
              Aquí va el contenido del párrafo. Este párrafo ocupará todo el
              ancho de la card.
            </p>

            <div className="d-flex justify-content-between mt-auto">
              <a href="#" className="btn btn-primary">
                <i className="bi bi-calendar-check-fill"></i>
              </a>
              <a href="/perfilClientes2" className="btn btn-secondary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="card p-3 rounded h-100">
          <img
            className="card-img-top mx-auto c-tera img-fluid"
            src="./images/tera.png"
          />
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">
                <a href="">Luis Lopez</a>
              </h5>
              <div className="especialidades-box">
                <p>Especialidades</p>
              </div>
            </div>

            <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>

            <p className="card-text">
              Aquí va el contenido del párrafo. Este párrafo ocupará todo el
              ancho de la card.
            </p>

            <div className="d-flex justify-content-between mt-auto">
              <a href="#" className="btn btn-primary">
                <i className="bi bi-calendar-check-fill"></i>
              </a>
              <a href="/perfilClientes" className="btn btn-secondary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="card p-3 rounded">
          <img
            className="card-img-top mx-auto c-tera img-fluid"
            src="./images/terap.png"
          />
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">
                <a href="">Rian Garcia</a>
              </h5>
              <div className="especialidades-box">
                <p>Especialidades</p>
              </div>
            </div>

            <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>

            <p className="card-text">
              Aquí va el contenido del párrafo. Este párrafo ocupará todo el
              ancho de la card.
            </p>

            <div className="d-flex justify-content-between mt-auto">
              <a href="#" className="btn btn-primary">
                <i className="bi bi-calendar-check-fill"></i>
              </a>
              <a href="/perfilClientes1" className="btn btn-secondary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 my-3">
        <div className="card p-3 rounded">
          <img
            className="card-img-top mx-auto c-tera img-fluid"
            src="./images/tera.png"
          />
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">
                <a href="">Ivan Chavez</a>
              </h5>
              <div className="especialidades-box">
                <p>Especialidades</p>
              </div>
            </div>

            <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>

            <p className="card-text">
              Aquí va el contenido del párrafo. Este párrafo ocupará todo el
              ancho de la card.
            </p>

            <div className="d-flex justify-content-between mt-auto">
              <a href="#" className="btn btn-primary">
                <i className="bi bi-calendar-check-fill"></i>
              </a>
              <a href="/perfilClientes2" className="btn btn-secondary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TerapeutaSlider;
