import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PagoForm = () => {
  const [formData, setFormData] = useState({
    fK_Licencias: 0,
    guidId: "",
    monto: 0,
    fechaRegistro: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías realizar la llamada a tu API para enviar los datos del pago
    fetch("https://ecommerceconnectiveitapi.azurewebsites.net/api/pago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del backend:", data);
        // Aquí podrías manejar la respuesta del backend según tus necesidades
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Crear Pago</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fK_Licencias">
              <Form.Label>ID de Licencia</Form.Label>
              <Form.Control
                type="number"
                name="fK_Licencias"
                value={formData.fK_Licencias}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="monto">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="number"
                name="monto"
                value={formData.monto}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="GuidId">
              <Form.Label>GuidId</Form.Label>
              <Form.Control
                type="text"
                name="guidId"
                value={formData.guidId}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Crear Pago
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PagoForm;
