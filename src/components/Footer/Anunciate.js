import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Anunciate = () => {
  return (
    <Container className="col-sm-10 col-md-11 my-3 m-4 mx-auto text-center mt-5">
      {/* Terapeuta */}
      <Row className="mb-5 align-items-center text-center">
        <h1 className="m-4 w-100">Terapeutas</h1>
        {/* Columna con foto y botones */}
        <Col md={6} className="d-flex align-items-center">
          <img src="./images/Basica.png" alt="Foto" className="img-fluid" />
        </Col>
        {/* Columna con lista e iconos */}
        <Col md={6}>
          <ul className="list-unstyled">
            <li>
              <h4>
                <i class="bi bi-info-circle-fill"></i> Visibilidad máxima
              </h4>
              <p>informacion de contacto con los colaboradores. </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-chat-left-dots-fill"></i> Gestión simplificada
              </h4>
              <p>Medios de contacto, Informacion, whatsapp y Videollamadas.</p>
            </li>
            <li>
              <h4>
                <i class="bi bi-file-break-fill"></i> Crecimiento garantizado
              </h4>
              <p>
                Personalizacion con los modulos disponibles de Landing Page.
              </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-kanban-fill"></i> Herramientas de análisis
              </h4>
              <p>Mejor posicionamiento en la promocion de servicios.</p>
            </li>
          </ul>
        </Col>
        <Col md={12} className="text-center">
          <Button className="btn mt-4 btn-primary bt-lg">Contrata</Button>
        </Col>
      </Row>

      {/* Cursos */}
      <Row className="mb-5 align-items-center text-center">
        <h1 className="m-4">Cursos</h1>
        {/* Columna con lista e iconos */}
        <Col md={6}>
          <ul className="list-unstyled">
            <li>
              <h4>
                <i class="bi bi-info-circle-fill"></i> Alcance global
              </h4>
              <p>informacion de contacto con los colaboradores. </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-chat-left-dots-fill"></i> Promoción
                personalizada
              </h4>
              <p>Medios de contacto, Informacion, whatsapp y Videollamadas.</p>
            </li>
            <li>
              <h4>
                <i class="bi bi-file-break-fill"></i> ¡Más inscripciones!
              </h4>
              <p>
                Se pueden agregar modulos a la landing page (Reseñas, Productos,
                Tiendas) con limite 2 modulos
              </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-kanban-fill"></i> Herramientas de análisis
              </h4>
              <p>Anuncios y promocion avanzada en las paginas.</p>
            </li>
          </ul>
        </Col>
        {/* Columna con foto y botones */}
        <Col md={6}>
          <img src="./images/Plus.png" alt="Foto" className="img-fluid" />
        </Col>
        <Col md={12} className="text-center">
          <Button className="btn mt-4 btn-primary bt-lg">Contrata</Button>
        </Col>
      </Row>

      {/* Ecommerce */}
      <Row className="mb-5 align-items-center text-center">
        {/* Columna con foto y botones */}
        <h1 className="m-4">Ecommerce</h1>
        <Col md={6}>
          <img src="./images/Pro.png" alt="Foto" className="img-fluid" />
        </Col>
        {/* Columna con lista e iconos */}
        <Col md={6}>
          <ul className="list-unstyled">
            <li>
              <h4>
                <i class="bi bi-info-circle-fill"></i> Nicho específico
              </h4>
              <p>informacion de contacto con los colaboradores. </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-chat-left-dots-fill"></i> Exposición garantizada
              </h4>
              <p>Cuenta con la informacion basica de contacto.</p>
            </li>
            <li>
              <h4>
                <i class="bi bi-file-break-fill"></i> Gestión sencilla
              </h4>
              <p>
                Se modifica la landing page con el minimo de personalizacion.
              </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-kanban-fill"></i> Promociones destacadas
              </h4>
              <p>Anuncio sencillo (nombre,dirección,redes sociales,correo)</p>
            </li>
          </ul>
        </Col>
        <Col md={12} className="text-center">
          <Button className="btn mt-4 btn-primary bt-lg">Contrata</Button>
        </Col>
      </Row>

      {/* Tiendas */}
      <Row className="mb-5 align-items-center text-center">
        <h1 className="m-4">Tiendas</h1>
        {/* Columna con lista e iconos */}
        <Col md={6}>
          <ul className="list-unstyled">
            <li>
              <h4>
                <i class="bi bi-info-circle-fill"></i> Presencia online
              </h4>
              <p>informacion de contacto con los colaboradores. </p>
            </li>
            <li>
              <h4>
                <i class="bi bi-chat-left-dots-fill"></i> Geolocalización
              </h4>
              <p>Medios de contacto, Informacion, whatsapp y Videollamadas.</p>
            </li>
            <li>
              <h4>
                <i class="bi bi-file-break-fill"></i> Publicidad efectiva
              </h4>
              <p>
                Se pueden agregar modulos a la landing page (Reseñas, Productos,
                Tiendas) con limite 2 modulos
              </p>
            </li>
          </ul>
        </Col>
        {/* Columna con foto y botones */}
        <Col md={6}>
          <img src="./images/Tiendas.png" alt="Foto" className="img-fluid" />
        </Col>
        <Col md={12} className="text-center">
          <Button className="btn mt-4 btn-primary bt-lg">Contrata</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Anunciate;
