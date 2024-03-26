import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const ViewAdmin = () => {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    const getColaboradores = async () => {
      try {
        const response = await fetch(
          "https://ecommerceconnectiveitapi.azurewebsites.net/api/Colaboradores"
        );
        const data = await response.json();
        setColaboradores(data);
      } catch (error) {
        console.error("Error al obtener los colaboradores:", error);
      }
    };

    getColaboradores();
  }, []);

  const handleEstadoChange = async (GuidId, nuevoEstado) => {
    try {
      const response = await fetch(
        `https://ecommerceconnectiveitapi.azurewebsites.net/api/Terapeutas/${nuevoEstado}?GuidId=${GuidId}`
      );
      if (response.ok) {
        const updatedColaboradores = colaboradores.map((colaborador) =>
          colaborador.guidId === GuidId
            ? { ...colaborador, estado: nuevoEstado }
            : colaborador
        );
        setColaboradores(updatedColaboradores);
      } else {
        console.error("Error al actualizar el estado del colaborador");
      }
    } catch (error) {
      console.error("Error al actualizar el estado del colaborador:", error);
    }
  };

  const redirectToDetails = (guidId) => {
    window.location.href = `/pruebaDetails/${guidId}`;
  };

  return (
    <div>
      <h1>Lista de Colaboradores</h1>
      <div className="card-container">
        {colaboradores
          .filter((colaborador) => colaborador.estado !== 1)
          .map((colaborador, index) => (
            <div key={index} className="card">
              <div>
                <h6 onClick={() => redirectToDetails(colaborador.guidId)}>
                  {colaborador.nombre} {colaborador.apellido}
                </h6>
                <p>Email: {colaborador.email}</p>
                <p>Teléfono: {colaborador.telefono}</p>
                <p>Estado: {colaborador.estado}</p>
                {colaborador.estado === 2 && (
                  <div className="mb-3">
                    <button
                      className="btn btn-success"
                      onClick={() => handleEstadoChange(colaborador.guidId, 1)}
                    >
                      <i className="bi bi-check-circle-fill"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleEstadoChange(colaborador.guidId, 3)}
                    >
                      <i className="bi bi-exclamation-circle-fill"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ViewAdmin;
