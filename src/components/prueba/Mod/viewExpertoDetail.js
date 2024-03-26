import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RespuestaExperto from "./RespuestaExperto";

const ViewExpertoDetail = () => {
  const { id } = useParams();
  const [consultaExperto, setConsultaExperto] = useState(null);
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(
        `https://ecommerceconnectiveitapi.azurewebsites.net/api/ConsultaExperto/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setConsultaExperto(data);
          console.log("Data recibida:", data);

          // Llamar a la API para obtener las respuestas asociadas a esta consulta
          fetch(
            `https://ecommerceconnectiveitapi.azurewebsites.net/api/RespuestaTerapeuta/${id}`
          )
            .then((response) => response.json())
            .then((respuestasData) => {
              console.log("Respuestas recibidas:", respuestasData);
              setRespuestas(respuestasData);
            })
            .catch((error) =>
              console.error("Error fetching expert responses:", error)
            );
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  if (!consultaExperto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {consultaExperto && (
        <>
          <h2>Detalles de la Consulta</h2>
          <p>
            <strong>Usuario:</strong> {consultaExperto.usuarioPregunta}
          </p>
          <p>
            <strong>Consulta:</strong> {consultaExperto.consulta}
          </p>
          <p>
            <strong>Fecha:</strong>{" "}
            {new Date(consultaExperto.fechaPregunta).toLocaleString()}
          </p>

          {/* Renderizar el componente RespuestaExperto */}
          <RespuestaExperto respuestas={respuestas || []} />
        </>
      )}
    </div>
  );
};

export default ViewExpertoDetail;
