import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ViewAbuela = () => {
  const [abuelaInfo, setAbuelaInfo] = useState([]);
  const [calificaciones, setCalificaciones] = useState({});
  const [respuestas, setRespuestas] = useState({});
  const [comentarios, setComentarios] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Función para manejar el envío de calificación
  const handleCalificacionSubmit = (idConsulta) => {
    const calificacion = calificaciones[idConsulta];
    const comentario = comentarios[idConsulta];

    console.log("JSON enviado:", {
      fk_ConsultaAbuela: idConsulta,
      calificacionAbuela: calificacion,
      comentarioCalificacion: comentario,
    });

    fetch(
      `https://ecommerceconnectiveitapi.azurewebsites.net/api/CalificacionAbuela`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fk_ConsultaAbuela: idConsulta,
          calificacionAbuela: calificacion,
          comentarioCalificacion: comentario,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Calificación enviada:", data);
        // Limpiar los campos después de enviar la calificación
        setCalificaciones((prevCalificaciones) => ({
          ...prevCalificaciones,
          [idConsulta]: "",
        }));
        setComentarios((prevComentarios) => ({
          ...prevComentarios,
          [idConsulta]: "",
        }));
        // Mostrar una alerta de respuesta enviada
        alert("Respuesta enviada");
      })
      .catch((error) => {
        console.error("Error al enviar la calificación:", error);
        // Log completo de la respuesta para diagnosticar el problema
        console.log("Respuesta completa del servidor:", error.response);
      });
  };

  // Función para manejar el envío de respuesta
  const handleRespuestaSubmit = (id) => {
    fetch(
      `https://ecommerceconnectiveitapi.azurewebsites.net/api/CalificacionAbuela?fk_ConsultaAbuela=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta recibida:", data);
        // Almacena las respuestas en el estado
        setRespuestas({ ...respuestas, [id]: data });
        // Muestra el modal con los datos de la respuesta
        setModalData(data);
        setShowModal(true);
      })
      .catch((error) => console.error("Error al obtener la respuesta:", error));
  };

  useEffect(() => {
    fetch(
      `https://ecommerceconnectiveitapi.azurewebsites.net/api/ConsultaAbuela/getall`
    )
      .then((response) => response.json())
      .then((data) => {
        // Actualizar la información de la abuela
        setAbuelaInfo(data);

        // Inicializar los estados de calificaciones y respuestas
        const initialCalificaciones = {};
        const initialComentarios = {};
        const fetchResponses = data.map((abuela) =>
          fetch(
            `https://ecommerceconnectiveitapi.azurewebsites.net/api/CalificacionAbuela?fk_ConsultaAbuela=${abuela.pk_ConsultaAbuela}`
          )
            .then((response) => {
              if (!response.ok) {
                return [];
              }
              return response.json();
            })
            .catch((error) => {
              console.error("Error fetching calificaciones:", error);
              return [];
            })
        );

        Promise.all(fetchResponses)
          .then((responses) => {
            const initialRespuestas = {};
            responses.forEach((response, index) => {
              initialRespuestas[data[index].pk_ConsultaAbuela] = response;
            });
            setRespuestas(initialRespuestas);
          })
          .catch((error) => console.error("Error fetching respuestas:", error));

        setCalificaciones(initialCalificaciones);
        setComentarios(initialComentarios);
      })
      .catch((error) => console.error("Error fetching abuela info:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Información de la Abuela</h1>
      <div className="row mt-4">
        {abuelaInfo.map((abuela, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{abuela.consulta}</Card.Title>
                <Card.Text>
                  <strong>Categoria / Zona Malestar:</strong>{" "}
                  {abuela.categoriaZonaMalestar}
                </Card.Text>
                <Card.Text>
                  <strong>Mensaje:</strong> {abuela.mensaje}
                </Card.Text>
                {/* Mostrar número de calificaciones */}
                {respuestas[abuela.pk_ConsultaAbuela] &&
                respuestas[abuela.pk_ConsultaAbuela].length > 0 ? (
                  <div>
                    <strong>Calificaciones: </strong>
                    {respuestas[abuela.pk_ConsultaAbuela].length}
                  </div>
                ) : (
                  <div>
                    <strong>Calificaciones: </strong>
                    {respuestas[abuela.pk_ConsultaAbuela]
                      ? respuestas[abuela.pk_ConsultaAbuela].length
                      : "No tiene calificaciones"}
                  </div>
                )}
                {/* Formulario para calificar */}
                <div>
                  <input
                    type="text"
                    placeholder="Calificación"
                    value={calificaciones[abuela.pk_ConsultaAbuela] || ""}
                    onChange={(e) =>
                      setCalificaciones({
                        ...calificaciones,
                        [abuela.pk_ConsultaAbuela]: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Comentario"
                    value={comentarios[abuela.pk_ConsultaAbuela] || ""}
                    onChange={(e) =>
                      setComentarios({
                        ...comentarios,
                        [abuela.pk_ConsultaAbuela]: e.target.value,
                      })
                    }
                  />
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleCalificacionSubmit(abuela.pk_ConsultaAbuela)
                    }
                  >
                    Enviar Calificación
                  </Button>
                </div>
                {/* Botón para ver respuesta */}
                <div>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      handleRespuestaSubmit(abuela.pk_ConsultaAbuela)
                    }
                  >
                    Ver Respuesta
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {/* Modal para mostrar las respuestas */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Respuestas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData &&
            modalData.map((respuesta, index) => (
              <div key={index}>
                <strong>Calificación:</strong> {respuesta.calificacionAbuela}
                <br />
                <strong>Comentario:</strong> {respuesta.comentarioCalificacion}
                <br />
                <strong>Fecha:</strong> {respuesta.fechaCalificacion}
                <br />
                <br />
              </div>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewAbuela;
