import React, { Fragment } from "react";
import { Link } from "react-router-dom"; // Asumiendo que estás utilizando React Router para la navegación
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MetaData from "../layout/MetaData";
import HeroSlider from "../layout/HeroSlider";

const NotFound = () => {
  return (
    <Fragment>
      <Container className="mt-5">
        <MetaData titulo={"No Funciona"} />
        <HeroSlider
          imageSrc="./images/hero.png"
          title="404 - Te fallamos, no encontramos los que buscas"
          text="Pero te dejamos nuestras ultimas promociones y opciones de visita"
        />
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8} lg={6} className="text-center">
            <p className="lead">Página no encontrada</p>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <Link to="/ecommerce" className="btn btn-primary m-2">
              Ir al Ecommerce
            </Link>
            <Link to="/terapeutas" className="btn btn-primary m-2">
              Ir a Terapeutas
            </Link>
            <Link to="/cursos" className="btn btn-primary m-2">
              Ir a los cursos
            </Link>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NotFound;
