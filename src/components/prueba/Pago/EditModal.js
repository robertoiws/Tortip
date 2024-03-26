import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"; // Asumiendo que estás usando Bootstrap para los modales
import axios from "axios";

const EditModal = ({ licencia, onSave, onHide }) => {
  const [formData, setFormData] = useState(licencia);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        "https://ecommerceconnectiveitapi.azurewebsites.net/api/Licencia",
        formData
      );
      onSave(formData); // Suponiendo que la API devuelve la licencia actualizada
      onHide();
      window.location.reload(); // Recargar la página
    } catch (error) {
      console.error("Error al actualizar la licencia:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Licencia</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
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
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
