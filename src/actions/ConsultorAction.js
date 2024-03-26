import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

// Acción asincrónica para agregar terapeuta
export const addTerapeuta = (terapeutaForm) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://ecommerceconnectiveitapi.azurewebsites.net/api/Terapeutas`,
      terapeutaForm
    );

    // Accede directamente al campo 'GuidId' de la respuesta
    const guidId = response.data; // Aquí es donde se ha colocado 'GuidId'

    console.log("Terapeuta registrado exitosamente. GuidId:", guidId);

    // Puedes hacer más cosas con el 'guidId' si es necesario

    // Resto del código para manejar la respuesta, actualizar el estado, etc.
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al agregar terapeuta:", error);

    if (error.response && error.response.data) {
      console.error(
        "Detalles de la respuesta del servidor:",
        error.response.data
      );
    }
  }
};
export const getConsultor = createAsyncThunk(
  "Consultor/getConsultor",
  async (ThunkApi, { rejectWithValue }) => {
    try {
      await delayedTimeout(1000);
      return await axios.get(`/api/Colaboradores`);
    } catch (err) {
      return rejectWithValue(`Errores: ${err.message}`);
    }
  }
);
export const updateProfile = createAsyncThunk(
  "tipoServicio/updateTipoServicio",
  async ({ GuidId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://ecommerceconnectiveitapi.azurewebsites.net/api/Terapeutas/${GuidId}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`Errores: ${error.message}`);
    }
  }
);
export const updateProfilebyGuidId = createAsyncThunk(
  "terapeuta/updateProfile",
  async ({ updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://ecommerceconnectiveitapi.azurewebsites.net/api/Terapeutas/`,
        updatedData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`Errores: ${error.message}`);
    }
  }
);
export const fetchTerapeutaDetails = createAsyncThunk(
  "terapeuta/fetchTerapeutaDetails",
  async (GuidId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://ecommerceconnectiveitapi.azurewebsites.net/api/Terapeutas?GuidId=${GuidId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`Errores: ${error.message}`);
    }
  }
);
