import React, { Fragment } from "react";
import Metadata from "../layout/MetaData";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import FilterComponent from "../filtrado/FilterComponent";

const Experto = () => {
  return (
    <Fragment>
      <Metadata titulo={"Pregúntale al experto"} />
      <section>
        <div className="text-center mt-5">
          <h1>Pregúntale al experto</h1>
          <p>
            Podrás resolver, de forma anónima, todas tus dudas en materia de
            salud.
          </p>
        </div>
        <Row className="mt-5">
          <Col
            md={7}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="text-lect ml-5">
              <h4>
                <i class="bi bi-patch-check-fill check1"></i> Recibirás una
                respuesta fiable y de calidad
              </h4>
              <h4>
                <i class="bi bi-patch-check-fill check1"></i> Tu duda será
                resuelta en 48 horas
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
            <Image src="./images/PREGUNTALE_EXPERTO.png" alt="Imagen" fluid />
          </Col>
        </Row>

        <Row className="mt-5 textbox p-5">
          <Col md={6}>
            <div className="text-center">
              <h4>Resolveremos tus dudas.</h4>
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
                <li>Tu pregunta se publicará de forma anónima.</li>
                <li>Intenta que tu consulta médica sea clara y breve.</li>
                <li>
                  La pregunta irá dirigida a todos los especialistas de
                  Doctoralia, no a uno específico.
                </li>
                <li>
                  Este servicio no sustituye a una consulta con un profesional
                  de la salud.
                </li>
                <li>
                  No se permiten preguntas sobre casos específicos o segundas
                  opiniones.
                </li>
                <li>
                  Por cuestiones de salud, no se publicarán cantidades ni dosis
                  de medicamentos.
                </li>
              </ol>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 align-items-center">
          <Col md={12} className="text-center">
            <h1>¿Cómo funciona 'Pregunta al Experto'?</h1>
          </Col>
          <section className="container-fluid col-md-9 mt-5">
            <Row className="justify-content-center">
              <Col md={3} className="mt-5">
                <div className="text-center">
                  <h1 className="Number">1</h1>
                  <h5>Los pacientes preguntan</h5>
                  <p>Realiza una pregunta breve sobre tu problema</p>
                </div>
              </Col>
              <Col md={3} className="mt-5">
                <div className="text-center">
                  <h1 className="Number">2</h1>
                  <h5>Los moderadores filtran</h5>
                  <p>
                    Las preguntas son verificadas por un moderador y enviadas a
                    los especialistas correspondientes.
                  </p>
                </div>
              </Col>
              <Col md={3} className="mt-5">
                <div className="text-center">
                  <h1 className="Number">3</h1>
                  <h5>Los especialistas responden</h5>
                  <p>
                    Normalmente una pregunta recibe respuesta de más de un
                    doctor o especialista.
                  </p>
                </div>
              </Col>
              <Col md={3} className="mt-5">
                <div className="text-center">
                  <h1 className="Number">4</h1>
                  <h5>¡Tu duda queda solucionada!</h5>
                  <p>
                    Te informaremos por correo electrónico de las respuestas que
                    recibas.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Row>

        <div className="mt-5 textbox p-5">
          <FilterComponent />
        </div>
        <Container className="mt-5">
          <h3 className="text-center mb-4">Ultmas Preguntas</h3>
        </Container>
      </section>
    </Fragment>
  );
};

export default Experto;
