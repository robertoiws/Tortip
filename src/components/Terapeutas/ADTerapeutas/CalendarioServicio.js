import React, { Fragment, useState } from "react";
import MetaData from "../../layout/MetaData";
import { useAlert } from "react-alert";
import { AddCalendarioServicio } from "../../../actions/Calendario";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CalendarioServicio = () => {
  const navigate = useNavigate();
  const [servicioState, setServicioState] = useState({
    fk_Servicio: "",
    nombre: "",
    fechaInicio: "",
    fechaFin: "",
    horaInicio: "",
    horaFin: "",
  });

  const alert = useAlert();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = {
      fk_Servicio: servicioState.fk_Servicio,
      nombre: servicioState.nombre,
      fechaInicio: servicioState.fechaInicio,
      fechaFin: servicioState.fechaFin,
      horaInicio: servicioState.horaInicio,
      horaFin: servicioState.horaFin,
    };

    dispatch(AddCalendarioServicio(jsonData)).then(() => {
      navigate("/"); // Redirect to the desired location after adding a service
    });
  };

  const onChange = (e) => {
    setServicioState({
      ...servicioState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <MetaData titulo={"Agregar Recurso web"} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <h4 className="mb-3">Manejo de Clendario Servicio</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Fk_Servicio:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fk_Servicio"
                      placeholder="Ingresa el fk_Servicio"
                      value={servicioState.fk_Servicio}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4  offset-md-4">
                  <div className="form-group">
                    <label>nombre:</label>
                    <input
                      type="text"
                      className="form-control form_F"
                      name="nombre"
                      placeholder="Selecciona el nombre"
                      value={servicioState.nombre}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>fecha Inicio:</label>
                    <input
                      type="date"
                      className="form-control"
                      name="fechaInicio"
                      placeholder="DD/MM/AAAA"
                      value={servicioState.fechaInicio}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4  offset-md-4">
                  <div className="form-group">
                    <label>fechaFin:</label>
                    <input
                      type="date"
                      id="fechaFin"
                      className="form-control"
                      name="fechaFin"
                      value={servicioState.fechaFin}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Hora Inicio:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="horaInicio"
                      placeholder="Ingresa el horaInicio"
                      value={servicioState.horaInicio}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4  offset-md-4">
                  <div className="form-group">
                    <label>horaFin:</label>
                    <input
                      type="text"
                      className="form-control form_F"
                      name="horaFin"
                      placeholder="Ingrese la hora fin"
                      value={servicioState.horaFin}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn">
                  Agregar Calendario Servicio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CalendarioServicio;
