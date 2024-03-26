import React, { useState } from "react";
import axios from "axios";

const LicenciaAdmin = () => {
  const [formData, setFormData] = useState({
    tipoLicencia: "",
    descripcion: "",
    monto: "",
    fechaIngreso: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRedirect = () => {
    window.location.href = "/licenciaView";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ecommerceconnectiveitapi.azurewebsites.net/api/Licencia",
        formData
      );
      console.log("Licencia creada:", response.data);
      // Redirige al usuario a la página de /licenciaView
      handleRedirect();
    } catch (error) {
      console.error("Error al crear la licencia:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="container m-5">
      <h2>Dar de Alta Licencia</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tipo de Licencia:</label>
          <input
            type="number"
            className="form-control"
            name="tipoLicencia"
            value={formData.tipoLicencia}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Monto:</label>
          <input
            type="number"
            className="form-control"
            name="monto"
            value={formData.monto}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default LicenciaAdmin;
