import React, { useState, useEffect } from "react";

const ViewTerapeutas = () => {
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

  const redirectToDetails = (guidId) => {
    window.location.href = `/pruebaDetails/${guidId}`;
  };

  return (
    <div>
      <h1>Lista de Colaboradores</h1>
      <div className="card-container">
        {colaboradores
          .filter((colaborador) => colaborador.estado === 1) // Filtrar por estado igual a 1
          .map((colaborador, index) => (
            <div key={index} className="card">
              <img
                src={`data:image/png;base64,${colaborador.avatarx16}`}
                alt={`Avatar de ${colaborador.nombre}`}
              />
              <div>
                <h2 onClick={() => redirectToDetails(colaborador.guidId)}>
                  {colaborador.nombre} {colaborador.apellido}
                </h2>
                <p>Email: {colaborador.email}</p>
                <p>Teléfono: {colaborador.telefono}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ViewTerapeutas;
