import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ match }) => {
  const { GuidId } = useParams();
  const [terapeuta, setTerapeuta] = useState(null);

  useEffect(() => {
    const fetchTerapeutaDetails = async () => {
      try {
        const response = await fetch(
          `https://ecommerceconnectiveitapi.azurewebsites.net/api/Terapeutas?GuidId=${GuidId}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los detalles del terapeuta");
        }
        const data = await response.json();
        setTerapeuta(data);
      } catch (error) {
        console.error("Error al obtener los detalles del terapeuta:", error);
      }
    };

    fetchTerapeutaDetails();
  }, [GuidId]);

  if (!terapeuta) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles del Terapeuta</h1>
      <div>
        <p>Nombre: {terapeuta.nombre}</p>
        <p>Apellido: {terapeuta.apellido}</p>
        <p>Email: {terapeuta.email}</p>
        <p>Teléfono: {terapeuta.telefono}</p>
        {/* Agrega más detalles del terapeuta aquí si es necesario */}
      </div>
    </div>
  );
};

export default Detail;
