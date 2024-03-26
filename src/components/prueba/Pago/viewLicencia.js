import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditModal from "./EditModal"; // Importa el componente EditModal

const ViewLicencia = () => {
  const [licencias, setLicencias] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedLicencia, setSelectedLicencia] = useState(null);

  useEffect(() => {
    async function fetchLicencias() {
      try {
        const response = await axios.get(
          "https://ecommerceconnectiveitapi.azurewebsites.net/api/Licencia/getAll"
        );
        setLicencias(response.data);
      } catch (error) {
        console.error("Error al obtener las licencias:", error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    }

    fetchLicencias();
  }, []);

  const handleEdit = (licencia) => {
    setSelectedLicencia(licencia);
    setShowModal(true);
  };

  const handleSaveEdit = (updatedLicencia) => {
    // Aquí puedes enviar la solicitud PUT al servidor para guardar los cambios
    console.log("Guardando cambios:", updatedLicencia);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container m-5">
      <h2 className="d-flex justify-content-between align-items-center">
        Listado de Licencias
        <Link to="/licenciaAdd" className="btn btn-primary">
          Agregar Licencia
        </Link>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo de Licencia</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Fecha de Ingreso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {licencias.map((licencia, index) => (
            <tr key={licencia.pK_Licencias}>
              <td>{index + 1}</td>
              <td>{licencia.tipoLicencia}</td>
              <td>{licencia.descripcion}</td>
              <td>{licencia.monto}</td>
              <td>{licencia.fechaIngreso}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleEdit(licencia)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <EditModal
          licencia={selectedLicencia}
          onSave={handleSaveEdit}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ViewLicencia;
