import React, { Component, Fragment, useState } from "react";
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { addPreguntaleAbue } from "../../actions/ServiciosForo";

const Abuela = () => {
  const navigate = useNavigate();
  const [PreguntaleAbue, sePreguntaleAbue] = useState({
    consulta: "",
    categoriaZonaMalestar: "",
    correoElectronico: "",
    mensaje: "",
    fechaPublicacion: new Date().toISOString(),
  });

  const alert = useAlert();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = {
      consulta: PreguntaleAbue.consulta,
      categoriaZonaMalestar: PreguntaleAbue.categoriaZonaMalestar,
      correoElectronico: PreguntaleAbue.correoElectronico,
      mensaje: PreguntaleAbue.mensaje,
      fechaPublicacion: PreguntaleAbue.fechaPublicacion,
    };

    dispatch(addPreguntaleAbue(jsonData)).then(() => {
      navigate("/");
    });
  };
  const onChange = (e) => {
    sePreguntaleAbue({ ...PreguntaleAbue, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <MetaData titulo={"Agregar Consejo Abuela - Prueba"} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <h4 className="mb-3">Abuela Prueba</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>consulta:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="consulta"
                      placeholder="Ingresa la consulta"
                      value={PreguntaleAbue.consulta}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4  offset-md-4">
                  <div className="form-group">
                    <label>categoriaZonaMalestar:</label>
                    <input
                      type="text"
                      className="form-control form_F"
                      name="categoriaZonaMalestar"
                      placeholder="Selecciona la categoria"
                      value={PreguntaleAbue.categoriaZonaMalestar}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>correoElectronico:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="correoElectronico"
                      placeholder="Ingresa el correo Electronico"
                      value={PreguntaleAbue.correoElectronico}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4  offset-md-4">
                  <div className="form-group">
                    <label>mensaje:</label>
                    <input
                      type="text"
                      className="form-control form_F"
                      name="mensaje"
                      placeholder="Selecciona el mensaje"
                      value={PreguntaleAbue.mensaje}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Agregar Consejo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Abuela;
