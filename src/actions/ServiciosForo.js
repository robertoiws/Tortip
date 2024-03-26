import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";
import { httpParams } from "../utilities/httpParams";

// Acción para obtener tipos de servicio
export const addPreguntaleAbue =
  (addPreguntaleAbueData) => async (dispatch) => {
    try {
      const response = await fetch(
        "https://ecommerceconnectiveitapi.azurewebsites.net/api/ConsultaAbuela",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addPreguntaleAbueData),
        }
      );

      const data = await response.json();

      // Resto del código para manejar la respuesta, actualizar el estado, etc.
    } catch (error) {}
  };

export const addExperto = (addExperto) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://ecommerceconnectiveitapi.azurewebsites.net/api/ConsultaExperto",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addExperto),
      }
    );

    const data = await response.json();

    // Resto del código para manejar la respuesta, actualizar el estado, etc.
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al agregar tipo de servicio:", error);
  }
};
