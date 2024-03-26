import React from "react";

const RespuestaExperto = ({ respuestas }) => {
  console.log("Respuestas recibidas en RespuestaExperto:", respuestas);

  // Verificar si respuestas es un array y si hay al menos una respuesta
  if (!Array.isArray(respuestas) || respuestas.length === 0) {
    return <p>No hay respuestas disponibles.</p>;
  }

  return (
    <div>
      <h2>Respuestas de Terapeuta</h2>
      {respuestas.map((respuesta) => (
        <div key={respuesta.pk_RespuestaTerapeuta}>
          <p>Nombre del Terapeuta: {respuesta.nombreTerapeuta}</p>
          <p>Respuesta: {respuesta.respuestaConsulta}</p>
          <p>Fecha: {new Date(respuesta.fechaRespuesta).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default RespuestaExperto;
