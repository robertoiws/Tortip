import React from "react";
import Slider from "react-slick";
import { Card, Col, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../layout/Loader";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SliderBlog = ({ loading }) => {
  if (loading) return <Loader />;

  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostrar 2 tarjetas a la vez
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
      <Card className="col-sm-10 col-md-11 my-3 m-4 mx-auto">
        <Row noGutters>
          <Col md={4} className="d-flex align-items-center">
            <Card.Img src="./images/slide1.jpg" alt="Imagen" className="mt-4" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                Meditación y Mindfulness para el Equilibrio Mental:
              </Card.Title>
              <Card.Text>
                Explora los beneficios de la meditación y el mindfulness en la
                gestión del estrés, la ansiedad y la mejora del bienestar
                emocional.
              </Card.Text>
              <Row>
                <Col md={6}>
                  <Card.Text className="text-cora">
                    <i className="bi bi-heart-fill"></i>
                    10 Oct 21, by Jane Ostin
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <a href="/blogDetail" className="mas">
                    Leer más...
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="col-sm-10 col-md-11 my-3 m-4 mx-auto">
        <Row noGutters>
          <Col md={4} className="d-flex align-items-center">
            <Card.Img src="./images/slide2.jpg" alt="Imagen" className="mt-4" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>Beneficios de la Acupuntura en la Salud:</Card.Title>
              <Card.Text>
                Describe cómo la acupuntura, una técnica de la medicina
                tradicional china, puede aliviar una variedad de dolencias
              </Card.Text>
              <Row>
                <Col md={6}>
                  <Card.Text className="text-cora">
                    <i className="bi bi-heart-fill"></i>
                    10 Oct 21, by Jane Ostin
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <a href="#" className="mas">
                    Leer más...
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="col-sm-10 col-md-11 my-3 m-4 mx-auto">
        <Row noGutters>
          <Col md={4} className="d-flex align-items-center">
            <Card.Img src="./images/slide1.jpg" alt="Imagen" className="mt-4" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                Meditación y Mindfulness para el Equilibrio Mental:
              </Card.Title>
              <Card.Text>
                Explora los beneficios de la meditación y el mindfulness en la
                gestión del estrés, la ansiedad y la mejora del bienestar
                emocional.
              </Card.Text>
              <Row>
                <Col md={6}>
                  <Card.Text className="text-cora">
                    <i className="bi bi-heart-fill"></i>
                    10 Oct 21, by Jane Ostin
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <a href="#" className="mas">
                    Leer más...
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="col-sm-10 col-md-11 my-3 m-4 mx-auto">
        <Row noGutters>
          <Col md={4} className="d-flex align-items-center">
            <Card.Img src="./images/slide2.jpg" alt="Imagen" className="mt-4" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>Beneficios de la Acupuntura en la Salud:</Card.Title>
              <Card.Text>
                Describe cómo la acupuntura, una técnica de la medicina
                tradicional china, puede aliviar una variedad de dolencias
              </Card.Text>
              <Row>
                <Col md={6}>
                  <Card.Text className="text-cora">
                    <i className="bi bi-heart-fill"></i>
                    10 Oct 21, by Jane Ostin
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <a href="#" className="mas">
                    Leer más...
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Slider>
  );
};

export default SliderBlog;
