import React, { Component, Fragment, useState } from "react";
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { addExperto } from "../../actions/ServiciosForo";

const ExpertoAdd = () => {
  const navigate = useNavigate();
  const [Experto, setExperto] = useState({
    usuarioPregunta: "",
    correoElectronico: "",
    consulta: "",
    estadoRespuesta: 0,
    fechaPregunta: new Date().toISOString(),
  });

  const alert = useAlert();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = {
      usuarioPregunta: Experto.usuarioPregunta,
      correoElectronico: Experto.correoElectronico,
      consulta: Experto.consulta,
      estadoRespuesta: Experto.estadoRespuesta,
      fechaPregunta: Experto.fechaPregunta,
    };

    dispatch(addExperto(jsonData)).then(() => {
      navigate("/");
    });
  };
  const onChange = (e) => {
    setExperto({ ...Experto, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <MetaData titulo={"Preguntale al Experto - Prueba"} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <h4 className="mb-3">Experto Prueba</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="usuarioPregunta"
                      placeholder="Ingresa tu nombre"
                      value={Experto.usuarioPregunta}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4  offset-md-4">
                  <div className="form-group">
                    <label>Correo Electronico:</label>
                    <input
                      type="text"
                      className="form-control form_F"
                      name="correoElectronico"
                      placeholder="Ingresa tu correo electronico"
                      value={Experto.correoElectronico}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Consulta:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="consulta"
                      placeholder="Ingresa tu consulta"
                      value={Experto.consulta}
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

export default ExpertoAdd;
