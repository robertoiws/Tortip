import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Planes = () => {
  return (
    <Container className="col-sm-10 col-md-11 my-3 m-4 mx-auto text-center mt-5">
      {/* Primera sección */}
      <Row className="mb-5 align-items-center text-center">
        <h1 className="m-4">Pro</h1>
        {/* Columna con foto y botones */}
        <Col md={6}>
          <img src="./images/Pro.png" alt="Foto" className="img-fluid" />
          <div className="mt-3">
            <Button variant="primary" className="mr-2">
              Demo
            </Button>
            <Button variant="secondary">Contrata</Button>
          </div>
        </Col>
        {/* Columna con lista e iconos */}
        <Col md={6}>
          <ul className="list-unstyled">
            <li>
              <h4>
                <i class="bi bi-info-circle-fill"></i> Información Personalizada
                del colaborador.
              </h4>
              <p>informacion de contacto con los colaboradores. </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-chat-left-dots-fill"></i> Comunicación Directa
                con el cliente.
              </h4>
              <p>Medios de contacto, Informacion, whatsapp y Videollamadas.</p>
            </li>
            <li>
              <h4>
                <i class="bi bi-file-break-fill"></i> Administración de la
                landing Page.
              </h4>
              <p>
                Personalizacion con los modulos disponibles de Landing Page.
              </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-kanban-fill"></i> Promoción en los banners de
                inicio
              </h4>
              <p>Mejor posicionamiento en la promocion de servicios.</p>
            </li>
          </ul>
        </Col>
      </Row>

      {/* Segunda sección (inversa de la primera) */}
      <Row className="mb-5 align-items-center text-center">
        <h1 className="m-4">Plus</h1>
        {/* Columna con lista e iconos */}
        <Col md={6}>
          <ul className="list-unstyled">
            <li>
              <h4>
                <i class="bi bi-info-circle-fill"></i> Información Personalizada
                del colaborador.
              </h4>
              <p>informacion de contacto con los colaboradores. </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-chat-left-dots-fill"></i> Comunicación Directa
                con el cliente.
              </h4>
              <p>Medios de contacto, Informacion, whatsapp y Videollamadas.</p>
            </li>
            <li>
              <h4>
                <i class="bi bi-file-break-fill"></i> Administración de la
                landing Page.
              </h4>
              <p>
                Se pueden agregar modulos a la landing page (Reseñas, Productos,
                Tiendas) con limite 2 modulos
              </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-kanban-fill"></i> Promoción en los banners de
                inicio
              </h4>
              <p>Anuncios y promocion avanzada en las paginas.</p>
            </li>
          </ul>
        </Col>
        {/* Columna con foto y botones */}
        <Col md={6}>
          <img src="./images/Plus.png" alt="Foto" className="img-fluid" />
          <div className="mt-3">
            <Button variant="primary" className="mr-2">
              Demo
            </Button>
            <Button variant="secondary">Contrata</Button>
          </div>
        </Col>
      </Row>

      {/* Tercera sección (similar a la primera) */}
      <Row className="mb-5 align-items-center text-center">
        {/* Columna con foto y botones */}
        <h1 className="m-4">Basica</h1>
        <Col md={6}>
          <img src="./images/Basica.png" alt="Foto" className="img-fluid" />
          <div className="mt-3">
            <Button variant="primary" className="mr-2">
              Demo
            </Button>
            <Button variant="secondary">Contrata</Button>
          </div>
        </Col>
        {/* Columna con lista e iconos */}
        <Col md={6}>
          <ul className="list-unstyled">
            <li>
              <h4>
                <i class="bi bi-info-circle-fill"></i> Información Personalizada
                del colaborador.
              </h4>
              <p>informacion de contacto con los colaboradores. </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-chat-left-dots-fill"></i> Comunicación Directa
                con el cliente.
              </h4>
              <p>Cuenta con la informacion basica de contacto.</p>
            </li>
            <li>
              <h4>
                <i class="bi bi-file-break-fill"></i> Administración de la
                landing Page.
              </h4>
              <p>
                Se modifica la landing page con el minimo de personalizacion.
              </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-kanban-fill"></i> Promoción en los banners de
                inicio
              </h4>
              <p>Anuncio sencillo (nombre,dirección,redes sociales,correo)</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Planes;
