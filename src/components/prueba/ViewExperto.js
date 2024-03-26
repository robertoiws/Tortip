import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import RespuestaExperto from "./Mod/RespuestaExperto";

const ViewExperto = () => {
  const [expertoInfo, setExpertoInfo] = useState([]);

  useEffect(() => {
    // Cargar todas las preguntas
    fetch(
      `https://ecommerceconnectiveitapi.azurewebsites.net/api/ConsultaExperto/getall`
    )
      .then((response) => response.json())
      .then((preguntas) => {
        // Cargar todas las respuestas
        fetch(
          `https://ecommerceconnectiveitapi.azurewebsites.net/api/RespuestaTerapeuta/getall`
        )
          .then((response) => response.json())
          .then((respuestas) => {
            // Asociar respuestas con preguntas
            const preguntasConRespuestas = preguntas.map((pregunta) => {
              pregunta.respuestas = respuestas.filter(
                (respuesta) =>
                  respuesta.fk_ConsultaExperto === pregunta.pkConsultaExperto
              );
              return pregunta;
            });
            // Actualizar el estado con las preguntas y respuestas
            setExpertoInfo(preguntasConRespuestas);
          })
          .catch((error) =>
            console.error("Error fetching expert responses:", error)
          );
      })
      .catch((error) =>
        console.error("Error fetching expert questions:", error)
      );
  }, []);

  return (
    <div className="mx-auto mt-5">
      <h1 className="m-4">Lista de Colaboradores</h1>
      <div className="card-container">
        {expertoInfo.map((experto) => (
          <div key={experto.pkConsultaExperto} className="card p-4">
            <div>
              <Link to={`/viewExpertoDetail/${experto.pkConsultaExperto}`}>
                {experto.usuarioPregunta}
              </Link>
              <p>
                <strong>Categoría / Zona de Malestar:</strong>{" "}
                {experto.consulta}
              </p>
              <RespuestaExperto respuestas={experto.respuestas || []} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewExperto;
