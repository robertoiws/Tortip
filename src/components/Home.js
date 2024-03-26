import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import Search from "./layout/Search";
import "./index.css";
import SliderProduct from "./Terapeutas/Modulos/SliderProduct";
import TerapeutaSlider from "./slider/TerapeutaSlider";
import { Container, Row, Col, Card, CardImg } from "react-bootstrap";

const Home = () => {
  return (
    <Fragment>
      <section
        className="hero-container"
        style={{ backgroundImage: 'url("/images/hero.png")' }}
      >
        <div className="hero-content">
          <h1 className="titulo">
            DESCUBRE EL PODER DE LA MEDICINA ALTERNATIVA Y TRANSFORMA TU{" "}
            <span>BIENESTAR</span>
          </h1>
          <Search showSelect={true} />
        </div>
      </section>
      <section className="text-section">
        <h4>PORTAL DE MEDICINA ALTERNATIVA</h4>
        <br />
        <p className="texto">
          Aquí encontrarás las mejores opciones para tratar de una manera
          natural y segura cualquier enfermedad, además contamos con un amplio
          directorio de Terapeutas, Terapias, Tiendas y Productos Naturistas.
        </p>
      </section>
      <section className=" mt-4">
        <h4 className="text-center">
          ¿Qué mejor manera de comenzar que con la sabiduría de una abuela?
        </h4>
        <div className="container-fluid col-md-9 mt-5 text-center">
          <Row>
            <Col md={6}>
              <h3>Últimos Publicados</h3>
              <div>
                <h6>Como Curar la gripa</h6>
                <p className="consejos">
                  <i class="bi bi-heart-fill"></i> 10 Oct 21, by Jane Ostin
                </p>
                <h6>Evita el vomito</h6>
                <p className="consejos">
                  <i class="bi bi-heart-fill"></i> 10 Oct 21, by Jane Ostin
                </p>
                <h6>Un pan para el ¿susto?</h6>
                <p className="consejos">
                  <i class="bi bi-heart-fill"></i> 10 Oct 21, by Jane Ostin
                </p>
              </div>
            </Col>

            <Col md={6}>
              <h3>Más Populares</h3>
              <div>
                <h6>Insomnio</h6>
                <p className="consejos">
                  <i class="bi bi-heart-fill"></i> 10 Oct 21, by Jane Ostin
                </p>
                <h6>Ansiedad</h6>
                <p className="consejos">
                  <i class="bi bi-heart-fill"></i> 10 Oct 21, by Jane Ostin
                </p>
                <h6>Estres</h6>
                <p className="consejos">
                  <i class="bi bi-heart-fill"></i> 10 Oct 21, by Jane Ostin
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <br />
      </section>
      <section className="container-fluid col-md-9 mt-5">
        <h3 className="text-center">Especialistas cerca de tu domicilio</h3>
        <TerapeutaSlider />
      </section>
      <section className="container-fluid col-md-9 mt-5">
        <h6 className="text-center mb-4">Nuestros servicios</h6>
        <h3 className="text-center mb-4">Al alcance de tu mano</h3>
        <Row className="justify-content-center">
          <Col md={3}>
            <Card className="text-center border-0">
              <Card.Body>
                <Card.Img
                  className="img"
                  variant="top"
                  src="./images/T.png"
                  alt="Imagen 4"
                />
                <Card.Title className="mt-3">Terapeutas</Card.Title>
                <Card.Text>
                  Encuentra ayuda de un experto y cerca de tú domicilio
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center border-0">
              <Card.Body>
                <Card.Img
                  className="img"
                  variant="top"
                  src="./images/TE.png"
                  alt="Imagen 4"
                />
                <Card.Title className="mt-3">Terapias</Card.Title>
                <Card.Text>
                  Encontraras las soluciones a tus problemas
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center border-0">
              <Card.Body>
                <Card.Img
                  className="img"
                  variant="top"
                  src="./images/E.png"
                  alt="Imagen 4"
                />
                <Card.Title className="mt-3">Ecommerce</Card.Title>
                <Card.Text>Los productos que necesites estan aqui.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center border-0">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="./images/C.png"
                  alt="Imagen 4"
                  className="img"
                />
                <Card.Title className="mt-3">Cursos</Card.Title>
                <Card.Text>
                  Encontraras contenido para informarte y crecer en
                  conocimientos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section className="container-fluid col-md-9 mt-5">
        <h3 className="text-center">Productos Màs buscados</h3>
        <div className="row">
          <SliderProduct />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
