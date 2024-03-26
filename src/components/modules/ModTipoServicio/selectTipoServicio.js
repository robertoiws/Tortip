import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getTiposervicios } from "../../../actions/servicioActions";

const SelectTipoServicio = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { tipoServicio, loading, error } = useSelector(
    (state) => state.tipoServicio
  );

  useEffect(() => {
    // Al montar el componente, obtener la lista de tipos de servicio
    dispatch(getTiposervicios());
  }, [dispatch]);

  return (
    <div>
      <h2>Lista de Tipos de Servicio</h2>
      {loading ? (
        <p>Cargando tipos de servicio...</p>
      ) : error ? (
        <p>Error al obtener tipos de servicio: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {tipoServicio.map((tipo) => (
              <tr key={tipo.id}>
                <td>{tipo.id}</td>
                <td>{tipo.nombre}</td>
                <td>{tipo.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SelectTipoServicio;
