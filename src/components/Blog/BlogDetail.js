import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./blog.css";
import SliderBlog from "../slider/SliderBlog";

const BlogDetail = () => {
  return (
    <Fragment>
      <h2 className="text-center mt-5">
        Meditación y Mindfulness para el Equilibrio Mental
      </h2>
      <div className="col-sm-10 col-md-11 my-3 m-4 mx-auto text-center mt-5">
        <h4 className="m-4">Puntos fuertes del tema.</h4>
        <p className="m-4">
          La medicina alternativa es un enfoque holístico de la salud que busca
          tratar no solo los síntomas de una enfermedad, sino también las causas
          subyacentes. A diferencia de la medicina convencional, que a menudo se
          centra en el uso de medicamentos y procedimientos invasivos, la
          medicina alternativa aboga por terapias naturales y métodos no
          farmacológicos.
        </p>
        <img className="mx-auto img-fluid" src="./images/BlogD.png" />
        <p className="m-4">
          Estos incluyen la acupuntura, la homeopatía, la medicina herbal, la
          osteopatía y muchas otras prácticas que han demostrado ser efectivas
          para promover la curación y el bienestar en el cuerpo y la mente. Al
          abrazar un enfoque más integral de la salud, la medicina alternativa
          se esfuerza por empoderar a las personas para que tomen el control de
          su propia salud y encuentren soluciones que se adapten a sus
          necesidades individuales."
        </p>
      </div>
      <section id="Blog" className="container mt-5">
        <div className="row">
          {/* Primera columna */}
          <div className="col-md-6">
            <Card className="my-3 mx-auto">
              <Row noGutters>
                <Col md={4} className="d-flex align-items-center">
                  <Card.Img src="./images/terap.png" alt="Imagen" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Rian Garcia</Card.Title>
                    <Card.Text>Especialidad</Card.Text>
                    <Row>
                      <Col md={6}>
                        <Card.Text>
                          <i className="bi bi-heart-fill"></i>
                          10 Oct 21, by Jane Ostin
                        </Card.Text>
                      </Col>
                      <Col md={6}>
                        <a href="/perfilClientes1" className="btn btn-primary">
                          Leer más...
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>

          {/* Segunda columna */}
          <div className="col-md-6">
            <div className="my-3 mx-auto d-flex flex-column">
              <h5> Tags </h5>
              <div className="d-flex justify-content-between">
                <p className="Tag">Especialidad</p>
                <p className="Tag">Especialidad</p>
                <p className="Tag">Especialidad</p>
              </div>
              <h5> Padecimientos </h5>
              <div className="d-flex justify-content-between">
                <p className="Tag">Especialidad</p>
                <p className="Tag">Especialidad</p>
                <p className="Tag">Especialidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-md-12 mt-5">
        <h3>Recomendados</h3>
        <SliderBlog />
      </div>
    </Fragment>
  );
};

export default BlogDetail;
