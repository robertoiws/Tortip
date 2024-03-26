import React, { Fragment, useState } from "react";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import { addRecursosWeb } from "../../actions/recursosAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./module.css";

const RecursoUp = () => {
  const navigate = useNavigate();
  const [RecursosWeb, setRecursosWeb] = useState({
    fk_Servicio: "",
    nombre: "",
    tipo: "",
    contenido: "",
    FechadeRegistro: "",
  });

  const alert = useAlert();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = {
      fk_Servicio: RecursosWeb.fk_Servicio,
      nombre: RecursosWeb.nombre,
      tipo: RecursosWeb.tipo,
      contenido: RecursosWeb.contenido,
      FechadeRegistro: RecursosWeb.FechadeRegistro,
    };

    dispatch(addRecursosWeb(jsonData)).then(() => {
      navigate("/"); // Redirect to the desired location after adding a service
    });
  };

  const onChange = (e) => {
    setRecursosWeb({ ...RecursosWeb, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <MetaData titulo={"Agregar Recurso web"} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <h4 className="mb-3">Agregar Recurso web</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>fk_Servicio:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fk_Servicio"
                      placeholder="Ingresa el fk_Servicio"
                      value={RecursosWeb.fk_Servicio}
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
                      value={RecursosWeb.nombre}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>tipo:</label>
                <input
                  className="form-control"
                  name="tipo"
                  placeholder="Escribe la extension del archivo"
                  value={RecursosWeb.tipo}
                  onChange={onChange}
                />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Fecha de Registro:</label>
                    <input
                      type="date"
                      className="form-control"
                      name="FechadeRegistro"
                      placeholder="DD/MM/AAAA"
                      value={RecursosWeb.FechadeRegistro}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-4  offset-md-4">
                  <div className="form-group">
                    <label>contenido:</label>
                    <input
                      type="text"
                      id="contenido"
                      className="form-control"
                      name="contenido"
                      value={RecursosWeb.contenido}
                      onChange={onChange}
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

export default RecursoUp;
