import React, { Component, Fragment, useState } from "react";
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { addTipoServicio } from "../../actions/servicioActions";
import "./module.css";

const TipoServicio = () => {
  const navigate = useNavigate();
  const [tipoServicio, setipoServicio] = useState({
    nombre: "",
    estado: "",
  });

  const alert = useAlert();
  const dispatch = useDispatch();
  const { errores, isAuthenticated } = useSelector(
    (state) => state.tipoServicio
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = {
      nombre: tipoServicio.nombre,
      estado: tipoServicio.estado,
    };

    dispatch(addTipoServicio(jsonData)).then(() => {
      navigate("/");
    });
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      // No hagas nada si el cambio es en el campo de avatar
    } else {
      setipoServicio({ ...tipoServicio, [e.target.name]: e.target.value });
    }
  };
  return (
    <Fragment>
      <MetaData titulo={"Agregar Recurso web"} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <h4 className="mb-3">Agregar Tipo Servicio</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      placeholder="Ingresa el nombre"
                      value={tipoServicio.nombre}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4  offset-md-4">
                  <div className="form-group">
                    <label>Estado:</label>
                    <input
                      type="text"
                      className="form-control form_F"
                      name="estado"
                      placeholder="Selecciona el estado"
                      value={tipoServicio.estado}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Fecha de Registro:</label>
                    <input
                      type="date"
                      className="form-control"
                      name="fechaRegistro"
                      placeholder="DD/MM/AAAA"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                {" "}
                {/* Centrar el botón */}
                <button type="submit" className="btn btn-primary btn-lg">
                  {" "}
                  {/* Aplicar clases btn-lg para hacerlo más grande */}
                  Agregar Nuevo Recurso web
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TipoServicio;
