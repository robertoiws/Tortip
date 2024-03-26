import React, { Fragment } from "react";
import Metadata from "../layout/MetaData";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import "./consejo.css";
import FilterComponent from "../filtrado/FilterComponent";

const Consejos = () => {
  return (
    <Fragment>
      <Metadata titulo={"Consejos de la Abuela"} />
      <section>
        <div className="text-center mt-5">
          <h1>Consejos de la abuela</h1>
          <p>
            Encontraras consejos y remedios tradicionales que te ayudaran mucho
          </p>
        </div>

        <Row className="mt-5">
          <Col
            md={7}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="text-lect ml-5">
              <h4>
                <i class="bi bi-patch-check-fill check1"></i> Un buen remedio de
                la abuela
              </h4>
              <h4>
                <i class="bi bi-patch-check-fill check1"></i> Tu publicación
                será publicada 48 horas después.
              </h4>
              <h4>
                <i class="bi bi-patch-check-fill check1"></i> Y, por supuesto,
                de forma gratuita
              </h4>
            </div>
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              src="./images/MEDICINA-TRADICIONAL 1.png"
              alt="Imagen"
              fluid
            />
          </Col>
        </Row>

        <div className="col-md-9 mx-auto mt-5">
          <FilterComponent />
        </div>
        <section className=" mt-5">
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
        <section className=" mt-5">
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

        <Row className="mt-5 align-items-center">
          <Col md={12} className="text-center">
            <h1>¿Cómo funciona 'Consejos de la abuela'?</h1>
          </Col>
          <section className="container-fluid col-md-9 mt-5">
            <Row className="justify-content-center">
              <Col md={3} className="mt-5">
                <div className="text-center">
                  <h1 className="Number">1</h1>
                  <h5>Publicas tu consejo</h5>
                  <p>
                    Realiza la publicación de un consejo que te sea funcional.
                  </p>
                </div>
              </Col>
              <Col md={3} className="mt-5">
                <div className="text-center">
                  <h1 className="Number">2</h1>
                  <h5>Los moderadores filtran</h5>
                  <p>
                    Las publicaciones son verificadas por un moderador y
                    aprobadas.
                  </p>
                </div>
              </Col>
              <Col md={3} className="mt-5">
                <div className="text-center">
                  <h1 className="Number">3</h1>
                  <h5>¡Tu consejo queda publicado!</h5>
                  <p>Tu consejo podrá ayudar a muchas personas.</p>
                </div>
              </Col>
            </Row>
          </section>
        </Row>

        <Row className="mt-5 textbox p-5">
          <Col md={6}>
            <div className="text-center">
              <h4>Ingresa tu consejo</h4>
              <Form>
                <Form.Group controlId="formInput">
                  <Form.Control
                    className="form-text"
                    type="text"
                    placeholder="Ingrese tu comentario"
                  />
                </Form.Group>
                <Button variant="primary btn-lg">Publicar</Button>
              </Form>
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="text-left">
              <h4 className="text-center">Recomendaciones</h4>
              <ol className="my-4">
                <li>Tu consejo se publicará</li>
                <li>Intenta que tu consejo sea clara y específica.</li>
                <li>Recuerda publicar consejos de calidad</li>
                <li>
                  Este servicio no sustituye a una consulta con un profesional
                  de la salud.
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </section>
    </Fragment>
  );
};

export default Consejos;
