import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";
import { httpParams } from "../utilities/httpParams";

// Acción para obtener tipos de servicio
export const addTipoServicio = (tipoServicioForm) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://ecommerceconnectiveitapi.azurewebsites.net/api/TipoDeServicio",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tipoServicioForm),
      }
    );

    const data = await response.json();

    // Resto del código para manejar la respuesta, actualizar el estado, etc.
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al agregar tipo de servicio:", error);
  }
};
// Acción para actualizar tipos de servicio
export const updateTipoServicio = createAsyncThunk(
  "tipoServicio/updateTipoServicio",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `/api/TipoDeServicio/pk${id}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`Errores: ${error.message}`);
    }
  }
);

// Acción para obtener tipos de servicio
export const getTiposervicios = createAsyncThunk(
  "tipoServicio/getTiposervicios",
  async (_, { rejectWithValue }) => {
    try {
      await delayedTimeout(1000);
      const response = await axios.get("/api/Consultores");
      return response.data;
    } catch (err) {
      return rejectWithValue(`Errores: ${err.message}`);
    }
  }
);
