// Acción para obtener tipos de servicio
export const AddCalendarioServicio =
  (CalendarioServicioForm) => async (dispatch) => {
    try {
      const response = await fetch(
        "https://ecommerceconnectiveitapi.azurewebsites.net/api/v1/CalendarioServicio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(CalendarioServicioForm),
        }
      );

      const data = await response.json();

      // Resto del código para manejar la respuesta, actualizar el estado, etc.
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al agregar tipo de servicio:", error);
    }
  };
